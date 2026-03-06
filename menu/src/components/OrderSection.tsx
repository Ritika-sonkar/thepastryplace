import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
/* ---------------- COOKIES ---------------- */

import nankhatai from "../assets/cookies/Nankhatai - Binjal's VEG Kitchen.jpg";
import coconutCookies from "../assets/cookies/coconutcookie.jpg";
import karachiCookies from "../assets/cookies/karachiCookies.jpg";
import butterCookies from "../assets/cookies/butter.jpg";
import ajwainCookies from "../assets/cookies/ajwainCookies.jpg";
import nutellaThumbprint from "../assets/cookies/Butter Nutella ThumbprintCookies.jpg";
import brookie from "../assets/cookies/brookie.jpg";
import pistachioCookies from "../assets/cookies/pistachio.jpg";
import oatsChocoChip from "../assets/cookies/Oatmeal Chocolate.jpg";
import attaBiscuits from "../assets/cookies/atta.jpg";
import shrewsburyBiscuits from "../assets/cookies/shrewsburyBiscuits.jpg";
import periPeriThins from "../assets/cookies/thins.jpg";
import cheeseHerbCrackers from "../assets/cookies/cheese.jpg";
import newYorkCookies from "../assets/cookies/NewYorkCookies.jpg";
import danishButterCookies from "../assets/cookies/danish.jpg";
import miniLemonCookies from "../assets/cookies/lemon.jpg";
import kajuPistaBiscuits from "../assets/cookies/pista.jpg";
import chocolateChipBiscuits from "../assets/cookies/Jacques Torres Chocolate Chip Cookies (Famous NYC Recipe Copycat) - foodiemoms.jpg";
import ragiOatsCookies from "../assets/cookies/ragi.jpg";
import masalaCookies from "../assets/cookies/masala.jpg";

/* ---------------- CAKES ---------------- */

import blueberryCake from "../assets/cakes/blueberry.jpg";
import blackCurrantCake from "../assets/cakes/blackcurrent.jpg";
import tenderCoconutCake from "../assets/cakes/CoconutCake.jpg";
import chocolateButterscotchCake from "../assets/cakes/chocolateButterscotch Cake.jpg";
import butterscotchCake from "../assets/cakes/Butterscotch Cake.jpg";
import kajuMalaiCake from "../assets/cakes/kajumalai Cake.jpg";
import rasmalaiCake from "../assets/cakes/Rasmalai Cake.jpg";
import chocolateFudgeCake from "../assets/cakes/Chocolatefudgecake.jpg";
import redVelvetCake from "../assets/cakes/redvelvet.jpg";
import chocolateMousseCake from "../assets/cakes/Chocolate Mousse Cake.jpg";
import cookieCreamCake from "../assets/cakes/CookiesCreamCake.jpg";
import mixedFruitCake from "../assets/cakes/Mix Fruit Cake.jpg";
import chocoBerryCake from "../assets/cakes/choco berry.jpg";
import richyRoseCake from "../assets/cakes/Rose Cake.jpg";
import biscoffCake from "../assets/cakes/biscoff.jpg";
import pineappleCake from "../assets/cakes/pineapple.jpg";
import mangoCake from "../assets/cakes/Mango Cake.jpg";
import lichiCake from "../assets/cakes/litchicake.jpg";
import kiwiCake from "../assets/cakes/kiwiCake.jpg";
import peachCake from "../assets/cakes/peach.jpg";
import hazelnut from "../assets/cakes/Hazelnut.jpg";
import strawberry from "../assets/cakes/strawberry.jpg";


/* ---------------- GALLERY ---------------- */

import a from "../assets/gallery/a.jpg";
import b from "../assets/gallery/b.jpg";
import c from "../assets/gallery/c.jpg";
import d from "../assets/gallery/d.jpg";
import e from "../assets/gallery/e.jpg";
import f from "../assets/gallery/f.jpg";
import g from "../assets/gallery/g.jpg";
import h from "../assets/gallery/h.jpg";
import i from "../assets/gallery/i.jpg";
import j from "../assets/gallery/j.jpg";
import k from "../assets/gallery/k.jpg";
import l from "../assets/gallery/l.jpg";
import m from "../assets/gallery/m.jpg";
import n from "../assets/gallery/n.jpg";
import o from "../assets/gallery/o.jpg";
import p from "../assets/gallery/p.jpg";
import q from "../assets/gallery/q.jpg";
import r from "../assets/gallery/r.jpg";
import u from "../assets/gallery/u.jpg";
import v from "../assets/gallery/v.jpg";
import w from "../assets/gallery/w.jpg";
import x from "../assets/gallery/x.jpg";
import y from "../assets/gallery/y.jpg";
import z from "../assets/gallery/z.jpg";

import aa from "../assets/gallery/aa.jpg";
import bb from "../assets/gallery/bb.jpg";
import cc from "../assets/gallery/cc.jpg";

/* ---------------- TYPES ---------------- */

export interface MenuItem {
  name: string;
  image: string;
}

/* ---------------- COOKIES DATA ---------------- */

export const cookiesMenu: MenuItem[] = [
  { name: "Nankhatai", image: nankhatai },
  { name: "Coconut Cookies", image: coconutCookies },
  { name: "Karachi Cookies", image: karachiCookies },
  { name: "Butter Cookies", image: butterCookies },
  { name: "Ajwain Cookies", image: ajwainCookies },
  { name: "Nutella Thumb Print Cookies", image: nutellaThumbprint },
  { name: "Brookies", image: brookie },
  { name: "Pistachio Cookies", image: pistachioCookies },
  { name: "Oats & Choco Chip Cookies", image: oatsChocoChip },
  { name: "Atta Biscuits", image: attaBiscuits },
  { name: "Shrewsbury Biscuits", image: shrewsburyBiscuits },
  { name: "Peri Peri Thins", image: periPeriThins },
  { name: "Cheese Herb Crackers", image: cheeseHerbCrackers },
  { name: "New York Style Cookies", image: newYorkCookies },
  { name: "Danish Butter Cookies", image: danishButterCookies },
  { name: "Mini Lemon Cookies", image: miniLemonCookies },
  { name: "Kaju Pista Biscuits", image: kajuPistaBiscuits },
  { name: "Chocolate Chip Biscuits", image: chocolateChipBiscuits },
  { name: "Ragi Oats Cookies", image: ragiOatsCookies },
  { name: "Masala Cookies", image: masalaCookies },
];

/* ---------------- CAKES DATA ---------------- */

export const cakesMenu: MenuItem[] = [
  { name: "Blueberry", image: blueberryCake },
  { name: "Black Currant", image: blackCurrantCake },
  { name: "Tender Coconut", image: tenderCoconutCake },
  { name: "Chocolate Butterscotch", image: chocolateButterscotchCake },
  { name: "Butterscotch", image: butterscotchCake },
  { name: "Kaju Malai", image: kajuMalaiCake },
  { name: "Rasmalai", image: rasmalaiCake },
  { name: "Chocolate Fudge", image: chocolateFudgeCake },
  { name: "Red Velvet", image: redVelvetCake },
  { name: "Chocolate Mousse", image: chocolateMousseCake },
  { name: "Cookie & Cream", image: cookieCreamCake },
  { name: "Mixed Fruit", image: mixedFruitCake },
  { name: "Choco Berry", image: chocoBerryCake },
  { name: "Richy Rose", image: richyRoseCake },
  { name: "Biscoff Cake", image: biscoffCake },
  { name: "Pineapple", image: pineappleCake },
  { name: "Mango", image: mangoCake },
  { name: "Kiwi", image: kiwiCake },
  { name: "Litchi", image: lichiCake },
  { name: "Peach", image: peachCake },
  { name: "Strawberry", image: strawberry },
  { name: "Hazelnut", image: hazelnut },
];

/* ---------------- GALLERY DATA ---------------- */

const galleryImages = [
  a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,u,v,w,x,y,z,
  aa,bb,cc
];

/* ---------------- MENU SECTION ---------------- */

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* ---------------- GALLERY SECTION ---------------- */

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center mb-16">
  
    <h1
      className="text-4xl md:text-5xl text-pink-900"
      style={{ fontFamily: "Allura, cursive" }}
    >
      Cake gallery
    </h1>
 
</div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 px-6 max-w-6xl mx-auto">
        {galleryImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            className="mb-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN ORDER SECTION ---------------- */

const OrderSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-amber-50 py-20">
     <div className="flex flex-col items-center mb-16">

  <p
  className="text-4xl md:text-5xl lg:text-6xl text-yellow-950 mb-2 tracking-wide"
  style={{ fontFamily: "Parisienne, cursive" }}
>
  Order Our Fresh Bakes
</p>

  <div className="w-24 h-[2px] bg-yellow-800 mt-4"></div>

</div>
    
      <MenuSection title="Cookies & Biscuits" items={cookiesMenu} />

      <MenuSection title="Cakes" items={cakesMenu} />

      <GallerySection />

    </section>
  );
};

export default OrderSection;