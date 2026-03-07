import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";

const RegistrationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const data = {
    fullName: formData.fullName,
    contactNumber: formData.contactNumber,
    dateOfBirth: formData.dateOfBirth
  };

  // show toast immediately
  toast({
    title: "Welcome to our sweet community! 🎂",
    description: "We'll send you special offers on your birthday!",
  });

  // clear form instantly
  setFormData({
    fullName: "",
    contactNumber: "",
    dateOfBirth: ""
  });

  // send data in background (don't await)
  fetch(
    "https://script.google.com/macros/s/AKfycbzYcS3XBOkjlFI51h7LAwgmE2t1mbQ5lKdIZeAyS7Z93xppahxNcG2tJRMRDh64pzdD-g/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    }
  ).catch(err => console.error(err));
};
    

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Join Our Sweet Community
          </h2>
          
          <p className="font-sans text-muted-foreground text-lg mb-8">
            Sign up for exclusive birthday treats and special offers
          </p>
          
          <div className="decorative-line mb-10" />

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="input-elegant"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="input-elegant"
              />
            </div>
            
            <div>
              
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="input-elegant"
              />
            </div>

            <motion.button
              type="submit"
              className="btn-primary w-full mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
