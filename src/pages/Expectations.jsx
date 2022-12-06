import React from 'react'
import helping_hand from '../Components/assets/helping-hand.jpeg'
import powerlifting_etiquette from '../Components/assets/powerlifting-etiquette.jpeg'
import strongman_etiquette from '../Components/assets/strongman_etiquette.jpeg'
import boxing_etiquette from '../Components/assets/boxing-etiquette.jpeg'

const Expectations = () => {
  return (
    <>
    <div className='w-full h-full bg-gray-200'>
       <h1 className='uppercase font-bold text-center p-4 text-black'>Surge Gym Expectations</h1>
      
       <div className='flex w-full h-full md:flex-row flex-col'>
        <div className='w-full h-full'>
            <img className='w-full h-full pb-5' src={helping_hand} alt='helping-eachother'/>
        </div>
        <div className='w-full h-full text-center text-black justify-center items-center'>
        <p className='md:pt-1 lg:pt-10 text-[2.5vmin]'>We understand it can feel overwhelming to join a powerlifting gym,
             especially if you're new to the sport, 
             so we've created this resource to help when visiting!
         </p>
        <p className='lg:pt-10 text-[2.5vmin]'>
            Additionally, we have included further points regarding the strongman
            and boxing areas for those interested in trying out something different!
        </p>
        <p className='lg:pt-10 text-[2.5vmin]'>
        When in doubt feel free to ask someone around you. 
        Everyone is super friendly and helpful! Otherwise you can reach Sergio directly by calling or texting <br></br> <a className='text-blue-500 no-underline' href ='630-335-1748'>630-335-1748</a>
        </p>
        </div>
        </div>
      
    </div>
  
    <div className='h-full w-full bg-gray-200'>
        <h1 className='text-center font-bold text-[4vmin] p-5 uppercase'>Powerlifting Etiquette</h1>
        <div className='flex w-full h-full flex-col'>
        <div className='w-full h-full'>
          <img className='w-full' src={powerlifting_etiquette} />
        </div>
        <div className='w-full h-full text-center pb-2 pt-4'>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Barbells</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>There are three special types of bars in powerlifting. The squat bar, power bar, and deadlift bar. A power bar is primarily used for bench but can also be used for squats and deadlifts. All bars are color coded with a chart in the gym for easy use!</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Combo Racks</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Combo racks can transform from bench racks into squat racks and include a lever for quick height adjustments. Please return to the bench once done if being used for squats.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>MonoLifts</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Monolifts primary use is for squats and features a hydraulic system and hook system. If you are unsure on how to use, please ask before using. Priority should always go to those who don't walk out their squats.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Video Recording</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>It is common for lifters to film their lifting to review later. Please be aware of stepping in front of lifters when they are completing a lift as it can be distracting and potentially block video recording.</p></li>
          </ul>
         <h3 className='font-bold text-[2.7vmin] pb-2'>SPOTTING AND LOADING</h3>
          <ul>
            <li><p className='text-[2.5vmin] pb-3'>Spotting and loading are an integral part of powerlifting. Please do not be afraid to ask others for help. In return, it will also be expected you do the same so it's important to learn by asking.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Community</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>As a private gym we really pride ourselves in having a community that supports and helps each other. Please don't be afraid to introduce yourself to others!</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Competitions</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>We host a number of competitions per year and are always looking for volunteers. Volunteering is a great way to not only meet new people but also give back to the community.</p> </li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Community</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>As a private gym we really pride ourselves in having a community that supports and helps each other. Please don't be afraid to introduce yourself to others!</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>KILO PLATES</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Kilo plates are specially designed for competition use and should only be used for squat, bench, and deadlifts. There is a limited amount so priority should always go to those in meet prep.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Sharing Equipment</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>While we boast one of the largest gyms in the nation, it can still get busy. Working in with others is highly encouraged and all competitive racks are able to accommodate multiple lifters.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Chalk and baby powder</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>There is chalk readily available in all chalk bowls you can use, please try to keep powder contained. Additionally baby powder can be used for deadlifts. Use the blue tarp assigned for this.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Ego Lifting</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Please do not ego lift. We have people from all levels. Beginner to World Class. No one cares how much you lift, just do your best and you'll fit right in!</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Equipment Clean Up</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Always return equipment. We do not have staff to clean up after our members. If anything breaks also please let us know. We won't be mad at you and would rather fix the issue!</p></li>
          </ul>
          </div>
          
        </div>
        </div>
        <div className='h-full w-full bg-gray-100'>
        <h1 className='text-center font-bold text-[4vmin] p-5 uppercase'>Strongman Etiquette</h1>
        <div className='flex w-full h-full flex-col'>
        <div className='w-full h-full'>
          <img className='w-full' src={strongman_etiquette} />
        </div>
        <div className='w-full h-full text-center pb-2 pt-4'>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Concrete Stones</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3'>Concrete stones should only be used in the designated pit. This is the only area where tacky is allowed. Please do not get tacky anywhere else outside of this area.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Stones of Steel</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3'>Stones of steel should only be used with sticky spray if you need additional grip. You can use the designated platforms or Yoke to throw them over the bar as needed.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Sandbags</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3'>Sandbags should always be returned and properly organize since they can be some of the most difficult to move around. If any of them break please help sweep up and let us know!</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Silencer Pads</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3'>There are red silencer pads available and should be used when dropping equipment from a height to keep them from breaking such as logs, stones of steel, kegs, etc. </p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Power Keg</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3'>The loadable power keg should always be fastened properly before use in order to ensure the welding doesn't break on the inside.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Strongman Logs</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3'>Please be sure to return all logs back to their proper place once done to keep this area clear for everyone.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pl-2 pt-3 text-left'>Equipment Maintence</h3>
        <ul>
            <li><p className='text-[2.3vmin] pb-3 text-left'> This is one of the areas that sees the most damage. <br></br>Please help us take care of the equipment and if anything breaks please let us know!</p></li>
          </ul>
        </div>
        
      </div>
      </div>
      <div className='h-full w-full bg-gray-200'>
        <h1 className='text-center font-bold text-[4vmin] p-5 uppercase'>Boxing Etiquette</h1>
        <div className='flex w-full h-full flex-col'>
        <div className='w-full h-full'>
          <img className='w-full' src={boxing_etiquette} />
        </div>
        <div className='w-full h-full text-center pb-2 pt-4'>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Boxing Ring</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Always make sure you are using proper footwear before entering the ring. Street shoes that can stain the floor canvas should be avoided.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Coaches and Class Times</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Members have access to all boxing equipment but be sure to respect coaches and class times. Typically these are run on weekday evenings from 6 PM to 8 PM. </p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Sparring</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Sparring should always be done with someone available to supervise and proper equipment for both participants. This includes headgear, sparring gloves, mouth guard, and a groin protector.</p></li>
          </ul>
        <h3 className='font-bold text-[2.7vmin] pb-2'>Boxing Gear</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3'>Please ask before borrowing any gear in the boxing area. Some of it belongs to our coaches and may not be available for public use.</p></li>
          </ul>
          <h3 className='font-bold text-[2.7vmin] pl-2 pt-3 text-left'>Important Note:</h3>
          <ul>
            <li><p className='text-[2.3vmin] pb-3 text-left'>Boxing should never be used as an outlet to hurt someone else. <br></br> In the gym we are here to train and help each other. <br></br> If you wish to compete we can set that up for you!</p></li>
          </ul>
          </div>
        </div>
        </div>
    </>
  )
}

export default Expectations