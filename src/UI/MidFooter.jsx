import { IoMdAdd } from "react-icons/io";
function MidFooter() {
  return (
    <div className="flex justify-around sm:justify-between mt-16 px-0 sm:px-4 md:px-8 lg:px-16">
      <Part1 />
      <Part2 />
    </div>
  );
}
function Part1() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-fit p-2 py-[13px] md:py-[15px] lg:py-[18px] rounded-full shadow-[0_0_30px_-5px_#0A2A9F]">
        <img src="logo1.png" className="w-[5vw] md:w-[6vw] lg:w-[4vw]" />
      </div>
      <div>
        <p className="text-xs md:text-sm font-medium text-slate-600">
          Published by
        </p>
        <p className="text-[#072a71] text-base md:text-xl font-semibold">
          Hygge<span className="text-xl md:text-2xl font-bold">X</span>
        </p>
      </div>
    </div>
  );
}
function Part2() {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <div className="w-fit p-1 rounded-full bg-gradient-to-b from-[#072a71] to-[#154cbc]">
        <IoMdAdd className="text-slate-200 text-xl sm:text-2xl md:text-3xl" />
      </div>
      <p className="font-medium text-[#072a71] text-base md:text-lg md:font-semibold">
        Create Flashcard
      </p>
    </div>
  );
}

export default MidFooter;
