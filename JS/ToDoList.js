// select
let inp = document.querySelector("input");
let addBtn = document.querySelector("#add_btn");
let ul = document.querySelector(".task-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks)); // save data(obj. format) into array 
}

function ShowTask(){
    ul.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type='checkbox' ${task.done ? "checked":""}"> ${task.text} <button class='Dbtn'> Delete </button>`
        
        // li.textContent = task.text;
        ul.appendChild(li);
    });
    

    console.log(tasks);
}

ShowTask();

addBtn.addEventListener("click",()=>{
    let value = inp.value;

    console.log(value);
    tasks.push({text: value, done: false});
    saveLocalStorage();
    ShowTask();

    inp.value = "";
});

ul.addEventListener("click", (e)=>{
    console.log(e.target.closest("li"));
    let li = e.target.closest("li");
    let index = [...ul.children].indexOf(li); // copy ul child(li) and find index number using indexOf(li)

    if(e.target.type === "checked"){
        tasks[index].done = e.target.checked;
    }

    //delete btn
    if (e.target.classList.contains("Dbtn")){
        tasks.splice(index, 1);
    }

    // saveLocalStorage();
    ShowTask();
})