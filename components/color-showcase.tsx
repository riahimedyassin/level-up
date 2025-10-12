"use client";

export function ColorShowcase() {
  const colors = [
    {
      name: "Primary",
      description: "Stability & Trust",
      class: "bg-primary",
      textClass: "text-primary-foreground",
      icon: "🌊",
    },
    {
      name: "Accent",
      description: "Vision & Energy",
      class: "bg-accent",
      textClass: "text-accent-foreground",
      icon: "🔮",
    },
    {
      name: "Success",
      description: "Life & Growth",
      class: "bg-success",
      textClass: "text-success-foreground",
      icon: "🌿",
    },
    {
      name: "Muted",
      description: "Support & Context",
      class: "bg-muted",
      textClass: "text-muted-foreground",
      icon: "📝",
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Color Theme</h2>
        <p className="text-muted-foreground">
          Stability • Vision • Better Life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {colors.map((color) => (
          <div
            key={color.name}
            className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg border bg-card"
          >
            <div
              className={`${color.class} ${color.textClass} p-8 text-center`}
            >
              <div className="text-4xl mb-2">{color.icon}</div>
              <h3 className="text-xl font-semibold">{color.name}</h3>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                {color.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-primary rounded-lg bg-primary/5">
          <div className="text-primary text-2xl font-bold mb-2">Teal-Cyan</div>
          <p className="text-sm text-muted-foreground">
            Primary color family representing stability, trust, and sustainable
            growth
          </p>
        </div>

        <div className="p-6 border border-accent rounded-lg bg-accent/5">
          <div className="text-accent text-2xl font-bold mb-2">
            Vibrant Teal
          </div>
          <p className="text-sm text-muted-foreground">
            Accent colors for energy, clarity, and forward-thinking vision
          </p>
        </div>

        <div className="p-6 border border-success rounded-lg bg-success/5">
          <div className="text-success text-2xl font-bold mb-2">Warm Green</div>
          <p className="text-sm text-muted-foreground">
            Success tones symbolizing life, prosperity, and positive outcomes
          </p>
        </div>
      </div>

      {/* Interactive Buttons */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md">
          Primary Action
        </button>
        <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md">
          Accent Action
        </button>
        <button className="px-6 py-3 bg-success text-success-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md">
          Success Action
        </button>
        <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
          Outlined
        </button>
      </div>
    </div>
  );
}
