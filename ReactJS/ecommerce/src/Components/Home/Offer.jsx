import { ArrowUpRight } from "lucide-react";
import React from "react";

const Offer = () => {
  return (
    <>
      <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        {/* image */}
        <div>
          <img src="/images/image2.png" alt="offer image" />
        </div>
        {/* text  */}
        <div className="px-6 py-2 flex flex-col justify-center items-start">
          <p className="text-md font-normal py-10">Limited Time Offer</p>
          <h1 className="text-4xl font-bold leading-normal py-3">
            25% Off All Fashion
            <br />
            Favorites - Limited Time !
          </h1>
          <p className="pt-10 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            modi maiores, sequi accusamus ducimus
            <br />
            elite.Asperint cori null dicye adipiscit.
          </p>

          <button className="flex items-center justify-center text-white px-6 py-3 gap-x-4 active:scale-95 active:rounded-md bg-[#582f0e]">
            Shop Now <ArrowUpRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Offer;
