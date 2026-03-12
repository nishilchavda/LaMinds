import { ArrowUpRight } from "lucide-react";

const ProductCard = ({data}) => {
  return (
    <>
      <div className="card bg-white rounded-4xl p-2 w-full max-w-sm overflow-hidden shadow-2xl relative">
        <div className="absolute z-10 w-86 top-5 left-5">
          <div className=" top flex items-center justify-between ">
            <div className="font-bold text-sm bg-white/20 text-white p-2 rounded-full shadow-2xl">{data.tag}</div>
            <img
              src={data.avatar}
              alt=""
              className="rounded-full w-10 h-10 bg-white"
            />
          </div>
        </div>
        <img
          className="w-full h-84 object-cover rounded-4xl "
          src={data.image}
          alt=""
        />

        <div className="content p-3">
          <h1 className="font-bold text-2xl ">{data.title}</h1>
          <p className="font-bold text-xl text-gray-400 mb-2">
            {data.subtitle}
          </p>
          <p className="text-gray-400 font-medium mb-2 text-md">
            {data.description}
          </p>

          <div className="price flex items-center justify-between mt-2">
            <h1 className="rounded-full bg-gray-300 font-bold px-3 py-2">
              ${data.price}
            </h1>
            <div className="flex gap-2 items-center bg-black text-white rounded-full px-3 py-2">
              <button className="font-bold">Buy Now</button>
              <ArrowUpRight
                className="w-5 h-5 bg-white text-black rounded-full"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
