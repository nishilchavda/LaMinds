// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem), comment

// DOM Manipulation - change body
// select element from html
// change text
// change html
// change css
// change attribute
// change listeners

// Select Element 
// getElementById
let a = document.getElementById("abc")
console.log(a);

// getElementsByClassName
let b = document.getElementsByClassName("abc")
console.log(b)

// getElementsByTagName
let c = document.getElementsByTagName("h1")
console.log(c)

// querySelector --> only select first (tag, class) in html
let d = document.querySelector(".abc")
console.log(d)

// querySelectorAll --> Select All
let e = document.querySelectorAll("h1")
console.log(e)

// change text
// innertext
d.innerText = "Change Text with JS";

// outertext -- not use in DOM
// d.outerText = "<h1>Change Text with OuterText</h1>";

// innerHTML
d.innerHTML = "<i>Change Text Style with JS</i>";

// outerHTML
// d.outerHTML = "<i>Change Text Style with JS</i>";

// textContent -- use for change text
d.textContent = "Change Text with TextContent";

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
console.log("get Attribute", link.href) // -- give value of href attribute

// link.href = "https://www.google.com"
// element.setAttribute("attribute_name", "change")
link.setAttribute("href","www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value of href attribute

// element.removeAttribute("name")
link.removeAttribute("href")

// Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend

// createElement
let box = document.createElement("div")
box.textContent = "This is Div Tag create using JS"
console.log(box)

// append / prepend -- add element into HTML
// append -- add element into last
// document.body.append(box);
// prepend -- add element into first
document.body.prepend(box);

// remove
d.remove();

// appendChild
let outer_box = document.createElement("div");
outer_box.classList.add("outer");
document.body.append(outer_box);

let inner_box = document.createElement("div");
inner_box.classList.add("inner");
outer_box.appendChild(inner_box);

// append vs appendChild
// remove vs removeChild

// Style Updates via .style and classList (add, remove, toggle)
console.dir(d)
d.computedStyleMap.backgroundColor = "Green";
d.computedStyleMap.color = "white";
d.computedStyleMap.padding = "20px";

// ClassList
let card = document.querySelector(".card");
// console.dir(card)
card.classList.add("card-style")

//remove
card.classList.remove("card")

// toggle -- class --> available --> remove it
//           class --> not available --> add it
card.classList.toggle("card")


// Tasks:
// 1. What is the DOM ? How Does it represent the HTML Structure?

// 2. Name the types of nodes in the DOM tree.

// 3. What's the difference between an element node and text node?

// 4. Inspect the following HTML in the browser and identify each node:
// <div>Hello<span>World</span></div>

// 5. What is Difference between getElementById and querySelector?

// 6. What does getElementsByClassName return? Is it an array?

// 7. Use querySelectorAll to select all buttons with class "buy-now".

// 8. T1: Select the heading of a page by ID and change its text to "Welcome to JS DOM"

// 9. T2: Select all <li> elements and print their text using a loop.
// let list = documnet.querySelectorAll("li");
// list.forEach((val)=>{
    // console.log(val.textContext)
    // })


    // for(let i=0; i < list.length; i++){
    //     console.log(list[i].textContent)
    // }


// 10. What's the differnce between innerText, textContent and innerHTML?

// 11. When should you use textContent instend of innerHTML?

// 12. T3: Select a Paragraph and replace its content with: <b> Updated </b> by JavaScript

// 13. How do you get the src of an image using JavaScript?

// 14. what does setAttribute() do?

// 15. Add a title attribute to a div dyanmically.

// 16. Remove the disabled attribute from a button.

// 17. what does createElement() do ? what's retured?

// 18. What's the difference between appendChild() and prepend()?

// 19. can you remove an element using removeChild() ?

// 20. create a new list item <li> New Task</li> and add it to the end of a <ul>.

// 21. create a new image element with a placeholder source and add it at the top of a div.

// 22. Select the first item in a list and delete it from the DOM.

// 23. How do you change the background color of an element?

// 24. What's the difference between .classList.add() and classList.toggle()?

// 25. Add hightlight class to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((elem)=>{
    // elem.classList.add("highlight")
    // })

// 26. Set the font size of all <p> elements to 18px using .style
 