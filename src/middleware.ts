import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Routes that require a signed-in user
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/provider(.*)',
  '/booking(.*)',
  '/confirmation(.*)',
  '/onboarding(.*)',
]);

// Provider-only pages
const isProviderRoute = createRouteMatcher(['/provider(.*)']);

// Customer-only pages
const isCustomerRoute = createRouteMatcher(['/dashboard(.*)']);

const isOnboardingRoute = createRouteMatcher(['/onboarding(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  const { userId, sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role;

  if (!userId) return NextResponse.next();

  // Signed in but no role yet: must finish onboarding first
  if (!role && isProtectedRoute(req) && !isOnboardingRoute(req)) {
    return NextResponse.redirect(new URL('/onboarding', req.url));
  }

  // Already has a role: no need to see onboarding again
  if (role && isOnboardingRoute(req)) {
    const home = role === 'provider' ? '/provider' : '/services';
    return NextResponse.redirect(new URL(home, req.url));
  }

  // Customers can't open provider pages
  if (role === 'customer' && isProviderRoute(req)) {
    return NextResponse.redirect(new URL('/services', req.url));
  }

  // Providers can't open the customer dashboard
  if (role === 'provider' && isCustomerRoute(req)) {
    return NextResponse.redirect(new URL('/provider', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};