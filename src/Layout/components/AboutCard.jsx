import React from 'react'
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <div >
      <blockquote >
      <p style={{ textAlign: "justify" }} className='text-lg'>
            Hi Everyone, I am <span className="text-purple-500">Sagar Chhetri </span>
            from <span className="text-purple-500"> Dehradun, India.</span>
            <br />
            {/* I am currently employed as a software developer at Juspay. */}
            <br />
            I have completed MCA at Grahpic Era University
            Dehradun.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="flex items-center gap-5">
              <ImPointRight /> Playing volleyball
            </li>
            <li className="flex items-center gap-5">
              <ImPointRight /> Bike riding
            </li>
            <li className="flex items-center gap-5">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p  className='flex justify-center' style={{ color: "rgb(155 126 172)" }}>
          युद्धाय कृतनिश्चयः ।।{" "}
          </p>
          <footer className='flex justify-center' style={{ color: "rgb(155 126 172)" }}>Sagar</footer>
      </blockquote>
    </div>
  )
}

export default AboutCard
