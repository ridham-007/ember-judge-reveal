
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-brand-primary/20 rounded-lg p-4 backdrop-blur-sm border border-brand-primary/30">
      <p className="text-brand-primary font-semibold text-sm mb-2 text-center">Event Starts In</p>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="text-xl font-bold text-brand-primary">{timeLeft.days}</div>
          <div className="text-xs text-gray-600">Days</div>
        </div>
        <div>
          <div className="text-xl font-bold text-brand-primary">{timeLeft.hours}</div>
          <div className="text-xs text-gray-600">Hours</div>
        </div>
        <div>
          <div className="text-xl font-bold text-brand-primary">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-600">Min</div>
        </div>
        <div>
          <div className="text-xl font-bold text-brand-primary">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-600">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
