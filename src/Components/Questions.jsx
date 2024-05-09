import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

/* eslint-disable react/prop-types */
function Questions({ children, full }) {
  const [speaker, setSpeaker] = useState(true);

  return (
    <div
      className={`${
        full
          ? "w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
          : "w-[80%]  sm:w-[70%] md:w-[60%] lg:w-[50%] h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh]"
      }  bg-gradient-to-tr to-[#061b92] from-[#2182ee] mx-auto  rounded-3xl flex flex-col p-2 mt-8 transition-all`}
    >
      <div className="flex justify-between items-center p-2">
        <FaRegLightbulb className="text-slate-200 text-[5vw] hover:text-yellow-300 sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] transition-all cursor-pointer" />
        <div className="w-fit" onClick={() => setSpeaker(!speaker)}>
          {speaker ? (
            <FiVolume2 className="text-slate-200 text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] transition-all cursor-pointer" />
          ) : (
            <FiVolumeX className="text-slate-200 text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] transition-all cursor-pointer" />
          )}
        </div>
      </div>
      <p className="w-fit mx-auto my-auto text-2xl font-medium text-slate-200 -translate-y-1/2">
        {children}
      </p>
    </div>
  );
}

export default Questions;
