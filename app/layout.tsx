import '../styles/globals.css'

export const metadata = {
  title: 'TalkGPT',
  description: 'ChatGPT clone to TalkGPT',
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
