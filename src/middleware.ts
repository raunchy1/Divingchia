import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['it', 'en', 'de'],
  defaultLocale: 'it',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
