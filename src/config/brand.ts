export const brandConfig = {
  typography: {
    heading: '"Playfair Display", serif',
    body: '"Poppins", sans-serif',
  },
  colors: {
    primary: '222 47% 11%', // hsl(222, 47%, 11%) – deep navy
    secondary: '240 5% 96%', // soft white-gray
    accent: '210 100% 40%', // bright blue
    neutral: '0 0% 100%', // white
  },
}

/**
 * Injects CSS variables into document root.
 * This would normally come from Supabase or the CMS “brand” table.
 */
export function applyBrandConfig(): void {
  const root = document.documentElement

  root.style.setProperty('--font-heading', brandConfig.typography.heading)
  root.style.setProperty('--font-body', brandConfig.typography.body)

  Object.entries(brandConfig.colors).forEach(([key, value]) => {
    root.style.setProperty(`--brand-${key}`, value)
  })
}
