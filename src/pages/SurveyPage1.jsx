import RadioGroup    from "../components/RadioGroup.jsx";
import Likert        from "../components/Likert.jsx";
import FieldRow      from "../components/FieldRow.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  RESPONDENT_CATEGORY, INSTITUTION_TYPE,
} from "../constants.js";

export default function SurveyPage1({ form, onSet, onNext, onBack }) {
  return (
    <div className="survey-shell">

      <div className="survey-topbar">
        <button className="btn-back" onClick={onBack}>← Dashboard</button>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: "50%" }} />
        </div>
        <div className="progress-label">Page 1 of 2</div>
      </div>

      <div className="survey-card">

        <div className="card-header">
          <div className="card-header-content">
            <div className="card-header-eyebrow">Page 1 of 2</div>
            <div className="card-header-title">Background &amp; Linguistic Reality</div>
            <div className="card-header-desc">
              Evidence-Based Language Teaching Policy Framework — stakeholder background and learner language realities.
            </div>
            <div className="card-header-tags">
              <span className="card-header-tag">§A Background Information</span>
              <span className="card-header-tag">§B Language of Instruction and Educational Effectiveness</span>
            </div>
          </div>
        </div>

        <div className="card-body">

          {/* ── SECTION A ─────────────────────────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section A" title="Background Information" />

            <FieldRow label="Q1 — Respondent Category">
              <RadioGroup options={RESPONDENT_CATEGORY} value={form.respondentCategory} onChange={v => onSet("respondentCategory", v)} />
            </FieldRow>
            <FieldRow label="Q2 — Institution Type">
              <RadioGroup options={INSTITUTION_TYPE} value={form.institutionType} onChange={v => onSet("institutionType", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION B — Language of Instruction and Educational Effectiveness ── */}
          {/* (merged former Section B + Section C; D15 appended at end)             */}
          <div className="section-block" style={{ marginBottom: 0 }}>
            <SectionHeader badge="Section B" title="Language of Instruction and Educational Effectiveness" />

            {/* ── former Section B questions ── */}
            <FieldRow label="Q1 — Students understand concepts better in their mother tongue.">
              <Likert value={form.b1} onChange={v => onSet("b1", v)} />
            </FieldRow>
            <FieldRow label="Q2 — Students face difficulty when instruction is in English at early grades.">
              <Likert value={form.b2} onChange={v => onSet("b2", v)} />
            </FieldRow>
            <FieldRow label="Q3 — Urdu is more accessible to students than English at primary level.">
              <Likert value={form.b3} onChange={v => onSet("b3", v)} />
            </FieldRow>
            <FieldRow label="Q4 — English medium creates comprehension barriers for rural students.">
              <Likert value={form.b4} onChange={v => onSet("b4", v)} />
            </FieldRow>

            {/* ── NEW Q5 (added after old Q4) ── */}
            <FieldRow label="Q5 — English medium creates comprehension barriers for urban students.">
              <Likert value={form.b5new} onChange={v => onSet("b5new", v)} />
            </FieldRow>

            {/* ── old b6 (text changed) → now Q6 ── */}
            <FieldRow label="Q6 — Teaching in foreign Language affects learning outcomes.">
              <Likert value={form.b6} onChange={v => onSet("b6", v)} />
            </FieldRow>

            {/* ── old b5 → now Q7 ── */}
            <FieldRow label="Q7 — Students actively participate when teachers use local languages.">
              <Likert value={form.b5} onChange={v => onSet("b5", v)} />
            </FieldRow>

            {/* ── former Section C questions merged in (Q11 deleted) ── */}
            {/* old c7 → Q8 */}
            <FieldRow label="Q8 — Early grade education should be in mother tongue.">
              <Likert value={form.c7} onChange={v => onSet("c7", v)} />
            </FieldRow>
            {/* old c8 → Q9 (text changed: "familiar language" → "mother tongue") */}
            <FieldRow label="Q9 — Conceptual learning improves when taught in mother tongue.">
              <Likert value={form.c8} onChange={v => onSet("c8", v)} />
            </FieldRow>
            {/* old c9 → Q10 */}
            <FieldRow label="Q10 — English medium promotes rote learning at early stages.">
              <Likert value={form.c9} onChange={v => onSet("c9", v)} />
            </FieldRow>
            {/* old c10 → Q11 */}
            <FieldRow label="Q11 — Urdu can function as a bridge language in multilingual classrooms.">
              <Likert value={form.c10} onChange={v => onSet("c10", v)} />
            </FieldRow>
            {/* old c11 (Q11 original) DELETED — not rendered */}

            {/* ── old D15 moved here → Q12 ── */}
            <FieldRow label="Q12 — Mother tongue instruction reduces learning gaps.">
              <Likert value={form.d15} onChange={v => onSet("d15", v)} />
            </FieldRow>
          </div>

        </div>

        <div className="card-footer">
          <button className="btn btn-ghost" onClick={onBack}>← Cancel</button>
          <button className="btn btn-primary" onClick={onNext}>
            Continue → Sections C – I
          </button>
        </div>
      </div>
    </div>
  );
}