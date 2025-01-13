import React, { useEffect, useState } from 'react';

const Catagory = () => {

    // let [catagories,setCatagories] = useState()
    // let [brand,setBrand] = useState()

    // useEffect(()=>{
    //         fetch("/catagory.json")
    //         .then((res) => res.json())
    //         .then((data) => setDatas(data))
    //     },[])





    let [categories, setCategories] = useState([]);
    let [brand, setBrand] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/catagory.json");
                const result = await res.json();
                setCategories(result.categories);
                setBrand(result.brands);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();  // 
    }, []);

    console.log(brand.length > 0 ? brand[0].logo : "No categories yet");
    //without this condition its always show undefined because this console is run first before load the fetch data


    return (
        <div className='max-w-[1320px] mx-auto px-4 2xl:px-0 py-16'>
            <div>
                <div className='flex  w-full justify-between text-[#232532] font-jost font-[700]'>
                    <h2 className='text-[30px]'>Our Categories</h2>
                    <button className=''><div className='hoverd-line'>View All</div></button>
                </div>

                <div className='grid lg:grid-cols-6 md:grid-cols-4 gap-10  my-8 font-inter text-[#232532]'>

                    {categories.map((item, i) => (
                        <div key={i} data-aos="fade-right" data-aos-delay="100" className="flex flex-col justify-center items-center gap-5" key={i}>
                            <div className="rounded-full overflow-hidden">
                                <img
                                    className="hover:scale-110 duration-300"
                                    src={item.image }
                                    alt={item.name}
                                />
                            </div>
                            <p className="text-[20px] md:text-base lg:text-[20px]">
                                {item.name}
                            </p>
                        </div>
                    ))}

                    {/* <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='rounded-full overflow-hidden'>
                            <img className='hover:scale-110 duration-300' src={categories.length > 0 ? categories[0].image : ""} alt="" />
                        </div>
                        <p className='text-[20px] md:text-base lg:text-[20px]'>{categories.length > 0 ? categories[0].name : ""}</p>
                    </div> */}
                </div>

                <div className='mt-20'>
                    <div className='grid md:grid-cols-2 gap-20'>
                        <h2 data-aos="fade-right" className='font-inter text-[30px] max-w-[26ch]'>Hundreds of companies have been
                        powered by <span className='font-[700]'>ShopUs.</span></h2>

                        <div className='grid md:grid-cols-4 grid-cols-2 gap-10 lg:gap-16 md:gap-8 justify-items-center'>
                            {brand.map((item,i) => (
                                <div data-aos="zoom-out">
                                    <img src={item.logo} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Catagory;