// import { Carousel } from 'bootstrap'
import Youtube from '../Components/Youtube'
import React from 'react'
import { Link } from 'react-router-dom'
import sponsorship from '../Components/assets/sponsorship.jpeg'
import logo from '../Components/assets/gym-logo.png'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import discount from '../Components/assets/discount-gym.jpeg'
import coaching from '../Components/assets/coaching-gym.jpeg'
import boxing from '../Components/assets/boxing-gym.jpeg'
import passes from '../Components/assets/guest-pass.jpeg'

const Home = () => {
 return (
 <>
   <div className = "md:bg-[url('./Components/assets/new-hero.jpeg')] md:bg-blend-darken md:bg-cover bg-[url('./Components/assets/guest-gym.jpeg')] bg-blend-darken bg-cover w-full h-[100vmin] bg-no-repeat object-contain">
    <div className='flex w-full h-full items-center justify-center'>
      <div>  
      <h1 className='text-white md:bg-black text-center uppercase font-bold text-[5vmin]'>Surge to New Levels</h1>
      <div className='flex justify-between  text-center gap-3'>
 <Link to ='/powerlifting' className='no-underline'><h4 className='text-white font-bold text-[3vmin] bg-red-600 hover:bg-green-500 rounded-lg p-2 ease-in-out duration-200 uppercase'>Powerlifing</h4></Link> 
  <Link to ='/strongman' className='no-underline'><h4 className='text-white font-bold text-[3vmin] bg-red-600 hover:bg-green-500 rounded-lg p-2 ease-in-out duration-200 uppercase'>Strongman</h4></Link>
  <Link to ='/boxing' className='no-underline'><h4 className='text-white font-bold text-[3vmin] bg-red-600 hover:bg-green-500 rounded-lg p-2 ease-in-out duration-200 uppercase'>Boxing</h4></Link>
  </div>
  </div>
    </div>
</div>
<div className='flex justify-center items-center h-[100vh] w-full bg-black'>
  {/* <ReactPlayer controls url='https://www.youtube.com/embed?v=xLbHiOhBxoc' className = 'h-full w-full'
  /> */}
<div>
  <img className = 'mx-auto pb-5' src={logo} alt='logo'/>
  <h5 className='text-white text-center font-bold uppercase text-[3.5vmin] pb-10'>Surge is chicago's powerlifting destination</h5>
  <p className='upperclass text-center text-white uppercase text-[3vmin] pb-5'>Boasting over 1,200 square feet, we have one of the largest facilites in the nation, while offering competition grade, Strongman and boxing equipment.</p>
  <p className='text-center uppercase text-white text-[3vmin]'>"STRENGTH DOES NOT DISCRIMINATE"</p>
  <div className='flex w-full h-full items-center justify-center pt-10'>
    <Link to ='/memberships' className='no-underline'><h4 className='text-black font-bold text-[3vmin] bg-green-600 hover:bg-red-500 rounded-lg p-3 ease-in-out duration-200 uppercase'>BECOME A MEMBER</h4></Link>
    </div>
</div>
</div>
<div className='h-[100] w-full bg-white'>
  <div className='h-full w-full flex text-center items-center md:flex-row flex-col'>
  <Card style={{border:'none', padding:'3rem' }}>
  <Link className='no-underline text-black hover:scale-110 ease-in-out duration-300' to = '/coaching'>
      <Card.Img variant="top" src={coaching} />
      <Card.Body>
        <Card.Title className='text-[3vmin] font-bold'>COACHING</Card.Title>
        <Card.Text className='text-[2.5vmin]'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  <Card style={{border:'none', padding:'3rem' }}>
 <Link className='no-underline text-black hover:scale-110 ease-in-out duration-300' to = '/boxing'>
      <Card.Img variant="top" src={boxing} />
      <Card.Body>
        <Card.Title className='text-[3vmin] font-bold'>BOXING</Card.Title>
        <Card.Text className='text-[2.5vmin]'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  <Card style={{border:'none', padding:'3rem'}}>
    <Link className='no-underline text-black hover:scale-110 ease-in-out duration-300' to = '/memberships'>
      <Card.Img variant="top" src={passes} />
      <Card.Body>
        <Card.Title className='text-[3vmin] font-bold'>GUEST PASS</Card.Title>
        <Card.Text className='text-[2.5vmin]'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
</div>
</div>
<div className='bg-black items-center flex w-full h-[80vh]'>
<div className=' w-full'>
    <div>
<Carousel>
<Carousel.Item>
        <Youtube
         className="d-block w-100 h-[50vh]"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[50vh]"
          src={discount}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[50vh]"
          src={sponsorship}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
</div>
<div className='w-full h-[100vh]'>
  <div className='h-full w-full flex'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.889871168673!2d-88.10943498454199!3d41.89522547922083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e54c90035eecf%3A0x3b70dd5bead80c81!2sSurge%20To%20New%20Levels%20Gym!5e0!3m2!1sen!2sus!4v1669628192004!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
title='Map-Gym'></iframe>
<div className='bg-white h-full w-full'>
 <h1 >CONTACT US</h1>
  </div>
</div>
</div>
</>
)
}
export default Home