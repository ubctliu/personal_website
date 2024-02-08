import linkImage from "../../../public/link.svg";
import liveLinkImage from "../../../public/box-arrow-up-right.svg";

import Image from "next/image";

type ProjectProps = {
  projectName: string,
  projectLink: string,
  liveLink?: string,
  projectImage?: string
};

const Project = ({ projectName, projectLink, liveLink, projectImage } : ProjectProps) => {
  return (
    <article>
      {projectName}
      <div className={"flex justify-center space-x-2"}>
        <a href={projectLink} className={"inline-block"}>
          <Image src={linkImage} alt={"project link image"} width={25} height={25}/>
        </a>
        {liveLink &&
        <a href={liveLink} className={"inline-block"}>
          <Image src={liveLinkImage} alt={"live link image"} width={20} height={20}/>
        </a>}
      </div>
      { projectImage && <Image src={projectImage} alt={"project image"}/>}
    </article>
  );
};

export default Project;