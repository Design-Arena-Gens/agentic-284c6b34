import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ebook Store - Stories & Information',
  description: 'Your digital library for stories and information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
