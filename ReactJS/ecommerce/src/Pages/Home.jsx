
import Hero from "../Components/Home/Hero";
import DetailsBar from "../Components/Home/DetailsBar";
import CategorySection from "../Components/Home/CategoryBar";
import ProductBar from "../Components/ProductBar";
import Offer from "../Components/Home/Offer";
import DealBar from "../Components/Home/DealBar";
import DiscountBar from "../Components/Home/DiscountBar";
import Newsletter from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <DetailsBar />
      <CategorySection />
      <ProductBar />
      <Offer />
      <DealBar />
      <DiscountBar />
      <Newsletter />
    </>
  );
};

export default Home;
