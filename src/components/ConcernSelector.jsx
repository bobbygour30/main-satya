import { useState } from "react";

export default function ConcernSelector() {
  const [category, setCategory] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-[#FCEBDE] py-24 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="w-full max-w-md bg-white border border-[#DFDFDD] rounded-2xl p-8 shadow-sm">
          
          {/* ================= STEP 1 ================= */}
          {!category && (
            <>
              <h2 className="text-xl font-semibold text-[#2B333C] mb-6 text-center">
                What would you like to focus on?
              </h2>

              <div className="flex flex-col gap-4">
                <ChoiceButton
                  label="Skin"
                  onClick={() => setCategory("skin")}
                />
                <ChoiceButton
                  label="Hair"
                  onClick={() => setCategory("hair")}
                />
              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {category && (
            <>
              <h2 className="text-lg font-semibold text-[#2B333C] mb-4 text-center">
                Select your primary concern
              </h2>

              <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
                {(category === "hair" ? HAIR_CONCERNS : SKIN_CONCERNS).map(
                  (item) => (
                    <ConcernItem
                      key={item}
                      label={item}
                      active={selected === item}
                      onClick={() => setSelected(item)}
                    />
                  )
                )}
              </div>

              <button
                disabled={!selected}
                className={`mt-6 w-full py-3 rounded-full text-sm font-medium transition ${
                  selected
                    ? "bg-[#9E4A47] text-white hover:bg-[#B87C72]"
                    : "bg-[#DFDFDD] text-[#828D9C] cursor-not-allowed"
                }`}
              >
                Proceed
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ================= DATA ================= */
const HAIR_CONCERNS = [
  "I’m losing hair from the front or crown",
  "My hair looks thin or lacks density",
  "I’ve had a failed or unnatural transplant",
  "I want to improve my hairline design",
  "I have scalp scarring or visible gaps",
  "I want beard or eyebrow restoration",
];

const SKIN_CONCERNS = [
  "I have acne or acne scars",
  "My skin feels dull or uneven",
  "I have pigmentation or melasma",
  "I have fine lines or early wrinkles",
  "I have sensitivity or redness",
  "I want overall skin glow and renewal",
];

/* ================= COMPONENTS ================= */
function ChoiceButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 rounded-full bg-[#9E4A47] text-white text-sm font-medium hover:bg-[#B87C72] transition"
    >
      {label}
    </button>
  );
}

function ConcernItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${
        active
          ? "border-[#9E4A47] bg-[#FCEBDE] text-[#2B333C]"
          : "border-[#DFDFDD] text-[#828D9C] hover:border-[#9E4A47]"
      }`}
    >
      {label}
    </button>
  );
}
