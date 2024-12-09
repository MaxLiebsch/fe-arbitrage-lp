import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // Skip static assets
  if (url.startsWith('/js/')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}