import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import "../App.css";
import { useEffect, useRef, useState } from "react";

const AppLayout = () => {
  const [scroll, setScroll] = useState(false);

  const gradientDivRef = useRef(null); // Create a ref for the .gradient div

  const onScrolling = () => {
    setScroll(true);
    console.log("Scrolling happens is", scroll);
  };

  useEffect(() => {
    // Check if the ref is current (attached to a DOM element)
    if (gradientDivRef.current) {
      // Attach the scroll event listener to the .gradient div
      gradientDivRef.current.addEventListener('scroll', onScrolling);

      // Return a cleanup function to remove the event listener when the component unmounts
      return () => {
        gradientDivRef.current.removeEventListener('scroll', onScrolling);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  
  return (
    <div className="">
      <div className=" text-white min-h-screen w-full gradient">
        <Navbar />
        <main onScroll={onScrolling}ref={gradientDivRef} id="bc" className="w-full overflow-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
