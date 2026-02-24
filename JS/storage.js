// localStorage API: setItem, getItm, removeItem
// localstorage --> save that data into browser's storage, after close browser data wasn't deleted
// (browser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan data delete tahto nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key","value")
localStorage. setItem("name","test_user");

// getItem
// localStorage.setItem("key_name")
localStorage.getItem("name")

// removeItem
localStorage.removeItem("name")

// sessionStorage API
// Session Storage --> save that for temporarily time you close tab delete was deleted
// (aa storage data ne temporarily time mate save kari ne rakhe chhe, jyare pan tab close karsho tyare teni sathe data pan delete thai jai chhe)
// ~ 5MB Storage

// setItem
sessionStorage.setItem("email", "test@test.com");

// getItem
let email = sessionStorage.getItem("email");

// removeItem
sessionStorage.removeItem("email");

// updateItem
sessionStorage.setItem("email","user@user.com")
sessionStorage.setItem("name","user")
sessionStorage.setItem("age","10")
sessionStorage.setItem("cart","")

// clear
sessionStorage.clear()

// Storing/retrieving strings vs JSON
// save as string into LocalStorage and SessionStorage -- try to save array and string
localStorage.setItem("users",'["demo","test", "test1","demo2"]');
let users = localStorage.getItem("users");

// JSON.stringify
// JSON.parse

localStorage.setItem(
    "demo",
    JSON.stringify({name:'demo',age:10,email:'demo@a.com'}),
);
let demo = JSON.parse(localStorage.getItem("demo"));

// Basic Cookie structure (manual key = Value;)
// Cookie --> store data into browser cookies
// (Cookie data ne browser na cookies name ni property ma save kare chhe, cookie no use light data save karva mate thai chhe)
// when you reload web page data will be automatically send to server
// ~4 KB storage
document.cookie = "email = demo@gmail.com"

// max age
document.cookie = "user= demo; max-age= 10"; //10 sec

// date and time
document.cookie = "age = 10; expires=Wed, 20 Feb 2026 12:00:00 GMT";