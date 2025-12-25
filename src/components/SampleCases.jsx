export default function SampleCases() {
  return (
    <section className="w-full bg-[#FFF8EF] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2B333C] mb-3">
              Sample Case Cards
            </h2>
            <p className="text-sm md:text-base text-[#828D9C] leading-relaxed">
              A glimpse into real journeys — where complex cases were handled
              with ethics, medical precision, and long-term thinking.
            </p>
          </div>

          <button className="self-start lg:self-auto inline-flex items-center gap-2 text-sm font-medium text-[#9E4A47] border border-[#9E4A47] px-6 py-3 rounded-full hover:bg-[#9E4A47] hover:text-white transition">
            View All Case Studies →
          </button>
        </div>

        {/* ================= CASE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((item, index) => (
            <CaseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CASE DATA ================= */
const CASES = [
  {
    category: "Hair",
    name: "Captain Mike – The 9th Time That Worked",
    procedure: "DSFT + BHT + Min-Med Approach™",
    highlight: "8 failed surgeries, one honest restoration.",
  },
  {
    category: "Hair",
    name: "Dr. Vaibhav – Frontline Restoration",
    procedure: "DSFT-Zero™ + SIFD Repair",
    highlight: "Natural density, zero medication, complete trust.",
  },
  {
    category: "Skin",
    name: "Shivani – From Scars to Radiance",
    procedure: "PDRN Restore™ + ExoRegen Therapy™",
    highlight:
      "Skin reborn through regeneration, not concealment.",
  },
  {
    category: "Skin",
    name: "Lokesh – Precision Pigment Control",
    procedure:
      "Cosemelan Precision Peel™ + 5D Medifacial™",
    highlight:
      "Correcting melasma with controlled science and calm skin recovery.",
  },
];

/* ================= SINGLE CARD ================= */
function CaseCard({ category, name, procedure, highlight }) {
  return (
    <div className="group bg-white border border-[#DFDFDD] rounded-2xl p-6 flex flex-col justify-between hover:border-[#9E4A47] transition">
      {/* TOP */}
      <div>
        <span className="inline-block text-xs uppercase tracking-wide text-[#9E4A47] mb-3">
          {category}
        </span>

        <h3 className="text-sm font-semibold text-[#2B333C] mb-3 leading-snug">
          {name}
        </h3>

        <p className="text-xs text-[#828D9C] mb-3">
          <span className="font-medium text-[#2B333C]">
            Procedure:
          </span>{" "}
          {procedure}
        </p>

        <p className="text-sm text-[#2B333C] italic leading-relaxed">
          “{highlight}”
        </p>
      </div>

      {/* CTA */}
      <button className="mt-6 text-sm font-medium text-[#9E4A47] hover:underline self-start">
        Learn Full Case →
      </button>
    </div>
  );
}
