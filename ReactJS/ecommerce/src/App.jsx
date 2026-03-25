import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
