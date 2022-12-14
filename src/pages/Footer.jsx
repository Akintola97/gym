import React from 'react'


const footer = () => {
  return (
    <>
    <div className='flex flex-row text-center w-full h-full bg-black/90 text-white'>
     
        <div className='pt-3 w-full text-center'>
            <h1 className='text-[1.8vmin] md:text-[2.0vmin]'>USPA CERTIFIED TRAINING FACILITY</h1>
        </div>
        <div className='pt-3 w-full text-center'>
            <h1  className='text-[1.8vmin] md:text-[2.0vmin]'>STRENGTH DOES NOT DISCRIMINTATE </h1>
        </div>
        <div className='pt-3 w-full text-center'>
       <h1 className='text-[1.8vmin] md:text-[2.0vmin]'><a className='text-blue-500 no-underline' href='https://goo.gl/maps/rQ8rBUSgFfp78EwJ6' target='_blank' rel='noreferrer'>330 S Main Place, Carol Stream IL, 60188</a></h1>   
        </div>
        <div className='pt-3 w-full text-center'>
            <p  className='text-[1.8vmin] md:text-[2.0vmin]'>PHONE: <a className='text-blue-500 no-underline' href ='630-335-1748'>630-335-1748</a></p>
        </div>
    </div>
    </>
  )
}

export default footer