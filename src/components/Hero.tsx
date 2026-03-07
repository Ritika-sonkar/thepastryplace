import { motion } from "framer-motion";
import { ChevronDown, Cake, ShoppingBag, Coffee, Cookie } from "lucide-react";
import cheesecakeHero from "@/assets/cc6.jpeg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollTo = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const quickLinks = [
    { label: "Baked Cheesecake",   id: "baked-cheesecake",     icon: <Cake className="w-3.5 h-3.5" /> },
    { label: "No-Bake Cheesecake", id: "non-baked-cheesecake", icon: <Cake className="w-3.5 h-3.5" /> },
    { label: "Tiramisu",           id: "tiramisu",             icon: <Coffee className="w-3.5 h-3.5" /> },
    { label: "Brownies",           id: "brownies",             icon: <Cookie className="w-3.5 h-3.5" /> },
    { label: "Order Section",          id: "order",                icon: <ShoppingBag className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-background">

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Soft radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-foreground/[0.03] blur-3xl z-0" />

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-10 pb-10">

        {/* Logo + Brand name — flush together */}
        <motion.div
          className="flex flex-col items-center mb-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={logo}
            alt="The Pastry Place"
            className="w-20 md:w-28 lg:w-32 object-contain"
            style={{ display: "block", marginBottom: "-0.3em" }}
          />
          <h1 className="font-brand text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl text-foreground tracking-wide leading-none">
            The Pastry Place
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-serif text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Freshly Baked Happiness
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          className="flex items-center gap-3 mb-7"
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <div className="h-px w-16 md:w-24 bg-foreground/20" />
          <span className="text-foreground/30 text-xs">✦</span>
          <div className="h-px w-16 md:w-24 bg-foreground/20" />
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto mb-8 rounded-2xl md:rounded-3xl overflow-hidden"
          style={{
            aspectRatio: "16/9",
            boxShadow: "0 32px 80px -12px rgba(0,0,0,0.18), 0 8px 24px -4px rgba(0,0,0,0.1)",
          }}
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={cheesecakeHero}
            alt="Signature Cheesecake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-transparent" />
        </motion.div>

        {/* Explore Menu button */}
        <motion.button
          onClick={() => scrollTo("signature-cheesecake")}
          className="btn-outline inline-flex items-center gap-2 group mb-7 tracking-widest text-xs uppercase font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore Menu
          <ChevronDown className="w-3.5 h-3.5 animate-bounce-slow" />
        </motion.button>

        {/* Quick nav pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
        >
          {quickLinks.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                border text-xs font-sans tracking-wide transition-all duration-200
                ${item.label === "Order Now"
                  ? "border-foreground bg-foreground text-background hover:bg-foreground/85"
                  : "border-foreground/15 bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5"
                }
              `}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 1.2 + index * 0.07 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;