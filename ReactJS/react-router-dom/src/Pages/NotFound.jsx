import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen w-full flex-col gap-y-4">
        <h1 className="text-9xl font-bold">404</h1>
        <h1 className="text-9xl font-bold">Page Not Found</h1>
        <Link to="/">
          <button className="bg-black text-white px-4 py-2 text-center">
            Go to Homepage
          </button>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
