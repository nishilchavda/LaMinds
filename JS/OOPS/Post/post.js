// data save into local storage

let add = document.querySelector("#submit");
let imgUrl = document.querySelector('input[placeholder="profile pic"]');
let username = document.querySelector('input[placeholder="username"]');
let postUrl = document.querySelector('input[placeholder="Image Link"]');
let textCaption = document.querySelector("#caption");

function SaveToStorage(obj) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
}

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let img = imgUrl.value.trim();
  let name = username.value.trim();
  let post = postUrl.value.trim();
  let caption = textCaption.value.trim();

  SaveToStorage({
    img,
    name,
    post,
    caption,
  });
});
// create post after submit form,

let posts = document.querySelector("#posts");

function ShowPosts() {
  posts.innerHTML = "";

  let allData = JSON.parse(localStorage.getItem("data"));

  allData.forEach((data) => {
    console.log(data);
    //posts container
    let postdiv = document.createElement("div");
    postdiv.className = "post w-1/4 h-auto bg-slate-200 border border-red-100 rounded-md shadow-lg overflow-hidden";

    let bar = document.createElement("div");
    bar.className = "bar flex items-center gap-4 bg-white/20 px-4 py-2";

    let main_img = document.createElement("div");
    main_img.className = "main_ing overflow-hidden w-full h-auto rounded-bl-lg rounded-br-lg";

    let imgProfile = document.createElement("img");
    imgProfile.className = "w-16 h-16 rounded-full";

    let div = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.className = "text-2xl font-semibold text-black/50";

    let p = document.createElement("p");
    p.className = "text-md font-semibold text-black/20";

    let imgPost = document.createElement("img");
    imgPost.className = "w-full h-full object-fit hover:scale-[1.5] transition-all";

    posts.appendChild(postdiv);
    postdiv.appendChild(bar);
    bar.appendChild(imgProfile);
    imgProfile.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);


    postdiv.appendChild(main_img);
    main_img.appendChild(imgPost);

    console.log(posts);
  });
}
ShowPosts();
