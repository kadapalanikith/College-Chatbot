import { aboutContent, images } from "../data/content";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left - Images */}
          <div className="relative w-full">
            <img
              src={images.collegeClassroom}
              alt="EduReach classroom"
              className="rounded-xl shadow-lg w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            {/* Small overlay image — only visible on md+ to prevent mobile overflow */}
            <div className="hidden md:block absolute -bottom-5 -right-5 z-10">
              <img
                src={images.tech1}
                alt="Technology lab"
                className="w-36 h-36 object-cover rounded-xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="mt-4 md:mt-0">
            <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
              {aboutContent.subtitle}
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold mb-4 sm:mb-6 leading-tight">
              {aboutContent.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              {aboutContent.description}
            </p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-cream rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <p className="text-xl sm:text-2xl font-bold text-maroon">{item.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}