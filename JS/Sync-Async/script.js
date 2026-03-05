// Koi pan Code JS ma line by line run thase
// Ane te natural pattern hoy chhe ke code line by line chale
// pan code ma kayre aevi pan line aave ke je wait kare and tena pachhi no code run thay jaay

// setTimeout(() => {
//     console.log("Good Evening");
// }, 2000);

// console.log("hi");
// console.log("Hello"); // async

// SYNC -- aevo code jo line by line chalse

// ASYNC -- aevo code ke je ready thai pachhi chale

// Callback Pattern and Callback hell
// function abc(val) {
//     setTimeout(
//         () => {
//             console.log(val);
//         },
//         Math.floor(Math.random() * 10) * 1000,
//     );
// }
// abc(12);

// function abc1(fnc){
//     setTimeout(() => {
//         return fnc();
//     }, Math.floor(Math.random() * 10) * 1000,
// );
// }

// abc1 (function () {
//     console.log("Hey. How Are You"); // this is callback function
// });

// ek function ne tame ek bijo function na parameter ma mokali aapo chho, to te parameter walu fnc ne kevai chhe callback function

// callback hell
// JavaScript ni library (React/Angular/vue) function hoy teno use karvo --> callback hell
function ShowProfile(username, cb) {
  console.log("Fetching All Profiles...");
  setTimeout(() => {
    cb({
      id: 1,
      username,
    });
  }, 2000);
} // default fnc --> library

function ShowAllPost(id, cb) {
  console.log("Fetching All Post...");
  setTimeout(() => {
    cb({ id: id, posts: ["post1", "post2", "post3"] });
  }, 3000);
} // default fnc --> library

function ShowAllStory(id, cb) {
  console.log("Fetching All Stories...");
  setTimeout(() => {
    cb({ id: id, stories: ["story1", "story2", "story3"] });
  }, 4000);
} // default fnc --> library

function SavePost(id, cb) {
  console.log("Fetching Saved Post...");
  setTimeout(() => {
    cb({ id: id, savedPost: ["p1", "p2", "p3"] });
  }, 5000);
}

function ShowReels(id, cb) {
  console.log("Fetching Reels...");
  setTimeout(() => {
    cb({ id: id, reels: ["Reel1", "Reel2", "Reel3"] });
  }, 6000);
}
ShowProfile("test", function (data) {
  console.log(data);
  ShowAllPost(data.id, function (data) {
    console.log(data);
    ShowAllStory(data.id, function (data) {
      console.log(data);
      SavePost(data.id, function (data) {
        console.log(data);
        ShowReels(data.id, function(data){
            console.log(data);
        });
      });
    });
  });
}); // callback hell

// Promises: resolve and reject with then and catch
// jyare tame ek promise banavo chho, tyare te promise be(two) states mathi koi ek state ma jase.
// one state: resolve
// second state: reject
// and we have to write a code for both states
let pr = new Promise(function (res, rej){
  setTimeout(()=>{
    let rnum = Math.floor(Math.random() * 10);
    if (rnum < 5){
      res(rnum);
    } else {
      rej(rnum);
    }
  }, 3000)  
})

pr.catch(function(val){
  console.log("Resolve", val);
}).then(function(val){
  console.log("Reject",val);
});

let pr1 = new Promise(function (res, rej){
  setTimeout(()=>{
    let rnum = Math.floor(Math.random() * 10);
    if (rnum < 10){
      res(rnum);
    } else {
      rej(rnum);
    }
  }, 3000)  
})

pr1.catch(function(val){
  console.log("Resolve", val);
}).then(function(val){
  console.log("Reject",val);
});

// async await

let pr2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let rnum = Meth.floor(Meth.random()*10);
    if(rnum < 5) {
      resolve(rnum);
    } else {
      reject(rnum);
    }
  }, 2000)
})

async function abcd() {
  try {
    let val = await pr1(); // 
    console.log("Async await",val);
  } catch (error) {
    console.log("Rejected!", error);
  }
}

console.log(abcd());

setTimeout(()=>{
  console.log(pr1);
},2000);

