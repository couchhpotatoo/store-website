import React from 'react';
import Headphone from "../../assets/icons/headphone.png";
import Headphone2 from "../../assets/icons/headphone2.png";
import Headphone3 from "../../assets/icons/headphone3.png";
import { UpdateFollower } from 'react-mouse-follower';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
const fadeUp=(delay)=>{
  return {
    hidden:{
      opacity:0,
      y:100,
      scale:0.5,
    },
    show:{
      opacity:1,
      y:0,
      scale:1,
      transition:{
duration:0.5,
delay:delay,
ease:easeInOut,
      },
    },
    exit:{
      opacity:0,
      y:50,
      scale:0.5,
      transition:{
        duration:0.2,
          ease:easeInOut,
        
      },
    },
  };
};

const headphonesData = [
  {
    id: 1,
    image: Headphone,
    title: "Headphones Wireless",
    subtitle:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    price: "$199",
    model: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",

    price: "$199",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    price: "$199",
    model: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphonesData[0]);
  const handleActiveData=(data)=>{
    setActiveData(data)
  }
  return (
    <section className="bg-brandDark text-white font-varela w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-gray-900">
        {/* LEFT */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 space-y-6">
          
         <AnimatePresence mode="wait">
          <UpdateFollower mouseOptions={{
             backgroundColor: 'white',
              zIndex: 9999,
              followSpeed: 0.5    ,
              rotate:-720,
             
             mixBlendMode:"difference",
             scale:10,
           }}>

          
          <motion.h1 key={activeData.id} variants={fadeUp(0.2)} inital="hidden" animate="show" exit="exit"  className="text-4xl lg:text-6xl font-bold" >{activeData.title}</motion.h1>
           </UpdateFollower></AnimatePresence>
           <AnimatePresence mode="wait">
            <UpdateFollower mouseOptions={{
             backgroundColor: 'white',
              zIndex: 999,
              rotate:-720,
             followSpeed: 2,
             mixBlendMode:"difference",
             scale:10,
           
           } }>

          <motion.p key={activeData.id} variants={fadeUp(0.3)} inital="hidden" animate="show" exit="exit" className="text-sm text-white/80 leading-relaxed">{activeData.subtitle}</motion.p>
          </UpdateFollower></AnimatePresence>
        <AnimatePresence mode="wait">
           <UpdateFollower
            mouseOptions={{
             backgroundColor: 'white',
              zIndex: 9999,
              rotate:-720,
             followSpeed: 0.5,
             mixBlendMode:"difference",
             scale:6,
             backgroundElement:<div>
                <img src={activeData.image}/>
             </div>,
             }}>
            <motion.button key={activeData.id} variants={fadeUp(0.6)} inital="hidden" animate="show" exit="exit"
            style={{ backgroundColor: activeData.bgColor }}
            className="px-6 py-3 rounded-sm font-medium w-fit"
          >
            Buy and Listen
          </motion.button>
           </UpdateFollower>
           
         </AnimatePresence>
         

          <div className="flex items-center gap-4 mt-12">
            <div className="w-16 h-[1px] bg-white" />
            <p className="uppercase text-sm whitespace-nowrap">
              Top headphones for you
            </p>
            <div className="w-16 h-[1px] bg-white" />
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            {headphonesData.map((item) => {
              return(
               
              <div key={item.id} onClick={() => handleActiveData(item)}
                className="flex flex-col items-center cursor-pointer">
              
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-20 hover:scale-105 transition"
                />
                <p className="text-sm font-semibold mt-2">{item.price}</p>
                <p className="text-xs text-white/70">{item.model}</p>
              </div>
)})}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-end justify-center">
          <img
            src={activeData.image}
            alt="Headphone"
            className="w-[300px] md:w-[400px] xl:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
