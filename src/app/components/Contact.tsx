import Image from "next/image";
import githubLogo from "../../../public/github.svg";
import linkedInLogo from "../../../public/linkedin.svg";

const Contact = () => {
  return (
    <section className={"flex flex-row space-x-1 justify-center items-center"}>
      <a href={"https://github.com/ubctliu"}>
        <Image src={githubLogo} alt={"github logo"} width={25} height={25}/>
      </a>
      <a href={"https://www.linkedin.com/in/terrence-liu/"}>
        <Image src={linkedInLogo} alt={"linkedIn logo"} width={25} height={25}/>
      </a>
    </section>
  );
};

export default Contact;