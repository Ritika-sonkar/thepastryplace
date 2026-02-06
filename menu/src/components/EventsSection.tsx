import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import cc from "@/assets/cc1.jpeg";
import pp from "@/assets/cc2.jpeg";
import cc2 from "@/assets/cc3.jpeg"
// Easily editable events data
export const eventsData = [
  {
    id: 1,
    title: "Valentine's Day",
    location: "PUNE",
    date: "Feb 14, 2026",
    description: "Special heart-shaped cheesecakes and romantic treats",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Fest",
    location: "Pune",
    date: "Mar 20, 2026",
    description: "Join us for our annual spring celebration",
    image: cc,
  },
  {
    id: 3,
    title: "Fest",
    location: "Pune",
    date: "Apr 5, 2026",
    description: "Limited edition Easter-themed desserts",
    image: pp,
  },
  {
    id: 4,
    title: "Fest",
    location: "Pune",
    date: "Apr 25, 2026",
    description: "Fresh pastries and live baking demonstrations",
    image: cc2,
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Upcoming Events
          </h2>
          <div className="decorative-line" />
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                className="w-72 flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <motion.div
                  className="card-elegant overflow-hidden cursor-pointer h-full"
                  whileHover={{ y: -8, boxShadow: "var(--shadow-elevated)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-44 overflow-hidden rounded-xl mb-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="font-sans">{event.date}</span>
                  </div>
                  
                  <p className="font-sans text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
