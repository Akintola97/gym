import React from 'react'
import open_membership from '../Components/assets/open-membership.jpeg'
import sign_up_fee from '../Components/assets/sign-up-fee.jpeg'
import year_membership from '../Components/assets/year-membership.jpeg'
import gym_discount from '../Components/assets/discount-gym.jpeg'
import { Link } from 'react-router-dom'

const Memberships = () => {
  return (
    <>
    <div className='bg-gray-200 p-5 h-full w-full text-black flex text-center justify-center items-center'>
      <div> 
      <h1 className='uppercase text-[5vmin] md:text-[4vmin] font-bold'>Open Membership Information</h1>
      <h5 className='p-3 text-[3.5vmin] md:text-[3vmin]'>We are home to to all levels from beginner to world class athletes. All experience levels are welcome to join as long as they are genuinely interested in being part of our community.</h5>
      <p className='p-3 text-[3.5vmin] md:text-[3vmin]'>As we have no staff so we count on the support of our members to keep SURGE special. Help us take care of the gym, and the gym will take care of you!</p>
      <p className='text-[2.5vmin] md:text-[2vmin] font-bold'>- Sergio and Jackie (Gym Dad and Mom)</p>
      <div className='flex w-full h-full items-center justify-center'>
    <Link to ='/expectations' className='no-underline p-10'><h4 className='text-white font-bold text-[3vmin] bg-red-600 hover:bg-black rounded-lg p-3 ease-in-out duration-200 uppercase'>VIEW GYM EXPECTATIONS</h4></Link>
    </div>
      </div>
    </div>
 
    <div className='h-full w-full bg-black text-white text-center'>
        <h1 className='pt-5 font-bold'>MEMBERSHIP OPTIONS</h1>
        <p className='uppercase'>Due to high demand, we are now offering the following pricing options!</p>
        <div className='flex w-full md:flex-row flex-col items-center'>
        <img className='md:w-[32vw] w-[50vw] md:p-3 p-2' src={open_membership} alt='short_membership'/>
        <img className='md:w-[32vw] w-[50vw] md:p-3 p-2'src={sign_up_fee} alt='long_membership'/>
        <img className='md:w-[32vw] w-[50vw] md:p-3 p-2' src={year_membership} alt='bestoverall_membership'/>
        </div>
    </div>
    <div className='h-full w-full bg-black p-10'>  
        <img className='w-full' src={gym_discount} alt='membership-promo'/> 
    </div>
    <div className='h-full w-full bg-gray-200 text-black pb-10'>
      <h1 className='font-bold p-5 text-center text-[5vmin] md:text-[6vmin] '>FAQ's</h1>
      <div className='h-full w-full text-center flex '>
        <ul> 
          <li>
        <h6 className='font-bold'>Do I have to be a powerlifter, strongman, boxer to join?</h6><span>Although we primarily serve competitive powerlifting, strongman, and boxing athletes; you do not have to compete to be a part of the gym! We welcome all levels from beginner to world class lifters!</span>
        </li>
        <li> 
        <h6 className='font-bold pt-3'>Does SURGE have a locker room, sauna, and/or other commercial amenities?</h6><span>Although we primarily serve competitive powerlifting, strongman, and boxing athletes; you do not have to compete to be a part of the gym! We welcome all levels from beginner to world class lifters!</span>
        </li>
        <li> 
        <h6 className='font-bold pt-3'>Why is membership so expensive? </h6><span>SURGE is home to the widest array of competition grade equipment you will find in the entire Midwest! As a private gym, our focus is on quality not quantity and we want to encourage a community that takes care of the gym!</span>
        </li>
        <li> 
        <h6 className='font-bold pt-3'>I've never been to a private powerlifting gym, what should I know? </h6><span>Our biggest values are respect, humility, and giving back! Please don't be afraid to ask for help and our members are more than willing you out. We also highly recommend visiting the gym expectations page for a quick run down on general etiquette at the gym!
        </span>
        </li>
        <li>
        <h6 className='font-bold pt-3'>How do I gain 24/7 access?</h6><span>All memberships include 24/7 access via a key card you will receive once you have signed up! 
        </span>
        </li>
        <li>
        <h6 className='font-bold pt-3'>Is SURGE open year-round?</h6><span>SURGE is open all year-round! The only time we close are to host events and competitions which we will always post here on the website or on our social media!
        </span>
        </li>
        <li>
        <h6 className='font-bold pt-3'>Am I allowed to bring in a friend?</h6><span>Members are welcome to bring in guests! Please note members are 100% responsible for their guests while they visit. This includes signing in, paying, and following our gym expectations while at the gym!
        </span>
        </li>

        </ul>
      </div>
    </div>
  </>
    )
}

export default Memberships