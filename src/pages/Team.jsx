import React from 'react'
import Button from 'react-bootstrap/Button';
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

const Team = () => {
  return (
    <>
    <div className='h-[100] w-full bg-white'>
    <h1 className='text-center uppercase p-5 text-black'>Meet The Team</h1>
      <div className='flex h-full w-full md:flex-row flex-col justify-evenly text-center font-bold'>
      <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={owner} />
      <Card.Body>
        <Card.Title><h3>SERGIO LUNA</h3></Card.Title>
        <Card.Text>
          <p>GYM OWNER | COACH | USPA IL STATE CHAIRMAN</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={co_owner} />
      <Card.Body>
        <Card.Title><h3>JACKIE LUNA</h3></Card.Title>
        <Card.Text>
          <p>GYM OWNER | COACH | MEMBER SERVICES</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={manager} />
      <Card.Body>
        <Card.Title><h3>AMANDA HEATH</h3></Card.Title>
        <Card.Text>
         <p>GYM MANAGER | GUEST SERVICES</p> 
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='flex h-full w-full md:flex-row flex-col justify-evenly items-center text-center font-bold'>
      <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={powerlifting_coach} />
      <Card.Body>
        <Card.Title><h3>MIKE FEDANZO</h3></Card.Title>
        <Card.Text>
        <p>PT MANAGER | HEAD POWERLIFTING COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={strongman} />
      <Card.Body>
        <Card.Title><h3>CHRIS DALOIA</h3></Card.Title>
        <Card.Text>
          <p>HEAD STRONGMAN COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={head_boxing} />
      <Card.Body>
        <Card.Title><h3>PACO OCAMPO</h3></Card.Title>
        <Card.Text>
          <p>HEAD BOXING COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='flex h-full w-full md:flex-row flex-col items-center justify-evenly text-center font-bold'>
      <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={youth_boxing} />
      <Card.Body>
        <Card.Title><h3>JAY R ESCALANTE</h3></Card.Title>
        <Card.Text>
          <p>HEAD YOUTH BOXING COACH</p>
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={gym_photographer} />
      <Card.Body>
        <Card.Title><h3>JESS WIGHT</h3></Card.Title>
        <Card.Text>
         <p>GYM PHOTOGRAPHER</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:'none', color:'black', padding:'3rem'}}>
      <Card.Img style={{width:'20rem', height:'13rem'}}  variant="top" src={events_photographer} />
      <Card.Body>
        <Card.Title><h3>ARIELLE GALLIONE</h3></Card.Title>
        <Card.Text>
          <p>SURGE EVENTS PHOTOGRAPHER</p>
        </Card.Text>
      </Card.Body>
    </Card>
  
   
      </div>
    </div>
    </>
  )
}

export default Team