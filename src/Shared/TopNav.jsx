import { useRef, useState,useEffect } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import bd from "../assets/bd.png"


const TopNav = () => {

  let [country, selectCountry] = useState("United State")
  let [isOpen, setIsOpen] = useState(false)

  let [currency, selectCurrency] = useState("USD")
  let [isOpen2, setIsOpen2] = useState(false)

  let [lang, setLang] = useState("English")
  let [isOpen3, setIsOpen3] = useState(false)


  // const dropdownRef1 = useRef(null);
  // const dropdownRef2 = useRef(null);
  // const dropdownRef3 = useRef(null);

  const dropdownRefs = [useRef(null), useRef(null), useRef(null)];


  const handleClickOutside = (event) => {
    // if (
    //   (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) &&
    //   (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) &&
    //   (dropdownRef3.current && !dropdownRef3.current.contains(event.target))
    // ) {
    //   setIsOpen(false);
    //   setIsOpen2(false);
    //   setIsOpen3(false);
    // }

    // Check if the click is outside any of the dropdowns
    const isOutside = dropdownRefs.every(ref => ref.current && !ref.current.contains(event.target));

    //.every returns true or false, here check if i click into the div ref.current will return true outside click will return false, and !ref,current.contains(event.target) , contains also return true/false. if i click into the div it will return true either it will return false.


    if (isOutside) {
      setIsOpen(false);
      setIsOpen2(false);
      setIsOpen3(false);
    }


  };



  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // let handleCountry = () => {

  // }
  const toggleDropdown = (dropdownIndex) => {
    // Close all dropdowns first, then open the selected one
    setIsOpen(dropdownIndex === 0 ? (prev) => !prev : false);
    setIsOpen2(dropdownIndex === 1 ? (prev) => !prev : false);
    setIsOpen3(dropdownIndex === 2 ? (prev) => !prev : false);
  };


  const dropdownData = [
    {
      label: "United State",
      items: ["United Kingdom", "Bangladesh", "Australia", "Canada"],
      img: <img className='w-3 h-3' src={bd} alt="" />
    },
    {
      label: "USD",
      items: ["USD", "BDT", "Pound", "Peso"],
      img: ''
    },
    {
      label: "English",
      items: ["English", "Bengali", "English(UK)", "Chinese"],
      img: ''
    },
  ];


  return (
    <div className=' border-b pb-4 '>
      <div className='max-w-[1320px] mx-auto px-4 2xl:px-0 flex justify-between mt-4 items-center '>
        <div className='flex gap-4 text-xs font-poppins'>
          <a href="">Account</a>
          <a href="">Track Order</a>
          <a href="">Support</a>
        </div>

        {/* dropdown start here  */}
        <div className='md:flex gap-5 justify-between z-50 hidden '>
          {/* country drop down */}
          <div className='flex gap-3 text-[12px] font-poppins '>
            <div className='relative cursor-pointer' onClick={() => toggleDropdown(0)} ref={dropdownRefs[0]}>
              <p className='flex items-center gap-2 '>{country} <MdKeyboardArrowDown /> </p>
              {isOpen &&
                <div className='absolute w-40 bg-white shadow-lg  mt-5 -ml-3 '>
                  {
                    dropdownData[0].items.map((item, index) => {
                      return (
                        <div className='hover:bg-slate-200 py-[9px] px-[16px] font-[400] hover:font-[600]' onClick={() => selectCountry(item)}>
                          {item}
                        </div>
                      )
                    })}
                </div>
              }
            </div>
            <div>
            </div>
          </div>

          {/* currency dropdown */}
          <div className='flex gap-3 text-[12px] font-poppins'>
            <div className='relative cursor-pointer' onClick={() => toggleDropdown(1)} ref={dropdownRefs[1]}>
              <p className='flex items-center gap-2 '>{currency} <MdKeyboardArrowDown /> </p>
              {isOpen2 &&
                <div className='absolute w-40 bg-white shadow-lg  mt-5 -ml-3 '>
                  {
                    dropdownData[1].items.map((item, index) => {
                      return (
                        <div className='hover:bg-slate-200 py-[9px] px-[16px] font-[400] hover:font-[600]' onClick={() => selectCurrency(item)}>
                          {item}
                        </div>
                      )
                    })}
                </div>
              }
            </div>
            <div>
            </div>
          </div>

          {/* language dropDown  */}

          <div className='flex  text-[12px] font-poppins'>
            <div className='relative cursor-pointer' onClick={() => toggleDropdown(2)} ref={dropdownRefs[2]}>
              <p className='flex items-center gap-2 '>{lang} <MdKeyboardArrowDown /> </p>
              {isOpen3 &&
                <div className='absolute w-40 bg-white shadow-lg  mt-5 -ml-3 '>
                  {
                    dropdownData[2].items.map((item, index) => {
                      return (
                        <div className='hover:bg-slate-200 py-[9px] px-[16px] font-[400] hover:font-[600]' onClick={() => setLang(item)}>
                          {item}
                        </div>
                      )
                    })}
                </div>
              }
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav