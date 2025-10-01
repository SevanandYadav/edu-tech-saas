import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const schoolSlug = formData.get('schoolSlug') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file received' }, { status: 400 });
    }
    
    const finalSchoolSlug = schoolSlug || 'default-school';
    console.log('Received schoolSlug:', finalSchoolSlug);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create school directory if it doesn't exist
    const publicDir = path.join(process.cwd(), 'public');
    const schoolDir = path.join(publicDir, finalSchoolSlug);
    
    console.log('Creating directory:', schoolDir);
    await mkdir(schoolDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    const filepath = path.join(schoolDir, filename);
    
    console.log('Saving file to:', filepath);
    await writeFile(filepath, buffer);

    const photoUrl = `/${finalSchoolSlug}/${filename}`;
    console.log('Photo URL:', photoUrl);

    return NextResponse.json({
      success: true,
      photo: {
        img: photoUrl,
        title: title || file.name.replace(/\.[^/.]+$/, ""),
        desc: description || 'Uploaded photo'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}