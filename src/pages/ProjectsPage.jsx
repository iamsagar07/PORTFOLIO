import ProjectCard from "../Layout/components/ProjectCard"


const ProjectsPage = () => {
  return (
    <div className=" text-white min-h-screen w-full lg:py-32 md:py-28 py-24  flex items-center flex-col">
      <div className="mb-24">
        <h1 className="text-4xl p-2">My <span className="text-purple-500">Recent</span> works</h1>
        <p className="text-sm"> Here are a few projects I've worked on recently.</p>
      </div>

      <div className="p-5 w-full">
       <ProjectCard />
      </div>
    </div>
  )
}

export default ProjectsPage