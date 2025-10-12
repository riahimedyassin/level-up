import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-emerald-900 to-accent relative overflow-hidden rounded-xl dark:text-white">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.jpg')] opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground dark:text-secondary-foreground text-balance">
            Join Us in Creating Equal Opportunities
          </h2>

          <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty dark:text-secondary-foreground">
            Whether you want to volunteer, donate, or bring our programs to your
            community, we'd love to hear from you. Together, we can bridge the
            digital divide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg cursor-pointer"
            >
              <Mail className="mr-2" size={20} />
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 cursor-pointer dark:text-secondary-foreground"
            >
              Become a Partner
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/80 dark:text-secondary-foreground">
            <div>
              <div className="text-3xl font-bold text-primary-foreground dark:text-secondary-foreground">
                100%
              </div>
              <div className="text-sm">Transparent</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground dark:text-secondary-foreground">
                24/7
              </div>
              <div className="text-sm">Support</div>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20 dark:text-secondary-foreground" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground dark:text-secondary-foreground">
                @Tunisia
              </div>
              <div className="text-sm">Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
