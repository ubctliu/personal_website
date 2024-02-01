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
      <div>
        <a href={projectLink} className={"inline-block"}>
          <Image src={linkImage} alt={"project link image"} width={25} height={25}/>
        </a>
      </div>
    </article>
  );
};

export default Project;