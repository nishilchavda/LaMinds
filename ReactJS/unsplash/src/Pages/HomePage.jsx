import SideBar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Gallery from "../Components/Gallery";

const HomePage = () => {
  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-16 h-screen border-r border-r-gray-300">
          <SideBar />
        </div>

        <div className="w-full h-screen px-4 py-2">
          <Navbar />

          <section className="px-10 flex flex-col items-center justify-center mt-12 mx-auto">
            <HeroSection />
            <Gallery />
          </section>
        </div>
      </section>
    </>
  );
};

export default HomePage;
