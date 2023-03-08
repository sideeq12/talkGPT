import React from 'react'
import { SunIcon } from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen px-2 text-white'>
        <h1 className='text-5xl font-bold mb-20'>TalkGPT</h1>

        <div>
            <div>
                <div className='flex flex-col items-center mb-5 justify-center'>
                <SunIcon className="h-8 w-8"/>
                    <p>Examples</p>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>Explain something to me</p>
                    <p className='infoText'> What is the difference between a cat and Dog</p>
                    <p className='infoText'> Who is Peter Obi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home