import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, Instagram, ExternalLink } from "lucide-react";
import bakeryInterior from "@/assets/bakery-interior.jpg";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "kakde Complex near S.Kumar Wade Wale,Opposite Krushna Pure Veg Hotel, Manjari BK Pune -412307" },
    { icon: Phone, label: "Phone", value: "+91 7020654498" },
    { icon: Clock, label: "Hours", value: "Mon-Sun: 6:00 PM - 10:00 PM" },
    { icon: Mail, label: "Email", value: "thepastryplace45@gmail.com" },
    { icon: Instagram, label: "Instagram", value: "@the_pastry.place" },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={bakeryInterior}
          alt="The Pastry Place Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-8">
            Visit Us
          </h2>

          <div className="space-y-5 mb-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-sans text-sm text-primary-foreground/60">{item.label}</p>
                  <p className="font-sans text-primary-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

      
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
