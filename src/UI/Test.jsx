import { useGSAP } from "@gsap/react";
import Questions from "../Components/Questions";
import gsap from "gsap";

function Test() {
  useGSAP(() => {
    gsap.from("#test", {
      scale: 0,
      opacity: 0,
      ease: "power1.in",
    });
  }, []);
  return (
    <div id="test">
      <Questions>Test</Questions>
    </div>
  );
}

export default Test;
