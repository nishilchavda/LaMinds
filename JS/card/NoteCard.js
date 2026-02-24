// 1. select first
// 2. Show Form and close form
// 3. form - validation ,submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show all data into HTML
// 7. create UP  and DOwn btn

let add = document.querySelector("#add-note");
let container = document.querySelector(".form-container");
let close_btn = document.querySelector(".closeForm");

add.addEventListener("click",()=>{
    container.style.display = "block";
});

//clear form
close_btn.addEventListener("click",()=>{
    container.style.display = "none";
});

function SaveToStorage(obj){
    // // get ew data
    // if(localStorage.getItem('data') === null || []){
    // let data = [];
    // data.push(obj);
    // localStorage.setItem("data", JSON.stringify(data));
    // console.log(data);
  
    // }else{
    // // get old data
    //  let olddata = localStorage.getItem("data");
    //  data.push(obj);
    //  console.log(JSON.parse(olddata));
    // }

    let data = JSON.parse(localStorage.getItem('data')) || [];
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));

}

let form = document.querySelector("form");

    let img = document.querySelector('input[placeholder = "Image URL"]');
    let uname = document.querySelector("input[placeholder = 'Enter full name']");
    let home = document.querySelector("input[placeholder='Enter home town']");
    let purpose = document.querySelector("input[placeholder='e.g., Quick appointment note']");
    let category = document.querySelectorAll('input[name="category"]');



form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let url = img.value.trim();
    let fullname = uname.value.trim();
    let town = home.value.trim();
    let task = purpose.value.trim();

    let selected = false;

    category.forEach((cat) => {
        if(cat.checked){
            selected = cat.value;
        }
    });

    if(url===""){
        alert("Please Enter Image Url!");
        return;
    }
    if(fullname===""){
        alert("Please Enter Image Full Name!");
        return;
    }
    if(town===""){
        alert("Please Enter Image Town!");
        return;
    }
    if(task===""){
        alert("Please Enter Image Purpose!");
        return;
    }
    if(!selected){
        alert("Please Select Category!");
        return;
    }

    container.style.display = "none";
    form.reset();

    SaveToStorage({
        url,
        fullname,
        town,
        task,
        selected,
    });

    container.style.display="none";
    form.reset();

});

// show cards

let stack = document.querySelector(".stack");

function ShowCards(){
    stack.innerHTML = "";

    let allData = JSON.parse(localStorage.getItem('data'));

    allData.forEach((data)=>{
        console.log(data);
            //card container
    let card = document.createElement("div");
    card.classList.add("card");

    // image
    let img = document.createElement("img");
    img.classList.add("avatar");
    img.setAttribute("src", data.url);

    // name
    let h2 = document.createElement("h2");
    h2.textContent = data.fullname;

    // Home Town
    let homeInfo = document.createElement("div");
    homeInfo.classList.add("info");

    // span tags - home twon
    let home = document.createElement("span");
    home.textContent = "Home Town";
    let town = document.createElement("span");
    town.textContent = data.town;

    // Purpose
    let purpose = document.createElement("div");
    purpose.classList.add("info");

    // span tags - purpose
    let head_note = document.createElement("span");
    head_note.textContent = "Purpose";
    let note = document.createElement("span");
    note.textContent = data.task;

    // button div
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("buttons");

    // buttons -- button div
    let call = document.createElement("button");
    call.classList.add("call");
    call.innerHTML = `<i class="ri-phone-line"></i> Call`;
    let msg = document.createElement("button");
    msg.classList.add("msg");
    msg.textContent = "Message";
    msg.innerHTML = `<i class="ri-mail-line"></i> Message`

    // add to html

    stack.appendChild(card);
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(h2);
    card.appendChild(homeInfo);
    homeInfo.appendChild(home);
    homeInfo.appendChild(town);
    card.appendChild(purpose);
    purpose.appendChild(head_note);
    purpose.appendChild(note);
    card.appendChild(btnDiv);
    btnDiv.appendChild(call);
    btnDiv.appendChild(msg);

    console.log(stack);
    })

}
ShowCards();

// Animation

function update(){
    let card = document.querySelector(".card");
    for (let i = 0; i < 3; i++) {
        const cards = card[i];
        // cards.style.zIndex = 3 - i;
        // cards.style.transform = `translateY(${i*10}px) scale(${1 - i * 0.05})`;
        // cards.style.opacity = `${1 - i * 0.05}`;
    }
}

// up btn and down btn

let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

upBtn.addEventListener("click", ()=> {
    console.log(stack.lastElementChild);

    lastChild = stack.lastElementChild;

    if(lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
        // insertBefore(element, element)
    }
    
    update();
})

downBtn.addEventListener("click", ()=> {
    console.log(stack.firstElementChild);

    firstChild = stack.firstElementChild;

    if(firstChild) {
        stack.append(firstChild, stack.firstElementChild);
        // insertBefore(element, element)
    }

    update();
})

