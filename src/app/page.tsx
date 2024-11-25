import NavBar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Features from "./components/Feature/Features";
import Expertise from "./components/Experitise/Expertise";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Faqs from "./components/Faqs/Faqs";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="grid grid-column-[20px_1fr_20px] relative items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
      <Herosection />
      <Features />
      <Expertise/>
      <Testimonials />
      <Pricing/>
      <Faqs />
      <Blog />
      <Footer />
    </div>
  );
}
