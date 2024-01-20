import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const publicPath = path === '/';
    const token = request.cookies.get('token')?.value || '';

    // if path is public and token is present redirect to '/chats '
    if (publicPath && token) {
        return NextResponse.redirect(new URL('/chats', request.nextUrl));
    }

    // if trying to access protected path redirect to the '/' path
    if (!publicPath && !token) {
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }
}

export const config = {
    // middleware will be invoked on these paths
    matcher: ['/', '/chats'],
};