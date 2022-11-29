require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const fruitsController = require('./controllers/fruitController')

//=========== Connection to Database ====================
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", ()=>{
  console.log("connected to mongo");
})

// To see if MONGO_URI is working  (the )
// console.log(process.env.MONGO_URI);


// Setup Engine
// app.use(express.static("public "))
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

//when building middleware
app.use((req, res, next) =>{
  console.log('I run for all routes');
  next()
})

// when using built in middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"))
app.use(express.static('public'))
//======== Routes ==============

app.use('/fruits', fruitsController)
 app.use('/vetgetables', fruitsController)


//EVERYTHING BELLOW IS BEFORE WE SETUP THE controllers folder!!
// app.get("/fruits", (req, res) => {
//   fruits.find({}, (error, allFruits) =>{
//    if (!error) {
//     res.status(200).render("fruits/Index", {
//       fruits: allFruits
//     })
//    } else {
//     res.status(400).send(error)
//    }
//   })
// })

// app.get("/vegetables", (req, res) => {
//   vegetables.find({}, (error, allVegetables) => {
//     if(!error) {
//       res.status(200).render("vegetables/Index", {
//         vegetables: allVegetables
//       })
//     } else {
//       res.status(400).send(error)
//     }
//   })  
// })


// app.get("/fruits/new", (req, res) => {
//     res.render("fruits/New")
//   })

//   app.get("/vegetables/new", (req, res) => {
//     res.render("vegetables/New")
//   })

// app.post("/fruits", (req, res) =>{
//   console.log("2. controller");
//   if(req.body.readyToEat === "on"){
//     req.body.readyToEat = true
//   } else {
//     req.body.readyToEat = false
//   }
// fruits.create(req.body, (error, createdFruit) =>
// {
//   if (!error) {
//     // redirects after creating fruit, to the Index page
//     res.status(200).redirect("/fruits")
//     } else {
//       res.status(400).redirect(error)
//     }
//   })
// })

// app.post("/vegetables", (req, res) =>{
//   console.log(req.body);
//   if(req.body.readyToEat === "on"){
//     req.body.readyToEat = true
//   } else {
//     req.body.readyToEat = false
//   }
// fruits.create(req.body, (error, createdFruit) =>
// {
//   if(!error) {
//     res.status(200).redirect("/fruits")
//   } else {
//     res.status(400).redirect(error)
//   }
//  })
// })

// app.get("/fruits/:id", (req, res) => {
//     Fruit.findById(req.params.id, (error, foundFruit) =>{
//       if (!error) {
//         res
//           .status(200)
//             .render("fruits/Show", {
//               fruit: foundFruit
//             })
//       } else {
//           res
//             .status(400)
//             .send(error)
//       }
//     })
//   })
  
//   app.get("/vegetables/:id", (req, res) => {
//   Vegetable.findById(req.params.id, (error, foundVegetable) =>{
//     if(!error) {
//       res
//         .status(200)
//           .render("vegetables/show", {
//             vegetable: foundVegetable
//           })
//     } else {
//         res
//           .status(400)
//           .send(error)
//     }
//   })
// })


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 












// // ❓ Essential Review Questions

//1. In your own words, describe MVC.

//1. ANSWER BELOW 
// - Models
//     - data (javascript variables)
// - Views
//     - how the data is displayed to the user (HTML)
// - Controllers
//     - the glue that connects the models with the views with logic


//2. What does the acronym INDUCES stand for

//  2 ANSWER below 
// index , new , destroy , update , create , edit , show

// 
// index  = Displaying a list of all photos
// new = Display HTML form for creating a new photo
// destroy = Delete a specific photo
//update  = Update a specific photo
//create = Create a new photo
//edit = 	Return an HTML form for editing a photo
//show = Display a specific photo
// for more info w8d1  slides 




//3. What is and Index Route and How does it differ from a Show Route?

// index = Displaying a list of all photos
// show	 = Display a specific photo



// ❓ Essential Review Questions

//  1. What is JSX?

// A Syntax that allows us to write our HTML, CSS and Javascript in the same file so that we can more easily create user interfaces 
// React is one of the most well known users of JSX. But other libraries like Lit-HTML, and KofuJS use it as well.

// 2. What does Map Do.

// map is loop  that returns a new array after then loop. 
// map returns a new array after the loop rather then for each which would not return the array 


// Our MongoDB information is a secret so we need to set up Environment Variables

// Install dotenvnode package
// Update .gitignoreto include .env (always do this before you commit anything in .env)
// touch the .envfile
// lets add our connection string into the .env
// update our server.jsto add our require('dotenv').config()to the very top of the file
// this places every kvp in our .envinto a javascript object called process.env