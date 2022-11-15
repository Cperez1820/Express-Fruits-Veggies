const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const vegetables = require("./models2/vegetables")

// app.use(express.static("public "))
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get("/fruits", (req, res) => {
  res.render('Index', {fruits})
})

app.get("/vegetables", (req, res) => {
    res.render('vegetables/Index', {vegetables})
  })

app.get("/fruits/:indexOfFruit", (req, res) => {
    res.render("fruits/Show", fruits[req.params.indexOfFruit])
// Old code 
    // res.render('Show', {
    // fruit: fruits[req.params.indexOfFruit]
  })
  
  app.get("/vegetables/:indexOfVegetables", (req, res) => {
  res.render('vegetables/Show', vegetables[req.params.indexOfVegetables])
  })


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