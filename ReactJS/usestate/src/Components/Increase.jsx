import { useState } from "react";

const Increase = () => {

  const [Number, setNumber] = useState(0);

  // Number (first variable) ==> Read Only Value (you can't this variable value)
  // setNumber (second variable) ==> write only value (if you want to change Number variable's value use setNumber)

  function IncreaseNum(){
    setNumber(Number+1);
  }

  function DecreaseNum(){
    if(Number > 0 ) return setNumber(Number-1);
   
  }

  function FiveIncreaseNum(){
    setNumber(Number+5);
  }

  function FiveDecreaseNum(){
    if(Number >= 5 ) return setNumber(Number-5);
  }

  function Reset(){
    setNumber(0)
  }

  return (
    <>
      <section>
        <h1 className="text-center text-4xl font-extrabold mt-10">
          Usestate : Change Data ( Variable ne difine karava mate and value
          change karva mate)
        </h1>
        <p className="text-center text-5xl font-bold mt-5">
          Increase And Decrease Number
        </p>
        <div className="w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-2xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10">
          {Number}
        </div>
        <div className="flex items-center justify-center mt-10 gap-6">
          <button className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-green-600" onClick={IncreaseNum}>
            Increase
          </button>
          <button className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-red-600" onClick={DecreaseNum}>
            Decrease
          </button>
          <button className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-green-600" onClick={FiveIncreaseNum}>
            5+ Increase
          </button>
          <button className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-red-600" onClick={FiveDecreaseNum}>
            5- Decrease
          </button>
          <button className="bg-[#555] px-8 py-4 rounded-xl font-bold active:scale-95 active:bg-red-600" onClick={Reset}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
};

export default Increase
;
