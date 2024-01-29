import Image from "next/image";
import githubLogo from "../../../public/github.svg";
import linkedInLogo from "../../../public/linkedin.svg";

const About = () => {
  return (
    <section>
      <div>
        <p>Hello! I&apos;m Terrence!</p>
        <p>I&apos;m a full-stack developer based in Vancouver, Canada.</p>
        <section className={"flex flex-row space-x-1"}>
          <a href={"https://github.com/ubctliu"}>
            <Image src={githubLogo} alt={"github logo"} width={25} height={25}/>
          </a>
          <a href={"https://www.linkedin.com/in/terrence-liu/"}>
            <Image src={linkedInLogo} alt={"linkedIn logo"} width={25} height={25}/>
          </a>
        </section>
      </div>
    </section>
  );
};

export default About;