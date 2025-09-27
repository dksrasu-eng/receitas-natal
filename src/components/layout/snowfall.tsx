'use client';

import { useEffect, useState } from 'react';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakeCount = 50;
      const newSnowflakes = Array.from({ length: flakeCount }).map((_, i) => {
        const size = Math.random() * 5 + 2; // size between 2px and 7px
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`, // duration between 5s and 15s
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.5 + 0.3, // opacity between 0.3 and 0.8
        };
        return <div key={i} className="snowflake" style={style}></div>;
      });
      setSnowflakes(newSnowflakes);
    };

    createSnowflakes();
  }, []);

  return <div className="snow no-print">{snowflakes}</div>;
};

export default Snowfall;
