import { Link } from "react-router-dom";
import myGiphy from "../components/Project/Designer.png";
import portfolio from "../components/Project/portfoliologo.png";
import { DiGit } from "react-icons/di";
import { TbLivePhoto } from "react-icons/tb";

const ProjectCard = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-10 p-2">
      <div className="viewbox lg:w-3/4 md:w-3/4 flex flex-col text-justify  p-5">
        <img src={myGiphy} alt="logo" />
        <div className="flex justify-center items-center flex-col">
          <p className="text-sm flex flex-col items-center">
            <span className="text-purple-500 text-xl">MURPH</span> is an AI
            chatbot && Developer buddy, that helps to solves their bugs
          </p>
          <div className="flex lg:gap-10 md:gap-10 gap-8  p-5 ">
            <Link
              target="blank"
              className="button-85 w-max flex gap-2 items-center text-sm lg:text-lg md:text-lg"
              to={"https://sagar-chhetri.vercel.app/"}
            >
              <TbLivePhoto size={20} />
              Live App
            </Link>
            <Link
              target="blank"
              className="button-85 lg:min-w-max lg:text-lg w-max text-sm flex gap-2 items-center"
              to={"https://github.com/iamsagar07/GIPHY-CLONE"}
            >
              <DiGit size={20} />
              Code
            </Link>
          </div>
        </div>
      </div>
      <div className="viewbox lg:w-3/4 md:w-3/4 flex flex-col text-justify  p-5">
        <img src={portfolio} alt="logo" />
        <div className="flex justify-center items-center flex-col">
          <p className="text-sm flex flex-col items-center">
            <span className="text-purple-500 text-xl">MURPH</span> is an AI
            chatbot && Developer buddy, that helps to solves their bugs
          </p>
          <div className="flex lg:gap-10 md:gap-10 gap-8  p-5 ">
            <Link
              target="blank"
              className="button-85 w-max flex gap-2 items-center text-sm lg:text-lg md:text-lg"
              to={"https://hisagar-giphy.vercel.app/"}
            >
              <TbLivePhoto size={20} />
              Live App
            </Link>
            <Link
              target="blank"
              className="button-85 lg:min-w-max lg:text-lg w-max text-sm flex gap-2 items-center"
              to={"https://sagar-chhetri.vercel.app/"}
            >
              <DiGit size={20} />
              Code
            </Link>
          </div>
        </div>
      </div>
      <div className="viewbox lg:w-3/4 md:w-3/4 flex flex-col text-justify  p-5">
        <img src={myGiphy} alt="logo" />
        <div className="flex justify-center items-center flex-col">
          <p className="text-sm flex flex-col items-center">
            <span className="text-purple-500 text-xl">MURPH</span> is an AI
            chatbot && Developer buddy, that helps to solves their bugs
          </p>
          <div className="flex lg:gap-10 md:gap-10 gap-8  p-5 ">
            <Link
              target="blank"
              className="button-85 lg:min-w-max lg:text-lg w-max text-sm flex gap-2 items-center"
              to={"https://sagar-chhetri.vercel.app/"}
            >
              <TbLivePhoto size={20} />
              Live App
            </Link>
            <Link
              target="blank"
              className="button-85 w-max flex gap-2  items-center"
              to={"https://sagar-chhetri.vercel.app/"}
            >
              <DiGit size={20} />
              Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
