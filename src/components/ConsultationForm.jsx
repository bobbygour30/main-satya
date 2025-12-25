import { useState } from "react";

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    question: "",
    name: "",
    phone: "",
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <section className="w-full bg-[#FFF8EF] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* ================= IMAGE ================= */}
          <div className="w-full h-72 bg-[#FCEBDE] rounded-2xl flex items-center justify-center text-[#828D9C] text-sm">
            Image / Illustration Placeholder
          </div>

          {/* ================= FORM CARD ================= */}
          <div className="bg-white border border-[#DFDFDD] rounded-2xl p-8 shadow-sm">
            
            {/* STEP INDICATOR */}
            <div className="text-xs text-[#828D9C] mb-4">
              Step {step} of 3
            </div>

            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold text-[#2B333C] mb-4">
                  What’s your question?
                </h2>

                <textarea
                  value={form.question}
                  onChange={(e) =>
                    setForm({ ...form, question: e.target.value })
                  }
                  placeholder="Tell us what you’d like help with…"
                  className="w-full border border-[#DFDFDD] rounded-xl p-4 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
                  rows={4}
                />

                <button
                  onClick={next}
                  disabled={!form.question}
                  className={`w-full py-3 rounded-full text-sm font-medium transition ${
                    form.question
                      ? "bg-[#9E4A47] text-white hover:bg-[#B87C72]"
                      : "bg-[#DFDFDD] text-[#828D9C] cursor-not-allowed"
                  }`}
                >
                  Continue →
                </button>
              </>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold text-[#2B333C] mb-4">
                  What’s your name?
                </h2>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Full Name"
                  className="w-full border border-[#DFDFDD] rounded-xl p-4 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
                />

                <div className="flex gap-4">
                  <button
                    onClick={back}
                    className="w-1/2 py-3 rounded-full border border-[#DFDFDD] text-sm text-[#2B333C]"
                  >
                    Back
                  </button>

                  <button
                    onClick={next}
                    disabled={!form.name}
                    className={`w-1/2 py-3 rounded-full text-sm font-medium transition ${
                      form.name
                        ? "bg-[#9E4A47] text-white hover:bg-[#B87C72]"
                        : "bg-[#DFDFDD] text-[#828D9C] cursor-not-allowed"
                    }`}
                  >
                    Continue →
                  </button>
                </div>
              </>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-semibold text-[#2B333C] mb-4">
                  Hi {form.name || "there"}, can we have your phone number?
                </h2>

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-[#DFDFDD] rounded-xl p-4 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
                />

                <div className="flex gap-4">
                  <button
                    onClick={back}
                    className="w-1/2 py-3 rounded-full border border-[#DFDFDD] text-sm text-[#2B333C]"
                  >
                    Back
                  </button>

                  <button
                    disabled={!form.phone}
                    className={`w-1/2 py-3 rounded-full text-sm font-medium transition ${
                      form.phone
                        ? "bg-[#9E4A47] text-white hover:bg-[#B87C72]"
                        : "bg-[#DFDFDD] text-[#828D9C] cursor-not-allowed"
                    }`}
                  >
                    Submit →
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
