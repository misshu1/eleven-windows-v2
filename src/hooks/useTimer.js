import { useState, useRef } from 'react';

export const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const handleStartTimer = () => {
        setIsActive(true);
        setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handlePauseTimer = () => {
        clearInterval(countRef.current);
        setIsPaused(false);
    };

    const handleResumeTimer = () => {
        setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handleResetTimer = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };

    return {
        timer,
        isActive,
        isPaused,
        handleStartTimer,
        handlePauseTimer,
        handleResumeTimer,
        handleResetTimer
    };
};
