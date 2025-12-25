export default function DiscoverSection() {
  return (
    <section className="w-full bg-[#2B333C] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FFF8EF] mb-4">
            Where Science Meets Self-Awareness
          </h2>

          <div className="space-y-3 text-sm md:text-base text-[#DFDFDD] leading-relaxed">
            <p>
              Your journey to better skin and hair starts with clarity. Explore
              what’s happening beneath the surface and discover treatments that
              restore balance, naturally and truthfully.
            </p>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BIG INTRO CARD */}
          <div className="lg:col-span-5 bg-[#FFF8EF] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#2B333C] mb-4">
                Decode Before You Decide
              </h3>
              <p className="text-sm md:text-base text-[#828D9C] leading-relaxed">
                Your skin doesn’t act out, it speaks out — we decode what it’s
                trying to say using clinical insight and diagnostic clarity.
              </p>
            </div>

            <button className="mt-6 self-start text-sm font-medium text-[#9E4A47] border border-[#9E4A47] px-6 py-3 rounded-full hover:bg-[#9E4A47] hover:text-white transition">
              Check Skin Concerns →
            </button>
          </div>

          {/* SKIN TREATMENTS */}
          <DiscoverCard
            title="Skin Treatments"
            text="Treatments designed not to change your skin, but to help it remember its best self."
            cta="Check Skin Treatments →"
          />

          {/* HAIR CONCERNS */}
          <DiscoverCard
            title="Hair Concerns"
            text="Your hair doesn’t just fall, it signals — we trace the story back to its roots."
            cta="Check Hair Concerns →"
          />

          {/* HAIR TREATMENTS */}
          <DiscoverCard
            title="Hair Treatments"
            text="Treatments crafted not to cover loss, but to bring your hair — and confidence — back to life."
            cta="Check Hair Treatments →"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= DISCOVER CARD ================= */
function DiscoverCard({ title, text, cta }) {
  return (
    <div className="lg:col-span-3 bg-[#FFF8EF] rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-[#2B333C] mb-3">
          {title}
        </h4>
        <p className="text-sm text-[#828D9C] leading-relaxed">
          {text}
        </p>
      </div>

      <button className="mt-6 text-sm font-medium text-[#9E4A47] self-start hover:underline">
        {cta}
      </button>
    </div>
  );
}
