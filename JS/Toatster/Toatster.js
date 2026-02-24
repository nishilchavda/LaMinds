let d = 20;
function abc(){
    console.log(d);
}
function def(){
    let d = 25;
    abc();
}
def();
// console.log ans:

function parent() {
    let a = 12;
    return function () {
        console.log(a);
    };
};

let fnc1 = parent();
fnc1();


// counter
function counter() {
    let a = 0;
    return function () {
        a++;
        console.log(a)
    };
}
let fnc = counter();
fnc();
fnc();
fnc();
fnc();

let fnc2 = counter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2(); // 5 

// create toaster
function createToaster(configs){
    let toast = document.querySelector(".toast");

    return function(data){
        let toaster = document.createElement("div");

        toaster.className = `${configs.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black border border-red-950"}  px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none shadow-lg`;
        toaster.textContent = data;

        if(configs.positionY !== "top" || configs.positionX !== "left"){
            toast.className += `${configs.positionX === "left" ?  " left-10" : " right-10" } ${configs.positionY === "top" ? "top-10" : "bottom-10" }`;
        } else {
            toast.className += `${configs.positionX === "left" ?  " left-10" : " right-10" } ${configs.positionY === "top" ? "top-10" : "bottom-10" }`;
        }

        toast.appendChild(toaster);

        setTimeout(()=>{
            toast.removeChild(toaster);
        }, configs.duration * 1000);
    };
};

let toast = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3, // 3 sec 
});
toast("Welcome Admin!");

setTimeout(()=>{
    toast("You have 2 New Notification");
},2500)
setTimeout(()=>{
    toast("Admin Log in at 9:30 PM");
},4500)
setTimeout(()=>{
    toast("New Leave Application Raised by Developer!");
},6000)