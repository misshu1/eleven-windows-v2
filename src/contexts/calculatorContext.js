import React, { useState, createContext } from 'react';

export const CalculatorContext = createContext();
export const CalculatorProvider = props => {
    const [calculator, setCalculator] = useState({
        open: false,
        minimize: null
    });
    return (
        <CalculatorContext.Provider value={{ calculator, setCalculator }}>
            {props.children}
        </CalculatorContext.Provider>
    );
};
