import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          more. than a camera
        </p>
        <div className="md:w-10/12 w-9/12">
          <img
            src="../src/assets/1.jpg"
            alt="camera"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
