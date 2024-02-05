import Project from "@/app/components/Project";

const Projects = () => {
  return (
    <section className={""}>
      
      <a href={"#projects"} className={"no-underline inline-block"}>
        <div className={"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white"}>Projects</div>
      </a>
      <Project projectName={"Odyssey"} projectLink={"https://odyssey-delta-lac.vercel.app/"}/>
      <Project projectName={"Photolabs"} projectLink={"https://github.com/ubctliu/photolabs-starter"}/>
      <Project projectName={"Lighthouse Marketplace"} projectLink={"https://github.com/ubctliu/lhl-marketplace"}/>
    </section>
  );
};

export default Projects;