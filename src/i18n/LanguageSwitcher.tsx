import { useLocale, type Locale } from "./LocaleContext";
import "flag-icons/css/flag-icons.min.css";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();

  const handleSwitch = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div style={{ display: "flex", gap: "0.25rem", fontSize: "0.85rem" }}>
      <button
        onClick={() => handleSwitch("en-US")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
          opacity: locale === "en-US" ? 1 : 0.5,
          fontWeight: locale === "en-US" ? 600 : 400,
          padding: "0.25rem 0.4rem",
          fontFamily: "inherit",
        }}
      >
        <span className="fi fi-us"></span>
      </button>
      <span style={{ opacity: 0.4 }}>|</span>
      <button
        onClick={() => handleSwitch("de-DE")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
          opacity: locale === "de-DE" ? 1 : 0.5,
          fontWeight: locale === "de-DE" ? 600 : 400,
          padding: "0.25rem 0.4rem",
          fontFamily: "inherit",
        }}
      >
        <span className="fi fi-de"></span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
