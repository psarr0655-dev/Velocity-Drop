import { useState } from "react";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46];

const SizeSelector = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <fieldset>
      <legend className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-3">
        Pointure
      </legend>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Sélection de la pointure">
        {sizes.map((size) => (
          <button
            key={size}
            role="radio"
            aria-checked={selected === size}
            aria-label={`Pointure ${size}`}
            onClick={() => setSelected(size)}
            className={`w-12 h-12 rounded-md font-display text-sm font-semibold transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background ${
              selected === size
                ? "bg-primary text-primary-foreground border-primary box-glow"
                : "bg-secondary text-secondary-foreground border-border hover:border-primary/50"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </fieldset>
  );
};

export default SizeSelector;
