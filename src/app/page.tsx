import Projects from "@/app/components/Projects";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home() {
  return (
    <>
      <title className="">Terrence&apos;s Portfolio</title>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Hero />
        <Projects />
        <About/>
      </div>
    </>
  );
}
