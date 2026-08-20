import { SEC_E_COLS, SEC_E_STMTS } from "../constants.js";
import SectionHeader from "./SectionHeader.jsx";

export default function TableSection({ values, onChange, startQ = 15 }) {
  return (
    <div className="section-block">
      <SectionHeader badge="Section D" title="Learning, Cognition & Creativity" />
      <p className="table-note">
        For each learning outcome, select the language in which it is most strongly observed.
      </p>
      <div className="table-scroll">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Learning Outcome</th>
              {SEC_E_COLS.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SEC_E_STMTS.map((stmt, i) => (
              <tr key={i}>
                <td><span className="q-num">Q{startQ + i}</span> {stmt}</td>
                {SEC_E_COLS.map((col) => (
                  <td key={col}>
                    <div
                      className={`matrix-radio${values[i] === col ? " sel" : ""}`}
                      onClick={() => onChange(i, col)}
                      role="radio"
                      aria-checked={values[i] === col}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && onChange(i, col)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
