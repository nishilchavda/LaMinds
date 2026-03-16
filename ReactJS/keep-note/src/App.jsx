import { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Notes, setNotes] = useState("");
  const [Tasks, setTasks] = useState([]);

  function SubmitForm() {
    console.log("Task Added: ", { Heading: Title, List: Notes });

    let newTask = [...Tasks];
    newTask.push({ Heading: Title, List: Notes });
    setTasks(newTask);

    console.log(newTask);
    setTitle("");
    setNotes("");
  }

  return (
    <>
      {/* 1024(lg / max-lg) thi small screen mate => flex nahi lagu pade */}
      {/* 1024(lg / max-lg) thi small screen mate => flex nahi lagu padse */}

      <section className="lg:flex items-center justify-center">
        {/* Submite Form UI */}
        {/* Form for Add new task */}
        <div className="lg:w-1/2 w-full h-screen flex items-center justify-center">
          <div className="bg-black/70 w-full max-w-sm p-2 rounded-2xl">
            <form
              className="bg-black text-white rounded-2xl p-6"
              onSubmit={(e) => {
                e.preventDefault();
                SubmitForm();
              }}
            >
              <h1 className="text-center text-4xl font-bold my-1">
                Add Your Task
              </h1>
              <input
                type="text"
                placeholder="Heading"
                className="w-full px-4 py-2 bg-[#222] rounded-xl my-2 text-white font-semibold"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <textarea
                rows={8}
                placeholder="Notes..."
                className="w-full px-4 py-2 bg-[#222] rounded-xl my-2 text-white "
                value={Notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              ></textarea>
              <input
                type="submit"
                value="Add Task"
                className="w-full bg-white text-black rounded-xl font-bold px-4 py-2 my-2 active:scale-95 active:bg-white/50 active:text-white"
                onChange={(e) => {
                  setTasks(e.target.value);
                }}
              />
            </form>
          </div>
        </div>

        {/* Form for show all tasks */}
        {/* UI For Notes */}
        <div className="lg:w-1/2 w-full h-screen lg:border-l-2 max-lg:border-t-2 border-dashed bg-gray-200 flex flex-wrap items-center justify-center p-6 gap-6 overflow-auto">
          {Tasks.map((task,id) => {
            return (
              <div className="w-full max-w-72 h-72 bg-white rounded-4xl shadow-2xl flex items-end justify-center p-3 relative" key={id}>
                <img
                  src="./pin.png"
                  alt=""
                  className="h-10 absolute z-10 top-1"
                />
                
                <div className="w-full h-58 bg-orange-200 rounded-3xl p-4">
                  <h1 className="text-4xl font-bold ">{id + 1}</h1>
                  <h1 className="text-3xl font-semibold text-center my-1">{task.Heading}</h1>
                  <p className="text-gray-400 font-medium text-xl">{task.List}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default App;
