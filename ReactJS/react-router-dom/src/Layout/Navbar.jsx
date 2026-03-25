import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-10">
        <nav className="bg-black/50 backdrop-blur-sm text-white px-6 py-3 flex items-center justify-between fixed rounded-full w-[80%]">
          <h1 className="text-2xl font-bold">Company Name</h1>

          <ul className="flex items-center justify-between gap-x-4 text-lg font-medium">
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded-full transition-all duration-100">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded-full transition-all duration-100">
              <Link to="/product">Product</Link>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded-full transition-all duration-100">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded-full transition-all duration-100">
              <Link to="/contact">Contect Us</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
