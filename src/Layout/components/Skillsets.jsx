import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
} from "react-icons/di";
import { SiRedis, SiNextdotjs, SiSolidity } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const Skillsets = () => {
    return (
        <div className="  grid lg:grid-cols-4 grid-cols-2 lg:gap-20 gap-8 md:grid-cols-3 p-3">
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56  bg-colors shadow custom-border">
                <CgCPlusPlus size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <DiJavascript1 size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <TbBrandGolang size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border custom-border">
                {" "}
                <DiNodejs size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <DiReact size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <SiSolidity size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <DiMongodb size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <DiGit size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <SiRedis size={50} />
            </div>
            <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56 md:w-56 shadow custom-border ">
                {" "}
                <SiNextdotjs size={50} />
            </div>
        </div>
    );
};

export default Skillsets;
