// app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'CONAIL Media Affiliate Marketing',
  description: 'Premium affiliate marketing strategies to drive your brand’s growth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
