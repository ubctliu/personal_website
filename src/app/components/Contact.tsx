import Image from "next/image";
import githubLogo from "../../../public/github.svg";
import linkedInLogo from "../../../public/linkedin.svg";
import mailLogo from "../../../public/envelope-fill.svg";

const Contact = () => {
  return (
    <section className={"flex flex-row space-x-1 justify-center items-center"}>
      <a href={"https://github.com/ubctliu"} className={"hover:scale-110"}>
        <Image src={githubLogo} alt={"github logo"} width={25} height={25}/>
      </a>
      <a href={"https://www.linkedin.com/in/terrence-liu/"} className={"hover:scale-110"}>
        <Image src={linkedInLogo} alt={"linkedIn logo"} width={25} height={25}/>
      </a>
      <a href={"mailto:tliudev@outlook.com"} className={"hover:scale-110"}>
        <Image src={mailLogo} alt={"mail logo"} width={25} height={25}/>
      </a>
    </section>
  );
};

export default Contact;