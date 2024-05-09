import NavigationSection from "../Components/NavigationSection";

function HeadSection() {
  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-16 space-y-3 mt-8 mb-12">
      <NavigationSection />
      <h1 className="font-bold text-x md:text-2xl bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
        Relations and Functions ( Mathematics )
      </h1>
    </div>
  );
}

export default HeadSection;
