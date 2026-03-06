import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReservationModal = ({ open, onOpenChange }: ReservationModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setSubmitted(false); }}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-foreground">Réservation Confirmée !</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                Votre paire d'Aero-Green 1.0 est réservée. Vous recevrez un email de confirmation.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl text-foreground">Réserver ma paire</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Édition limitée à 500 exemplaires. Remplissez vos informations pour sécuriser la vôtre.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Nom complet</Label>
                <Input id="name" required placeholder="Jean Dupont" className="bg-secondary border-border text-foreground mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" required placeholder="jean@email.com" className="bg-secondary border-border text-foreground mt-1" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground font-display text-lg uppercase tracking-wider hover:bg-primary/90 animate-pulse-glow">
                Confirmer la Réservation
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
