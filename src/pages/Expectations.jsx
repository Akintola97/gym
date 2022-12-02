import React from 'react'
import helping_hand from '../Components/assets/helping-hand.jpeg'
import powerlifting_etiqutte from '../Components/assets/powerlifting-etiquette.jpeg'

const Expectations = () => {
  return (
    <>
    <div className='w-full h-full bg-black'>
       <h1 className='uppercase font-bold text-center pt-5 pb-5 text-white'>Surge Gym Expectations</h1>
       <div className='flex w-full h-full md:flex-row flex-col'>
        <div className='w-full h-full'>
            <img className='w-full h-full pb-5' src={helping_hand} alt='helping-eachother'/>
        </div>
        <div className='w-full h-full text-center text-white justify-center items-center'>
        <p className='md:pt-1 lg:pt-10'>We understand it can feel overwhelming to join a powerlifting gym,
             especially if you're new to the sport, 
             so we've created this resource to help when visiting!
         </p>
        <p className='lg:pt-10'>
            Additionally, we have included further points regarding the strongman
            and boxing areas for those interested in trying out something different!
        </p>
        <p className='lg:pt-10'>
        When in doubt feel free to ask someone around you. 
        Everyone is super friendly and helpful! Otherwise you can reach Sergio directly by calling or texting <a className='text-blue-300 no-underline' href ='630-335-1748'>630-335-1748</a>
        </p>
        </div>
        </div>
    </div>
    <div className='h-full w-full bg-gray-200'>
        <h1 className='text-center font-bold p-5'>Powerlifting Etiquette</h1>
        <img className='w-full h-full' src={powerlifting_etiqutte}/>
        
    </div>
    </>
  )
}

export default Expectations