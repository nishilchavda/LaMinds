// create a express server

// package.json ==> type = module => import
// package.json ==> type = commonjs => const, require

const express = require("express");
const path = require("path");

const app = express();

// Middeleware ==> Middleare was run before route, call before function
// usecase : Authorization, Authentication, Validation, Error Handling, etc
// user req ==> server
// (server route) server res ==> user
// with middleware : 
// user req ==> middleware(server) ==> server route
app.use((req, res, next)=>{
    console.log("Middleware is Running 👍")
    next()
});
// login req ==> middleware (check user into database) ==> server route (profile)

// create a route 

app.get("/", (req, res)=>{
    res.send("Welcome to ExpressJS 😎");
})

app.get("/profile", (req, res)=>{
    res.send("Show Profile 📃");
})

app.get("/login", (req, res)=>{
    const dirPath = path.resolve();
    const filePath = path.join(dirPath, 'Pages/login.html');
    res.sendFile(filePath);
})

// error handling :
// last listed route.
// alaways write after all routes because it will catch all the errors that are not handled by the previous routes.
app.use(function (req, res){
    res.status(404).send("Page Not Found ❌");
    res.status(500).send("Internal Server Error ❌");
})

app.get("/signup", (req, res)=>{
    res.send("Signup Page 📝");
})

app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
})