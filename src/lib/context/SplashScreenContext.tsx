'use client';

import React, { createContext, useContext, useState } from 'react';

interface SplashScreenContextType {
  skipSplash: boolean;
  setSplashSkipped: (skip: boolean) => void;
  resetSplashState: () => void;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(undefined);

export function SplashScreenProvider({ children }: { children: React.ReactNode }) {
  const [skipSplash, setSkipSplash] = useState(false);

  const setSplashSkipped = (skip: boolean) => {
    setSkipSplash(skip);
  };

  const resetSplashState = () => {
    setSkipSplash(false);
  };

  return (
    <SplashScreenContext.Provider value={{ skipSplash, setSplashSkipped, resetSplashState }}>
      {children}
    </SplashScreenContext.Provider>
  );
}

export function useSplashScreen() {
  const context = useContext(SplashScreenContext);
  if (!context) {
    throw new Error('useSplashScreen must be used within SplashScreenProvider');
  }
  return context;
}
