"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import NewChat from './NewChat'
import Image from 'next/image'

const SideBar = () => {
  const { data : session } = useSession()
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <NewChat />
            <div className=''>
                {/* Models selections */}
            </div>

            {/* Chat rows */}
        </div>
        { session &&
          <Image  onClick={()=> signOut()} src={session.user?.image!} 
          className="h-12 w-12 rounded-full cursor-pointer mx-auto
          mb-2 hover:opacity-50" 
        width={200}
        height={200} alt="" />}
    </div>
  )
}

export default SideBar