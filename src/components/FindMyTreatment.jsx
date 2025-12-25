import { useState } from "react";

export default function FindMyTreatment() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-[#FCEBDE] py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C] mb-6">
            Find My Treatment
          </h2>

          <h3 className="text-xl font-medium text-[#9E4A47] mb-6">
            Truth Leads to the Right Treatment
          </h3>

          <div className="space-y-4 text-sm md:text-base text-[#828D9C] leading-relaxed max-w-2xl">
            <p>
              At Satya, we don’t chase trends — we trace truths.
            </p>

            <p>
              Every concern tells us something deeper about your body, your
              lifestyle, and your goals. Let’s uncover what your skin or hair is
              really asking for.
            </p>
          </div>

          {/* ================= CONCERN SELECTOR ================= */}
          <div className="mt-10">
            <p className="text-sm font-medium text-[#2B333C] mb-4">
              What is your concern?
            </p>

            <div className="flex gap-4">
              <ConcernOption
                label="Hair"
                active={selected === "hair"}
                onClick={() => setSelected("hair")}
              />
              <ConcernOption
                label="Skin"
                active={selected === "skin"}
                onClick={() => setSelected("skin")}
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT ACTION ================= */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#DFDFDD] rounded-2xl p-8 shadow-sm">
            <p className="text-sm text-[#828D9C] mb-4">
              Your answers help us guide you toward the most truthful treatment
              path — without assumptions.
            </p>

            <button
              disabled={!selected}
              className={`w-full py-3 rounded-full text-sm font-medium transition ${
                selected
                  ? "bg-[#9E4A47] text-white hover:bg-[#B87C72]"
                  : "bg-[#DFDFDD] text-[#828D9C] cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= SINGLE OPTION ================= */
function ConcernOption({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full border text-sm font-medium transition ${
        active
          ? "bg-[#9E4A47] border-[#9E4A47] text-white"
          : "bg-white border-[#DFDFDD] text-[#2B333C] hover:border-[#9E4A47]"
      }`}
    >
      {label}
    </button>
  );
}
