import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import team1 from "@/assets/team1.jpeg";
import team2 from "@/assets/team2.jpeg";

// Easily editable team data
export const teamData = [
  { 
    id: 1,
    name:"Kritika Thawal",
    role: "Founder",
    description: "With a sharp eye for detail and a passion for perfection, she manages the daily operations of The Pastry Place. Her dedication ensures that every cheesecake, brownie, and tiramisu served reflects the brand’s promise of quality and elegance..",
    image: team2,
    
  },
  {
    id: 2,
    name: "Karan Thawal",
    role: "Executive Baker",
    description: "Driven by a love for artisanal desserts and refined flavors, he founded The Pastry Place with a vision to create more than just sweets — but experiences. Every recipe reflects his dedication to quality ingredients, delicate craftsmanship, and timeless taste..",
    image: team1,
  },
  
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Founders
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            The passionate artisans behind every delicious creation
          </p>
          <div className="decorative-line mt-6" />
        </motion.div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 justify-items-center">

          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
               className="w-full max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 shadow-soft">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                
                <p className="font-sans text-sm text-gold font-medium mb-2">
                  {member.role}
                </p>
                
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
