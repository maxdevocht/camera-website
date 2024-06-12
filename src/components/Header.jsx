// import { useLocation } from "react-router-dom";
import { webcam } from "../assets";
// import { navigation } from "../constants";
// import Button from "./Button";
// import { useState } from "react";

const Header = () => {
  // const pathname = useLocation();
  // const [openNavigation, setOpenNavigation] = useState(false);

  // const toggleNavigation = () => {
  //   if (openNavigation) {
  //     setOpenNavigation(false);
  //     enablePageScroll();
  //   } else {
  //     setOpenNavigation(true);
  //     disablePageScroll();
  //   }
  // };

  // const handleClick = () => {
  //   if (!openNavigation) return;
  //   // enablePageScroll();
  //   setOpenNavigation(false);
  // };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row border items-center mx-5 lg:mx-40 my-5">
        <a href="#hero" className="flex gap-1">
          <img src={webcam} alt="logo" />
          <h1 className="h6">more. than a camera</h1>
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto">
          <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto lg:flex-grow">
            <a href="#about">About</a>
            <a href="#design">Design</a>
            <a href="#pricing">Pricing</a>
          </div>
        </nav>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
