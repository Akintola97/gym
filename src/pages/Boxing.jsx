import React from 'react'
import Boxing_youtube from '../Components/Boxing_youtube'
import boxing_pricing from '../Components/assets/boxing_pricing.jpeg'
import boxing_schedule from '../Components/assets/boxing_schedule.jpeg'

const Boxing = () => {
  return (
    <>
    <div className='w-full h-full bg-black p-11'>
      <h1 className='font-bold text-center text-[4vmin] text-white pb-11'>SURGE BOXING CLASSES</h1>
      <div className='w-full h-full flex md:flex-row flex-col items-center pb-24'>
        <div className='w-full h-full text-white'>
      <p className='text-center p-1 text-[2.5vmin]'>All levels are welcome to join! From beginners who want to push themselves in a fun and engaging way as well as for those who want to take it to the next level and compete. Attendees are expected to bring their own gloves and hand wraps. First class free!</p>
      <p className='text-center p-1 text-[2.5vmin]'>We are a private gym with no staff and entrance is only accessible with a key card. To schedule your first class please call or text the owner Sergio at 630-335-1748. Once you are signed up you will receive a key to enter during boxing class times only. Thank you!</p>
      </div>
      <div className='w-full h-[50vh] p-1'>
        <Boxing_youtube />
      </div>
      </div>
    </div>
    <div className='w-full h-full bg-black pb-20'>
    <img className='w-full h-full' src={boxing_pricing} alt='boxing_price'/>
    </div>
    <div className='w-full h-full bg-black pb-20'>
    <img className='w-full h-full' src={boxing_schedule} alt='boxing_schedule'/>
    </div>
    </>
  )
}

export default Boxing