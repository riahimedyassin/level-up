import { CheckCircle2 } from "lucide-react"

export function SDGSection() {
  const goals = [
    "Reduce income inequalities through digital skills training",
    "Ensure equal opportunity and reduce inequalities of outcome",
    "Promote social, economic and political inclusion of all",
    "Empower and promote social, economic inclusion regardless of location",
    "Ensure enhanced representation and voice for rural communities",
  ]

  return (
    <section id="sdg" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center">
              <img
                src="/sdg.png"
                alt="SDG 10 - Reduced Inequalities"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2">
              UN Sustainable Development Goals
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              SDG 10: Reduced Inequalities
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Our work directly contributes to achieving the United Nations' Sustainable Development Goal 10, focusing
              on reducing inequalities within and among countries.
            </p>

            <div className="space-y-4 pt-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-foreground leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
