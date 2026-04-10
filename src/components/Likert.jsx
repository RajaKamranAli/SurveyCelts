import { LIKERT5 } from "../constants.js";

export default function Likert({ options = LIKERT5, value, onChange }) {
  return (
    <div className="likert-row">
      {options.map((opt) => {
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