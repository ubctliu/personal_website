import Personal from "@/app/components/Personal";
import kyotoImage from "../../../public/kyoto.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Personal />
      <div className="py-4">
        <div className="flex justify-center">
          <Image src={kyotoImage} alt={"photo from kyoto trip"} height={800} width={500} />
        </div>
        <p className="text-slate-500">I love to travel during my time off and to try new things!</p>
        <p className="text-slate-500">This one&apos;s from my time in Kyoto, Japan!</p>
      </div>
    </section>
  );
};

export default Hero;