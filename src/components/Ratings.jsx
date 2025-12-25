import { Star, ArrowRight } from "lucide-react";

export default function Ratings() {
  return (
    <section className="w-full bg-[#FFF8EF] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* STRIPE CONTAINER */}
        <div className="rounded-3xl bg-[#FCEBDE] border border-[#DFDFDD] px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* GOOGLE */}
            <RatingStripe
              platform="Google"
              accent="from-[#9E4A47] to-[#B87C72]"
              headline="Rated 4.9 ★ on Google"
              subtext="1,200+ authentic reviews from Delhi NCR and international patients."
              cta="Read on Google"
            />

            {/* TRUSTPILOT */}
            <RatingStripe
              platform="Trustpilot"
              accent="from-[#2B333C] to-[#828D9C]"
              headline="Rated 4.9 ★ on Trustpilot"
              subtext="Rated Excellent globally for truth-driven, ethical hair & skin transformations."
              cta="View on Trustpilot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STRIPE ITEM ================= */
function RatingStripe({ platform, accent, headline, subtext, cta }) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#FFF8EF] border border-[#DFDFDD]">
      {/* LEFT ACCENT BAR */}
      <div
        className={`w-full sm:w-1.5 h-1.5 sm:h-full rounded-full bg-gradient-to-b ${accent}`}
      />

      {/* CONTENT */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm uppercase tracking-wider text-[#828D9C]">
            {platform}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[#2B333C] mb-2">
          {headline}
        </h3>

        {/* STARS */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-[#9E4A47] text-[#9E4A47]"
            />
          ))}
        </div>

        <p className="text-sm text-[#828D9C] mb-4 max-w-md">
          {subtext}
        </p>

        <button className="inline-flex items-center gap-2 text-sm font-medium text-[#9E4A47] hover:text-[#B87C72] transition">
          {cta}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
