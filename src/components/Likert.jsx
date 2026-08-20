import { LIKERT5, LIKERT5_UR } from "../constants.js";

export default function Likert({ options, value, onChange, lang = "en" }) {
  // If no options passed explicitly, pick by language.
  // Urdu: بالکل متفق نہیں / متفق نہیں / غیر جانب دار / متفق / مکمل طور پر متفق
  // Values are ALWAYS 1–5 in both languages, so saved data never changes.
  const opts = options ?? (lang === "ur" ? LIKERT5_UR : LIKERT5);

  return (
    <div className="likert-row">
      {opts.map((opt) => {
        const val = opt?.value ?? opt;
        const label = opt?.label ?? opt;
        return (
          <button
            key={val}
            type="button"
            className={`likert-btn${value === val ? " selected" : ""}`}
            onClick={() => onChange(val)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}