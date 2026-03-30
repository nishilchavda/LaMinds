import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Layout/Footer";
import Shop from "./Pages/Shop";
import Collection from "./Pages/Collection";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/shop/:collection" element={<Shop/>}></Route>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
