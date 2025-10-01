import { NextRequest, NextResponse } from 'next/server';
import { getSchoolByName } from './lib/schools';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0];
  
  // Skip if it's the main domain or localhost without subdomain
  if (subdomain === 'www' || subdomain === 'localhost' || hostname === 'localhost:3000' || !subdomain.includes('-')) {
    return NextResponse.next();
  }
  
  // Check if school exists
  const school = getSchoolByName(subdomain);
  
  if (school) {
    // Rewrite to school page
    url.pathname = `/school/${subdomain}`;
    return NextResponse.rewrite(url);
  }
  
  // If school not found, redirect to main domain
  url.hostname = process.env.NEXT_PUBLIC_MAIN_DOMAIN || 'localhost:3000';
  url.pathname = '/';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};