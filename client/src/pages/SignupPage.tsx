import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, User, Mail, Lock, Phone, ArrowLeft, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { registerUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { images } from "../data/content.ts";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, guestLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in required fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const data = await registerUser({ name, email, password, phone: phone || undefined });
      login(data.token);
      toast.success("Account created! Welcome to EduReach.");
      navigate("/");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form side — left on signup */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-cream min-h-screen lg:min-h-0 order-2 lg:order-1">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-maroon transition-colors duration-200 mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-6 lg:hidden">
            <GraduationCap className="w-7 h-7 text-maroon" />
            <span className="font-heading text-xl font-bold text-maroon">EduReach</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Create Account</h1>
          <p className="text-gray-500 mb-7 text-sm sm:text-base">
            Join EduReach for AI chat &amp; counseling calls
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="signup-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  autoComplete="name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all duration-200 text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all duration-200 text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="signup-password"
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  autoComplete="new-password"
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all duration-200 text-sm bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="signup-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91-9876543210"
                  autoComplete="tel"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/20 transition-all duration-200 text-sm bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-maroon text-white py-3 rounded-xl font-semibold hover:bg-maroon-dark disabled:opacity-60 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6 mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-maroon font-medium hover:underline">
              Sign In
            </Link>
          </p>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-cream text-gray-500">Or continue without an account</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              guestLogin();
              navigate("/");
            }}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Continue as Guest
          </button>
        </div>
      </div>

      {/* Decorative side — desktop only */}
      <div className="hidden lg:block lg:w-1/2 relative shrink-0 order-1 lg:order-2">
        <img
          src={images.moreStudents}
          alt="EduReach students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-bl from-maroon-dark/90 via-maroon/80 to-maroon/60 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-sm">
            <GraduationCap className="w-16 h-16 mx-auto mb-4 text-amber-300" />
            <h2 className="font-heading text-4xl font-bold mb-3">Join EduReach</h2>
            <p className="text-white/80 text-lg">
              92% placement rate · Top recruiters · 25-acre campus
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-amber-300">850+</p>
                <p className="text-white/70 text-sm">Total Offers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-300">₹42 LPA</p>
                <p className="text-white/70 text-sm">Highest Package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}