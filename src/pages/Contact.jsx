import {
  Mail,
  Phone,
  MapPin,
  SendHorizonal,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY // 🔁 Replace with actual PUBLIC KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        toast.error("Something went wrong. Try again!");
      });
  };

  return (
    <section
      id="contact"
      className=" bg-white text-slate-600 dark:bg-slate-900 dark:text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Get in <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">rayyyanjali@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+91 6290971873</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Kolkata, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-gray-400 mb-3">Connect With Me</p>
              <div className="flex  gap-5">
                <a
                  href="https://www.linkedin.com/in/anjali-ray-592200341/"
                  className="hover:text-blue-400"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/AnjaliRayyy"
                  className="hover:text-blue-400"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/anjali_rayyy/?hl=en"
                  className="hover:text-blue-400"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        {/* 👉 Right Contact Form */}
        {/* Right: Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-[70%] lg:w-[75%] bg-slate-950 p-8 rounded-xl shadow-lg"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-slate-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-slate-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="bg-slate-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2 rounded-md text-white font-medium"
            >
              Send Message <SendHorizonal size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
