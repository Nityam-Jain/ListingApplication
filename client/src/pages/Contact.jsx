import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-19 px-10 min-h-screen flex items-center justify-center w-full">

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl grid md:grid-cols-2 gap-16">

        {/* Form Column - Drops from Top */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }} // 0.8 seconds
        >

          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full border rounded-md px-4 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-md px-4 py-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-md px-4 py-2" />
              <input type="text" placeholder="Subject" className="w-full border rounded-md px-4 py-2" />
            </div>

            <textarea rows="5" placeholder="Your Message.." className="w-full border rounded-md px-4 py-2"></textarea>

            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Customer Support Column - Rises from Bottom */}
        <motion.div
          className="bg-gray-200 rounded-lg p-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold mb-4">Customer Support</h2>
          <p className="mb-4">Need some help? Get in touch with us.</p>
          <p className="mb-2">📞 +91 7415093305</p>
          <p className="mb-2">✉️ contact@laptoprepairinbhopal.com</p>
          <p className="mb-4">📍 52, 1st Floor, near Manohar Dairy, Bhopal, MP 462011</p>
          <h3 className="font-semibold mb-1">Working Hours</h3>
          <p>Mon - Sat: 9:00AM - 7:30PM</p>
          <p>Sun: Closed</p>
        </motion.div>
      </div>
    </section>
  );
}
