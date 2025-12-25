import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Agri Green Foundation',
    short_name: 'AgriGreen',
    description: 'Empowering farmers and restoring ecosystems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050a08',
    theme_color: '#22c55e',
    icons: [
      {
        src: 'https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}