import { Leaf, Recycle, Droplets } from "lucide-react";

const ecoFeatures = [
  {
    icon: Recycle,
    title: "Matériaux Recyclés",
    desc: "Tige en fil de polyester 100% recyclé issu de bouteilles plastiques récupérées.",
  },
  {
    icon: Leaf,
    title: "Empreinte Carbone Réduite",
    desc: "Processus de fabrication avec 40% d'émissions CO₂ en moins vs. modèle classique.",
  },
  {
    icon: Droplets,
    title: "Teinture Sans Eau",
    desc: "Technologie DryDye™ éliminant l'utilisation d'eau dans le processus de coloration.",
  },
];

const EcoSection = () => (
  <section className="py-16 md:py-24 px-4" aria-labelledby="eco-heading">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 id="eco-heading" className="font-display text-3xl md:text-4xl font-bold uppercase mb-4 text-foreground">
        Engagement <span className="text-eco">Éco-responsable</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Chaque paire d'Aero-Green 1.0 est un pas vers un avenir plus durable.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {ecoFeatures.map((f) => (
        <div
          key={f.title}
          className="bg-card border border-border rounded-xl p-6 hover:border-eco/40 transition-colors group"
        >
          <f.icon className="w-8 h-8 text-eco mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EcoSection;
