 import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FooterBox() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Shuddh Swad Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Lapcom Solutions</h3>
          <p className="mb-4 text-sm">
           
          </p>
          <div className="flex space-x-3 text-xl">
            <a href="#" className="hover:text-red-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
         </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Enterprise</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-yellow-500">Our Story</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="/services" className="hover:text-yellow-500">Sevices</a></li>
          </ul>
        </div>
        {/* Get in Touch */}
        <div>
          <h4 className="font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="inline-block mr-1">📍</span>UGF-1, Alakhnanda Complex, MP Nagar Zone-I, Indira Press Complex, Zone 1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
            </li>
            <li>
              <span className="inline-block mr-1">📞</span>
              +91 8085202892 <br />
              <span className="text-xs text-gray-400">Mon - Sat, 10:30am - 9:00pm</span> <br />
              <span className="text-xs text-gray-400">Sun, 12:00pm - 8:00pm</span>
            </li>
            <li>
              <span className="inline-block mr-1">✉️</span>
             Lapcomsolution23@gmail.com
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-xs text-gray-400">
        © 2025 Lapcom Solutions. All Rights Reserved | Developed By NityamJ.
      </div>
    </footer>
  );
}
