import { useGSAP } from "@gsap/react";
import Questions from "../Components/Questions";
import gsap from "gsap";

function Others() {
  useGSAP(() => {
    gsap.from("#other", {
      scale: 0,
      opacity: 0,
      ease: "power1.in",
    });
  }, []);
  return (
    <div id="other">
      <Questions>Others</Questions>
    </div>
  );
}

export default Others;
