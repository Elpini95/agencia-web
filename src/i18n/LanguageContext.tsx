import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { TRANSLATIONS, type Lang } from "./translations";

const STORAGE_KEY = "fjora-lang";

function detectLang(): Lang {
  if (typeof navigator === "undefined") return "es";
  const browserLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const raw of browserLangs) {
    const code = raw.toLowerCase();
    if (code.startsWith("es")) return "es";
    if (code.startsWith("no") || code.startsWith("nb") || code.startsWith("nn")) return "no";
    if (code.startsWith("en")) return "en";
  }
  return "es";
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en" || stored === "no") return stored;
  return detectLang();
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof TRANSLATIONS)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: TRANSLATIONS[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
