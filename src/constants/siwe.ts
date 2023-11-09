export const IRON_OPTIONS = {
  cookieName: 'siwe',
  password:
    process.env.IRON_PASSWORD || 'complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.VERCEL_ENV === 'production',
  },
}
