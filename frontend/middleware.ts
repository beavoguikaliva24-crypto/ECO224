import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const { pathname } = request.nextUrl;
  // 1. Définition des zones
  const isAuthPage = pathname.startsWith('/login');
  const isProtectedRoute = 
    pathname.startsWith('/dashboard') || 
    pathname.startsWith('/eleves') || 
    pathname.startsWith('/classes') || 
    pathname.startsWith('/recouvrement') || 
    pathname.startsWith('/scolarites');
  // 2. Logique pour la racine '/'
  if (pathname === '/') {
    return NextResponse.redirect(new URL(token ? '/dashboard' : '/login', request.url));
  }
  // 3. Protection des routes : Si pas de token -> vers login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Empêcher l'accès au login si déjà connecté
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  return NextResponse.next();
}
// 5. Configuration du Matcher
export const config = {
  matcher: [
    '/',
    '/login',
    '/dashboard/:path*',
    '/eleves/:path*',
    '/classes/:path*',
    '/recouvrement/:path*',
    '/scolarites/:path*',
  ],
};