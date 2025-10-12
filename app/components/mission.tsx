import { Target, Heart, Users } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            We're committed to reducing inequalities by empowering rural
            communities with digital literacy and opportunities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-colors">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              SDG 10 Focus
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Aligned with the UN's Sustainable Development Goal 10, we work to
              reduce inequalities within and among countries through digital
              empowerment.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-secondary transition-colors">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-secondary" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Community Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We provide comprehensive support and care for rural areas,
              ensuring no one is left behind in the digital revolution.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent transition-colors">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Opportunity Creation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Through workshops and courses, we teach communities how to create
              their own opportunities and thrive in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
