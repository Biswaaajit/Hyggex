import { useGSAP } from "@gsap/react";
import Questions from "../Components/Questions";
import gsap from "gsap";

function Quiz() {
  useGSAP(() => {
    gsap.from("#quiz", {
      scale: 0,
      opacity: 0,
      ease: "power1.in",
    });
  }, []);
  return (
    <div id="quiz">
      <Questions>Quiz</Questions>
    </div>
  );
}

export default Quiz;
