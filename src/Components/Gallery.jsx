import React from 'react'
import squat_facility_female from '../Components/assets/squat-facility-female.jpeg'
import loading_plates from '../Components/assets/loading-plates-facility.jpeg'
import mono_squat from '../Components/assets/mono-squat-facility.jpeg'
import coaching_facility from '../Components/assets/coaching-facility.jpeg'
import back_squat from '../Components/assets/back-squat-facility.jpeg'
import strongman_facility from '../Components/assets/strongman_facility.jpeg'
import woman_deadlift from '../Components/assets/woman-deadlift.jpeg'
import youth_boxer from '../Components/assets/youth-boxer.jpeg'
import woman_deadlift_setup from '../Components/assets/woman-deadlift-setup.jpeg'
import stone_pit from '../Components/assets/stone-pit-strongman.jpeg'
import bench_arch from '../Components/assets/bench-arch.jpeg'
import yoke_walk from '../Components/assets/yoke-walk-strongman.jpeg'
import dumbbell_row from '../Components/assets/dumbbell-row.jpeg'
import strongman_stone from '../Components/assets/strongman-stone.jpeg'
import lbs_plates from '../Components/assets/lbs_plates.jpeg'

const Gallery = () => {

    const data = [
        {
            id:1,
            imgSrc: squat_facility_female,
        },
        {
            id:2,
            imgSrc: loading_plates,
        },
        {
            id:3,
            imgSrc: mono_squat,
        },
        {
            id:4,
            imgSrc: coaching_facility,
        },
        {
            id:5,
            imgSrc: back_squat,
        },
        {
            id:6,
            imgSrc: strongman_facility,
        },
        {
            id:7,
            imgSrc: woman_deadlift,
        },
        {
            id:8,
            imgSrc: youth_boxer,
        },
        {
            id:9,
            imgSrc: woman_deadlift_setup,
        },
        {
            id:10,
            imgSrc: stone_pit,
        },
        {
            id:11,
            imgSrc: bench_arch,
        },
        {
            id:12,
            imgSrc: yoke_walk,
        },
        {
            id:13,
            imgSrc: dumbbell_row,
        },
        {
            id:14,
            imgSrc: strongman_stone,
        },
        {
            id:15,
            imgSrc: lbs_plates,
        }
    ]

    console.log(data)

  return (
    <>
  
    <div className='w-full h-full flex flex-wrap justify-center'>
    {data.map((item, index)=>{
        return (
            <>
    
            <div className=''>
            <div key={index}>
             <img className='w-[32vw] p-2'src={item.imgSrc} alt='facility_images'/>
            </div>
            </div>
            </>
        )
    })}
    </div>
   
    </>
  )
}

export default Gallery