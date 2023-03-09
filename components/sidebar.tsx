"use client"
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat'
import Image from 'next/image'
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import ChatRow from './chatRow';
import ModelSelection from './ModelSelection';

const SideBar = () => {
  
  const { data : session } = useSession()
  const [chats, loading, error ] = useCollection(
     session && query( collection(db, "users", session.user?.email!, "chats"),orderBy(
      "createdAt", "asc")
     )
     );
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <NewChat />
            <div className='hidden md:inline'>
              <ModelSelection />
            </div>
          <div className='flex flex-col space-y-2 my-2'>
          {loading && (<div className='animate-pulse text-center text-white'>
            <p>Loading chats...</p>
          </div>)}
          {chats?.docs.map(chat => (
              <ChatRow id={chat.id} key={chat.id} />
            ))}
          </div>
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