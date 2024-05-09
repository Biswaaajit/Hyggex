import LinkSection from "./LinkSection";

function MidSectionNav() {
  return (
    <div className="nav w-fit  mx-auto space-x-2">
      <LinkSection to="/study" name="Study" />
      <LinkSection to="/quiz" name="Quiz" />
      <LinkSection to="/test" name="Test" />
      <LinkSection to="/game" name="Game" />
      <LinkSection to="/others" name="Others" />
    </div>
  );
}

export default MidSectionNav;
