import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Weight, ArrowDown, Timer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import SizeSelector from "@/components/SizeSelector";
import SpecCard from "@/components/SpecCard";
import EcoSection from "@/components/EcoSection";
import ReservationModal from "@/components/ReservationModal";
import heroImg from "@/assets/aero-green-hero.png";

const specs = [
  { icon: Weight, title: "Poids", value: "185g" },
  { icon: Zap, title: "Rebond", value: "+32%" },
  { icon: Timer, title: "Drop", value: "6mm" },
  { icon: ShieldCheck, title: "Durabilité", value: "800km" },
];

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-background overflow-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
              Velocity<span className="text-primary">.</span>
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest hidden sm:block">
              Édition Limitée — 500 Exemplaires
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4" aria-labelledby="hero-heading">
          <div className="absolute inset-0 gradient-radial pointer-events-none" />
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-3">
                Drop Exclusif
              </p>
              <h1 id="hero-heading" className="font-display text-5xl md:text-7xl font-bold uppercase leading-none mb-4 text-foreground">
                Aero-Green<br />
                <span className="text-primary text-glow">1.0</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md mb-6 leading-relaxed font-body">
                La chaussure de marathon éco-conçue qui repousse les limites de la performance et du design durable.
              </p>

              {/* Countdown */}
              <div className="mb-8">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Fin du drop dans</p>
                <Countdown />
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <SizeSelector />
              </div>

              {/* CTA */}
              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="bg-primary text-primary-foreground font-display text-xl uppercase tracking-wider px-10 py-6 hover:bg-primary/90 animate-pulse-glow"
                aria-label="Réserver votre paire d'Aero-Green 1.0"
              >
                Réserver — 189€
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Livraison gratuite • Paiement sécurisé
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={heroImg}
                alt="Velocity Aero-Green 1.0 — Chaussure de marathon éco-conçue vert fluo et noir"
                className="w-full max-w-lg animate-float drop-shadow-[0_20px_40px_rgba(100,200,50,0.3)]"
                loading="eager"
                width={1024}
                height={1024}
              />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </section>

        {/* Specs Section */}
        <section className="py-16 md:py-24 px-4 border-t border-border" aria-labelledby="specs-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="specs-heading" className="font-display text-3xl md:text-4xl font-bold uppercase text-center mb-10 text-foreground">
              Caractéristiques <span className="text-primary">Techniques</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specs.map((s) => (
                <SpecCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Eco Section */}
        <div className="border-t border-border">
          <EcoSection />
        </div>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Velocity — Aero-Green 1.0 Édition Limitée
          </p>
        </footer>
      </main>

      <ReservationModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Velocity Aero-Green 1.0",
            description: "Chaussure de marathon éco-conçue en édition limitée à 500 exemplaires.",
            image: "https://velocity-kicks.com/aero-green.png",
            brand: { "@type": "Brand", name: "Velocity" },
            offers: {
              "@type": "Offer",
              price: "189.00",
              priceCurrency: "EUR",
              availability: "https://schema.org/LimitedAvailability",
              itemCondition: "https://schema.org/NewCondition",
            },
          }),
        }}
      />
    </>
  );
};

export default Index;
