import './globals.css'

export const metadata = {
  title: 'The Vikas Journal',
  description: 'Campus, business and finance — a daily journal by Vikas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
