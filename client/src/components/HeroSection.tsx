import { images, siteConfig } from "../data/content";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[560px] max-h-[900px]">
      <img
        src={images.hero}
        alt="EduReach Campus"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-maroon-dark/90 via-maroon/75 to-maroon/50" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <p
            className="text-white/70 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            {siteConfig.established} · Hyderabad, Telangana
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-4 sm:mb-6">
            Welcome to{" "}
            <span className="block text-amber-300">{siteConfig.name} College</span>
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed">
            {siteConfig.tagline}. Premier engineering institution with{" "}
            <span className="font-semibold text-amber-200">92% placement rate</span> and
            partnerships with Google, Microsoft &amp; Amazon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#courses"
              className="inline-flex items-center justify-center bg-white text-maroon px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 hover:text-maroon-dark transition-colors duration-300 shadow-lg text-sm sm:text-base"
            >
              Explore Programs
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border-2 border-white/60 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white/10 to-transparent" />
    </section>
  );
}