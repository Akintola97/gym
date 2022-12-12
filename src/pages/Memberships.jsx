import React from 'react'
import open_membership from '../Components/assets/open-membership.jpeg'
import sign_up_fee from '../Components/assets/sign-up-fee.jpeg'
import year_membership from '../Components/assets/year-membership.jpeg'
import gym_discount from '../Components/assets/discount-gym.jpeg'
import { Link } from 'react-router-dom'

const memberships = () => {
  return (
    <>
    <div className='bg-white h-[100vh] w-full text-black flex text-center justify-center items-center'>
      <div> 
      <h1 className='uppercase md:text-[3.5vmin] text-[4vmin] font-bold p-3'>Open Membership Information</h1>
      <p className='md:text-[2.5vmin] text-[2.3vmin] p-1'>We are home to to all levels from beginner to world class athletes. All experience levels are welcome to join as long as they are genuinely interested in being part of our community.</p>
      <p className='md:text-[2.5vmin] text-[2.3vmin] p-1'>As we have no staff so we count on the support of our members to keep SURGE special. Help us take care of the gym, and the gym will take care of you!</p>
      <p className='md:text-[2.0vmin] text-[1.5vmin] p-1 font-bold'>- Sergio and Jackie (Gym Dad and Mom)</p>
      <div className='flex w-full h-full items-center justify-center'>
    <Link to ='/expectations' className='no-underline p-3'><h4 className='text-white font-bold md:text-[2.5vmin] text-[2vmin] bg-red-600 hover:bg-green-500 rounded-lg p-3 ease-in-out duration-200 uppercase'>VIEW GYM EXPECTATIONS</h4></Link>
    </div>
      </div>
    </div>
 
    <div className='h-full w-full bg-black text-white text-center'>
        <h1 className='pt-5 md:text-[3.5vmin] text-[4vmin]  font-bold'>MEMBERSHIP OPTIONS</h1>
        <p className='uppercase md:text-[2.5vmin] text-[3.0vmin] '>Due to high demand, we are now offering the following pricing options!</p>
        <div className='flex w-full md:flex-row flex-col items-center'>
        <img className='md:w-[32vw] w-[50vw] md:p-3 p-2' src={open_membership} alt='short_membership'/>
        <img className='md:w-[32vw] w-[50vw] md:p-3 p-2'src={sign_up_fee} alt='long_membership'/>
        <img className='md:w-[32vw] w-[50vw] md:p-3 p-2' src={year_membership} alt='bestoverall_membership'/>
        </div>
    </div>
    <div className='h-full w-full bg-black p-10'>  
        <img className='w-full' src={gym_discount} alt='membership-promo'/> 
    </div>
    <div className='h-full w-full bg-white text-black pb-32'>
      <h1 className='font-bold pt-5 text-center md:text-[3.5vmin] text-[4vmin]'>FAQ's</h1>
      <div className='h-full w-full flex flex-col p-4'>
       <div>
        <h6 className='font-bold md:text-[2.5vmin] text-[3vmin]'>Do I have to be a powerlifter, strongman, boxer to join?</h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>Although we primarily serve competitive powerlifting, strongman, and boxing athletes; you do not have to compete to be a part of the gym! We welcome all levels from beginner to world class lifters!</span>
        </div>  
       <div> 
        <h6 className='font-bold md:text-[2.5vmin] text-[3vmin] pt-4'>Does SURGE have a locker room, sauna, and/or other commercial amenities?</h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>Although we primarily serve competitive powerlifting, strongman, and boxing athletes; you do not have to compete to be a part of the gym! We welcome all levels from beginner to world class lifters!</span>
        </div>  
       <div> 
        <h6 className='font-bold md:text-[2.5vmin] text-[3vmin] pt-4'>Why is membership so expensive? </h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>SURGE is home to the widest array of competition grade equipment you will find in the entire Midwest! As a private gym, our focus is on quality not quantity and we want to encourage a community that takes care of the gym!</span>
        </div>  
        
       <div><h6 className='font-bold md:text-[2.5vmin] text-[3vmin] pt-4'>I've never been to a private powerlifting gym, what should I know? </h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>Our biggest values are respect, humility, and giving back! Please don't be afraid to ask for help and our members are more than willing you out. We also highly recommend visiting the gym expectations page for a quick run down on general etiquette at the gym!
        </span>
        </div>  
       
       <div><h6 className='font-bold md:text-[2.5vmin] text-[3vmin] pt-4'>How do I gain 24/7 access?</h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>All memberships include 24/7 access via a key card you will receive once you have signed up! 
        </span>
        </div>  
       
       <div><h6 className='font-bold md:text-[2.5vmin] text-[3vmin] pt-4'>Is SURGE open year-round?</h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>SURGE is open all year-round! The only time we close are to host events and competitions which we will always post here on the website or on our social media!
        </span>
       </div>
       <div>
        <h6 className='font-bold md:text-[2.5vmin] text-[3vmin] pt-4'>Am I allowed to bring in a friend?</h6><span className='p-3 md:text-[2.0vmin] text-[2.5vmin]'>Members are welcome to bring in guests! Please note members are 100% responsible for their guests while they visit. This includes signing in, paying, and following our gym expectations while at the gym!
        </span>
        </div>  

        
      </div>
    </div>
  </>
    )
}

export default memberships