import React from "react";

const ProductBar = () => {
  
  return (
    <>
      <section className="p-6 flex items-center justify-center">
        <div className="w-full ">
            <h3>Our Products</h3>
            <div>
                <h1>Our Top Seller Products</h1>
                <div>
                    <div className="px-3 py-1 border border-[#583101] font-medium text-md inline-block">All</div>
                    <div className="px-3 py-1 border border-[#583101] font-medium text-md inline-block">Woman</div>
                    <div className="px-3 py-1 border border-[#583101] font-medium text-md inline-block">Man</div>
                    <div className="px-3 py-1 border border-[#583101] font-medium text-md inline-block">Accessories</div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ProductBar;
