'use client';

import { useState } from 'react';
import { Modal, Form, Button, Alert, ProgressBar } from 'react-bootstrap';

interface PhotoUploadModalProps {
  show: boolean;
  onHide: () => void;
  schoolSlug: string;
  onUploadSuccess: (photos: any[]) => void;
}

export default function PhotoUploadModal({ show, onHide, schoolSlug, onUploadSuccess }: PhotoUploadModalProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    setError('');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files || files.length === 0) {
      setError('Please select at least one photo');
      return;
    }

    setUploading(true);
    setProgress(0);
    setError('');

    try {
      const uploadedPhotos = [];
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('schoolSlug', schoolSlug || 'default-school');
        formData.append('title', title || file.name);
        formData.append('description', description);

        console.log('Uploading with schoolSlug:', schoolSlug);
        setProgress((i / files.length) * 50);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const result = await response.json();
        uploadedPhotos.push(result.photo);
        
        setProgress(((i + 1) / files.length) * 100);
      }

      onUploadSuccess(uploadedPhotos);
      setUploading(false);
      setProgress(0);
      setFiles(null);
      setTitle('');
      setDescription('');
      onHide();
    } catch (err) {
      setError('Upload failed. Please try again.');
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="bi bi-cloud-upload me-2"></i>
          Upload Photos
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleUpload}>
          <Form.Group className="mb-3">
            <Form.Label>Select Photos</Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <Form.Text className="text-muted">
              Select one or more image files (JPG, PNG, GIF)
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Title (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter photo description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          {uploading && (
            <div className="mb-3">
              <ProgressBar now={progress} label={`${progress}%`} />
            </div>
          )}
          
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100"
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload Photos'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}