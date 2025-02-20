import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch ,FaTimes, FaBars, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const fromOptions = [
    {label:"Bali, Indonesia",option : "Bali, Indonesia"},
    {label:"Paris, France",option: "Paris, France" },
    {label:"New York, USA",option: "New York, USA" }
  ]

  const toOptions = [
    {label:"Bali, Indonesia",option : "Bali, Indonesia"},
    {label:"Paris, France",option: "Paris, France" },
    {label:"New York, USA",option: "New York, USA" }
  ]

  return (
    <header className="mx-auto max-w-7xl">
    <nav className="bg-orange-50 sm:bg-white static">
      <div className="flex items-center  justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src="/Logo.png" alt="Logo" />
        </Link>
        

        {/* Hamburger Icon */}
        <button
          className="text-3xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <ul
          className={`lg:flex  px-4 py-6  mx-auto sm:px-auto sm:py-0 lg:items-center lg:space-x-7  absolute lg:static bg-orange-50 lg:bg-transparent top-16 left-0 w-full lg:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="flex items-center  text-lg hover:text-orange-500 px-4 py-2 lg:px-0">
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center text-lg hover:text-orange-500 px-4 py-2 lg:px-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="flex items-center text-lg hover:text-orange-500 px-4 py-2 lg:px-0">
            <Link to="/tour">Tour Packages</Link>
          </li>
          <li className="flex items-center text-lg hover:text-orange-500 px-4 py-2 lg:px-0">
            <Link to="/contact">Our Services</Link>
          </li>
          <li className="flex items-center text-lg hover:text-orange-500 px-4 py-2 lg:px-0">
            <Link to="/contact">Gallery</Link>
          </li>
          <li className="flex items-center text-lg hover:text-orange-500 px-4 py-2 lg:px-0">
            <Link to="/contact">Contact</Link>
          </li>
          {/* Phone Icon and Number */}
        <li
          className="text-lg hidden text-orange-500 lg:flex  items-center justify-center space-x-2 lg:absolute lg:top-5 lg:right-4 lg:py-0 lg:px-4"
        >
          <FaPhoneAlt className="text-xl" />
          <span>+111</span>
        </li>
        </ul>
      </div>
    </nav>
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  my-4 px-4 py-10 pt-10">
        <h1 className="flex flex-col text-4xl font-bold px-4  py-4">
           It’s a Big World Out There, <span className="text-orange-500">Go Explore</span>
        </h1>
        <div className="flex flex-col">
          <div className="py-4 px-4 my-2">
            Time tracking software used by millions. A simple time tracker and timesheet app that lets you track work hours across projects......
          </div>
          <div className="py-4 px-4 my-2">
            <button className="rounded-md border bg-orange-500 px-3 py-2 font-blod text-white">Discover Now</button>
          </div>
        </div>
    </div>

    <div className="bg-cover h-screen w-full bg-center opacity-4"
      style={{
        backgroundImage:`url('/Main Image.png')` 
      }}
    >
    
      <div className="w-full h-screen flex justify-center items-center">
        <a href=""><img src="/Play button.png" alt="" /></a>
      </div>
    </div>
    

      <div className="grid lg:grid-cols-5 gap-4 justify-center items-center border border-zinc-100 bg-zinc-50  p-8 space-y-reverse shadow-2xl rounded-xl max-w-6xl mx-auto ">
        {/* From */}
        <Location options={fromOptions}/>

        {/* To */}
        <Location options={toOptions}/>

        {/* Dates */}
        <div className="flex items-center border rounded-full px-4 py-2 mx-2 w-full sm:w-auto mb-2 sm:mb-0">
          <FaCalendarAlt className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="Select a date range"
            className="outline-none bg-transparent text-gray-500 text-sm w-full sm:w-auto"
          />
        </div>

        {/* Guests */}
        <div className="flex items-center border rounded-full px-4 py-2 mx-2 w-full sm:w-auto mb-2 sm:mb-0">
          <FaUsers className="text-orange-400 mr-2" />
          <input
            type="text"
            placeholder="Number of your guest"
            className="outline-none bg-transparent text-gray-500 text-sm w-full sm:w-auto"
          />
        </div>

        {/* Search Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white sm:rounded-md rounded-full p-2 mx-2 sm:w-auto"
        >
          <span className="block sm:hidden">Search</span>
          <div className="flex items-center justify-center">
            <FaSearch className="hidden sm:block  text-xl" />
          </div>
        </button>
      </div>
  </header>
  );
};

export default Header;


export const Location = ({options, defaultValue}) => {
  return (
  <div className="flex items-center border rounded-full px-4 py-2 mx-2 w-full sm:w-auto mb-2 sm:mb-0">
    <FaMapMarkerAlt className="text-orange-400 mr-2" />
    <select
      className="outline-none bg-transparent text-gray-500 text-sm w-full sm:w-auto"
      defaultValue={defaultValue}
    >
    { 
      options.map((option,index) => (
      <option key={index} value={option.value} className="bg-orange-50">
        {option.label}
      </option>
    ))
    }
    </select>
    
  </div>
  )
}
