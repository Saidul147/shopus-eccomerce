import { useEffect } from "react";
import Hero from "./hero/Hero";
import Catagory from "./Catagory/Catagory";
import NewArrivals from "./NewArrivals/NewArrivals";
import Banner from "./Banner/Banner";



const Home = () => {

    useEffect(() => {
        
    },[])

    return(
        <div>
            {/* <h2 className="text-red-500"> Hello Bangladesh</h2> */}
        <div className="bg-[#f8f8f8]">
        <Hero></Hero>
        <Catagory></Catagory>
        <NewArrivals></NewArrivals>
        <Banner></Banner>
        </div>
        </div>
    )
}
export default Home;