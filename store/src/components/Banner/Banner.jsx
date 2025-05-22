import React from 'react'
import Headphone4 from "../../assets/icons/headphone4.png"
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import {fadeUp} from "../Services/Services"

const Banner = () => {
  return (
    <>
    <section> <div className='container py-14 grid grid-cols-1 md:grid-cols-2 space y-6 md:space-y-0 gap-12'>
        <div>
            <motion.img 
            initial={{opacity:0,x:-100,rotate:-180}}
            animate={{opacity:1,x:0,rotate:0}}
            transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
            src={Headphone4} alt="" className="w-[300px] md:w-[400px] " />
        </div>
{/* banner text*/}
<div className='flex flex-col justify-center'>
    <div className='text-center md:text-left'>
        <motion.h1 variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-3xl lg:text-4xl font-semibold font-poppins'>the Latest Headphones with the Latest Technology</motion.h1>
        <motion.p variants={fadeUp(0.9)} initial="hidden" whileInView="show"  className='py-6 px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</motion.p>
<UpdateFollower
     mouseOptions={{
        backgroundColor: 'white',
        zIndex: 9999,
        followSpeed: 1.5,
        mixBlendMode:"difference",
        scale:5,

        }}>
    <motion.button variants={fadeUp(1.5)} initial="hidden" whileInView="show" className='border-2 border-[#e33343] text-[#e33343] px-6 py-3 rounded-md hover:bg-[#e33343] hover:text-white'>Shop Now</motion.button>

</UpdateFollower>
    </div>
</div>



    </div>
    </section>
    </>
  )
}

export default Banner
