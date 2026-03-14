import { useState } from "react";

const AddUser = () => {
  const [Data, setData] = useState([
    { name: "Aarav Patel", email: "aarav@gmail.com", color: "bg-red-400" },
    { name: "Riya Sharma", email: "riya@gmail.com", color: "bg-orange-400" },
    { name: "Vivan Maheta", email: "vivan@gmail.com", color: "bg-blue-400" },
  ]);

  function Add() {
    let arr = [...Data]; //copy Array

    arr.push({
      name: "Ananaya Gupta",
      email: "ananaya@gmail.com",
      color: "bg-purple-400",
    });

    for (let i = 0; i < Data.length; i++) {
      if (Data[i]?.name === "Ananaya Gupta")
        return alert("User Already Exists!");
    }

    setData(arr);
  }

  function AddTwo() {
    let arr2 = [...Data];

    arr2.push(
      {
        name: "Aditya Nair ",
        email: "aditya@gmail.com",
        color: "bg-yellow-400",
      },
      {
        name: "Sneha Kapoor",
        email: "sneha@gmail.com",
        color: "bg-green-400",
      },
    );

    for (let i = 0; i < Data.length; i++) {
      if (Data[i]?.name === "Aditya Nair" || Data[i]?.name === "Sneha Kapoor")
        return alert("User Already Exists!");
    }

    setData(arr2);
  }

  // Task:
  // 1. Create a Btn that add Two User

  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-6 my-10">
        {Data.map((user) => {
          return (
            <div
              className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}
            >
              <h1 className="bg-[#222] w-full rounded-xl px-4 py-2">
                {user.name}
              </h1>
              <h1 className="bg-[#222] w-full rounded-xl px-4 py-2">
                {user.email}
              </h1>
            </div>
          );
        })}
      </section>

      <div className="flex justify-center items-center gap-6">
        <button
          className="bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all"
          onClick={Add}
        >
          Add One More User
        </button>
        <button
          className="bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all"
          onClick={AddTwo}
        >
          Add Two More User
        </button>
      </div>
    </>
  );
};

export default AddUser;
