import React from 'react'
import Gallery from '../Components/Gallery'

// import squat_facility_female from '../Components/assets/squat-facility-female.jpeg'
// import loading_plates from '../Components/assets/loading-plates-facility.jpeg'
// import mono_squat from '../Components/assets/mono-squat-facility.jpeg'
// import coaching_facility from '../Components/assets/coaching-facility.jpeg'
// import back_squat from '../Components/assets/back-squat-facility.jpeg'
// import strongman_facility from '../Components/assets/strongman_facility.jpeg'
// import woman_deadlift from '../Components/assets/woman-deadlift.jpeg'
// import youth_boxer from '../Components/assets/youth-boxer.jpeg'
// import woman_deadlift_setup from '../Components/assets/woman-deadlift-setup.jpeg'
// import stone_pit from '../Components/assets/stone-pit-strongman.jpeg'
// import bench_arch from '../Components/assets/bench-arch.jpeg'
// import yoke_walk from '../Components/assets/yoke-walk-strongman.jpeg'
// import dumbbell_row from '../Components/assets/dumbbell-row.jpeg'
// import strongman_stone from '../Components/assets/strongman-stone.jpeg'
// import lbs_plates from '../Components/assets/lbs_plates.jpeg'


const Facility = ({data}) => {

  // console.log(data)

  return (
    <>
    <div className='text-black w-full h-full bg-gray-200'>
      <h1 className='uppercase text-center font-bold text-[6vmin] pt-4'>Surge to new levels Facility</h1>
      <p className='text-center text-[2.8vmin] p-3'>With over 12,000 square feet; Surge to New Levels boasts one of the largest spaces for powerlifting, strongman, and boxing in the entire Chicagoland area! Outfitted with all competition grade equipment, you will find absolutely everything you need for your sport at our gym! Best of all we have one of the largest and friendliest communities around! </p>
     
       {/* <img className='w-[32vw] p-2' src={squat_facility_female} />
       <img className='w-[32vw] p-2' src={loading_plates} /> 
       <img className='w-[32vw] p-2' src={mono_squat} />
       <img className='w-[32vw] p-2' src={coaching_facility} />
       <img className='w-[32vw] p-2' src={back_squat} />
       <img className='w-[32vw] p-2' src={strongman_facility} />
       <img className='w-[32vw] p-2' src={woman_deadlift} />
       <img className='w-[32vw] p-2' src={youth_boxer} />
       <img className='w-[32vw] p-2' src={woman_deadlift_setup} />
       <img className='w-[32vw] p-2' src={stone_pit} />
       <img className='w-[32vw] p-2' src={bench_arch} />
       <img className='w-[32vw] p-2' src={yoke_walk} />
       <img className='w-[32vw] p-2' src={dumbbell_row} />
       <img className='w-[32vw] p-2' src={strongman_stone} />
       <img className='w-[32vw] p-2' src={lbs_plates} /> */}
      {/* {data.map((item,index) => <img src={item.imgSrc} index = {index} />)} */}
      <Gallery />
      
</div>
      <div className='w-full h-full bg-gray-200'>
        <div>
      <h1 className='uppercase text-center font-bold text-[6vmin] pt-5 pb-4'>The Equipment</h1>
      </div>
      <div className='flex w-full h-full md:flex-row flex-col justify-center text-center pb-5'>
      <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Specialty Barbells</h3>
            <p className='text-[2.8vmin]'>Texas Squat Bar (2) 25KG/55LBS</p>
            <p className='text-[2.8vmin]'>Kabuki Strength Squat Bar (2) 25KG/55LBS</p>
            <p className='text-[2.8vmin]'>Kabuki Transformer Bar (1) 45LBS</p>
            <p className='text-[2.8vmin]'>Westside Bulldog Squat Bar (1) 30KG/66LBS</p>
            <p className='text-[2.8vmin]'>Texas mastadon Bar (1) 60LBS</p>
            <p className='text-[2.8vmin]'>Kabuki Deadlift Bar (1) 20KG/45LBS</p>
            <p className='text-[2.8vmin]'>Texas Deadlift Bar (3) 20KG/45LBS</p>
            <p className='text-[2.8vmin]'>Ohio Deadlift Bar (5) 20KG/45LBS</p>
            <p className='text-[2.8vmin]'>Texas Power Bar (2) 20KG/45LBS</p>
            <p className='text-[2.8vmin]'>Ohio Power Bar Pounds (2) 45LBS</p>
            <p className='text-[2.8vmin]'>Ohio Power Bar Kilos (1) 20KG</p>
            <p className='text-[2.8vmin]'>Kabuki Strength Power Bar (1) 20KG/45LBS</p>
            <p className='text-[2.8vmin]'>Elite FTS Power Bar (1) 45LBS</p>
            <p className='text-[2.8vmin]'>Ohio Olympic Bar (1) 20KG/45LBS</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Bella Bar (1) 15KG/33LBS</p>
            <p className='text-[2.8vmin]'>Kabuki Strength Duffalo Bar (1) 55LBS</p>
            <p className='text-[2.8vmin]'>Kabuki Strength Shoulder Rok (1)</p>
            <p className='text-[2.8vmin]'>Rogue Fintess Multi Grip Bar (1) 45LBS</p>
            <p className='text-[2.8vmin]'>Elite FTS Safety Squat Bar (2) 65LBS</p>
            <p className='text-[2.8vmin]'>Black Widow Cambered Bar (1) 38LBS</p>
            <p className='text-[2.8vmin]'>BandBell Earthquake Bar (1) 6LBS</p>
        </div>
        <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Strongman</h3>
          
            <p className='text-[2.8vmin]'>Stone Loading Platform (4 Heights)</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Adjustable Jerk Blocks</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Strongman Yoke 185LBS</p>
            <p className='text-[2.8vmin]'>Atlas Stones - 100LBS to 400LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos 20" Stone of Steel 135LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos 17" Stone of Steel 110LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos 12" Circus Dumbbell 139LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos 10" Circus Dumbbell 75LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos Power Keg 130LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos DeadSled 150LBS</p>
            <p className='text-[2.8vmin]'>MBPC Farmer Walk Handles 68LBS</p>
            <p className='text-[2.8vmin]'>Mike Bartos 12" BOSS Log 230LBS</p>
            <p className='text-[2.8vmin]'>Titan Fitness Strongman Log 10" 75LBS</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Log 8" 51LBS</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Log 12" 130LBS</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Axle 25LBS</p>
            <p className='text-[2.8vmin]'>Strong Sand Bags 100LBS, 150LBS, 200LBS, 250LBS, 300LBS, 400LBS</p>
            <p className='text-[2.8vmin]'>Elite FTS Farmer Carry Handles (20lbs)</p>
            <p className='text-[2.8vmin]'>Titan Fitness Viking Press Attachment</p>
            <p className='text-[2.8vmin]'>Titan Fitness Hussafell 110LBS</p>
            <p className='text-[2.8vmin]'>Mouser Block</p>
            <p className='text-[2.8vmin]'>Black Widow Trap Bar 35LBS</p>
            <p className='text-[2.8vmin]'>Frame Carry</p>
            <p className='text-[2.8vmin]'>Tires(250LBS and 550LBS)</p>
       </div>
  
       <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Boxing</h3>
        
          <p className='text-[2.8vmin]'>22X22FT Professional Boxing Ring</p>
          <p className='text-[2.8vmin]'>Ringside 100LB Heavy Bags (2)</p>
          <p className='text-[2.8vmin]'>Rival 200LB Heavy Bag (1)</p>
          <p className='text-[2.8vmin]'>Cleto Reyes Wrecking Ball (1)</p>
          <p className='text-[2.8vmin]'>Aqua Bag 200LBS (1)</p>
          <p className='text-[2.8vmin]'>Title Cobra Reflex Bag (1)</p>
          <p className='text-[2.8vmin]'>Title Reflex Bar (1)</p>
          <p className='text-[2.8vmin]'>Speed Bag (1)</p>
          <p className='text-[2.8vmin]'>Double End Bag (1)</p>

        </div>
        <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Machines</h3>
        
           <p className='text-[2.8vmin]'>Precor Icarian 8 Multi-Stack Cable Station</p>
           <p className='text-[2.8vmin]'>Rogue Fitness Rhino Belt Squat Machine</p>
           <p className='text-[2.8vmin]'>Reverse Hyper </p>
           <p className='text-[2.8vmin]'>Seal Row Machine</p>
           <p className='text-[2.8vmin]'>Rogue Fitness Glute Ham Raise</p>
           <p className='text-[2.8vmin]'>Legend Fitness Leg Press</p>
           <p className='text-[2.8vmin]'>Elite FTS Leg Ext. Leg Curl</p>
           <p className='text-[2.8vmin]'>Sissy Squat Machine</p>
       </div>
        </div>
        <div className='flex w-full h-full md:flex-row flex-col justify-center text-center pb-10'>
        <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Accessories, Mobility, <br></br>and Misc.</h3>
            <p className='text-[2.8vmin]'>Kabuki Strength Boomstick</p>
            <p className='text-[2.8vmin]'>Elite FTS Bands Full Set (2)</p>
            <p className='text-[2.8vmin]'>Black Widow 5/8" Chains (6)</p>
            <p className='text-[2.8vmin]'>TRX Suspension System</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Dip Station</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Landmine</p>
            <p className='text-[2.8vmin]'>DC Blocks (8)</p>
            <p className='text-[2.8vmin]'>Deadlift Jack (3)</p>
            <p className='text-[2.8vmin]'>Chalk Bowl and Chalk (2)</p>
            <p className='text-[2.8vmin]'>Ammonia</p>
            <p className='text-[2.8vmin]'>Rumble Roller</p>
            <p className='text-[2.8vmin]'>Tiger Tail Roller</p>
            <p className='text-[2.8vmin]'>Acumobility Level 2 Ball (2)</p>
            <p className='text-[2.8vmin]'>Slingshot Hip Circle</p>
            <p className='text-[2.8vmin]'>Slingshot Mad Boar</p>
            <p className='text-[2.8vmin]'>Slingshot Knee Wraps</p>
            <p className='text-[2.8vmin]'>Slingshot Wrist Wraps</p>
        </div>
        <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Racks, Benches,<br></br> Platforms</h3>
          
            <p className='text-[2.8vmin]'>Powerlifting Monolift (2)</p>
            <p className='text-[2.8vmin]'>Ghost Combo Rack (2)</p>
            <p className='text-[2.8vmin]'>Elite FTS Competition Combo Rack (2)</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Combo Rack (2)</p>
            <p className='text-[2.8vmin]'>Wall Rigs (3)</p>
            <p className='text-[2.8vmin]'>Rogue Fitness Monster Lite Rack (4)</p>
            <p className='text-[2.8vmin]'>Elite FTS National Competition Bench</p>
            <p className='text-[2.8vmin]'>4x8 Deadlift Platform with Band Pegs (6)</p>
            <p className='text-[2.8vmin]'>Elite FTS Adjustable 0-90 Bench (2)</p>
            <p className='text-[2.8vmin]'>Monster Utility Benches (2)</p>
        </div>
        <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Cardio and Conditioning Equipment</h3>
        <p className='text-[2.8vmin]'>Life Fitness Treadmill</p>
        <p className='text-[2.8vmin]'>Step Mill Stairmaster</p>
        <p className='text-[2.8vmin]'>Assault Air Bike</p>
        <p className='text-[2.8vmin]'>Concept 2 Rower</p>
        <p className='text-[2.8vmin]'>60ft of Athletic Turf</p>
        <p className='text-[2.8vmin]'>Butcher Prowler 75LBS</p>
        <p className='text-[2.8vmin]'>Fat Boy Sled 38LBS</p>
        <p className='text-[2.8vmin]'>Plyo Boxes</p>
        <p className='text-[2.8vmin]'>Battle Ropes</p>
        <p className='text-[2.8vmin]'>Agility Cones</p>
       </div>
       <div className='w-full h-full'>
        <h3 className='font-bold text-[4vmin]'>Strength Equipment and Weights</h3>
        <p className='text-[2.8vmin]'>IPF Certified Kilo Plates (3 Full Sets)</p>
        <p className='text-[2.8vmin]'>Ivanko Competition Collars </p>
        <p className='text-[2.8vmin]'>Ivanko Pro Style Dumbbells</p>
        <p className='text-[2.8vmin]'>Cast Iron Standard Plates</p>
        <p className='text-[2.8vmin]'>Rogue Fitness Kettlebell Set</p>
        <p className='text-[2.8vmin]'>Rogue Fitness Bumper Plates</p>
            </div>
        </div>
        
      </div>
      </>
  )
}

export default Facility