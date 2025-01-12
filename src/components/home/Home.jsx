import { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import Catagory from "./Catagory/Catagory";
import NewArrivals from "./NewArrivals/NewArrivals";
import Banner from "./Banner/Banner";
import FlashSale from "./Flash-Sale/FlashSale";
import TopSellings from "./Top-Sellings/TopSellings";
import BestSellers from "./Best-Sellers/BestSellers";
import BestSellsWeek from "./Best-Sells-weeks/BestSellsWeek";
import TopSellingsProducts from "./top-selling-products/TopSellingsProducts";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {

      useEffect(() => {
            AOS.init({
              duration: 700, // Animation duration in milliseconds
              easing: 'ease-in-out', // Easing function
              once: false, // Whether animation should happen only once
            });
          }, []);

    let [datas, setData] = useState([])

    useEffect(() => {

        let fetchData = async () => {
            try {
                let data = await fetch('/newArraival.json')
                let result = await data.json()
                setData(result)

            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }

        fetchData()

    }, [])

    // console.log(datas)

    return (
        <div>
            {/* <h2 className="text-red-500"> Hello Bangladesh</h2> */}
            <div className="bg-[#f8f8f8]">
                <Hero></Hero>
                <Catagory></Catagory>
                <NewArrivals datas={datas}></NewArrivals>
                <Banner></Banner>
                <FlashSale datas={datas} title={"Flash Sale"} ></FlashSale>
                <TopSellings datas={datas}></TopSellings>
                <BestSellers></BestSellers>
                <BestSellsWeek datas={datas}></BestSellsWeek>
                <TopSellingsProducts datas={datas}></TopSellingsProducts>
                <></>
            </div>
        </div>
    )
}
export default Home;