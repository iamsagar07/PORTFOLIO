import { useState } from "react";
import Type from "../Layout/components/Type";
import myImg from "../assets/avatar.svg";
import coder from '../assets/coder.png';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Homepage = () => {
  return (
    <>
      <div className=" text-white min-h-screen w-full flex flex-col justify-evenly py-10">
        <div className="md:flex lg:flex lg:gap-24 items-stretch lg:py-32 md:py-32 mb-5">
          <div className="">
            <div className="text-3xl lg:text-6xl md:text-5xl xl:text-6xl py-14 px-10">
              <h1 className="flex gap-10">
                Hi There !{" "}
                <span className="animate-bounce text-4xl hidden lg:block md:block">
                  👋🏻
                </span>
              </h1>
              <h1>
                I am <strong className="text-purple-500">SAGAR CHHETRI</strong>
              </h1>
            </div>

            <div className="text-3xl lg:text-5xl py-5 px-10 flex gap-10 ">
              <div className="flex-1">
                <h1>A</h1>
                <h1 className="text-purple-500">
                  {" "}
                  <Type />
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:block lg:flex-1 w-3/46 lg:w-auto">
            <img src={coder} alt="dev_log" />
          </div>
        </div>

        <div className="w-full flex items-center flex-col justify-center mb-10">
          <h1 className="py-10 text-2xl lg:text-4xl">
            LET ME <strong className="text-purple-500">INTRODUCE</strong> MYSELF
          </h1>
          <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:gap-10 ">
            <ul className="w-full p-5 lg:w-3/5 lg:text-xl flex flex-col  text-justify justify-center gap-8 lg:items-start">
              <li>
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
              </li>
              <li>
                I am fluent in classics like{" "}
                <i className="text-purple-500">C++, Javascript and Go.</i>
              </li>
              <li>
                My field of Interests are building new{" "}
                <i className="text-purple-500">
                  Web Technologies and Products{" "}
                </i>
                and also in areas related to{" "}
                <i className="text-purple-500">Blockchain.</i>
              </li>
              <li>
                Whenever possible, I also apply my passion for developing
                products with <i className="text-purple-500">Node.js</i> and{" "}
                <i className="text-purple-500">
                  Modern Javascript Library and Frameworks
                </i>{" "}
                like
                <i className="text-purple-500">React.js</i> and{" "}
                <i className="text-purple-500">Next.js</i>
              </li>
            </ul>
            <div className="">
              <img src={myImg} alt="avatar" />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center flex-col justify-center mb-10">
          <h2 className="text-lg md:text-3xl lg:text-4xl py-2">FIND ME ON</h2>

          <h5 className="text-md py-2">
            FEEL FREE TO <i className="text-purple-500">connect</i> with me
          </h5>

          <div className="p-5">
          <ul className="w-full flex flex-row gap-16">
              <li className="rounded-full bg-white">
                <a
                  href="https://github.com/iamsagar07"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="text-purple-600 p-2" size={35}/>
                </a>
              </li>
              <li className="rounded-full bg-white">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter className="text-purple-600 p-2" size={35}/>
                </a>
              </li>
              <li className="rounded-full  bg-white">
                <a
                  href="https://www.linkedin.com/in/sagar-chhetri-2a3731278/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn className="text-purple-600 p-2" size={35}/>
                </a>
              </li>
              <li className="rounded-full bg-white">
                <a
                  href="https://www.instagram.com/sagar.chhetri__?igsh=dG9maXJ3bHQyeTdv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram className="text-purple-600 p-2" size={35}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
