import { LucideIcon } from "lucide-react";

interface SpecCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

const SpecCard = ({ icon: Icon, title, value }: SpecCardProps) => (
  <div className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary/40 transition-colors">
    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
    <p className="font-display text-lg font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{title}</p>
  </div>
);

export default SpecCard;
