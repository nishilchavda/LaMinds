// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listner - event nu reaction -- give reaction when click, dbclick, hover, typing

// Add Event Listner
// select --> event --> function --> what you change
// element.addEventListener("event_name", function() {})


//====================================================
// common Events : click, input, change, submit, mouseover, keyup
// click
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("cs-body");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});

let box = document.querySelector(".box");
let fillbox = document.querySelector(".fillbox");
let span = document.querySelector("span")

fillbox.addEventListener("click", () => {
    box.classList.toggle("red")
    console.log(fillbox.textContent)
    if (span.textContent === "Red") {
        span.textContent = "White";
    } else {
        span.textContent = "Red";
    }
});

// input
// how to know which is typed?
let inp = document.querySelector(".text");
inp.addEventListener("input",(dets)=>{
    inp.style.backgroundColor = "Red";
    inp.style.color = "white";
    inp.style.width = "200px";
    // console.log(dets);
    if (dets.data !== null){
        console.log(dets.data);
    }
});

// change -- when you change elements state
let sell = document.querySelector(".sell");
let device = document.querySelector(".device");

sell.addEventListener("change",(dets)=>{
    console.log(dets.target.value);
    device.textContent = dets.target.value;
})

// chnage event => chnage div color and RR

let box1 = document.querySelector(".box1")
let inp1 = document.querySelector(".bgcolor")
let inp2 = document.querySelector(".bcolor")
let bgname = document.querySelector(".bgname")
let bname = document.querySelector(".bname")

inp1.addEventListener("change",(dets)=>{
    console.log(dets.target.value)
    bgname.textContent = dets.target.value;
    box1.style.backgroundColor = dets.target.value;
});

inp2.addEventListener("change",(dets)=>{
    bname.textContent = dets.target.value;
    box1.style.borderColor = dets.target.value;
});

// submit
let form = document.querySelector("form");

form.addEventListener("submit", ()=> {
    document.body.style.backgroundColor = "blue";
});

// mousemove and mouseout

let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove", ()=>{
    box2.style.width = "500px";
})

box2.addEventListener("mouseout", ()=>{
    box2.style.width = "200px";
})

// key up - self

let key = document.querySelector(".key");

key.addEventListener("keyup", (dets)=>{
    if (dets.key.match(/^[a-zA-Z0-9]$/)){
        key.style.backgroundColor = "green";
        key.style.color = "white";
    } else {
        key.style.backgroundColor = "white";
        key.style.color = "black";
    }
})

//================================
// Event Object:
// sel.addEventListner("change",(dets)=>{
//     console.log(dets); ==> dets - that called event object
// });

// target, type, preventDefault
// target --> that show element
// type --> show Event Type
// preventDefault --> use for html-form --> prevent form to refresh and clean details

// Event Bubbling and Capturing
// Event Bubbling ---> jena par event aave tena par listner na hoy to aapdu event tena parent par listner gotase ane aavu karta karta upar traf move karshe

// let outer = document.querySelector(".outer");
// let inner = document.querySelector(".inner");
// let most_inner = document.querySelector(".most_inner");

// outer.addEventListener("click", ()=>{
//     console.log("Outer Div Clicked");
//     document.body.style.backgroundColor = "SkyBlue";
// });

// inner.addEventListener("click", ()=>{
//     console.log("inner Div Clicked");
// });

// most_inner.addEventListener("click", ()=>{
//     console.log("Most Inner Div Clicked");
//     document.body.style.backgroundColor = "red";
// });

// use case: make it to do list thing
// when you click on text that show strike using bubbling
// create list that show shopping things -- use css (text decoration -> line-through)
let ul = document.querySelector("ul");
let inp_check = document.querySelectorAll(".inp_check");
inp_check.forEach(element => {
    element.addEventListener("change",(dets)=>{
    dets.target.parentElement.click();
    });
});


ul.addEventListener("click", (dets)=>{
    
    if (dets.target.style.textDecoration === "line-through") {
        dets.target.style.textDecoration = "none";
    } else {
        dets.target.style.textDecoration = "line-through";
    }
});

// Issue: if you child have event listner that can run and also run your parent event listner because of event bubbling
// show if with example

// event Capturing ==> revece of event bubbling
// when you raise event then your event flow(propogation) ==> can run into two phase

// first phase ==> event can run to top level element to bottom level element (parent --> Child Element)
// second phase ==> event can run to raised element to parent element (child element --> parent)

// First --> first phase then second phase ==> but phase 1 is default off, you have to on that setting
// first phase --> capture phase
// second phase --> event bubbling 

let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let most_inner = document.querySelector(".most_inner");

outer.addEventListener("click", ()=>{
    console.log("Outer Div Clicked");
    document.body.style.backgroundColor = "SkyBlue";
},true);

inner.addEventListener("click", ()=>{
    console.log("inner Div Clicked");
    document.body.style.backgroundColor = "Green";
},true);

most_inner.addEventListener("click", ()=>{
    console.log("Most Inner Div Clicked");
    document.body.style.backgroundColor = "red";
},true);

// phase 2 : child --> parent (most_inner-inner-outer)
// true -- outer ; phase 1 (true vali event run) : Parent --> child (outer(done)) Phase 2 (true vagar ni event run thai): Child --> Parent (Most_inner --> inner)
// true -- outer ; phase 1 (true vali event run) : Parent --> child (outer(done))--> inner(done)) Phase 2 (true vagar ni event run thai): Child --> Parent (Most_inner)


// use case :
// 1. security layer
// 2. check when event bubbling is fail

// event and event listner and listner
// capture vs bubbling

// live character counter
let counter = document.querySelector("#counter");
let count = document.querySelector(".count");

counter.addEventListener("input",(dets)=>{
    console.log(dets.target.value.length);
    console.log(counter.value.length);

    let limit = 10 - counter.value.length;

    if (limit < 0) {
        alert("You have cross the limit");
        counter.disabled = true;
    } else {
        count.textContent = limit;
    }
});
