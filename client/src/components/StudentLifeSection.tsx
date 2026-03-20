import { campusFeatures } from "../data/content";

export default function StudentLifeSection() {
  return (
    <section id="campus" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Beyond the Classroom
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Campus &amp; Student Life
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {campusFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
              style={{ aspectRatio: "16/10" }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              {/* Gradient always visible */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-white font-semibold text-base sm:text-lg leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm mt-1 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}