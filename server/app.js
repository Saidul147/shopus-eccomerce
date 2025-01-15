const express = require("express")
const app = express();
const cors = require("cors")

const stripe = require('stripe')('sk_test_51Qh2QOG3aDMDTkQPHIYLBxa8qxcJNmQvUGIzJMC5EX423hnOFRPyCcbVMOvU2gzAkflcsHCjQYShvZAcKTQDIqoc000eBAOUdf');

const YOUR_DOMAIN = 'http://localhost:5173';

app.use(express.json());

app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://shopus-sd.netlify.app",
      ],
    })
  );
//checkout api

app.post("/create-checkout-session", async (req, res) => {

    
    try {
        const {products,customerDetails} = req.body;

        console.log(customerDetails)
    
        const lineItems = products.map((product) => ({
            price_data:{
                currency:"usd",
                product_data:{
                    name:product.name
                },
                unit_amount: product.discountedPrice * 100, 
            },
            quantity:product.quantity
        }))
    
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `http://localhost:5173/success?firstName=${customerDetails.firstName}&lastName=${customerDetails.lastName}&email=${customerDetails.email}&phone=${customerDetails.phone}&address=${customerDetails.address}&country=${customerDetails.country}&city=${customerDetails.city}&zipCode=${customerDetails.zipCode}`,
            cancel_url: `http://localhost:5173/canceled`,

        });
        res.status(200).json({id:session.id})
        console.log("Route Hit");
       
        console.log("products Recived",products);
    } catch (error) {
       res.status(500).json(error)
       console.error("error creating session",error)
    } // Check if body is parsed
})

app.listen(7000, () => {
    console.log("server start ")
})








//client site theke response pathaite chaile client site ew npm start thakte hobe

//===========server site install:==================
// npm init -y
// npm i express cors stripe
// node app.js
// npx nodemon app.js

//nodemon er jonno package.json a 
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "nodemon app.js"
//   },
