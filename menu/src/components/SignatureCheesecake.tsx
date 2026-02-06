import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import cheesecakeHero from "@/assets/signature.jpeg";

const SignatureCheesecake = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 100, suffix: "+", label: "Orders Daily" },
    { value: 100, suffix: "%", label: "Fresh Ingredients" },
    { value: 5, suffix: "-Star", label: "Customer Love" },
  ];

  return (
    <section id="signature-cheesecake" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <img
                src={cheesecakeHero}
                alt="Signature Baked Cheesecake"
                className="w-full h-full object-cover rounded-3xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-60 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-highlight rounded-full opacity-60 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Our Signature Baked Cheesecake
            </h2>
            
            <div className="decorative-line mb-6 mx-0" style={{ marginLeft: 0 }} />
            
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
              A rich and velvety Indian-inspired cheesecake, delicately crafted with premium cream
               cheese and infused with subtle native flavors. Smooth, indulgent, and perfectly balanced
                — every slice melts in your mouth with a luxurious finish.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-card rounded-2xl shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.2, delay: 0.4 + index * 0.1 }}
                >
                  <div className="font-serif text-2xl md:text-3xl text-gold font-semibold">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-sans text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignatureCheesecake;
