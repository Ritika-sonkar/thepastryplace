import Hero from "@/components/Hero";
import SignatureCheesecake from "@/components/SignatureCheesecake";
import ProductHighlight from "@/components/ProductHighlight";
import RegistrationForm from "@/components/RegistrationForm";
import TeamSection from "@/components/TeamSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import OrderPreview from "@/components/OrderPreview";

// Import images
import nobakeCheesecake from "@/assets/cheesecake2.jpeg";
import cheesecakeHero from "@/assets/cheesecake3.jpg";
import tiramisuImg from "@/assets/tiramisu.jpg";
import brownieImg from "@/assets/brownie.jpg";

// Import menu data
import {
  noBakeCheesecakeMenu,
  bakedCheesecakeMenu,
  tiramisuMenu,
  browniesMenu,
} from "@/data/menuData";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Signature Cheesecake with Stats */}
      <SignatureCheesecake />

      {/* No-Bake Cheesecake Section */}
      <ProductHighlight
        id="nobake-cheesecake"
        title="No-Bake Cheesecakes"
        description="Light, creamy, and absolutely divine. Our no-bake cheesecakes are crafted with premium cream cheese and the freshest seasonal ingredients. Each slice melts on your tongue, delivering a cloud-like texture that's both indulgent and refreshing."
        image={nobakeCheesecake}
        imageAlt="No-Bake Blueberry Cheesecake"
        menuTitle="No-Bake Collection"
        menuItems={noBakeCheesecakeMenu}
        reversed={true}
      />

      {/* Baked Cheesecake Section */}
      <div className="bg-secondary/30">
        <ProductHighlight
          id="baked-cheesecake"
          title="Baked Cheesecakes"
          description="Our signature baked cheesecakes are slow-baked to perfection, creating that beautiful golden-brown caramelized top and impossibly creamy center. Made with premium Philadelphia cream cheese and a buttery biscuit base."
          image={cheesecakeHero}
          imageAlt="Signature Baked Cheesecake"
          menuTitle="Baked Collection"
          menuItems={bakedCheesecakeMenu}
          reversed={false}
        />
      </div>

      {/* Tiramisu Section */}
      <ProductHighlight
        id="tiramisu"
        title="Tiramisu"
        description="The classic Italian indulgence reimagined. Layers of espresso-soaked ladyfingers and silky mascarpone cream, finished with a delicate dusting of premium cocoa. Each bite transports you to a quaint café in Rome."
        image={tiramisuImg}
        imageAlt="Classic Tiramisu"
        menuTitle="Tiramisu Selection"
        menuItems={tiramisuMenu}
        reversed={true}
      />

      {/* Brownies Section */}
      <div className="bg-secondary/30">
        <ProductHighlight
          id="brownies"
          title="Brownies"
          description="Rich, fudgy, and utterly irresistible. Our brownies are baked with the finest Belgian chocolate and topped with creative, mouthwatering finishes. From classic fudge to innovative kunafa, there's a brownie for every chocolate lover."
          image={brownieImg}
          imageAlt="Artisan Brownie"
          menuTitle="Brownie Collection"
          menuItems={browniesMenu}
          reversed={false}
        />
      </div>

      

      {/* Order Section */}
      <OrderPreview />
{/* Customer Registration */}
      <RegistrationForm />

      {/* Team Section */}
      <TeamSection />

      {/* Location Section */}
      <LocationSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
