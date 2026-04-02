// const { error } = require("node:console");
// const fs = require("node:fs");

// fs = file system

// create file
// fs.appendFile(path, data,cb fnc)
// fs.appendFile("hello.txt","Hello World!", (e)=>{
//     if(e) throw error;
//     console.log("create a hello.txt");
// });
// issue: every time you run the file that put new data with existing data, so that print same data every time you run the file

// fs.writeFile(path,DataTransfer,cb fnc);
// fs.writeFile("hello.txt","Hello World!", (e)=>{
//     if(e) throw error;
//     console.log("create a hello.txt");
// });
// issue: when you chnage hello.txt file and after that you run the file that cmd will be replace whole file with above given data

// create a folder
// fs.mkdir(path,cb fnc)
// fs.mkdir("Pages", (e)=>{
//     if(e) throw error;
//     console.log("create a new folder -- Pages");
// });

// create a nested folder
// fs.mkdir(path, {option}, cb fnc)
// fs.mkdir("CSS/Home/style",{recursive: true}, (e) => {
//     if(e) throw error;
//     console.log("create a nested folder of CSS");
// });

// ============================================================

// // read file
// // fs.readFile(path, fnc(e, data){})
// fs.readFile("hello.txt", "utf8", (e, data)=>{
//     if(e) throw error;
//     console.log(data);
// });

// // read folder
// // fs.readdir(path, fnc(e, files){})
// fs.readdir("CSS/Home/Style", (e, files)=>{
//     if (e) throw error;
//     console.log(files);
// });
// as a response you get a array of folder and files name

// ============================================================

// // create files
// // fs.copyFile("path with file name", "path with new file name", cb fnc)
// fs.copyFile("hello.txt", "CSS/Home/Style/copy.txt", (e)=>{
//     if(e) throw error;
//     console.log("File Copy Successfully!");
// });

// ============================================================

// // rename file
// // fs.rename("old(exiting) file name with path", "new file name with path", cb fnc)
// fs.rename("hello.txt", "world.txt", (e)=>{
//     if(e) throw error;
//     console.log("File Rename Successfully!");
// });

// // nest file rename and move
// fs.rename("CSS/Home/Style/copy.txt", "CSS/Home/Style/rename.txt", (e)=>{
//     if(e) throw error;
//     console.log("File Rename Successfully!");
// });

// // rename folder
// fs.rename("CSS/Home/Style", "CSS/Home/Components", (e)=>{
//     if(e) throw error;
//     console.log("Folder Rename Successfully!");
// });

// ============================================================

// // delete file
// // fs.rm(path, cb fnc)
// fs.rm("world.txt", (e)=>{
//     if(e) throw error;
//     console.log("File Delete Successfully!");
// });

// delete folder
// fs.rm(path, {option}, cb fnc)
// fs.rm("CSS", (e)=>{
//     if(e) throw error;
//     console.log("Folder Delete Successfully!");
// });

// fs.rm("CSS", {recursive: true, force: true}, (e)=>{
//     if(e) throw error;
//     console.log("Folder Delete Successfully!");
// });

// fs.rm("CSS", (e)=>{
//     if(e) throw error;
//     console.log("Folder Delete Successfully!");
// });

import chalk from "chalk";

console.log(chalk.blue("Hello, World!"));
console.log(chalk.blue.bgCyan("Hello, World!"));
console.log(chalk.bgGreen.green.bold("Hello, World!"));