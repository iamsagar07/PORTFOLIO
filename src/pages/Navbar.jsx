import { TiHomeOutline } from "react-icons/ti";
import { MdPerson4 } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaPagelines } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import "../App.css";
const Navbar = () => {
  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  const handleCick = (e) => {
    if (e !== null) {
      setActive(e);
      setDropdown(false);
    }
  };

  const mouseHover = (e) => {
    setHover(e);
    setActive(null);
  };

  const onMouseLeave = () => {
    setHover(null);
  };

  return (
    <div
      className={` w-full flex items-center py-3 px-20 justify-center fixed transition-all duration-300 ease-out bg-purple-950 opacity-100 sm:w-full  md:bg-transparent lg:bg-transparent xl:bg-transparent`}
    >
      <Link
        to={"/"}
        className="block font-bold text-purple-500 w-96 text-5xl cursor-pointer py-0 sm:px-8"
      >
        Sc.
      </Link>
      <div className="hidden sm:block">
        <div className="flex justify-evenly gap-16 px-10">
          <div className="block">
            <Link
              to={"/"}
              onMouseOver={() => mouseHover(0)}
              onMouseLeave={() => onMouseLeave(0)}
              onClick={() => handleCick(0)}
              className="flex flex-col justify-center items-center gap-2 md:flex-row"
            >
              <TiHomeOutline />
              <span className="">Home</span>
            </Link>
            {hover === 0 && <div className="hover after  bg-purple-500"></div>}
            {hover !== 0 && active === 0 && (
              <div className="hover  after animate-pulse w-auto h-1 bg-purple-500"></div>
            )}
          </div>
          <div>
            <Link
              to={"/about"}
              onMouseOver={() => mouseHover(1)}
              onMouseLeave={() => onMouseLeave(1)}
              onClick={() => handleCick(1)}
              className="flex flex-col justify-center items-center gap-2 md:flex-row "
            >
              <MdPerson4 />
              <span>About</span>
            </Link>
            {hover === 1 && <div className="hover after  bg-purple-500"></div>}
            {hover !== 1 && active === 1 && (
              <div className="hover animate-pulse w-auto h-1 bg-purple-500"></div>
            )}
          </div>
          <div>
            <Link
              to={"/projects"}
              onMouseOver={() => mouseHover(2)}
              onMouseLeave={() => onMouseLeave(2)}
              onClick={() => handleCick(2)}
              className="flex flex-col justify-center items-center gap-2 md:flex-row "
            >
              <GrProjects />
              <span>Projects</span>
            </Link>
            {hover === 2 && <div className="hover after bg-purple-500"></div>}
            {hover !== 2 && active === 2 && (
              <div className="hover animate-pulse w-auto h-1  bg-purple-500"></div>
            )}
          </div>

          <div>
            <Link
              to={"resume"}
              onMouseOver={() => mouseHover(3)}
              onMouseLeave={() => onMouseLeave(3)}
              onClick={() => handleCick(3)}
              className="flex flex-col justify-center items-center gap-2 md:flex-row"
            >
              <FaPagelines />
              <span>Resume</span>
            </Link>
            {hover === 3 && <div className="hover after bg-purple-500"></div>}
            {hover !== 3 && active === 3 && (
              <div className="hover animate-pulse w-auto h-1 bg-purple-500"></div>
            )}
          </div>
          <Link to={'https://github.com/iamsagar07/PORTFOLIO'} target="_blank" className="flex justify-center items-center gap-2">
            <button className="w-20 h-8 bg-purple-800 flex justify-center items-center gap-4 hover:animate-bounce hover:bg-purple-950 rounded-lg">
              <FaGithub />
              <FaStar />
            </button>
          </Link>
        </div>
      </div>
      <div className="block sm:hidden xl:hidden md:hidden lg:hidden cursor-pointer -mx-10 ">
        {dropdown ? (
          <IoMdClose className="cross" onClick={() => setDropdown(!dropdown)} size={30} />
        ) : (
          <div className="icon-container">
          <LuLayoutDashboard className="" onClick={() => setDropdown(!dropdown)} size={30} />
          </div>
        )}{" "}
      </div>
      {dropdown && (
        <div className="absolute top-14 px-10 pt-6 pb-9 w-full dropdown bg-purple-950  flex justify-center">
          <div className="">
            <div className="flex flex-col gap-5">
              <div>
                <Link
                  to={"/"}
                  onClick={() => handleCick(0)}
                  className="flex  justify-center items-center gap-2 md:flex-row "
                >
                  <TiHomeOutline />
                  <span className="">Home</span>
                </Link>
              </div>
              <div>
                <Link
                  to={"/about"}
                  onClick={() => handleCick(1)}
                  className="flex  justify-center items-center gap-2 md:flex-row "
                >
                  <MdPerson4 />
                  <span>About</span>
                </Link>
              </div>
              <div>
                <Link
                  to={"/projects"}
                  onClick={() => handleCick(2)}
                  className="flex  justify-center items-center gap-2 md:flex-row "
                >
                  <GrProjects />
                  <span>Projects</span>
                </Link>
              </div>

              <div>
                <Link
                  to={"resume"}
                  onClick={() => handleCick(3)}
                  className="flex  justify-center items-center gap-2 md:flex-row"
                >
                  <FaPagelines />
                  <span>Resume</span>
                </Link>
              </div>
              <Link to={'https://github.com/iamsagar07/PORTFOLIO'} target="_blank" className="flex justify-center items-center gap-2">
                <button className="w-20 h-8 bg-black   flex justify-center items-center gap-4 hover:animate-bounce rounded-lg">
                  <FaGithub />
                  <FaStar />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
