import { Outlet } from "react-router-dom";
import MidSectionNav from "./Components/MidSectionNav";
import HeadSection from "./UI/HeadSection";
import Navbar from "./UI/Navbar";
import MidFooter from "./UI/MidFooter";
import Faq from "./UI/Faq";
function HomePage() {
  return (
    <div>
      <Navbar />
      <HeadSection />
      <MidSectionNav />
      <Outlet />
      <MidFooter />
      <Faq />
    </div>
  );
}

export default HomePage;
