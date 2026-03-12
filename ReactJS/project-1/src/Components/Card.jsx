import { MoveUpRight } from "lucide-react";

const Card = ({data}) => {
  return (
    <>
      <div className="card w-full h-auto max-w-sm bg-green-950 rounded-[10%] p-2 text-white shadow-2xl">
        <div className="bg-green-800 text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
          <img
            src={data.photo}
            alt="kiwi juice"
            className="w-full object-cover rounded-[10%] "
          />
          <span className="py-1">Free Delivery Untill 30/03/2026</span>
        </div>

        <div className="content flex justify-between items-center py-2 px-4">
          <div className="details ">
            <h2 className="text-green-50 text-xl font-bold">{data.juice_name}</h2>
            <div className="more pt-4 flex justify-between items-center gap-2">
              <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1">
                {data.ingredients[0]}
              </span>
              <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1">
                {data.ingredients[1]}
              </span>
              <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1">
                {data.ingredients[2]}
              </span>
            </div>
          </div>

          <div className="price border-l-2 border-green-400/20 pl-4">
            <h2 className="text-4xl font-bold">{data.price}$</h2>
            <p className="flex gap-1    items-center text-[14]">
              Order Now
              <span>
                <MoveUpRight className="w-3.5 h-3.5" strokeWidth={3}/>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
