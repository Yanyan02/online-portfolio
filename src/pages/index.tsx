import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "@heroui/react"
import DefaultLayout from "@/layouts/default";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/project";
import { Contact } from "@/components/contact";

export default function IndexPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/project" && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <Hero />
        </div>

      </section>
      <Divider className="my-2" />
      {/* About Section */}
      <section ref={aboutRef} >
        <About/>
        
        {/* <h2 className="text-3xl font-bold">About Section</h2>
        <p className="max-w-lg text-center">
          This is the about section. When you click the button, it scrolls down smoothly instead of navigating to a new page.
        </p> */}
      </section>
          <Divider className="my-2" />
      {/* Project Section */}
      <section ref={projectRef} >
        <Projects/>
      </section>
          <Divider className="my-2" />
      {/* Contact Section */}
      <section ref={contactRef}>
          <Contact/>
      </section>
    </DefaultLayout>
  );
}
