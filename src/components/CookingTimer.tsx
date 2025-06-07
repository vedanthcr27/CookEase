import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

interface CookingTimerProps {
  duration: number; // in minutes
  onComplete?: () => void;
}

const CookingTimer: React.FC<CookingTimerProps> = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsComplete(true);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (isComplete) {
      setIsComplete(false);
    }
  };

  const resetTimer = () => {
    setTimeLeft(duration * 60);
    setIsRunning(false);
    setIsComplete(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Cooking Timer</h3>
        <Clock className="text-orange-500" size={24} />
      </div>

      <div className="relative h-32 mb-6">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-4xl font-bold text-gray-800">{formatTime(timeLeft)}</div>
        </motion.div>

        {/* Completion Animation */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <motion.div
                className="text-2xl font-bold text-orange-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: 3,
                  ease: "easeInOut"
                }}
              >
                Time's Up! 🎉
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTimer}
          className={`px-6 py-3 rounded-full flex items-center gap-2 ${
            isRunning
              ? 'bg-orange-500 text-white'
              : 'bg-orange-100 text-orange-600'
          }`}
        >
          {isRunning ? (
            <>
              <Pause size={20} />
              Pause
            </>
          ) : (
            <>
              <Play size={20} />
              Start
            </>
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetTimer}
          className="px-6 py-3 rounded-full bg-gray-100 text-gray-600 flex items-center gap-2"
        >
          <RotateCcw size={20} />
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default CookingTimer;