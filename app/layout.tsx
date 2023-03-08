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
      <body>
      <div>
        {/* Side bar */}
        {/* Notification */}
        <div className='bg-[#343541] flex-1'>{children}</div>
      
        </div></body>
    </html>
  )
}
