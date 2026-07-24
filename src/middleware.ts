import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Legacy WordPress URLs such as /?p=100 used to resolve to individual posts.
 * On the Next.js rebuild they render the homepage, which Google Search Console
 * flags as "Duplicate without user-selected canonical". Permanently (301)
 * redirect any /?p=<id> request to the homepage so these legacy URLs are
 * consolidated and drop out of Google's index.
 */
export function middleware(request: NextRequest) {
  if (request.nextUrl.searchParams.has('p')) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
