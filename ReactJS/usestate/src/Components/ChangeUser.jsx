import { useState } from "react";

const ChangeUser = () => {
  const [Data, setData] = useState({
    username: "Jr. Developer Panda",
    role: "Developer",
    photo:
      "https://i.pinimg.com/736x/ee/df/0d/eedf0d7d5cb232a5b49a2bf58794cd0d.jpg",
    background: "bg-white",
  });

  function Change() {
    let o = { ...Data };

    o.username = "Sr. Panda Developer";
    o.photo =
      "https://i.pinimg.com/1200x/2b/81/f8/2b81f83e4d34fd91ed311bd51a7a20cb.jpg";
    o.background = "bg-green-200";
    setData(o);
  }

  return (
    <>
      <section className="flex items-center justify-center h-[100vh] select-none">
        <div
          className={`w-full h-auto max-w-sm p-4 rounded-4xl ${Data.background}`}
        >
          {/* photo */}
          <div className="relative flex justify-center">
            <img
              src={Data.photo}
              alt="photo"
              className="rounded-4xl object-cover"
            />
            <h1 className="text-xl font-bold  text-center absolute z-10 top-6 bg-white/30 rounded-full px-4 py-1">
              {Data.username}
            </h1>
          </div>

          {/* Content */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-x-2 text-black">
              <img
                src={Data.photo}
                alt="photo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">@{Data.role} </p>
                <p className="text-gray-400">32m ago</p>
              </div>
            </div>
            <button
              className="bg-black py-2 px-6 rounded-xl active:bg-black/50 active:scale-95"
              onClick={Change}
            >
              Upgrade Developer
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangeUser;
