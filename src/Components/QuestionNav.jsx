/* eslint-disable react/prop-types */
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { RiFullscreenFill, RiRestartLine } from "react-icons/ri";

function QuestionNav({ question, setQuestion, full, setFull }) {
  function handleNext() {
    setQuestion(question + 1);
  }
  function handlePrev() {
    if (question <= 1) return;
    else setQuestion(question - 1);
  }
  return (
    <div className="w-[75%] sm:w-[65%] md:w-[55%] lg:w-[45%]  flex justify-between items-center mx-auto mt-5 transition-all">
      <RiRestartLine
        className="text-[#072a71] text-2xl cursor-pointer"
        onClick={() => setQuestion(1)}
      />
      {question <= 10 && (
        <div className="flex items-center gap-3 md:gap-6">
          <button
            className="p-2 bg-gradient-to-b from-[#072a71] to-[#154cbc] rounded-full"
            onClick={handlePrev}
          >
            <FaLessThan className="text-slate-200 text-xl" />
          </button>
          <p className="text-lg font-semibold">
            {question <= 9 ? `0${question}` : question}/10
          </p>
          <button
            className="p-2 bg-gradient-to-b from-[#072a71] to-[#154cbc] rounded-full"
            onClick={handleNext}
          >
            <FaGreaterThan className="text-slate-200 text-xl" />
          </button>
        </div>
      )}
      <RiFullscreenFill
        className="text-[#072a71] text-2xl cursor-pointer"
        onClick={() => setFull(!full)}
      />
    </div>
  );
}

export default QuestionNav;
