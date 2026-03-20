import { useEffect, useRef } from "react";
import { mentorsContent } from "../data/content";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (triggered.current || !sectionRef.current || !onReachMentors) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        triggered.current = true;
        onReachMentors();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onReachMentors]);

  return (
    <section id="mentors" ref={sectionRef} className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Learn from the Best
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Popular Mentors
          </h2>
        </div>

        {/* Scrollable on mobile, grid on md+ */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:gap-5 lg:gap-6">
          {mentorsContent.map((mentor) => (
            <div
              key={mentor.name}
              className="min-w-[240px] sm:min-w-[260px] md:min-w-0 bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 snap-start shrink-0 md:shrink"
            >
              {/* Fixed aspect ratio for consistent crop */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                  {mentor.name}
                </h3>
                <p className="text-maroon text-xs sm:text-sm font-medium mt-0.5 mb-2">{mentor.role}</p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-1.5">{mentor.bio}</p>
                <p className="text-xs text-gray-400">
                  <span className="font-medium text-gray-500">Teaches: </span>
                  {mentor.teaches}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}