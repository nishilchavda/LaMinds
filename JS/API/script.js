// Fetch APIs Using Fetch Method

// fetch API is used to make network requests and handle responses in JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then --> then --> catch
function Userdata() {
  fetch("https://randomuser.me/api/?results=100")
    .then(function (rawData) {
      console.log(rawData);
      return rawData.json();
    })
    .then((data) => {
      console.log("Final Data Step 1", data);
      console.log("Final Data Step 2", data.results);
      console.log("first Data ", data.results[0].picture.large);

      data.results.forEach(user => {
        RenderUI(user);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

Userdata();

// create a card ==> gender, name, ph no, email, location, photo

function RenderUI(user) {
    
    //cards
    let cards = document.querySelector(".cards");
    cards.className = "cards grid grid-cols-1 md:grid-cols-3 gap-6";

    // card
    let card = document.createElement("div");
    card.className = "card border border-white/30 shadow-2xl backdrop-blur-lg bg-white/40 p-8 rounded-[2rem] flex flex-col items-center text-center transition-all hover:shadow-orange-200/50";
    cards.appendChild(card);

    let img = document.createElement("img");
    img.className = "w-32 h-32 object-cover rounded-full shadow-inner border-4 border-white mb-6";
    card.appendChild(img);
    
    //details
    let details = document.createElement("div");
    details.className = "w-full";
    card.appendChild(details);

    let h2 = document.createElement("h2");
    h2.className = "text-2xl font-black text-orange-950";
    details.appendChild(h2);

    let p = document.createElement("p");
    p.className = "text-xs font-bold text-orange-700/60 uppercase tracking-widest mb-6";
    details.appendChild(p);

    // div details
    let div = document.createElement("div");
    div.className = "space-y-4 text-left inline-block";
    details.appendChild(div);
    
    // phone number
    let div1 = document.createElement("div");
    div1.className = "flex items-center gap-3 text-orange-900/80";
    div.appendChild(div1);

    let svg1 = document.createElement("svg");
    svg1.className = "w-5 h-5 text-orange-600";
    div1.appendChild(svg1);

    let span1 = document.createElement("span");
    span1.className = "text-sm font-medium";
    div1.appendChild(span1);

    // email
    let div2 = document.createElement("div");
    div2.className = "flex items-center gap-3 text-orange-900/80";
    div.appendChild(div2);

    let svg2 = document.createElement("svg");
    svg2.className = "w-5 h-5 text-orange-600";
    div2.appendChild(svg2);

    let span2 = document.createElement("span");
    span2.className = "text-sm font-medium";
    div2.appendChild(span2);

    // Adddress
    let div3 = document.createElement("div");
    div3.className = "flex items-center gap-3 text-orange-900/80";
    div.appendChild(div3);

    let svg3 = document.createElement("svg");
    svg3.className = "w-5 h-5 text-orange-600";
    div3.appendChild(svg3);

    let span3 = document.createElement("span");
    span3.className = "text-sm font-medium";
    div3.appendChild(span3);

    img.src = user.picture.large;
    h2.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
    div1.textContent = `${user.email}`;
    div2.textContent = `${user.cell}`;
    div3.textContent = `${user.location.city}, ${user.location.country}`

}
RenderUI();