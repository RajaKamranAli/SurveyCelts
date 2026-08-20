export default function RadioGroup({ options, value, onChange }) {
  return (
    <div className="radio-grid">
      {options.map((opt) => {
        const val = opt?.value ?? opt;
        const label = opt?.label ?? opt;
        return (
          <div
            key={val}
            className={`radio-chip${value === val ? " selected" : ""}`}
            onClick={() => onChange(val)}
            role="radio"
            aria-checked={value === val}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onChange(val)}
          >
            <span className="chip-radio" />
            {label}
          </div>
        );
      })}
    </div>
  );
}