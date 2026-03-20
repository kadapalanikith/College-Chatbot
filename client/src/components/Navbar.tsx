import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <GraduationCap className="w-7 h-7 text-maroon" />
          <span className="font-heading text-xl font-bold text-maroon">EduReach</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-maroon transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg hover:bg-maroon/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden lg:block">
                Hi, <span className="font-medium text-gray-800">{user.name.split(" ")[0]}</span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm bg-maroon/10 text-maroon px-3 py-1.5 rounded-lg hover:bg-maroon hover:text-white transition-colors duration-200 font-medium"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-maroon font-medium hover:text-maroon-dark transition-colors duration-200 px-3 py-1.5"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm bg-maroon text-white px-4 py-2 rounded-lg hover:bg-maroon-dark transition-colors duration-200 font-medium shadow-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-maroon transition-colors duration-200 p-1.5 rounded-lg hover:bg-maroon/5"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu — animated slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-maroon hover:bg-maroon/5 transition-colors duration-200 px-3 py-2 rounded-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-3">
            {user ? (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Hi, <span className="font-medium text-gray-800">{user.name.split(" ")[0]}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm text-maroon font-medium bg-maroon/10 px-3 py-1.5 rounded-lg hover:bg-maroon hover:text-white transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center text-maroon font-medium border border-maroon/30 px-4 py-2 rounded-lg hover:border-maroon hover:bg-maroon/5 transition-colors duration-200 text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center bg-maroon text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-maroon-dark transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}