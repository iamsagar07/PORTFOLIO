import myGiphy from "../components/Project/Designer.png"

const ProjectCard = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-10 p-2">
      <div className="viewbox flex flex-col text-justify h-50 p-5">

     <img src={myGiphy} alt="logo"/>
        type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        re
        versioni
      </div>
      <div className="project-card-view flex text-justify  p-5">
        type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        re
        versioni
      </div>
      <div className="project-card-view flex text-justify  p-5">
        type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        re
        versioni
      </div>
    </div>
  );
};

export default ProjectCard;
