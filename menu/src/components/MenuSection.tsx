import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MenuItem } from "../data/menuData";


interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}


const MenuSection = ({ title, items }: MenuSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-8">
        {title}
      </h3>
      
      <div className="max-w-xl mx-auto">
        {items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="group flex items-center gap-4 border-b border-neutral-200 pb-6"

  >
    {/* IMAGE LEFT */}
    <div className="w-24 h-24 rounded-3xl overflow-hidden bg-neutral-100 flex items-center justify-center shadow-md">

  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover"
  />
</div>


    {/* NAME + PRICE */}
    <div className="flex justify-between items-center w-full">
      <h3 className="text-base font-medium tracking-wide">
        {item.name}
      </h3>

      <span className="text-base font-semibold">
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
