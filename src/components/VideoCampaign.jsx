import { useEffect, useRef, useState } from "react";

export default function VideoCampaign() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#2B333C] overflow-hidden"
    >
      {/* ================= BACKGROUND VIDEO / IMAGE ================= */}
      <div className="absolute inset-0">
        {/* Replace src with actual campaign video */}
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/repair-campaign.mp4" type="video/mp4" />
        </video>

        {/* Fallback overlay */}
        <div className="absolute inset-0 bg-[#2B333C]/70" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center min-h-screen">
        {/* TITLE */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm tracking-widest uppercase text-[#DFDFDD] mb-4">
            Video Campaign · The Repair Specialists
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#FFF8EF] mb-8 max-w-3xl leading-tight">
            We Repair What Others Couldn’t
          </h2>
        </div>

        {/* STORY TEXT */}
        <div
          className={`max-w-3xl space-y-4 text-[#DFDFDD] text-sm md:text-base leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p>
            At Satya, truth is not a slogan — it’s our science.
          </p>

          <p>
            We restore confidence through honesty, precision, and compassion —
            not shortcuts.
          </p>

          <p>
            To repair what others couldn’t, using science that preserves and
            results that endure.
          </p>

          <p>
            A world where restoration is truthful, ethical, and everlasting.
          </p>

          <p className="font-medium text-[#FFF8EF]">
            #TruthRestored
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button className="px-8 py-3 rounded-full bg-[#9E4A47] text-white hover:bg-[#B87C72] transition">
            Know More About the Campaign
          </button>

          <button className="px-8 py-3 rounded-full border border-[#DFDFDD] text-[#FFF8EF] hover:bg-[#FFF8EF] hover:text-[#2B333C] transition">
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
}
