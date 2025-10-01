import { NextRequest, NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { schoolSlug: string } }
) {
  try {
    const schoolSlug = params.schoolSlug;
    const schoolDir = path.join(process.cwd(), 'public', schoolSlug);
    
    console.log('Looking for photos in:', schoolDir);
    
    try {
      const files = await readdir(schoolDir);
      console.log('Found files:', files);
      
      const photos = files
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map(file => ({
          img: `/${schoolSlug}/${file}`,
          title: file.replace(/^\d+-/, '').replace(/\.[^/.]+$/, ''),
          desc: 'Uploaded photo'
        }));
      
      console.log('Returning photos:', photos);
      return NextResponse.json({ photos });
    } catch (error) {
      console.log('Directory not found or empty:', error);
      return NextResponse.json({ photos: [] });
    }
  } catch (error) {
    console.log('API error:', error);
    return NextResponse.json({ photos: [] });
  }
}