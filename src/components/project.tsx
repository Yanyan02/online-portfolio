import { Card, CardHeader, CardBody } from "@heroui/react";
import { projects } from "@/config/project";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section className="w-full py-24 flex justify-center transition-colors duration-300 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container px-6 md:px-12">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
          Recent Projects
        </h2>
        <div className="border-b border-gray-400 dark:border-gray-600 w-24 mx-auto mb-8"></div>

        {/* Dynamic Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full"
        >
          {projects.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full shadow-md hover:shadow-xl border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                {/* Card Header with Full-Width Image */}
                <CardHeader className="p-0 w-full">
                  <img
                    src={item.image}
                    className="w-full h-56 object-cover rounded-t-lg"
                    alt={item.title}
                  />
                </CardHeader>

                {/* Card Body with Flex for Alignment */}
                <CardBody className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow min-h-[80px]">
                    {item.description}
                  </p>

                  {/* Technologies & Link Section */}
                  <div className="mt-auto">
                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/20 text-primary dark:text-primary-light border border-primary/50 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
