import { eventsGallery } from "../data/content";

const EventsGallery = () => (
  <section id="events" className="py-16 sm:py-20 bg-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
          Life at EduReach
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Events &amp; Highlights
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
        {eventsGallery.map((item: { title: string; image: string }) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-lg sm:rounded-xl aspect-square shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
              <p className="text-white text-xs sm:text-sm font-medium px-3 pb-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsGallery;