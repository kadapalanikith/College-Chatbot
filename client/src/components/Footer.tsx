import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-14 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-7 h-7 text-amber-300" />
              <span className="font-heading text-xl font-bold">EduReach</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier engineering institution established in 2005. AICTE approved, JNTU Hyderabad affiliated. Shaping future engineers and leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <nav className="space-y-2 text-sm text-gray-400">
              <a href="#about" className="block hover:text-amber-300 transition-colors duration-200">
                About Us
              </a>
              <a href="#courses" className="block hover:text-amber-300 transition-colors duration-200">
                Programs
              </a>
              <a href="#mentors" className="block hover:text-amber-300 transition-colors duration-200">
                Faculty
              </a>
              <a href="#campus" className="block hover:text-amber-300 transition-colors duration-200">
                Campus Life
              </a>
              <a href="#placements" className="block hover:text-amber-300 transition-colors duration-200">
                Placements
              </a>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Programs</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>B.Tech (6 specializations)</p>
              <p>M.Tech (3 specializations)</p>
              <p>MBA (Finance, Marketing, HR, IT)</p>
              <p className="mt-4 text-amber-300/80 font-medium">Admissions Open: March 1st</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-300 transition-colors duration-200 break-all">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-300 transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-gray-500">
          <p>© {year} EduReach College, Hyderabad. All rights reserved.</p>
          <p className="text-gray-600">Made with ♥ in Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}