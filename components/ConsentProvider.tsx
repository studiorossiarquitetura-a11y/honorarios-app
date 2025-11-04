"use client";
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { ConsentState } from "./types";

interface ConsentContextType {
  consent: ConsentState;
  setConsent: (v: ConsentState) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent deve ser usado dentro de ConsentProvider");
  return context;
};

export default function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("cmpConsent");
    if (saved === "granted" || saved === "denied") setConsentState(saved);
  }, []);

  const setConsent = useCallback((value: ConsentState) => {
    setConsentState(value);
    localStorage.setItem("cmpConsent", value);
  }, []);

  if (!mounted) return null;
  return <ConsentContext.Provider value={{ consent, setConsent }}>{children}</ConsentContext.Provider>;
}
