/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function LinkSection({ to, name }) {
  return (
    <NavLink
      className=" px-2 py-[5px] font-medium text-base md:text-lg"
      to={to}
    >
      {name}
    </NavLink>
  );
}

export default LinkSection;
