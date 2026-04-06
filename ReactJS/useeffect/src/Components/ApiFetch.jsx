import { useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);

  // Method 1
  function Method1() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rawData) => {
        return rawData.json();
      })
      .then((data) => {
        return setData1(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  // Method 2
  let Method2 = async () => {
    try {
      let reponse = await fetch("https://dummyjson.com/products?limit=10");
      let data = await reponse.json();
      console.log(data.products);
      return setData2(data.products);
    } catch (e) {
      console.error(e);
    }
  };

  // Method 3
  let Method3 = async () => {
    let reponse = await axios.get("https://dummyjson.com/recipes?limit=10");
    setData3(reponse.data.recipes)
    // HTTPS methods:
    // GET ==> receive data only
    // POST ==> Send Data only
    // PATCH ==> Update Data
    // PUT ==> Update Data
    // DELETE ==> Delete Data
  };

  return (
    <>
      {/* method 1 */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6  bg-green-100">
        <h1 className="text-center text-3xl font-bold">
          Method 1: Fetch - then - then - catch
        </h1>

        <div className="bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center">
          {Data1.map((user, id) => {
            return (
              <div className="bg-[#222] rounded-md w-64 p-2 text-xl" key={id}>
                <h1>
                  <span className="font-bold ">Name: </span>
                  {user.name}
                </h1>
                <h1>
                  <span className="font-bold">Email: </span>
                  {user.email}
                </h1>
                <h1>
                  <span className="font-bold">Website: </span>
                  {user.website}
                </h1>
              </div>
            );
          })}
        </div>
        <button
          className="w-36 px-4 py-2 text-center text-white bg-green-950 rounded-md font-bold text-xl active:bg-green-500 active:text-green-950 active:scale-95 transition-all"
          onClick={Method1}
        >
          Get Data 1
        </button>
      </section>

      {/* method 2 */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6  bg-blue-100">
        <h1 className="text-center text-3xl font-bold">
          Method 2: Async - Await - Fetch
        </h1>

        <div className="bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap justify-center items-center gap-8">
          {Data2.map((pro, id) => {
            return (
              <div key={id}>
                <div className="card w-full h-auto max-w-sm bg-green-950 rounded-[10%] p-2 text-white shadow-2xl">
                  <div className="bg-white text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
                    <img
                      src={pro.images[0]}
                      alt="img"
                      className="w-full object-cover rounded-[10%] shadow-2xl"
                    />
                  </div>

                  <div className="content flex justify-between items-center py-2 px-4">
                    <div className="details ">
                      <h2 className="text-green-50 text-xl font-bold">
                        {pro.title}
                      </h2>
                      
                    </div>

                    <div className="price border-l-2 border-green-400/20 pl-4">
                      <h2 className="text-4xl font-bold">{pro.price}$</h2>
                      <p className="flex gap-1    items-center text-[14]">
                        Order Now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="w-36 px-4 py-2 text-center text-white bg-blue-950 rounded-md font-bold text-xl active:bg-blue-500 active:text-blue-950 active:scale-95 transition-all"
          onClick={Method2}
        >
          Get Data 2
        </button>
      </section>

      {/* method 3 */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6  bg-orange-100">
        <h1 className="text-center text-3xl font-bold">
          Method 3: Async - Await - Axios
        </h1>

        <div className="bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4">
          {Data3.map((rec, id)=>{
            return (
              <div key={id} className="bg-[#555] w-64 p-2 rounded-2xl">
                <img className="rounded-xl" src={rec.image} alt="Image" />
                <div className="text-center bg-[#222] mt-2 rounded-xl">
                  <h1>{rec.name}</h1>
                  <h1 className="">{rec.rating} / 5.0</h1>
                </div>
              </div>
            )
          })}
        </div>
        <button className="w-36 px-4 py-2 text-center text-white bg-orange-950 rounded-md font-bold text-xl active:bg-orange-500 active:text-orange-950 active:scale-95 transition-all"
        onClick={Method3}>
          Get Data 3
        </button>
      </section>
    </>
  );
};

export default ApiFetch;
