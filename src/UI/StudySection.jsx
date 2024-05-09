import { useState } from "react";
import Questions from "../Components/Questions";
import QuestionNav from "../Components/QuestionNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function StudySection() {
  const [question, setQuestion] = useState(1);
  const [full, setFull] = useState(false);
  useGSAP(() => {
    gsap.from("#study", {
      scale: 0,
      opacity: 0,
      ease: "power1.in",
    });
  }, []);
  return (
    <div id="study">
      {question === 1 && <Questions full={full}>9 + 6 + 7x - 2x - 3</Questions>}
      {question === 2 && <Questions full={full}>Question 2</Questions>}
      {question === 3 && <Questions full={full}>Question 3</Questions>}
      {question === 4 && <Questions full={full}>Question 4</Questions>}
      {question === 5 && <Questions full={full}>Question 5</Questions>}
      {question === 6 && <Questions full={full}>Question 6</Questions>}
      {question === 7 && <Questions full={full}>Question 7</Questions>}
      {question === 8 && <Questions full={full}>Question 8</Questions>}
      {question === 9 && <Questions full={full}>Question 9</Questions>}
      {question === 10 && <Questions full={full}>Question 10</Questions>}
      {question === 11 && <Questions full={full}>Finshed Quiz</Questions>}
      <QuestionNav
        question={question}
        full={full}
        setFull={setFull}
        setQuestion={setQuestion}
      />
    </div>
  );
}

export default StudySection;
