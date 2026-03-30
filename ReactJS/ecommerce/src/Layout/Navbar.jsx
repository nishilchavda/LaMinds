import { Heart, Home, Menu, Search, ShoppingBag, User2, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  return (
    <>
      <section>
        {/* Desktop Navbar */}
        <nav className="bg-white px-8 py-4 w-full h-auto hidden md:flex items-center justify-between">
          {/* logo */}
          <div className="flex justify-center items-center gap-x-2">
            <img
              src="https://png.pngtree.com/png-clipart/20240621/original/pngtree-symbolic-significance-smart-logo-solutions-for-contributor-desig-png-image_15379534.png"
              alt="logo"
              className="w-12 object-cover"
            />
            <h1 className="font-bold text-xl">Shopping.</h1>
          </div>
          {/* Links */}
          <ul className="flex items-center justify-center gap-x-4 text-lg font-normal">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-x-6">
            <Search strokeWidth={1} />
            <Heart strokeWidth={1} />
            <ShoppingBag strokeWidth={1} />
            <User2 strokeWidth={1} />
          </div>
        </nav>

        {/* Mobile and Tablet Navbar */}
        <nav className="bg-white px-8 py-4 w-full h-auto md:hidden flex items-center justify-between">
          {/* logo */}
          <div className="flex justify-center items-center gap-x-2">
            <img
              src="https://png.pngtree.com/png-clipart/20240621/original/pngtree-symbolic-significance-smart-logo-solutions-for-contributor-desig-png-image_15379534.png"
              alt="logo"
              className="w-12 object-cover"
            />
            <h1 className="font-bold text-xl">Shopping.</h1>
          </div>

          <div className="flex items-center justify-center gap-x-6">
            <Heart strokeWidth={1} />
            <ShoppingBag strokeWidth={1} />
            <User2 strokeWidth={1} />
            <Menu
              strokeWidth={1}
              className="active:scale-95 active:text-amber-600"
              onClick={() => {
                setShowMenu(true);
              }}
            />
          </div>
        </nav>

        {/* Side Bar/ Pannel */}

        {ShowMenu && (
          <section className="md:hidden relative flex justify-end">
            <div className="w-[70%] z-200 bg-white/35 backdrop-blur-sm h-screen fixed top-0 flex items-center justify-center">
              {/* Close Button  */}
              <div className="absolute top-4 right-4">
                <X
                  className="w-10 h-10"
                  strokeWidth={3}
                  onClick={() => {
                    setShowMenu(false);
                  }}
                />
              </div>

              {/* Links */}
              <ul className="flex flex-col items-center justify-center gap-y-10 text-3xl font-semibold">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/collection">Collection</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Navbar;
