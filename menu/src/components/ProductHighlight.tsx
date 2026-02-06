import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MenuSection from "./MenuSection";

interface MenuItem {
  name: string;
  price: string;
}

interface ProductHighlightProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  menuTitle: string;
  menuItems: MenuItem[];
  reversed?: boolean;
}

const ProductHighlight = ({
  id,
  title,
  description,
  image,
  imageAlt,
  menuTitle,
  menuItems,
  reversed = false,
}: ProductHighlightProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Content - switches position based on reversed prop */}
          <motion.div
            className={reversed ? "lg:order-1" : "lg:order-2"}
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {title}
            </h2>
            
            <div className="decorative-line mb-6 mx-0" style={{ marginLeft: 0 }} />
            
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className={reversed ? "lg:order-2" : "lg:order-1"}
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-3xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-50 -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Menu Items */}
        <MenuSection title={menuTitle} items={menuItems} />
      </div>
    </section>
  );
};

export default ProductHighlight;
