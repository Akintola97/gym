import React from 'react'

import Card from 'react-bootstrap/Card';
import owner from '../Components/assets/owner-gym.jpeg'
import co_owner from '../Components/assets/co-owner.png'
import manager from '../Components/assets/manager-gym.jpeg'
import powerlifting_coach from '../Components/assets/powerlifting-coach.jpeg'
import strongman from '../Components/assets/strongman-gym.jpeg'
import head_boxing from '../Components/assets/head-boxing.jpeg'
import youth_boxing from '../Components/assets/youth-boxing.jpeg'
import gym_photographer from '../Components/assets/gym-photographer.jpeg'
import events_photographer from '../Components/assets/events-photographer.jpeg'
import Carousel from 'react-bootstrap/Carousel';

const Team = () => {
  return (
    <>
<Carousel fade>
      <Carousel.Item>
        <div className='h-[155vh] md:h-[70vh] w-full bg-black'>
        <div className='flex items-center h-full w-full md:flex-row flex-col justify-center'>   
        <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}} variant="top" src={owner} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5vmin]'>SERGIO LUNA</h3></Card.Title>
        <Card.Text>
          <p className='text-[3vmin] md:text-[1.5vmin]'>GYM OWNER | COACH | USPA IL STATE CHAIRMAN</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}}  variant="top" src={co_owner} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5min]'>JACKIE LUNA</h3></Card.Title>
        <Card.Text>
          <p className='text-[3vmin] md:text-[1.5vmin]'>GYM OWNER | COACH | MEMBER SERVICES</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}} variant="top" src={manager} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5vmin]'>AMANDA HEATH</h3></Card.Title>
        <Card.Text>
         <p className='text-[3vmin] md:text-[1.5vmin]'>GYM MANAGER | GUEST SERVICES</p> 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
        {/* <Carousel.Caption>
          <h3>MEET THE TEAM</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className='h-[155vh] md:h-[70vh] w-full bg-black'>
        <div className='flex items-center h-full w-full md:flex-row flex-col justify-center'>
        <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}} variant="top" src={powerlifting_coach} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5vmin]'>MIKE FEDANZO</h3></Card.Title>
        <Card.Text>
          <p className='text-[3vmin] md:text-[1.5vmin]'>PT MANAGER HEAD POWERLIFTING COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}}  variant="top" src={strongman} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5min]'>CHRIS DALOIA</h3></Card.Title>
        <Card.Text>
          <p className='text-[3vmin] md:text-[1.5vmin]'>HEAD STRONGMAN COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}} variant="top" src={head_boxing} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5vmin]'>PACO OCAMPO</h3></Card.Title>
        <Card.Text>
         <p className='text-[3vmin] md:text-[1.5vmin]'>HEAD BOXING COACH</p> 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
        {/* <Carousel.Caption>
          <h3>MEET THE TEAM</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className='h-[155vh] md:h-[70vh] w-full bg-black'>
        <div className='flex items-center h-full w-full md:flex-row flex-col justify-center'>
        <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}} variant="top" src={youth_boxing} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5vmin]'>JAY-R ESCALANTE</h3></Card.Title>
        <Card.Text>
          <p className='text-[3vmin] md:text-[1.5vmin]'>HEAD YOUTH BOXING COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}}  variant="top" src={gym_photographer} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5min]'>JESS WIGHT</h3></Card.Title>
        <Card.Text>
          <p className='text-[3vmin] md:text-[1.5vmin]'>GYM PHOTOGRAPHER</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'white', background:'black', padding:'2rem'}}>
      <Card.Img style={{width:'20rem', height:'10rem'}} variant="top" src={events_photographer} />
      <Card.Body className='text-center'>
        <Card.Title><h3 className='text-[3vmin] md:text-[2.5vmin]'>ARIELLE GALLIONE</h3></Card.Title>
        <Card.Text>
         <p className='text-[3vmin] md:text-[1.5vmin]'>SURGE EVENTS PHOTOGRAPHER</p> 
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
        {/* <Carousel.Caption>
          <h3>MEET THE TEAM</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Team