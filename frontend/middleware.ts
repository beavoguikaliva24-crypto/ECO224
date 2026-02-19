import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // On récupère le token depuis les cookies (plus sécurisé pour le middleware)
  const token = request.cookies.get('access_token')?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isProtectedRoute = 
    request.nextUrl.pathname.startsWith('/eleves') || 
    request.nextUrl.pathname.startsWith('/classes') || 
    request.nextUrl.pathname.startsWith('/recouvrement') || 
    request.nextUrl.pathname.startsWith('/scolarites') ||
    request.nextUrl.pathname.startsWith('/dashboard');

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Routes sur lesquelles le middleware s'applique
export const config = {
  matcher: ['/dashboard/:path*', '/eleves/:path*', '/classes/:path*', '/login'],
};