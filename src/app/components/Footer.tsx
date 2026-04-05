import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#2C1810] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-[#D4A574] font-bold text-lg mb-4">Vedic Bal Niketan</h3>
            <p className="text-sm mb-4">
              Dedicated to providing quality education and nurturing young minds for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4A574] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#D4A574] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#D4A574] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#D4A574] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4A574] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#D4A574] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4A574] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#D4A574] transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4A574] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A574] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D4A574] font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <span>Chhainsa Ballabhgarh<br />Faridabad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#D4A574] flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9467883040" className="hover:text-[#D4A574] transition-colors">
                    9467883040
                  </a>
                  <a href="tel:9467883050" className="hover:text-[#D4A574] transition-colors">
                    9467883050
                  </a>
                  <a href="tel:7027343447" className="hover:text-[#D4A574] transition-colors">
                    7027343447
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#D4A574] flex-shrink-0" />
                <a href="mailto:info@vedicbalniketan.com" className="hover:text-[#D4A574] transition-colors">
                  info@vedicbalniketan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vedic Bal Niketan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}