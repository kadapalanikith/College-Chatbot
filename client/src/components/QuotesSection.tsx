import { useState, useEffect } from "react";
import { quotesContent } from "../data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function QuotesSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % quotesContent.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  const prev = () => goTo((current - 1 + quotesContent.length) % quotesContent.length);
  const next = () => goTo((current + 1) % quotesContent.length);

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
        {/* Large decorative quote mark */}
        <div className="text-6xl sm:text-7xl font-heading text-maroon/20 leading-none mb-2 select-none">
          &ldquo;
        </div>

        <div className="relative min-h-[130px] sm:min-h-[110px] flex items-center justify-center">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-maroon transition-colors duration-200 p-1"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Quote */}
          <div
            className="px-6 sm:px-10 transition-opacity duration-300"
            style={{ opacity: fade ? 1 : 0 }}
          >
            <p className="font-heading text-lg sm:text-2xl md:text-3xl text-gray-800 italic leading-relaxed mb-3 sm:mb-4">
              {quotesContent[current].text}
            </p>
            <p className="text-maroon font-semibold text-sm sm:text-base">
              — {quotesContent[current].author}
            </p>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-maroon transition-colors duration-200 p-1"
            aria-label="Next quote"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5 sm:mt-6">
          {quotesContent.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to quote ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-maroon w-6" : "bg-gray-300 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}