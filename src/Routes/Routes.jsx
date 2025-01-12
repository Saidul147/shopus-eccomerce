import {
    createBrowserRouter,
  } from "react-router-dom";
  import Layout from "../Layout/Layout";
import Home from "../components/home/Home";
import Cart from "../components/Cart/Cart";
import EmptyCart from "../components/Cart/EmptyCart";
import Checkout from "../components/Cart/Checkout/Checkout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/empty-cart",
          element:<EmptyCart></EmptyCart>
        },{
          path:"/checkout",
          element:<Checkout></Checkout>
        }
      ]
    },
  ]);