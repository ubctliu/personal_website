import Projects from "@/app/components/Projects";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home() {
  return (
    <>
      <title className="">Terrence&apos;s Portfolio</title>
      <Hero />
      <Projects />
      <About/>
    </>
  );
}
