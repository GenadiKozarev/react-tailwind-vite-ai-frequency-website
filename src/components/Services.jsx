import Section from "./Section";
import Heading from "./Heading";
import { service1 } from "../assets";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="AI Frequency unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                width={800}
                height={730}
                alt="Robot profile"
                className="w-full h-full object-cover md:object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;