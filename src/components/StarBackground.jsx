import { useEffect, useState } from "react";

const rand = (min, max) => Math.random() * (max - min) + min;

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 9000);
    setStars(
      Array.from({ length: count }, (_, id) => ({
        id,
        size: rand(1, 3),
        x: rand(0, 100),
        y: rand(0, 100),
        opacity: rand(0.4, 1),
        duration: rand(3, 6),
      }))
    );
    setMeteors(
      Array.from({ length: 4 }, (_, id) => ({
        id,
        x: rand(20, 100),
        y: rand(0, 40),
        delay: rand(0, 12),
        duration: rand(4, 8),
      }))
    );
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
      {meteors.map((m) => (
        <span
          key={m.id}
          className="animate-meteor absolute h-px w-24 bg-linear-to-r from-white/80 to-transparent"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
