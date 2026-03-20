import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import QuotesSection from "../components/QuotesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import EventsGallery from "../components/EventsGallery";
import CounselorCTA from "../components/CounselorCTA";
import HiringStatsSection from "../components/HiringStatsSection";
import Footer from "../components/Footer";

export default function HomePage() {
  const { user, guestLogin } = useAuth();
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  // Scroll trigger — show signup popup when visitor reaches Mentors section
  const handleReachMentors = () => {
    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowSignupPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  };

  return (
    <div>
      {/* Visible to everyone */}
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CoursesSection />
      <QuotesSection />
      <MentorsSection onReachMentors={handleReachMentors} />

      {/* Content below Mentors — GATED */}
      {user ? (
        <>
          <StudentLifeSection />
          <EventsGallery />
          <CounselorCTA onOpenCall={() => setShowCallPopup(true)} />
          <HiringStatsSection />
          <Footer />
        </>
      ) : (
        <>
          {/* Gate wall — teaser for non-registered users */}
          <section className="py-16 sm:py-20 bg-cream text-center px-4 sm:px-6">
            <div className="max-w-2xl mx-auto">
              <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
                Exclusive Access
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Want to See More?
              </h2>
              <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Create a free account to unlock campus life, events, placement statistics,
                and our AI-powered counsellor chat.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-8">
                {[
                  "🏛️ Campus & Student Life",
                  "📸 Events Gallery",
                  "📊 Placement Data",
                  "🤖 AI Counsellor Chat",
                ].map((f) => (
                  <span key={f} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setShowSignupPopup(true)}
                  className="bg-maroon text-white px-7 py-3 rounded-xl font-semibold hover:bg-maroon-dark transition-colors duration-200 shadow-sm"
                >
                  Sign Up to Unlock — It&apos;s Free
                </button>
                <a
                  href="/login"
                  className="border border-maroon/30 text-maroon px-7 py-3 rounded-xl font-semibold hover:border-maroon hover:bg-maroon/5 transition-colors duration-200 text-sm sm:text-base"
                >
                  Already a member? Login
                </a>
                <button
                  onClick={() => {
                    guestLogin();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-gray-100 text-gray-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base"
                >
                  Continue as Guest
                </button>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}

      <SignupPopup show={showSignupPopup} onClose={() => setShowSignupPopup(false)} />
      <CallPopup open={showCallPopup} onClose={() => setShowCallPopup(false)} />
    </div>
  );
}