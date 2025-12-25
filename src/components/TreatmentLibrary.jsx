export default function TreatmentLibrary() {
  return (
    <section className="w-full bg-[#FFF8EF] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C] mb-4">
            Treatments Designed for Truthful Results
          </h2>
          <p className="text-sm md:text-base text-[#828D9C] leading-relaxed">
            Every treatment at Satya is chosen for medical relevance, long-term
            safety, and natural outcomes — never trends or shortcuts.
          </p>
        </div>

        {/* ================= SKIN ================= */}
        <TreatmentSection
          title="🧴 Skin Treatments"
          items={SKIN_TREATMENTS}
        />

        {/* ================= HAIR ================= */}
        <TreatmentSection
          title="💇‍♂️ Hair Treatments"
          items={HAIR_TREATMENTS}
        />
      </div>
    </section>
  );
}

/* ================= SECTION ================= */
function TreatmentSection({ title, items }) {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold text-[#2B333C] mb-8">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <TreatmentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

/* ================= CARD ================= */
function TreatmentCard({ name, desc }) {
  return (
    <div className="bg-white border border-[#DFDFDD] rounded-2xl p-6 hover:border-[#9E4A47] transition">
      <h4 className="text-sm font-semibold text-[#2B333C] mb-2">
        {name}
      </h4>
      <p className="text-sm text-[#828D9C] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

/* ================= DATA ================= */

const SKIN_TREATMENTS = [
  {
    name: "AFT SSR",
    desc:
      "Advanced light therapy that reduces redness, pigmentation, and sun damage for balanced, radiant skin.",
  },
  {
    name: "Medical Facial",
    desc:
      "Dermatologist-designed facial combining actives and technology for deep cleansing and cellular renewal.",
  },
  {
    name: "Acne Medicine",
    desc:
      "Personalized oral + topical regimens that target bacteria, oil, and inflammation at the root.",
  },
  {
    name: "Clear Skin (Erbium)",
    desc:
      "Precision laser resurfacing that refines texture and removes damaged layers for fresh, smooth skin.",
  },
  {
    name: "Clear Lift (Q Switch)",
    desc:
      "Gentle laser toning that fades pigmentation and boosts collagen without downtime.",
  },
  {
    name: "Mole Removal",
    desc:
      "Quick, scar-minimal radiofrequency or laser procedure to remove unwanted moles safely.",
  },
  {
    name: "Dermapen 4",
    desc:
      "Microneedling innovation that stimulates collagen for acne scars, pores, and rejuvenation.",
  },
  {
    name: "CO₂ Fractional Laser",
    desc:
      "Gold-standard resurfacing for scars, stretch marks, and advanced anti-aging.",
  },
  {
    name: "Morpheus 8",
    desc:
      "Radiofrequency + microneedling duo that tightens, lifts, and contours skin from within.",
  },
  {
    name: "Botox, Fillers & Thread Lift",
    desc:
      "Age-defying injectables that smooth lines, restore volume, and enhance facial harmony.",
  },
  {
    name: "Chemical Peel",
    desc:
      "Targeted exfoliation to clear dullness, acne, and pigmentation for even-toned glow.",
  },
  {
    name: "HIFU",
    desc:
      "Non-surgical facelift technology that lifts and firms deeper skin layers.",
  },
  {
    name: "Laser Hair Reduction",
    desc:
      "Pain-lite laser that permanently reduces unwanted hair for long-term smoothness.",
  },
  {
    name: "OPD Skin Consultation",
    desc:
      "Comprehensive dermatologist evaluation to design your perfect treatment plan.",
  },
  {
    name: "PRP Facial",
    desc:
      "Uses your own platelets to boost collagen and restore youthful glow.",
  },
  {
    name: "Hydra Facial",
    desc:
      "Vacuum-based deep cleansing + hydration for instantly refreshed skin.",
  },
];

/* ================= HAIR ================= */

const HAIR_TREATMENTS = [
  {
    name: "SMP (Scalp Micropigmentation)",
    desc:
      "Non-surgical technique that camouflages thinning areas for a fuller, natural look.",
  },
  {
    name: "SHT (Satya Hybrid Transplant)",
    desc:
      "Exclusive blend of FUT + FUE for maximum density and minimal donor loss.",
  },
  {
    name: "Repair Hair Transplant",
    desc:
      "Corrects failed or botched surgeries using advanced DSFT + BHT techniques.",
  },
  {
    name: "NHT + SHT",
    desc:
      "Customized dual-method transplant optimizing density and naturalness.",
  },
  {
    name: "NHT (Natural Hair Transplant)",
    desc:
      "Minimally invasive follicular harvest preserving graft health and aesthetics.",
  },
  {
    name: "PRP / GFC / QR678 Therapy",
    desc:
      "Growth-factor infusions that strengthen roots and stimulate regrowth.",
  },
  {
    name: "OPD Hair Consultation",
    desc:
      "Detailed trichology diagnosis and digital analysis to plan restoration.",
  },
  {
    name: "Hairline Design",
    desc:
      "Artistic, face-balanced hairline reconstruction mimicking natural density.",
  },
  {
    name: "Beard Transplant",
    desc:
      "Precision grafting for fuller beard contours and masculine definition.",
  },
  {
    name: "Eyebrow Transplant",
    desc:
      "Delicate restoration for natural, expressive brows using fine follicle placement.",
  },
];
