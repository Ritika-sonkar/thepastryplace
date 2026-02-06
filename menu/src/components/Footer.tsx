import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-10 px-6">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          {/* Brand */}
          <h3 className="font-brand text-3xl text-foreground mb-4">
            The Pastry Place
          </h3>
          
          <p className="font-sans text-muted-foreground text-sm mb-6 max-w-md">
            Crafting moments of sweetness, one pastry at a time.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/the_pastry.place?igsh=MW1pNG0yODh5NXNkYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="decorative-line mb-6" />

          {/* Copyright */}
          <p className="font-sans text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-gold fill-gold" /> by The Pastry Place
          </p>
          
          <p className="font-sans text-xs text-muted-foreground/60 mt-2">
            © 2026 The Pastry Place. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
