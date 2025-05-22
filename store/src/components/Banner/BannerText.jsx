import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

const BannerText = () => {
  return (
   <>
   <section  className='py-12 text-center font-varela'>
    <div className='container py-0 px-20'>
        <div className='bg-gradient-to-t bg-[#aa6d6b]/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
            <UpdateFollower mouseOptions={{
backgroundColor:"black",
zIndex:9999,
followSpeed:0.5,
mixBlendMode:"screen",
scale:10,

              }  }
            >
       <p className='font-bold text-4xl text-center max-w-[700px] mx-auto leading-normal '>
            Headphones with good quality and Affordable price
        </p></UpdateFollower>
        </div>

    </div>
   </section>
   </>
  )
}

export default BannerText
