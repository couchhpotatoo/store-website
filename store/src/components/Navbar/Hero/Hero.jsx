import React from 'react';
import Headphone from "../../../assets/icons/headphone.png";
import Headphone2 from "../../../assets/icons/headphone2.png";
import Headphone3 from "../../../assets/icons/headphone3.png";

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
          <h1 className="text-4xl lg:text-6xl font-bold">{activeData.title}</h1>
          <p className="text-sm text-white/80 leading-relaxed">{activeData.subtitle}</p>
          <button
            style={{ backgroundColor: activeData.bgColor }}
            className="px-6 py-3 rounded-sm font-medium w-fit"
          >
            Buy and Listen
          </button>

          <div className="flex items-center gap-4 mt-12">
            <div className="w-16 h-[1px] bg-white" />
            <p className="uppercase text-sm whitespace-nowrap">
              Top headphones for you
            </p>
            <div className="w-16 h-[1px] bg-white" />
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            {headphonesData.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveData(item)}
                className="flex flex-col items-center cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-20 hover:scale-105 transition"
                />
                <p className="text-sm font-semibold mt-2">{item.price}</p>
                <p className="text-xs text-white/70">{item.model}</p>
              </div>
            ))}
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
