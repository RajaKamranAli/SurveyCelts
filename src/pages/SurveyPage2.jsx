import RadioGroup    from "../components/RadioGroup.jsx";
import Likert        from "../components/Likert.jsx";
import FieldRow      from "../components/FieldRow.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
  DROPOUT_LEVEL, DROPOUT_GRADE, DROPOUT_BACKGROUND,
} from "../constants.js";

export default function SurveyPage2({ form, onSet, onBack, onComplete, submitting }) {
  return (
    <div className="survey-shell">

      <div className="survey-topbar">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: "100%" }} />
        </div>
        <div className="progress-label">Page 2 of 2</div>
      </div>

      <div className="survey-card">

        <div className="card-header">
          <div className="card-header-content">
            <div className="card-header-eyebrow">Page 2 of 2</div>
            <div className="card-header-title">Equity, Capacity, Policy &amp; Dropout</div>
            <div className="card-header-desc">
              Equity and access, teacher capacity, medium preferences, policy direction, and dropout analysis.
            </div>
            <div className="card-header-tags">
              {["§D Equity","§E Teacher Capacity","§F Primary MOI","§G Middle MOI","§H Matric MOI","§I Policy","§K Dropout"].map(t => (
                <span key={t} className="card-header-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card-body">

          {/* ── SECTION D — Equity and Access ───────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section D" title="Equity and Access" />

            <FieldRow label="Q12 — English medium of instruction favors elite/private school students.">
              <Likert value={form.d12} onChange={v => onSet("d12", v)} />
            </FieldRow>
            <FieldRow label="Q13 — Students from regional language backgrounds are disadvantaged.">
              <Likert value={form.d13} onChange={v => onSet("d13", v)} />
            </FieldRow>
            <FieldRow label="Q14 — Language policy contributes to educational inequality.">
              <Likert value={form.d14} onChange={v => onSet("d14", v)} />
            </FieldRow>
            <FieldRow label="Q15 — Mother tongue instruction reduces learning gaps.">
              <Likert value={form.d15} onChange={v => onSet("d15", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION E — Teacher Capacity ────────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section E" title="Teacher Capacity" />

            <FieldRow label="Q16 — Teachers are able to teach effectively in English medium.">
              <Likert value={form.e16} onChange={v => onSet("e16", v)} />
            </FieldRow>
            <FieldRow label="Q17 — Teachers naturally switch to local languages for explanation.">
              <Likert value={form.e17} onChange={v => onSet("e17", v)} />
            </FieldRow>
            <FieldRow label="Q18 — Multilingual classrooms require flexible language policy.">
              <Likert value={form.e18} onChange={v => onSet("e18", v)} />
            </FieldRow>
            <FieldRow label="Q19 — Teacher-student interaction improves in shared language.">
              <Likert value={form.e19} onChange={v => onSet("e19", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION F — Primary Level MOI ───────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section F" title="Preferred Medium of Instruction — Primary Level (Grades 1–5)" />

            <FieldRow label="Q20 — Mother tongue should be medium of instruction at primary level.">
              <Likert value={form.f20} onChange={v => onSet("f20", v)} />
            </FieldRow>
            <FieldRow label="Q21 — Urdu should be medium of instruction at primary level.">
              <Likert value={form.f21} onChange={v => onSet("f21", v)} />
            </FieldRow>
            <FieldRow label="Q22 — English should be medium of instruction at primary level.">
              <Likert value={form.f22} onChange={v => onSet("f22", v)} />
            </FieldRow>
            <FieldRow label="Q23 — Bilingual (Mother tongue + Urdu) model should be used.">
              <Likert value={form.f23} onChange={v => onSet("f23", v)} />
            </FieldRow>
            <FieldRow label="Q24 — Gradual transition (Mother tongue → Urdu → English) is appropriate.">
              <Likert value={form.f24} onChange={v => onSet("f24", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION G — Middle Level MOI ────────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section G" title="Preferred Medium of Instruction — Middle Level (Grades 6–8)" />

            <FieldRow label="Q25 — Urdu should be medium of Instruction at middle level.">
              <Likert value={form.g25} onChange={v => onSet("g25", v)} />
            </FieldRow>
            <FieldRow label="Q26 — English should become medium at middle level.">
              <Likert value={form.g26} onChange={v => onSet("g26", v)} />
            </FieldRow>
            <FieldRow label="Q27 — Bilingual Urdu-English model should be adopted.">
              <Likert value={form.g27} onChange={v => onSet("g27", v)} />
            </FieldRow>
            <FieldRow label="Q28 — Mother tongue support should continue at middle level.">
              <Likert value={form.g28} onChange={v => onSet("g28", v)} />
            </FieldRow>
            <FieldRow label="Q29 — Gradual shift to English should begin at middle level.">
              <Likert value={form.g29} onChange={v => onSet("g29", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION H — Matriculation Level MOI ─────────── */}
          <div className="section-block">
            <SectionHeader badge="Section H" title="Preferred Medium of Instruction — Matriculation Level (Grades 9–10)" />

            <FieldRow label="Q30 — English should be medium of Instruction at matric level.">
              <Likert value={form.h30} onChange={v => onSet("h30", v)} />
            </FieldRow>
            <FieldRow label="Q31 — Urdu should remain medium of Instruction at matric level.">
              <Likert value={form.h31} onChange={v => onSet("h31", v)} />
            </FieldRow>
            <FieldRow label="Q32 — Bilingual Urdu-English model is more effective.">
              <Likert value={form.h32} onChange={v => onSet("h32", v)} />
            </FieldRow>
            <FieldRow label="Q33 — Students should be prepared for English medium at higher education.">
              <Likert value={form.h33} onChange={v => onSet("h33", v)} />
            </FieldRow>
            <FieldRow label="Q34 — Technical subjects should be taught in English.">
              <Likert value={form.h34} onChange={v => onSet("h34", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION I — Policy Direction ─────────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section I" title="Policy Direction" />

            <FieldRow label="Q35 — Pakistan needs multilingual education policy.">
              <Likert value={form.i35} onChange={v => onSet("i35", v)} />
            </FieldRow>
            <FieldRow label="Q36 — Language policy should reflect linguistic diversity.">
              <Likert value={form.i36} onChange={v => onSet("i36", v)} />
            </FieldRow>
            <FieldRow label="Q37 — Uniform national language policy is not suitable.">
              <Likert value={form.i37} onChange={v => onSet("i37", v)} />
            </FieldRow>
            <FieldRow label="Q38 — Regional flexibility should be allowed in language policy.">
              <Likert value={form.i38} onChange={v => onSet("i38", v)} />
            </FieldRow>
            <FieldRow label="Q39 — Evidence-based linguistic survey should guide policy.">
              <Likert value={form.i39} onChange={v => onSet("i39", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION J — Dropout Ratio ────────────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section J" title="Medium of Instruction and Dropout Ratio" />

            <FieldRow label="Q40 — Students are more likely to drop out when they do not understand the language of instruction.">
              <Likert value={form.k40} onChange={v => onSet("k40", v)} />
            </FieldRow>
            <FieldRow label="Q41 — English-medium of instruction at primary level contributes to early grade dropout.">
              <Likert value={form.k41} onChange={v => onSet("k41", v)} />
            </FieldRow>
            <FieldRow label="Q42 — Students from rural backgrounds drop out more due to language difficulties.">
              <Likert value={form.k42} onChange={v => onSet("k42", v)} />
            </FieldRow>
            <FieldRow label="Q43 — Mother tongue instruction can reduce dropout ratio in early grades.">
              <Likert value={form.k43} onChange={v => onSet("k43", v)} />
            </FieldRow>
            <FieldRow label="Q44 — Language mismatch between home and school increases dropout risk.">
              <Likert value={form.k44} onChange={v => onSet("k44", v)} />
            </FieldRow>
            <FieldRow label="Q45 — Students losing interest due to language difficulty leads to absenteeism.">
              <Likert value={form.k45} onChange={v => onSet("k45", v)} />
            </FieldRow>
            <FieldRow label="Q46 — Urdu medium reduces dropout compared to English medium in public schools.">
              <Likert value={form.k46} onChange={v => onSet("k46", v)} />
            </FieldRow>
            <FieldRow label="Q47 — Students with weak English foundation are more likely to leave school.">
              <Likert value={form.k47} onChange={v => onSet("k47", v)} />
            </FieldRow>
            <FieldRow label="Q48 — Multilingual instruction improves student retention.">
              <Likert value={form.k48} onChange={v => onSet("k48", v)} />
            </FieldRow>
            <FieldRow label="Q49 — Dropout ratio is higher in schools strictly enforcing English-only policy.">
              <Likert value={form.k49} onChange={v => onSet("k49", v)} />
            </FieldRow>
            <FieldRow label="Q50 — Students repeat grades more often due to language comprehension issues.">
              <Likert value={form.k50} onChange={v => onSet("k50", v)} />
            </FieldRow>
            <FieldRow label="Q51 — Early conceptual gaps caused by language difficulty lead to eventual dropout.">
              <Likert value={form.k51} onChange={v => onSet("k51", v)} />
            </FieldRow>

            <FieldRow label="Q52 — Dropout is highest at:">
              <RadioGroup options={DROPOUT_LEVEL} value={form.k52} onChange={v => onSet("k52", v)} />
            </FieldRow>
            <FieldRow label="Q53 — Language-related dropout is most common at:">
              <RadioGroup options={DROPOUT_GRADE} value={form.k53} onChange={v => onSet("k53", v)} />
            </FieldRow>
            <FieldRow label="Q54 — Students at risk of dropout mostly belong to:">
              <RadioGroup options={DROPOUT_BACKGROUND} value={form.k54} onChange={v => onSet("k54", v)} />
            </FieldRow>
          </div>

        </div>

        <div className="card-footer">
          <button className="btn btn-ghost" onClick={onBack}>← Previous</button>
          <button className="btn btn-gold" onClick={onComplete} disabled={submitting}>
            {submitting ? "Submitting…" : "✓ Complete & Submit Survey"}
          </button>
        </div>
      </div>
    </div>
  );
}