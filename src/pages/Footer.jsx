import React from 'react'


const Footer = () => {
  return (
    <>
    <div className='flex flex-row text-center w-full h-full bg-black text-white'>
     
        <div className='pt-3 w-full text-center'>
            <h1 className='text-[2vmin]'>USPA CERTIFIED TRAINING FACILITY</h1>
        </div>
        <div className='pt-3 w-full text-center'>
            <h1  className='text-[2vmin]'>STRENGTH DOES NOT DISCRIMINTATE </h1>
        </div>
        <div className='pt-3 w-full text-center'>
       <address><h1 className='text-[2vmin]'>330 S Main Place, Carol Stream IL, 60188</h1></address>     
        </div>
        <div className='pt-3 w-full text-center'>
            <p  className='text-[2vmin]'>PHONE: <a className='text-blue-500 no-underline' href ='630-335-1748'>630-335-1748</a></p>
        </div>
    </div>
    </>
  )
}

export default Footer