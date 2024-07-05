import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiUbuntu,
} from "react-icons/si";

const ToolStack = () => {
  return (
    <div className=" h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-20 gap-8 p-3">
      <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56  md:w-56 shadow custom-border ">
        <SiUbuntu size={50} />
      </div>
      <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56  md:w-56 shadow custom-border ">
        <SiVisualstudiocode size={50} />
      </div>
      <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56  md:w-56 shadow custom-border ">
        <SiPostman size={50} />
      </div>
      <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56  md:w-56 shadow custom-border ">
        <SiSlack size={50} />
      </div>
      <div className=" lg:h-28 h-20  flex items-center justify-center rounded-lg border w-36 lg:w-56  md:w-56 shadow custom-border ">
        <SiVercel size={50} />
      </div>
    </div>
  );
};

export default ToolStack;
