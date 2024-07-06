import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row lg:justify-between md:justify-between xl:justify-between gap-5 items-center p-3 bg-purple-950'>
      <div className='text-justify text-sm md:text-xl lg:text-xl xl:text-xl'>
      <h3>Designed and Developed by Sagar Chhetri</h3>
      </div>
      <div>
      <h3>Copyright © {year} Sc</h3>
      </div>
      <div className='hidden lg:block xl:block'>
      <ul className="w-full flex flex-row gap-16">
              <li className="rounded-full bg-white">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="text-black p-2" size={30}/>
                </a>
              </li>
              <li className="rounded-full bg-white">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter className="text-black p-2" size={30}/>
                </a>
              </li>
              <li className="rounded-full  bg-white">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn className="text-black p-2" size={30}/>
                </a>
              </li>
              <li className="rounded-full bg-white">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram className="text-black p-2" size={30}/>
                </a>
              </li>
            </ul>
      </div>
    </div>
  )
}

export default Footer