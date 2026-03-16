import { useState, useEffect } from 'react';

function useCountUp(target, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const isNumeric = !isNaN(parseFloat(target));
    const numericTarget = parseFloat(target);

    if (!isNumeric) {
      setCount(target);
      return;
    }

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(numericTarget);
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return count;
}

export default useCountUp;