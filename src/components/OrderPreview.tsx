import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import cake1 from "../assets/cakes/redvelvet.jpg";
import cake2 from "../assets/cakes/chocolateButterscotch Cake.jpg";
import cake3 from "../assets/cakes/Blueberry.jpg";
import cake4 from "../assets/gallery/l.jpg";
import cake5 from "../assets/gallery/bb.jpg";
import cake6 from "../assets/gallery/y.jpg";
import g from "../assets/gallery/v.jpg";
import h from "../assets/gallery/j.jpg";
import i from "../assets/gallery/i.jpg";
import j from "../assets/gallery/w.jpg";
import k from "../assets/gallery/x.jpg";

const images = [cake1, cake2, cake3, cake4, cake5, cake6, g, h, i, j, k];

const OrderPreview = () => {
  const navigate = useNavigate();

  return (
    // ✅ id="order" added — this is what the Hero "Order Now" button scrolls to
    <section id="order" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Handcrafted with love
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Order Fresh Bakes
          </h2>
          <div className="decorative-line" />
        </motion.div>

        {/* Clickable slider */}
        <motion.div
          onClick={() => navigate("/order")}
          className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex flex-col items-center justify-center z-10 gap-4">
            <h3 className="text-3xl md:text-4xl font-serif text-white text-center leading-snug">
              View Our Full Menu
            </h3>
            <p className="text-white/75 font-sans text-sm tracking-widest uppercase">
              Cakes · Cookies · Fresh Bakes
            </p>
            <motion.div
              className="mt-2 px-6 py-2.5 rounded-full border border-white/60 text-white text-sm font-sans tracking-wide group-hover:bg-white group-hover:text-foreground transition-all duration-300"
              whileTap={{ scale: 0.97 }}
            >
              Order Now →
            </motion.div>
          </div>

          {/* Auto-scrolling image strip */}
          <motion.div
            className="flex h-full"
            animate={{ x: ["0%", `-${(images.length - 1) * 100}%`] }}
            transition={{
              duration: images.length * 3.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`bake-${index}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default OrderPreview;