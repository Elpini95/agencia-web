import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "no", label: "NO" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label="Idioma / Language / Språk">
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className={
            option.code === lang ? "lang-switcher-btn lang-switcher-btn--active" : "lang-switcher-btn"
          }
          onClick={() => setLang(option.code)}
          aria-pressed={option.code === lang}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
