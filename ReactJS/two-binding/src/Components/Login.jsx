import { useState } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function SubmitForm() {
    console.log("Data Send To Backend:", {
      "Email:": Email,
      "Password:": Password,
    });

    setEmail("");
    setPassword("");
  }

  return (
    <section className="flex items-center justify-center h-screen ">
      <div className="max-w-sm w-full bg-gray-200 rounded-4xl shadow-xl p-3">
        <form
          className="bg-white rounded-[28px] px-8 py-10 flex flex-col w-full"
          onSubmit={(e) => {
            e.preventDefault();
            SubmitForm();
          }}
        >
          {/* Logo */}
          <img
            className="w-full h-20 object-cover rounded-4xl"
            src="https://i.pinimg.com/1200x/fe/3e/65/fe3e6511c9bea7aaabc6f5dbc909b5c0.jpg"
            alt=""
          />

          <h2 className="text-2xl font-bold text-center text-black mt-4 mb-1">
            Sign in to continue
          </h2>

          <p className="text-sm text-gray-400 text-center font-medium mb-8 mt-2 ">
            Please Sign in to Start Your Rental Application
          </p>

          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center bg-gray-200 rounded-xl px-4 py-3">
              <svg
                className="w-5 h-5 text-gray-500 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16v12H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>

              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-200 rounded-xl px-4 py-3">
              <svg
                className="w-5 h-5 text-gray-500 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>

              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <button className="bg-black text-white font-medium py-3 rounded-xl mt-6 hover:opacity-90 transition"
          // onClick={SubmitForm}
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-400 text-sm text-center mt-2">
          Don't have an Account?
          <span className="text-black font-semibold ml-1 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
