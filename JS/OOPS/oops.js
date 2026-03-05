// Object Oriented Javascript
// OOPS
// dar vakhat blueprint banavo ke object kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi teme nava nava object banavi sakiye chhiye tene j kevaay chhe Object Oriented Programming

// blueprint(object kevo dekhase, object ma su method) --> based on blueprint create objects

// blueprint -- constructor
// function based constructor --> Constructor Function --> function Name always start with Capital letter

function CreatePencil(name, price, color) {
  // blueprint
  this.name = name;
  this.price = price;
  this.color = color;

  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.appendChild(h1);
  };

  this.clear1 = function (text) {
    document.querySelectorAll("h1").forEach((text) => {
      if (text.style.color === this.color) {
        text.remove();
      }
    });
  };
  console.log(this);
}

let p1 = new CreatePencil("pencil1", 5, "black");
let p2 = new CreatePencil("pencil2", 10, "red");
let p3 = new CreatePencil("pencil3", 15, "blue");
let p4 = new CreatePencil("pencil4", 20, "green");
let p5 = new CreatePencil("pencil5", 25, "purple");

// jo construction function koi feild tena prototype ma add attech kari de to te filed badha object ma available thase

CreatePencil.prototype.shape = "rounded";

// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function

// Class in JavaScript
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye

// why use class: class is more readable and easier to understand than construction function

class CreatePen {
  constructor(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    // what is constructor: constructor is a special method which is called when an object is created, it is used to initialize the object
    // why use constructor: constructor is used to initialize the object, it is called automatically when an object is created, it is used to set the initial values of the object
    console.log(this);
  }
}

let pen1 = new CreatePen("Pen1", 5, "blue", "cello");

// extends
// create a new class that hold old class value and also have some new values
// copy old class and add new Value

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = "user";

    // read profile
    this.profile = function () {
      console.log(this);
      // console.log({name: this.name, email: this.email, age: this.age, role: this.role});
      return "user Profile Fetched"
    }

    // create a post
    this.post = function(title ,link){
      let caption = document.createElement("p");
      caption.textContent = title;
      caption.className = "text-2xl text-teal-950"
      let img = document.createElement("img");
      img.setAttribute("src", link);
      img.classList = "w-[200px] h-auto rounded shadow-lg";

      document.body.appendChild(caption);
      document.body.appendChild(img);
    }

    console.log(this);
  }
}

let u1 = new User("test", "test@gmail.com", 25);
let u2 = new User("Demo", "Demo@gmail.com", 20);

class Admin extends User {
  constructor(name, email, age) {
    super(name, email, age); //je class extend kariye tenu counstructor atele super -- user 
    this.role = "admin";
    console.log(this);

    // show all user's name
    this.showUser = function (users) {
      return users;
    };

    // remove user's data
    this.removeUser = function (users) {
      console.log(users)
    }

  }
}

let admin = new Admin("admin", "admin@test.com", 25);
console.log("admin can see all data");
admin.showUser({user1: u1.profile(),user2: u2.profile()});

// prototypal inheritance vs classical inheritance
// classical Inheritance -- create


// inheritance meaning --> class to class inheritance (copy one class into anthor class)

// prototypal inheritance --> object to object
// ek object chhe tene tame all props/methods ne inherit kari chho ke nava object ma

let SoftDrink = {
  color: "blue",
  price: 50,
  buy: function (company) {
    console.log(" == This Your  Bill == : \n",
    "  Color : " + this.color,
    "\n Price : " + this.price,
    "\n Company Name : " + company,
  );
  },
};

let BlueBerry = Object.create(SoftDrink);
console.log(BlueBerry)

// create form that can save data 
