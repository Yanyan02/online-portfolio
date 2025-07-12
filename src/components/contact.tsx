import { motion } from "framer-motion";
import { Input, Textarea, Button, Card } from "@heroui/react";
import Swal from "sweetalert2";
export const Contact = () => {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1d85f487-9d91-42b1-8a75-3b68785b2d03");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        text: "Message Sent Successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        text: "If error persist contact me directly at mariannemaepaclian1998@gmail.com",
        icon: "error",
      });
    }
  };

  return (
    <section className="w-full py-24 flex justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl px-8"
      >
        <Card className="p-10 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-2xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Get in Touch
          </h2>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <Input label="Name" type="text" variant="bordered" required />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Input
                label="E-mail"
                type="email"
                name="email"
                variant="bordered"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <Textarea
                label="Message"
                name="message"
                variant="bordered"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-16 text-xl font-semibold bg-primary text-white rounded-xl hover:bg-primary-dark transition duration-300 shadow-lg"
            >
              Send Message 🚀
            </Button>
          </form>
        </Card>
      </motion.div>
    </section>
  );
};
