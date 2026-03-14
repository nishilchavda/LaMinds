import { useState } from "react";

const ChangeUser = () => {
  const [Data, setData] = useState({ username: "Test_User", role: "Tester", photo: "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg" });

  function SwitchUser() {
    if (Data.username === "Test_User") {
      let new_obj = { ...Data };
      console.log(new_obj);
      new_obj.username = "Developer_User";
      new_obj.role = "Developer";
      new_obj.photo = "https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg";
      setData(new_obj);
    } else {
      let new_obj = { ...Data };
      console.log(new_obj);
      new_obj.username = "Test_User";
      new_obj.role = "Tester";
      new_obj.photo = "https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"
      setData(new_obj);
    }
  }

  return (
    <>
      <div className="mx-auto mt-10 bg-[#222] rounded-xl w-full max-w-sm h-auto px-4 py-2 text-center text-2xl font-bold">
        <img className="w-36 h-36 object-cover rounded-xl my-4 mx-auto " src={Data.photo} alt="" />
        <h1 className="bg-[#555] w-full rounded-xl px-4 py-2 active:bg-green-400 select-none mb-2 mt-2">
          {Data.username}
        </h1>
        <h3 className="bg-[#555] w-full rounded-xl px-4 py-2 active:bg-green-400 select-none mb-2">
          {Data.role}
        </h3>

        <button
          className="w-full bg-blue-800 px-24 py-2 my-2 rounded-xl hover:bg-blue-600 hover:scale-98 transition"
          onClick={SwitchUser}
        >
          Switch User
        </button>
      </div>
    </>
  );
};

export default ChangeUser;
