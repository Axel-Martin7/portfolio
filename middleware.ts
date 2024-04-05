import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  defaultLocale: 'fr',
  localePrefix,
  locales,
  // Used when no locale matches
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|fr)/:path*'],
};
