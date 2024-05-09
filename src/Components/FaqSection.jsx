import { MdOutlineKeyboardArrowDown } from "react-icons/md";

/* eslint-disable react/prop-types */
function FaqSection({ children }) {
  return (
    <div className="bg-gradient-to-tr to-[#061b92] from-[#2182ee] p-[2px] rounded-lg">
      <div className="flex px-2 py-3 items-center justify-between bg-white rounded-lg">
        <p className="font-medium">{children}</p>
        <MdOutlineKeyboardArrowDown className="text-3xl" />
      </div>
    </div>
  );
}

export default FaqSection;
