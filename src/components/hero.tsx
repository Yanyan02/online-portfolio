import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
export const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12 md:py-20">
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left max-w-lg"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Yanyan</span>
          <br />
          Web Developer
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          I build modern web applications with a focus on user experience and
          clean code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            radius="full"
          >
            <a href="/yanyan-resume.pdf" download>
              Download CV
            </a>
          </Button>
          <Button>
            <Link href="/project">View Projects</Link>
          </Button>
        </div>
      </motion.div>

      {/* Right Side - Responsive Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center flex-1"
      >
        <div className="w-[280px] sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[500px]">
          <Image
            isZoomed
            alt="Profile Image"
            src="/profile.jpg"
            className="rounded-full border border-primary shadow-lg w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};
