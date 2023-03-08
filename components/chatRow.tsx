import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type Props = {
    id : string
}
const ChatRow = ({id} : Props) => {
  return (
    <Link href={`/chat/${id}`}>chatRow
        <ChatBubbleLeftIcon className='h-5 w-5'/>
        <p>Waiting ..</p>
        <TrashIcon className='h-5 w-5 text-gray-700 hover:text-red-500' />
    </Link>
  )
}

export default ChatRow