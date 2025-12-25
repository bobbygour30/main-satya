export default function ObserveTransformation() {
  return (
    <section className="w-full bg-[#FFF8EF] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ================= INTRO ================= */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C] mb-6">
            Observe the Transformation
          </h2>

          <div className="space-y-4 text-[#828D9C] text-sm md:text-base leading-relaxed">
            <p>
              At Satya, every transformation is a statement of truth — not
              perfection.
            </p>

            <p>
              Our results aren’t filtered or cosmetic illusions; they are
              outcomes of medical artistry, innovation, and ethics.
            </p>

            <p>
              From repair transplants to regenerative skin therapies, each
              journey here reflects science that respects nature — and restores
              confidence that lasts.
            </p>
          </div>

          <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#9E4A47] border border-[#9E4A47] px-6 py-3 rounded-full hover:bg-[#9E4A47] hover:text-white transition">
            See Full Gallery →
          </button>
        </div>

        {/* ================= HAIR RESTORATION ================= */}
        <ProcedureSection
          title="Hair Restoration Procedures"
          procedures={[
            {
              name: "DSFT (Density-Split Follicular Transplant)",
              desc:
                "Satya’s globally recognized technique that merges FUE and FUT principles for high-density natural outcomes with minimal donor stress.",
            },
            {
              name: "MHT (Micro-Hybrid Transplant)",
              desc:
                "A hybrid approach combining micro-grafts and mini-grafts to mimic natural follicular groupings — ideal for crown and mid-scalp blending.",
            },
            {
              name: "BHT (Body Hair Transplant Integration)",
              desc:
                "Strategic use of chest, beard, and body hair to repair depleted donor areas without visible scarring.",
            },
            {
              name: "SIFD (Scalp Induced Follicular Damage Repair)",
              desc:
                "Specialized restorative surgery for patients with scarring, shock loss, or failed graft implantation from previous transplants.",
            },
            {
              name: "Min-Med Approach™ (Minimal Medicine Protocol)",
              desc:
                "A post-transplant recovery system focusing on long-term health, minimal dependence on medications, and natural regrowth stimulation.",
            },
            {
              name: "DSFT-Zero™ (No-Medicine DSFT Evolution)",
              desc:
                "The latest evolution of DSFT designed for patients who want transplant-only results without long-term drugs or supplements.",
            },
          ]}
        />

        {/* ================= SKIN THERAPIES ================= */}
        <ProcedureSection
          title="Skin Regeneration & Aesthetic Therapies"
          procedures={[
            {
              name: "5D Medifacial™",
              desc:
                "A multi-layered rejuvenation protocol combining oxygen infusion, collagen stimulation, LED therapy, and dermal hydration.",
            },
            {
              name: "PDRN Restore™",
              desc:
                "Polynucleotide-based skin repair therapy that regenerates from within, improving elasticity and healing post-acne or pigmentation damage.",
            },
            {
              name: "ExoRegen Therapy™",
              desc:
                "Exosome-based rejuvenation therapy for deep-cell renewal and skin barrier strengthening.",
            },
            {
              name: "Cosemelan Precision Peel™",
              desc:
                "Professional depigmentation system targeting melasma and uneven tone with controlled peeling and barrier restoration.",
            },
            {
              name: "DermaSculpt Fillers™",
              desc:
                "Artistic filler sculpting focusing on structure and proportion rather than volume — enhancing natural contours.",
            },
            {
              name: "Min-Med Skin Protocol™",
              desc:
                "A low-medicine, maintenance-based approach to skin health emphasizing repair and sustainability over product dependency.",
            },
          ]}
        />
      </div>
    </section>
  );
}

/* ================= PROCEDURE SECTION ================= */
function ProcedureSection({ title, procedures }) {
  return (
    <div className="mb-20">
      <h3 className="text-xl md:text-2xl font-semibold text-[#2B333C] mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {procedures.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#DFDFDD] rounded-2xl p-6 hover:border-[#9E4A47] transition"
          >
            <div className="flex gap-3">
              <span className="text-lg">{"1️⃣".repeat(0)}</span>
              <div>
                <h4 className="font-medium text-[#2B333C] mb-2">
                  {item.name}
                </h4>
                <p className="text-sm text-[#828D9C] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
