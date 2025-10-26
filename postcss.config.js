export default {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-nesting': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
}
