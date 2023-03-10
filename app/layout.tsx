
import { SessionProvider } from '../components/sessionProvider'
import { getServerSession } from 'next-auth'
import SideBar from '../components/sidebar'
import '../styles/globals.css'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClientProvider'

export const metadata = {
  title: 'TalkGPT',
  description: 'ChatGPT clone to TalkGPT',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className='h-screen overflow-hidden'>
        <SessionProvider session={session}>
      {!session ? (
        <Login />
      ) : (
        <div className='flex'>
        <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
        <SideBar />
        </div>
          <ClientProvider />
          <div className='bg-[#343541] flex-1'>{children}</div>
        
          </div>
      )}
        </SessionProvider>
        </body>
    </html>
  )
}
