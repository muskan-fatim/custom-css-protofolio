import HeroSection from "./components/main";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative h-screen w-full ">
      
      <div className="relative z-10">
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
}
