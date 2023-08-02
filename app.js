// Require Packages
const express = require("express");
const hbs = require ("hbs");
const DogApi = require('doggo-api-wrapper');

// Create an Express Server that handles requests and responses
const app = express();

// Initiate new API Wrapper
const myDog = new DogApi();

// Set HBS as View Engine
app.set("view engine", "hbs");

// Point to Views Directory
app.set("views", __dirname + "/views");

// Make Public Static Files Available
app.use(express.static('public'));

// Create Routes

// Home Page where you should display 5 random images of dogs via DoggoApi
app.get("/", async (req,res)=>{
    
});

// Schnauzer Page where you should display 1 image of a Schnauzer (Breed) Miniature (Subreed) via DoggoApi
app.get("/schnauzer", async (req,res)=>{

});

// Listen in PORT 3000
app.listen(3000);
