export default function AwardHighlight() {
  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl overflow-hidden border border-[#DFDFDD] bg-white">
          
          {/* ================= LEFT : TITLE BLOCK ================= */}
          <div className="lg:col-span-4 bg-[#FCEBDE] p-8 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#2B333C] mb-3 leading-snug">
              Awarded for Excellence in Hair Restoration
            </h3>

            <p className="text-sm tracking-wide uppercase text-[#9E4A47] font-medium">
              Times Now Health Excellence Awards
            </p>
          </div>

          {/* ================= CENTER : CONTENT ================= */}
          <div className="lg:col-span-5 p-8 flex items-center">
            <div className="space-y-4 text-sm md:text-base text-[#828D9C] leading-relaxed">
              <p>
                Honored for innovation in technique and artistry that redefined
                natural, ethical, and long-lasting hair transplant outcomes.
              </p>

              <p>
                This recognition celebrates Satya’s pioneering{" "}
                <span className="text-[#2B333C] font-medium">
                  “Truth in Aesthetics”
                </span>{" "}
                philosophy — where every restoration is a blend of science,
                precision, and compassion.
              </p>

              <p>
                Our approach goes beyond conventional methods — integrating DSFT,
                body hair usage, and minimal-med techniques to preserve donor
                zones and deliver undetectable results.
              </p>

              <p className="text-[#2B333C] font-medium">
                Satya’s vision remains simple: restore truth, not just hair.
              </p>
            </div>
          </div>

          {/* ================= RIGHT : CTA ================= */}
          <div className="lg:col-span-3 bg-[#FCEBDE] p-8 flex items-center justify-center">
            <button className="group inline-flex items-center gap-2 text-sm font-medium text-[#9E4A47] border border-[#9E4A47] px-6 py-3 rounded-full hover:bg-[#9E4A47] hover:text-white transition">
              View Award Details
              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
