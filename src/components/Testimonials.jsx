import { useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(TESTIMONIALS[0]);

  return (
    <section className="w-full bg-[#FCEBDE] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C]">
            Stories That Speak for Themselves
          </h2>
          <p className="text-sm md:text-base text-[#828D9C] max-w-md">
            Real journeys. Honest experiences. Lasting transformations.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= FEATURED TESTIMONIAL ================= */}
          <div className="lg:col-span-7 bg-white border border-[#DFDFDD] rounded-2xl p-6">
            {/* IMAGE PLACEHOLDER */}
            <div className="w-full h-64 bg-[#DFDFDD] rounded-xl mb-6 flex items-center justify-center text-[#828D9C] text-sm">
              Patient Image / Video Placeholder
            </div>

            {/* QUOTE */}
            <blockquote className="text-lg text-[#2B333C] italic mb-4">
              “{active.quote}”
            </blockquote>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-[#2B333C]">
                  {active.name}
                </p>
                <p className="text-xs text-[#828D9C]">
                  {active.procedure}
                </p>
              </div>

              <span className="text-xs text-[#9E4A47] font-medium">
                Verified Patient
              </span>
            </div>
          </div>

          {/* ================= CATEGORY LIST ================= */}
          <div className="lg:col-span-5 space-y-3">
            {TESTIMONIALS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`w-full text-left px-5 py-4 rounded-xl border transition ${
                  active.id === item.id
                    ? "bg-white border-[#9E4A47]"
                    : "bg-[#FFF8EF] border-[#DFDFDD] hover:border-[#9E4A47]"
                }`}
              >
                <p className="text-sm font-medium text-[#2B333C]">
                  {item.procedure}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ================= DOTS ================= */}
        <div className="flex gap-2 mt-10">
          {TESTIMONIALS.map((item) => (
            <span
              key={item.id}
              className={`w-2.5 h-2.5 rounded-full ${
                active.id === item.id
                  ? "bg-[#9E4A47]"
                  : "bg-[#DFDFDD]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= DUMMY DATA ================= */

const TESTIMONIALS = [
  {
    id: 1,
    name: "Jane Doe",
    procedure: "Hair Transplant Repair",
    quote:
      "This procedure changed my life completely. After multiple failed surgeries elsewhere, Satya finally restored not just my hair, but my confidence.",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    procedure: "Acne Scar Revision",
    quote:
      "I stopped hiding my face. The doctors focused on healing my skin, not masking it. The results feel natural and deeply personal.",
  },
  {
    id: 3,
    name: "Ananya Kapoor",
    procedure: "Laser Resurfacing",
    quote:
      "My skin looks healthier, not artificial. Every step was explained with honesty, which made me trust the process completely.",
  },
  {
    id: 4,
    name: "Neha Sharma",
    procedure: "Lip Augmentation",
    quote:
      "The approach was subtle and thoughtful. Friends noticed freshness, not fillers. That’s exactly what I wanted.",
  },
  {
    id: 5,
    name: "Amit Verma",
    procedure: "Facelift",
    quote:
      "There was no rush, no pressure. Just clear guidance and ethical decisions. The results feel like time reversed gently.",
  },
  {
    id: 6,
    name: "Sandeep Rao",
    procedure: "Hair Transplant",
    quote:
      "What stood out was transparency. They explained what was possible and what wasn’t. The outcome exceeded expectations.",
  },
];
