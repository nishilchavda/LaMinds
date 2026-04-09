const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./Models/user.model");
const postModel = require("./Models/post.model");
// const crypto = require("crypto");
const path = require("path");
const upload = require("./config/multer");

const app = express();

// image folder --> image --> aa.jpg (laptop)
// my pic folder --> image --> aa.jpg (mobile)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// frontend logic
// user login
app.get("/", (req, res) => {
  res.render("index");
});

// logout user ==> remove token from cookie
app.get("/logout", (req, res) => {
  res.clearCookie();
  res.redirect("/");
});

// render signup page
app.get("/signup", (req, res) => {
  res.render("signup");
});

// render profile page
app.get("/profile", auth, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");

  // let name = crypto.randomBytes(6).toString("hex");
  // console.log(name)

  res.render("profile", { user });
});

// render post page
app.get("/post", auth, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  res.render("post");
});

// render editprofile page
app.get("/editprofile", auth, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  res.render("editprofile", { user });
});

// create post
app.post("/post", auth, upload.single("imgurl"), async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });

  let { title, description } = req.body;

  // console.log(req.file);

  let createdPost = await postModel.create({
    userId: user._id,
    title,
    description,
    imgurl: req.file.filename,
  });
  // add (push) posts into user data
  user.posts.push(createdPost);
  await user.save();
  res.redirect("/profile");
});

// backend + database logic
app.post("/create", (req, res) => {
  let { username, fullname, email, phone, password, image } = req.body;

  bcrypt.hash(password, 10, async (err, hash) => {
    try {
      await userModel.create({
        fullname,
        username,
        email,
        phone,
        password: hash,
        image,
      });
    } catch (err) {
      res.send(err);
    }
  });
  res.redirect("/");
});

// login user ==> check email and password, redirect to profile page
app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    res.send("somthing went wrong - Email");
  } else {
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ email: user.email }, "aabbcc");

        res.cookie("token", token);
        res.redirect("/profile");
      } else {
        res.send("Someting went Wrong!");
      }
    });
  }
});

// edit porofile
app.post("/editprofile", auth, async (req, res) => {
  let { fullname, username, email, phone, image } = req.body;

  await userModel.findOneAndUpdate(
    { email: req.user.email },
    {
      fullname,
      username,
      email,
      phone,
      image,
    },
    {new: true},
  );
  res.redirect("/profile")
});

app.get("/delete/:id", auth, async (req,res)=>{
  let user = await userModel.findOne({email:req.user.email});

  await postModel.findOneAndDelete({_id: req.params.id})

  let postNumber = user.posts.indexOf(req.params.id);

  user.posts.splice(postNumber, 1);
  await user.save();

  res.redirect("/profile")

})

// Middleware Functions
function auth(req, res, next) {
  let token = req.cookies.token;

  if (!token) {
    res.send("Access Denied!");
  }
  try {
    let verified = jwt.verify(token, "aabbcc");
    req.user = verified; // that data send into next route(check profile route, you can access email like req.user.email)
    next();
  } catch (error) {
    console.log("Invalid Token");
  }
}

app.listen(3000, () => {
  console.log("Server is Running!!!");
});
