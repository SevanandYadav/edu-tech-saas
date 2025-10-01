'use client';

import { Modal, Table, Badge } from 'react-bootstrap';
import { useLanguage } from '@/hooks/useLanguage';

interface ResultsModalProps {
  show: boolean;
  onHide: () => void;
}

export default function ResultsModal({ show, onHide }: ResultsModalProps) {
  const { t } = useLanguage();

  const results = [
    { subject: 'Mathematics', marks: 92, total: 100, grade: 'A+' },
    { subject: 'Science', marks: 88, total: 100, grade: 'A' },
    { subject: 'English', marks: 85, total: 100, grade: 'A' },
    { subject: 'Social Studies', marks: 90, total: 100, grade: 'A+' },
    { subject: 'Hindi', marks: 87, total: 100, grade: 'A' },
    { subject: 'Computer Science', marks: 95, total: 100, grade: 'A+' }
  ];

  const totalMarks = results.reduce((sum, result) => sum + result.marks, 0);
  const totalPossible = results.reduce((sum, result) => sum + result.total, 0);
  const percentage = ((totalMarks / totalPossible) * 100).toFixed(1);

  const getGradeBadge = (grade: string) => {
    const variant = grade === 'A+' ? 'success' : grade === 'A' ? 'primary' : 'warning';
    return <Badge bg={variant}>{grade}</Badge>;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="bi bi-file-text me-2"></i>
          Academic Results
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-4">
          <h6 className="fw-bold">Student: Demo Student</h6>
          <div className="text-muted">Class: 10th Grade | Roll No: 2024001</div>
          <div className="text-muted">Academic Year: 2024-25 | Term: Final Examination</div>
        </div>

        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>Subject</th>
              <th>Marks Obtained</th>
              <th>Total Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td className="fw-bold">{result.subject}</td>
                <td>{result.marks}</td>
                <td>{result.total}</td>
                <td>{getGradeBadge(result.grade)}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="mt-4 p-3 bg-light rounded">
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <div className="fw-bold fs-4 text-primary">{totalMarks}</div>
                <div className="small text-muted">Total Marks</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="fw-bold fs-4 text-success">{percentage}%</div>
                <div className="small text-muted">Percentage</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="fw-bold fs-4 text-warning">A+</div>
                <div className="small text-muted">Overall Grade</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="fw-bold fs-4 text-info">2nd</div>
                <div className="small text-muted">Class Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          <div className="alert alert-success">
            <i className="bi bi-trophy me-2"></i>
            <strong>Congratulations!</strong> Excellent performance in all subjects.
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}