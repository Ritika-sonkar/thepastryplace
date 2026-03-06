import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-10 px-6">

     
{/* MAP SECTION */}
<div className="container-custom mb-10">
  <div className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-md">

    {/* Google Map — centered on S Kumar Wadewale, Manjari BK, Pune */}
    <iframe
  src="https://maps.google.com/maps?q=S%20Kumar%20Wade%20Wale%2C%20Manjri%20Stud%20Farm%2C%20Harpale%20Complex%2C%20Opposite%20Bharat%20Petroleum%2C%20Pune%2C%20Maharashtra%20412307&z=17&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    {/* ── Custom Dark Pin — centered on map ── */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/*
        We push the pin slightly UP from true center because the map's
        search result label sits just below the pin head.
        Adjust `mb-8` (margin-bottom) if the pin feels off on your screen.
      */}
      <div className="mb-8 flex flex-col items-center">

        {/* Tooltip label */}
        <div className="mb-2 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap tracking-wide">
          🎂 The Pastry Place
        </div>

        {/* Pin SVG */}
        <svg
          width="36"
          height="48"
          viewBox="0 0 36 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          {/* Pin body */}
          <path
            d="M18 0C8.059 0 0 8.059 0 18c0 13.5 18 30 18 30S36 31.5 36 18C36 8.059 27.941 0 18 0Z"
            fill="#1a1a1a"
          />
          {/* Pin inner circle */}
          <circle cx="18" cy="18" r="7" fill="white" />
          {/* Tiny cake icon dot */}
          <circle cx="18" cy="18" r="3.5" fill="#1a1a1a" />
        </svg>

        {/* Pin shadow on "ground" */}
        <div
          className="mt-1 rounded-full bg-black/30 blur-sm"
          style={{ width: 18, height: 6 }}
        />
      </div>
    </div>

  </div>
</div>

      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          
          {/* Brand */}
          <h3 className="font-brand text-3xl text-foreground mb-4">
            The Pastry Place
          </h3>

          <p className="font-sans text-muted-foreground text-sm mb-4 max-w-md">
            Crafting moments of sweetness, one pastry at a time.
          </p>

          {/* Address */}
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-md">
            Kakde Complex near S.Kumar Wade Wale, Opposite Krushna Pure Veg Hotel,
            Manjari BK, Pune - 412307
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/the_pastry.place?igsh=dDFjMTlnYmJ2ejBo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="decorative-line mb-6" />

          {/* Copyright */}
          <p className="font-sans text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-gold fill-gold" /> by The Pastry Place
          </p>

          <p className="font-sans text-xs text-muted-foreground/60 mt-2">
            © 2026 The Pastry Place. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;