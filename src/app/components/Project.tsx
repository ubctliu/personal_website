import linkImage from "../../../public/link.svg";
import Image from "next/image";

type ProjectProps = {
  projectName: string,
  projectLink: string
};

const Project = ({ projectName, projectLink } : ProjectProps) => {
  return (
    <article>
      <p>{projectName}</p>
      <a href={projectLink}>
        <Image src={linkImage} alt={"project link image"} width={25} height={25}/>
      </a>
    </article>
  );
};

export default Project;