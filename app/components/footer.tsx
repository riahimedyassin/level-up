import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  L
                </span>
              </div>
              <span className="text-2xl font-bold text-card-foreground">
                LevelUP
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Create your own luck
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#mission"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#sdg"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SDG 10
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Get Involved
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>Next door</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={20} className="flex-shrink-0" />
                <span>+216 6666-6666</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={20} className="flex-shrink-0" />
                <span>hello@levelup.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 LevelUP NGO. All rights reserved.
          </p>
          <a
            href="https://github.com/riahimedyassin"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Developed by Riahi Yassin
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
