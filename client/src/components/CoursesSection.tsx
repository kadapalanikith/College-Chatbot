import { coursesContent, images } from "../data/content";
import { BookOpen, Users } from "lucide-react";

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-maroon font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            World-Class Education
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Programs Offered
          </h2>
        </div>

        {/* B.Tech grid */}
        <div className="mb-8 sm:mb-10">
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            B.Tech Programs{" "}
            <span className="text-sm font-normal text-gray-500 font-body">(4 Years)</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {coursesContent.btech.map((course) => (
              <div
                key={course.name}
                className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-maroon hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-maroon/10 flex items-center justify-center shrink-0 group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-4 h-4 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                      {course.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.seats} seats
                      </span>
                      <span className="text-maroon font-semibold">{course.avg}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* M.Tech & MBA */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* M.Tech */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={images.tech2}
                alt="M.Tech"
                className="w-14 h-14 rounded-lg object-cover shrink-0"
                loading="lazy"
              />
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-800">
                M.Tech Programs
              </h3>
            </div>
            <div className="space-y-0">
              {coursesContent.mtech.map((course) => (
                <div
                  key={course.name}
                  className="flex justify-between items-center text-sm py-2.5 border-b border-gray-50 last:border-0"
                >
                  <span className="text-gray-700 font-medium">{course.name}</span>
                  <span className="text-gray-500 shrink-0 ml-2">{course.seats} seats</span>
                </div>
              ))}
            </div>
          </div>

          {/* MBA */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={images.tech3}
                alt="MBA"
                className="w-14 h-14 rounded-lg object-cover shrink-0"
                loading="lazy"
              />
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-gray-800">
                MBA Program
              </h3>
            </div>
            <p className="text-gray-700 font-medium">{coursesContent.mba.name}</p>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <span className="text-gray-500">{coursesContent.mba.seats} seats</span>
              <span className="text-maroon font-semibold">{coursesContent.mba.avg}</span>
            </div>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Specializations in Finance, Marketing, HR, and IT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}