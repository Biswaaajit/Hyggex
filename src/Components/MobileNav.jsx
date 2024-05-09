/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import Logo from "./Logo";
import Para from "./Para";
import gsap from "gsap";

function MobileNav({ setShow }) {
  useGSAP(() => {
    gsap.from("#mob", {
      x: -400,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="w-full h-screen  absolute top-0 z-40 flex " id="mob">
      <div className="w-[65%] md:w-[40%] lg:w-[30%] h-full bg-blue-300">
        <div className="flex justify-center items-center mt-4 relative">
          <Logo />
          <button
            onClick={() => setShow(false)}
            className="absolute right-2 bg-slate-300 p-2 py-0.5 rounded-full"
          >
            X
          </button>
        </div>
        <div className="mt-12 divide-y-2 divide-slate-500 px-2">
          <Para>Home</Para>
          <Para>Flashcard</Para>
          <Para>Contact</Para>
          <Para>FAQ</Para>
          <div className="px-4 py-3 text-right">
            <button className=" bg-gradient-to-b from-[#06286E] to-[#164EC0] text-slate-100 px-4 py-1.5 rounded-xl">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="grow bg-transparent" onClick={() => setShow(false)}></div>
    </div>
  );
}

export default MobileNav;
