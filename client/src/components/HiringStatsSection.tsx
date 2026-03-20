import { topRecruiters, deptPlacements, images } from "../data/content";
import { TrendingUp } from "lucide-react";

export default function HiringStatsSection() {
  return (
    <section id="placements" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Where Our Students Go
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Placement Highlights 2023–24
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Dept placements */}
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-9 h-9 rounded-lg bg-maroon/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-maroon" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-semibold text-gray-800">
                Average Package by Department
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {deptPlacements.map((item) => (
                <div key={item.dept}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1.5">
                    <span className="text-gray-700 font-medium">{item.dept}</span>
                    <span className="text-maroon font-semibold">{item.avg}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-linear-to-r from-maroon to-maroon-light h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: images + recruiters */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Photo grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <img
                src={images.recruter1}
                alt="Campus placement"
                className="rounded-lg sm:rounded-xl w-full object-cover"
                style={{ aspectRatio: "1/1" }}
                loading="lazy"
              />
              <img
                src={images.recruter2}
                alt="MNC companies"
                className="rounded-lg sm:rounded-xl w-full object-cover"
                style={{ aspectRatio: "1/1" }}
                loading="lazy"
              />
              <img
                src={images.moreStudents}
                alt="Students"
                className="rounded-lg sm:rounded-xl w-full object-cover"
                style={{ aspectRatio: "1/1" }}
                loading="lazy"
              />
            </div>

            {/* Top recruiters */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm flex-1">
              <h3 className="font-heading text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Top Recruiters
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {topRecruiters.map((company) => (
                  <span
                    key={company}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-cream text-gray-700 rounded-full text-xs sm:text-sm border border-gray-200 hover:border-maroon hover:text-maroon transition-colors duration-200 cursor-default"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}