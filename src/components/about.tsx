import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="w-full py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex justify-center transition-colors duration-300">
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-10 md:p-12 rounded-2xl shadow-lg 
          bg-white dark:bg-gray-950/80 border border-gray-300 dark:border-gray-700
          backdrop-blur-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {/* About Me */}
          <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
            About Me
          </h2>
          <div className="border-b border-gray-400 dark:border-gray-600 w-24 mx-auto mb-6"></div>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              With a solid background in web development spanning over{" "}
              <span className="text-blue-600 dark:text-indigo-400 font-semibold">
                four years
              </span>{" "}
              , I build reliable, high-performing web applications tailored to
              modern user expectations. My work is rooted in both technical
              precision and a user-first mindset — ensuring every project is as
              functional as it is intuitive.
            </p>

            <p className="mt-4">
              I'm driven by a love for{" "}
              <span className="text-blue-600 dark:text-indigo-400 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300">
                clean code
              </span>
              ,{" "}
              <span className="text-blue-600 dark:text-indigo-400 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300">
                {" "}
                responsive design
              </span>
              , and{" "}
              <span className="text-blue-600 dark:text-indigo-400 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300">
                {" "}
                performance tuning{" "}
              </span>{" "}
              . Beyond development, I actively engage with the tech community
              through open-source contributions and knowledge sharing.
            </p>
          </div>

          {/* What I Do Section */}
          <h3 className="text-3xl font-bold text-center mt-10 mb-6 text-gray-800 dark:text-gray-100">
            What I Do
          </h3>
          <div className="border-b border-gray-400 dark:border-gray-600 w-16 mx-auto mb-6"></div>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-indigo-400 mb-2">
                Web Development
              </h4>
              <p>
                Crafting responsive and dynamic web applications using modern
                frameworks like Vue.js and React.
              </p>
            </div>
            <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-indigo-400 mb-2">
                Backend Engineering
              </h4>
              <p>
                Designing robust APIs and server-side applications with Node.js,
                Express, and Python.
              </p>
            </div>
            <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-indigo-400 mb-2">
                UI/UX Development
              </h4>
              <p>
                Ensuring a smooth user experience with well-designed interfaces
                and intuitive interactions.
              </p>
            </div>
            <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-indigo-400 mb-2">
                Continuous Learning
              </h4>
              <p>
                Always exploring new technologies and best practices to stay
                ahead in the industry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
