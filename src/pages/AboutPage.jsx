import AboutCard from "../Layout/components/AboutCard";
import Skillsets from "../Layout/components/Skillsets";
import ToolStack from "../Layout/components/ToolStack";

const AboutPage = () => {
  return (
    <section className="w-full text-white min-h-screen  lg:flex flex-col items-center py-16 lg:py-32 md:py-24 lg:w-full  sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 sm:items-center md:items-center md:justify-center sm:justify-center">
      <div className="flex flex-col lg:flex-row md:flex-row">
        <div className=" lg:w-full  px-11 py-5 lg:flex sm:flex sm:text-justify sm:flex-col">
          <div className="flex-1 flex justify-center items-center flex-col">
            <h1 className="py-3 text-4xl lg:text-5xl md:text-4xl">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </div>
        </div>
        <div className="w-full mx-4  xl:w-auto sm:flex sm:items-center sm:justify-center">
          <img src="./about.png" alt="about" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 py-3 w-full">
        <div className="text-xl lg:text-5xl md:text-4xl">
          Professional <span className="text-purple-500 ">Skillsets</span>
        </div>
        <Skillsets />
      </div>

      <div className="w-full flex flex-col items-center gap-10 py-3">
        <div className="text-xl lg:text-5xl md:text-4xl"><span className="text-purple-500">Tools</span> I use</div>

        <ToolStack />
      </div>
    </section>
  );
};

export default AboutPage;
