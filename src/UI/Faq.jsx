import { useReducer } from "react";
import FaqSection from "../Components/FaqSection";

const initial = { faq1: false, faq2: false, faq3: false };
function reducer(state, action) {
  switch (action.type) {
    case "show1":
      return { ...initial, faq1: !state.faq1 };
    case "show2":
      return { ...initial, faq2: !state.faq2 };
    case "show3":
      return { ...initial, faq3: !state.faq3 };
  }
}
function Faq() {
  const [faq, dispatch] = useReducer(reducer, initial);
  const { faq1, faq2, faq3 } = faq;
  return (
    <div className="space-y-3 md:space-y-6 my-12 mb-20 px-2 sm:px-4 md:px-8 lg:px-16">
      <h1 className="w-fit font-extrabold bg-gradient-to-b from-[#072a71] to-[#154cbc] bg-clip-text text-transparent text-4xl mb-5">
        FAQ
      </h1>
      <div className="space-y-4 px-1 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <div onClick={() => dispatch({ type: "show1" })}>
          <FaqSection>
            Can education flashcards be used for all age groups?
          </FaqSection>
          {faq1 && (
            <p className="mt-2 px-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          )}
        </div>
        <div onClick={() => dispatch({ type: "show2" })}>
          <FaqSection>How do education flashcards work?</FaqSection>
          {faq2 && (
            <p className="mt-2 px-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          )}
        </div>
        <div onClick={() => dispatch({ type: "show3" })}>
          <FaqSection>
            Can education flashcards be used for test preparation?
          </FaqSection>
          {faq3 && (
            <p className="mt-2 px-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
