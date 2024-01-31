import Project from "@/app/components/Project";

const Projects = () => {
  return (
    <section>
      <Project projectName={"Odyssey"} projectLink={"https://odyssey-delta-lac.vercel.app/"}/>
      <Project projectName={"Photolabs"} projectLink={"https://github.com/ubctliu/photolabs-starter"}/>
      <Project projectName={"Lighthouse Marketplace"} projectLink={"https://github.com/ubctliu/lhl-marketplace"}/>
    </section>
  );
};

export default Projects;