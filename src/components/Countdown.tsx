import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const endTime = Date.now() + (2 * 60 * 60 + 59 * 60 + 59) * 1000;
    const timer = setInterval(() => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
      if (diff <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-3" role="timer" aria-live="polite" aria-label="Temps restant avant la fin du drop">
      {[
        { value: timeLeft.hours, label: "H" },
        { value: timeLeft.minutes, label: "M" },
        { value: timeLeft.seconds, label: "S" },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display text-3xl md:text-5xl font-bold text-primary text-glow tabular-nums">
            {pad(value)}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
