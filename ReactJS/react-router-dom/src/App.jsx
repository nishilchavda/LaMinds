import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import Collactions from "./Pages/Collactions";
import NotFound from "./Pages/NotFound";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/collection" element={<Collactions />}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      
      <Footer />
    </>
  );
};

export default App;
