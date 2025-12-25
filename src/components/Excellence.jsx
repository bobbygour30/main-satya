import { Heart, Globe, Scissors, Microscope, Smile } from "lucide-react";

const EXCELLENCE = [
  {
    stat: "20+ Years",
    title: "Two Decades of Truth-Based Medical Practice",
    desc:
      "From pioneers in DSFT to leaders in corrective transplants — our journey has shaped the standards of ethical aesthetics.",
    icon: Microscope,
  },
  {
    stat: "265,000+",
    title: "Every Number, a Story of Confidence Restored",
    desc:
      "From students to CEOs, patients across the world have trusted Satya to heal their skin and restore their identity.",
    icon: Smile,
  },
  {
    stat: "15,000+",
    title: "Results Designed, Not Duplicated",
    desc:
      "Each procedure is an original — a blend of surgical mastery, design sensibility, and medical foresight.",
    icon: Scissors,
  },
  {
    stat: "2,000+",
    title: "Repair Specialists, Globally Trusted",
    desc:
      "We fix what others couldn’t. Every repair is a second chance — handled with precision, compassion, and truth.",
    icon: Microscope,
  },
  {
    stat: "40+ Countries",
    title: "Chosen Across Continents",
    desc:
      "From Delhi to Dubai to Dallas — our work travels farther than our name.",
    icon: Globe,
  },
  {
    stat: "Our Soft Power",
    title: "100% Honest Consultations",
    desc:
      "We tell you what’s medically right, not what’s commercially easy.",
    icon: Heart,
  },
];

export default function Excellence() {
  return (
    <section className="w-full bg-[#FFF8EF] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#828D9C] mb-3">
            Proof of Excellence
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C]">
            Recognized for Redefining Restoration
          </h2>
        </div>

        {/* STRIPES */}
        <div className="space-y-6">
          {EXCELLENCE.map((item, index) => (
            <ExcellenceStripe key={index} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#9E4A47] text-white font-medium hover:bg-[#B87C72] transition">
            View Global Patients Map
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= SINGLE STRIPE ================= */
function ExcellenceStripe({ stat, title, desc, icon: Icon }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#FCEBDE] border border-[#DFDFDD]">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 p-8 items-center">
        {/* LEFT STAT BLOCK */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#9E4A47]/10 flex items-center justify-center">
              <Icon size={20} className="text-[#9E4A47]" />
            </div>
            <span className="text-sm uppercase tracking-widest text-[#828D9C]">
              Excellence
            </span>
          </div>

          <div className="text-3xl font-semibold text-[#2B333C]">
            {stat}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h3 className="text-xl font-semibold text-[#2B333C] mb-3">
            {title}
          </h3>
          <p className="text-sm md:text-base text-[#828D9C] max-w-3xl">
            {desc}
          </p>
        </div>
      </div>

      {/* SUBTLE ACCENT */}
      <div className="absolute inset-y-0 right-0 w-1 bg-[#9E4A47]" />
    </div>
  );
}
