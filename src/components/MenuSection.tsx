import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MenuItem } from "../data/menuData";

interface MenuSectionProps {
  id?: string;   // ✅ accepts scroll-target id from parent
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ id, title, items }: MenuSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    // ✅ id passed here — Hero buttons will scroll to this element
    <motion.div
      id={id}
      ref={ref}
      className="py-16 scroll-mt-20"   // scroll-mt-20 offsets the sticky nav so heading isn't hidden
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Section heading */}
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
          {title}
        </h3>
        <div className="decorative-line" />
      </div>

      {/* Menu items list */}
      <div className="max-w-xl mx-auto space-y-0">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 border-b border-foreground/10 py-5 hover:bg-foreground/[0.02] rounded-xl px-2 transition-colors duration-200"
          >
            {/* Image */}
            <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-muted shadow-sm group-hover:shadow-md transition-shadow duration-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Name + Price */}
            <div className="flex justify-between items-center w-full pr-1">
              <h4 className="font-sans text-base font-medium text-foreground tracking-wide">
                {item.name}
              </h4>
              <span className="font-serif text-base font-semibold text-foreground ml-4 whitespace-nowrap">
                {item.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuSection;