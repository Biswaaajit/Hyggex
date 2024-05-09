import { GoHome } from "react-icons/go";

function NavigationSection() {
  return (
    <div className="flex flex-wrap space-x-[6px] items-center gap text-slate-600 font-medium">
      <GoHome className="text-2xl" />
      <span>&gt;</span>
      <p>Flashcard</p>
      <span>&gt;</span>
      <p>Mathemetics</p>
      <span>&gt;</span>
      <p className="text-[#06286E]">Relation and Function</p>
    </div>
  );
}

export default NavigationSection;
