import React from 'react'
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

import Gallery from '../Components/Gallery'

const Facility = ({img, id}) => {
  return (
    <>
    <div className='text-black w-full h-full bg-gray-200'>
      <h1 className='uppercase text-center font-bold text-[6vmin] md:text-[5vmin] pt-4'>Surge to new levels Facility</h1>
      <p className='text-center text-[3.4vmin] md:text-[2.2vmin] p-3'>With over 12,000 square feet; Surge to New Levels boasts one of the largest spaces for powerlifting, strongman, and boxing in the entire Chicagoland area! Outfitted with all competition grade equipment, you will find absolutely everything you need for your sport at our gym! Best of all we have one of the largest and friendliest communities around! </p>
      <div className='text-center w-full h-full bg-gray-200 flex flex-wrap justify-center items-center'>
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
    <Gallery img = {img} id={id} />

      </div>
</div>
      <div className='w-full h-full bg-gray-200'>
        <div>
      <h1 className='uppercase text-center font-bold text-[5vmin] pt-5 pb-4'>The Equipment</h1>
      </div>
      <div className='flex w-full h-full flex-wrap justify-center text-center'>
        <ul>
        <h3 className='p-1 pb-2 font-bold'>Specialty Barbells</h3>
          <li>
            <p>Texas Squat Bar (2) 25KG/55LBS</p>
            <p>Kabuki Strength Squat Bar (2) 25KG/55LBS</p>
            <p>Kabuki Transformer Bar (1) 45LBS</p>
            <p>Westside Bulldog Squat Bar (1) 30KG/66LBS</p>
            <p>Texas mastadon Bar (1) 60LBS</p>
            <p>Kabuki Deadlift Bar (1) 20KG/45LBS</p>
            <p>Texas Deadlift Bar (3) 20KG/45LBS</p>
            <p>Ohio Deadlift Bar (5) 20KG/45LBS</p>
            <p>Texas Power Bar (2) 20KG/45LBS</p>
            <p>Ohio Power Bar Pounds (2) 45LBS</p>
            <p>Ohio Power Bar Kilos (1) 20KG</p>
            <p>Kabuki Strength Power Bar (1) 20KG/45LBS</p>
            <p>Elite FTS Power Bar (1) 45LBS</p>
            <p>Ohio Olympic Bar (1) 20KG/45LBS</p>
            <p>Rogue Fitness Bella Bar (1) 15KG/33LBS</p>
            <p>Kabuki Strength Duffalo Bar (1) 55LBS</p>
            <p>Kabuki Strength Shoulder Rok (1)</p>
            <p>Rogue Fintess Multi Grip Bar (1) 45LBS</p>
            <p>Elite FTS Safety Squat Bar (2) 65LBS</p>
            <p>Black Widow Cambered Bar (1) 38LBS</p>
            <p>BandBell Earthquake Bar (1) 6LBS</p>
          </li>
        </ul>
        <ul>
        <h3 className='p-1 pb-2 font-bold'>Strongman</h3>
          <li>
            <p>Stone Loading Platform (4 Heights)</p>
            <p>Rogue Fitness Adjustable Jerk Blocks</p>
            <p>Rogue Fitness Strongman Yoke 185LBS</p>
            <p>Atlas Stones - 100LBS to 400LBS</p>
            <p>Mike Bartos 20" Stone of Steel 135LBS</p>
            <p>Mike Bartos 17" Stone of Steel 110LBS</p>
            <p>Mike Bartos 12" Circus Dumbbell 139LBS</p>
            <p>Mike Bartos 10" Circus Dumbbell 75LBS</p>
            <p>Mike Bartos Power Keg 130LBS</p>
            <p>Mike Bartos DeadSled 150LBS</p>
            <p>MBPC Farmer Walk Handles 68LBS</p>
            <p>Mike Bartos 12" BOSS Log 230LBS</p>
            <p>Titan Fitness Strongman Log 10" 75LBS</p>
            <p>Rogue Fitness Log 8" 51LBS</p>
            <p>Rogue Fitness Log 12" 130LBS</p>
            <p>Rogue Fitness Axle 25LBS</p>
            <p>Strong Sand Bags 100LBS, 150LBS, 200LBS, 250LBS, 300LBS, 400LBS</p>
            <p>Elite FTS Farmer Carry Handles (20lbs)</p>
            <p>Titan Fitness Viking Press Attachment</p>
            <p>Titan Fitness Hussafell 110LBS</p>
            <p>Mouser Block</p>
            <p>Black Widow Trap Bar 35LBS</p>
            <p>Frame Carry</p>
            <p>Tires(250LBS and 550LBS)</p>
          </li>
        </ul>
        <ul>
        <h3 className='p-1 pb-2 font-bold'>Racks, Benches, Platforms</h3>
          <li>
            <p>Powerlifting Monolift (2)</p>
            <p>Ghost Combo Rack (2)</p>
            <p>Elite FTS Competition Combo Rack (2)</p>
            <p>Rogue Fitness Combo Rack (2)</p>
            <p>Wall Rigs (3)</p>
            <p>Rogue Fitness Monster Lite Rack (4)</p>
            <p>Elite FTS National Competition Bench</p>
            <p>4x8 Deadlift Platform with Band Pegs (6)</p>
            <p>Elite FTS Adjustable 0-90 Bench (2)</p>
            <p>Monster Utility Benches (2)</p>
          </li>
        </ul>
        <ul>
        <h3 className='p-1 pb-2 font-bold'>Strength Equipment and Weights</h3>
          <li>
            <p>Kabuki Strength Boomstick</p>
            <p>Elite FTS Bands Full Set (2)</p>
            <p>Black Widow 5/8" Chains (6)</p>
            <p>TRX Suspension System</p>
            <p>Rogue Fitness Dip Station</p>
            <p>Rogue Fitness Landmine</p>
            <p>DC Blocks (8)</p>
            <p>Deadlift Jack (3)</p>
            <p>Chalk Bowl and Chalk (2)</p>
            <p>Ammonia</p>
            <p>Rumble Roller</p>
            <p>Tiger Tail Roller</p>
            <p>Acumobility Level 2 Ball (2)</p>
            <p>Slingshot Hip Circle</p>
            <p>Slingshot Mad Boar</p>
            <p>Slingshot Knee Wraps</p>
            <p>Slingshot Wrist Wraps</p>
          </li>
        </ul>
        <ul>
        <h3 className='p-1 pb-2 font-bold'>Accessories, Mobility, and Misc</h3>
          <li>
            <p>Kabuki Strength Boomstick</p>
            <p>Elite FTS Bands Full Set (2)</p>
            <p>Black Widow 5/8" Chains (6)</p>
            <p>TRX Suspension System</p>
            <p>Rogue Fitness Dip Station</p>
            <p>Rogue Fitness Landmine</p>
            <p>DC Blocks (8)</p>
            <p>Deadlift Jack (3)</p>
            <p>Chalk Bowl and Chalk (2)</p>
            <p>Ammonia</p>
            <p>Rumble Roller</p>
            <p>Tiger Tail Roller</p>
            <p>Acumobility Level 2 Ball (2)</p>
            <p>Slingshot Hip Circle</p>
            <p>Slingshot Mad Boar</p>
            <p>Slingshot Knee Wraps</p>
            <p>Slingshot Wrist Wraps</p>
          </li>
        </ul>
        <ul>
        <h3 className='p-1 pb-2 font-bold'>Machines</h3>
          <li>
            <p>Kabuki Strength Boomstick</p>
            <p>Elite FTS Bands Full Set (2)</p>
            <p>Black Widow 5/8" Chains (6)</p>
            <p>TRX Suspension System</p>
            <p>Rogue Fitness Dip Station</p>
            <p>Rogue Fitness Landmine</p>
            <p>DC Blocks (8)</p>
            <p>Deadlift Jack (3)</p>
            <p>Chalk Bowl and Chalk (2)</p>
            <p>Ammonia</p>
            <p>Rumble Roller</p>
            <p>Tiger Tail Roller</p>
            <p>Acumobility Level 2 Ball (2)</p>
            <p>Slingshot Hip Circle</p>
            <p>Slingshot Mad Boar</p>
            <p>Slingshot Knee Wraps</p>
            <p>Slingshot Wrist Wraps</p>
          </li>
        </ul>
      
      </div>
      </div>
      
      </>
  )
}

export default Facility