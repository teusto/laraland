import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import enUS from "./locales/en-US.json";
import deDE from "./locales/de-DE.json";

export type Locale = "en-US" | "de-DE";

const translations: Record<Locale, Record<string, unknown>> = {
  "en-US": enUS,
  "de-DE": deDE,
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  tObj: <T = unknown>(key: string) => T;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

function detectDefaultLocale(): Locale {
  const saved = localStorage.getItem("locale");
  if (saved === "en-US" || saved === "de-DE") return saved;

  const browserLang = navigator.language;
  if (browserLang.startsWith("de")) return "de-DE";
  return "en-US";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectDefaultLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[locale], key);
      if (typeof value === "string") return value;
      return key;
    },
    [locale]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(translations[locale], key);
      if (Array.isArray(value)) return value as string[];
      return [];
    },
    [locale]
  );

  const tObj = useCallback(
    <T = unknown,>(key: string): T => {
      const value = getNestedValue(translations[locale], key);
      return value as T;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tArray, tObj }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
