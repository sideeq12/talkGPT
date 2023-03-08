"use client"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
type Props = {
    chatId  : string
}
const ChatInput = ({chatId}: Props) => {

    const [prompt, setPrompt ] = useState("")
    const { data : session } = useSession()
  return ( 
    <div className='bg-gray-700/50 text-green-400 rounded-lg text-sm'>
        <form className='p-5 space-x-5 flex'>
            <input type="text"  className='focus:outline-none bg-transparent flex-1
            disabled:cursor-not-allowed disabled:text-gray-300'
            disabled={!session}
            value={prompt}
            onChange={(e)=> setPrompt(e.target.value)}
            placeholder='Egbon! Ask your question here...'
            />
            <button type='submit'
            className='bg-[#11837F] hover:opacity-70 font-bold text-white rounded px-4 py-2 cursor-pointer
            disabled:cursor-not-allowed disabled:text-gray-300'
            disabled={!prompt || !session}>
                <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
            </button>
        </form>

        {/* Model selection goes here */}
    </div>
  )
}

export default ChatInput