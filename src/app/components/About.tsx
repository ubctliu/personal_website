import Contact from "@/app/components/Contact";

const About = () => {
  return (
    <section className={"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"}>
      <a href={"#contact"} className={"no-underline inline-block"}>
        <div className={"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white"}>Let&apos;s connect!</div>
      </a>
      <div className={"mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"}>
        <p>Have a project in mind? Let&apos;s chat!</p>
      </div>
      <Contact />
    </section>
  );
};

export default About;