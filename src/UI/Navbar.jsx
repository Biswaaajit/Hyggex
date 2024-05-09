import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Components/Logo";
import WindowNav from "../Components/WindowNav";
import MobileNav from "../Components/MobileNav";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="flex items-center justify-between py-2 px-3 mb-4 lg:px-10">
        <Logo />
        <div className="block md:hidden">
          <GiHamburgerMenu
            className="text-[30px] text-[#06286E]"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="hidden md:block">
          <WindowNav />
        </div>
      </div>
      {show && <MobileNav setShow={setShow} />}
    </div>
  );
}

export default Navbar;
