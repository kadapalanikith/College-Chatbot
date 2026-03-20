import { achievementsContent } from "../data/content";

export default function AchievementsSection() {
  return (
    <section className="bg-maroon py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {achievementsContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading leading-none">
                {stat.value}
              </p>
              <div className="w-8 h-0.5 bg-amber-300 mx-auto my-2 sm:my-3" />
              <p className="text-white/80 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}