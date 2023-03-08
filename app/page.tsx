import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen px-2 text-white'>
        <h1 className='text-5xl font-bold mb-20'>TalkGPT</h1>

        <div>
            <div>
                <div className='flex flex-col items-center mb-5 justify-center'>
                    {/* sun icons */}
                    <p>Examples</p>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'> still thintkingn</p>
                    <p className='infoText'> still thintkingn</p>
                    <p className='infoText'> still thintkingn</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home