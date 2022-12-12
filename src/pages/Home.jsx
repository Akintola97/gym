import Youtube from '../Components/Youtube'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Components/assets/gym-logo.png'
import Card from 'react-bootstrap/Card';
import coaching from '../Components/assets/coaching-gym.jpeg'
import boxing from '../Components/assets/boxing-gym.jpeg'
import passes from '../Components/assets/guest-pass.jpeg'
import Team from './team'
import {AiFillTwitterCircle, AiFillFacebook, AiFillYoutube, AiFillMail} from 'react-icons/ai'
import {BsPhone} from 'react-icons/bs'


const home = () => {
 return (
 <>
   <div className='relative w-full h-full'>
    <div className='w-full h-[100vh]'>
   <img className = "md:bg-main-hero brightness-50 bg-hero-mobile bg-cover w-full h-full" alt='hero_background'/>
    </div>
    </div>
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
      <div className='container text-center'>
      <h1 className='text-white text-center uppercase font-bold text-[5vmin]'>Surge to New Levels</h1>
     <div className='flex justify-center'>
 <h4 className='text-gray-300 font-bold text-[2.5vmin] p-2 ease-in-out duration-200 uppercase'>Powerlifting</h4>
 <h4 className='text-gray-300 font-bold text-[2.5vmin] p-2 ease-in-out duration-200 uppercase'>Strongman</h4>
 <h4 className='text-gray-300 font-bold text-[2.5vmin] p-2 ease-in-out duration-200 uppercase'>Boxing</h4>
  </div>
    </div>
    </div>

<div className='flex justify-center items-center w-full bg-black min-h-screen'>
<div>
  <img className = 'mx-auto pb-5' src={logo} alt='logo'/>
  <h5 className='text-white text-center font-bold uppercase text-[3.5vmin] pb-10'>Surge is chicago's powerlifting destination</h5>
  <p className='upperclass text-center text-white uppercase text-[3vmin] pb-3'>Boasting over 1,200 square feet, we have one of the largest facilites in the nation <br></br> while offering competition grade, Strongman and boxing equipment.</p>
  <p className='text-center uppercase text-white text-[3vmin]'>"STRENGTH DOES NOT DISCRIMINATE"</p>
  <div className='flex w-full h-full items-center justify-center pt-10'>
    <Link to ='/memberships' className='no-underline'><h4 className='text-white font-bold text-[3vmin] bg-red-500 hover:bg-green-600 rounded-lg p-3 ease-in-out duration-200 uppercase'>BECOME A MEMBER</h4></Link>
    </div>
    <div className='w-full h-full text-white flex justify-center gap-5 p-5 md:text-[3vmin] text-[5vmin]'>
  <a className='text-blue-500' href='https://www.facebook.com/SurgeToNewLevels?ref=hl' target='_blank' rel="noopener noreferrer">
  <AiFillFacebook />
  </a>
  <a className='text-blue-300' href='https://twitter.com/surgenewlevels' target='_blank' rel="noopener noreferrer">
  <AiFillTwitterCircle />
  </a>
  <a className='text-white' href='tel:630-335-1748'>
  <BsPhone /></a>
  <a className='text-white' href='mailto:surgetonewlevels@gmail.com' target='_blank' rel="noopener noreferrer">
  <AiFillMail /></a>
  <a className='text-red-500' href='https://www.youtube.com/channel/UCdq-GJBkAHCzQvNed5-yq0A' target='_blank' rel="noopener noreferrer">
  <AiFillYoutube />
  </a>
    </div>
</div>
</div>

<div className='min-h-screen w-full bg-white pt-10'>
  <div className='h-full w-full flex text-center items-center md:flex-row flex-col justify-center'>
  <Card style={{border:'none', padding:'1vmin', background:'white' }}>
  <Link className='no-underline text-black' to = '/coaching'>
      <Card.Img variant="top" src={coaching} />
      <Card.Body>
        <h1 className='text-[3.0vmin] font-bold'>COACHING</h1>
        <Card.Text className='text-[2.0vmin] text-center'>
        Intended for those who need technical attention and a structured plan or wants to take their lifting to the next level... Available spots vary, give us a call to set up your time with a coach!
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  <Card style={{border:'none', padding:'1vmin', background:'white' }}>
 <Link className='no-underline text-black' to = '/boxing'>
      <Card.Img variant="top" src={boxing} />
      <Card.Body>
        <h1 className='text-[3.0vmin] font-bold'>BOXING</h1>
        <Card.Text className='text-[2.0vmin] text-center'>
        From beginners who want to push themselves in a fun and engaging way as well as those who want to compete. Attendees are to bring their own gloves and hand wraps. First class free! 
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  <Card style={{border:'none', padding:'1vmin', background:'white'}}>
    <Link className='no-underline text-black' to = '/memberships'>
      <Card.Img variant="top" src={passes} />
      <Card.Body>
        <h1 className='text-[3.0vmin] font-bold'>GUEST PASS</h1>
        <Card.Text className='text-[2.0vmin] text-center'>
        Guest pass access is available remotely from 9AM to 9PM by appointment only. To schedule your visit please call/text Sergio or gym manager Amanda with your info and reason for visiting. 
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
</div>
<div className='text-center p-10'>
        <button className='bg-red-500 hover:bg-green-600 rounded-lg p-2'><a className='text-white no-underline text-[3vmin] uppercase font-bold' href='tel:630-335-1748'>
  Speak to Surge</a></button>
  </div>
</div>
<div className='h-full w-full'>
<div className='bg-black w-full h-[50vh]'>
<Youtube />
    </div>
<div className='w-full h-full'>
  <Team />
</div>
</div>
<div className='w-full md:h-[50vmin] h-[80vmin] bg-white'>
  <div className='h-full w-full flex items-center'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.889871168673!2d-88.10943498454199!3d41.89522547922083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e54c90035eecf%3A0x3b70dd5bead80c81!2sSurge%20To%20New%20Levels%20Gym!5e0!3m2!1sen!2sus!4v1669628192004!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
title='Map-Gym'></iframe>
</div>
</div>
</>
)
}
export default home