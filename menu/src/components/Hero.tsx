import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import cheesecakeHero from "@/assets/cc6.jpeg";
import croissantOutline from "@/assets/croissant-outline.png";
import brownieOutline from "@/assets/brownie-outline.png";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById("signature-cheesecake")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute left-0 top-1/4 w-32 md:w-48 lg:w-56 opacity-40"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={croissantOutline}
          alt="Decorative croissant"
          className="w-full glow-soft"
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="absolute right-0 bottom-1/4 w-28 md:w-40 lg:w-48 opacity-40"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src={brownieOutline}
          alt="Decorative brownie"
          className="w-full glow-soft"
          animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container-custom text-center px-6 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Brand name */}
          <h1 className="font-brand text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 tracking-wide">
            The Pastry Place
          </h1>

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-10 tracking-wide">
            Freshly Baked Happiness
          </p>

          {/* Decorative line */}
          <div className="decorative-line mb-10" />

          {/* Hero cheesecake image */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img
              src={cheesecakeHero}
              alt="Signature Cheesecake"
              className="w-full h-full object-cover rounded-full shadow-elevated"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent" />
          </motion.div>

          {/* Explore Menu Button */}
          <motion.button
            onClick={scrollToMenu}
            className="btn-outline inline-flex items-center gap-2 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-sans">Explore Menu</span>
            <ChevronDown className="w-4 h-4 animate-bounce-slow" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
