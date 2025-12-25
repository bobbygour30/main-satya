import { useEffect, useRef } from "react";

const LOGOS = [
  {
    name: "ISHRS",
    full: "International Society of Hair Restoration Surgery",
    hover:
      "Member of ISHRS – advancing the art and science of hair restoration globally.",
  },
  {
    name: "AAAM",
    full: "American Academy of Aesthetic Medicine",
    hover:
      "Certified by AAAM for advanced aesthetic and cosmetic medicine excellence.",
  },
  {
    name: "AIMI",
    full: "Associazione Italiana Medici Implantologi",
    hover:
      "International affiliation with Italy’s leading hair implantology society.",
  },
  {
    name: "IADVL",
    full:
      "Indian Association of Dermatologists, Venereologists & Leprologists",
    hover:
      "Registered and certified by IADVL for dermatological expertise and ethical care.",
  },
  {
    name: "CDSI",
    full: "Cosmetic Dermatology Society, India",
    hover:
      "Recognized member of CDSI, promoting safe and scientific skin aesthetics.",
  },
  {
    name: "ACD",
    full: "Association of Cutaneous Surgeons of India",
    hover:
      "Accredited by ACD for excellence in clinical and procedural dermatology.",
  },
];

export default function LegacyLogos() {
  const trackRef = useRef(null);

  // subtle infinite scroll
  useEffect(() => {
    const track = trackRef.current;
    let start = 0;

    const animate = () => {
      start -= 0.3;
      if (Math.abs(start) >= track.scrollWidth / 2) {
        start = 0;
      }
      track.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="w-full bg-[#FFF8EF] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP TAGLINE */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-[#828D9C] mb-3">
            Our Legacy
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2B333C] max-w-3xl mx-auto">
            “Our legacy is written not in words, but in results.”
          </h2>
        </div>

        {/* LOGO STRIPE */}
        <div className="relative">
          {/* FADES */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#FFF8EF] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#FFF8EF] to-transparent z-10" />

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 w-max py-4"
            >
              {[...LOGOS, ...LOGOS].map((logo, index) => (
                <LogoItem key={index} {...logo} />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="text-center mt-14">
          <p className="text-sm md:text-base text-[#828D9C] max-w-3xl mx-auto">
            “Our work meets the global standards of artistry, ethics, and
            scientific excellence.”
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= SINGLE LOGO ================= */
function LogoItem({ name, full, hover }) {
  return (
    <div className="group relative min-w-[220px] sm:min-w-[260px] bg-[#FCEBDE] border border-[#DFDFDD] rounded-2xl px-6 py-6 text-center transition hover:border-[#9E4A47]">
      {/* SHORT LOGO */}
      <div className="text-2xl font-bold text-[#2B333C] mb-1">
        {name}
      </div>

      {/* FULL NAME */}
      <div className="text-xs text-[#828D9C] leading-snug">
        {full}
      </div>

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-[#9E4A47] text-[#FFF8EF] rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm leading-relaxed">
        {hover}
      </div>
    </div>
  );
}
