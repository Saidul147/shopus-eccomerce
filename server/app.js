
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
        "https://shopus-eccomerce.vercel.app",  // Vercel frontend
        "https://shopus-sd.netlify.app",  // Netlify frontend
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


//to deploy vercel or netlify. first i have to set the app.use(
    // cors({
    //     origin: [
    //       "http://localhost:5173",
    //       "http://localhost:5174",
    //       "https://shopus-eccomerce.vercel.app",  // Vercel frontend
    //       "https://shopus-sd.netlify.app",  // Netlify frontend
    //     ],
    //   })
    // );

    // after that i have to add server site and clint site both to github so that i can import the server site from github to Render.com
    // then i will get a link from Render like https://shopus-eccomerce.onrender.com/create-checkout-session that i have to use in front end fetch 
    // const response = await fetch("https://shopus-eccomerce.onrender.com/create-checkout-session", {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(body),
    // });

    //netlify er jonno clint side theke npm run build kore dist file ta netlify te upload korlei hobe,and then link ta origin a add kore dite hobe.

    // jodi 2 ta folder e github a add korte chai seikhtere root folder theke code open kore git init then git add. erpor  git origin a jhamela korte parent jodi only clint site agei git a add kori tyle jokhon root folder theke git init korbo seikhtre git origin change korte hobe