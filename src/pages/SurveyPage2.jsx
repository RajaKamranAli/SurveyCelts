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
              Equity and access, teacher capacity, medium preferences, and dropout analysis.
            </div>
            <div className="card-header-tags">
              {["§C Equity","§D Teacher Capacity","§E Primary MOI","§F Middle MOI","§G Matric MOI","§H Dropout"].map(t => (
                <span key={t} className="card-header-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card-body">

          {/* ── SECTION C (formerly D) — Equity and Access ──────────────── */}
          {/* D15 has been moved to Section B on Page 1; replaced by new Q16 */}
          <div className="section-block">
            <SectionHeader badge="Section C" title="Equity and Access" />

            <FieldRow label="Q13 — English medium of instruction favors elite/private school students.">
              <Likert value={form.d12} onChange={v => onSet("d12", v)} />
            </FieldRow>
            <FieldRow label="Q14 — Students from regional language backgrounds are disadvantaged.">
              <Likert value={form.d13} onChange={v => onSet("d13", v)} />
            </FieldRow>
            <FieldRow label="Q15 — Language policy contributes to educational inequality.">
              <Likert value={form.d14} onChange={v => onSet("d14", v)} />
            </FieldRow>
            {/* NEW Q16 — replaces the slot left by D15 */}
            <FieldRow label="Q16 — Job Opportunities are available for English medium students.">
              <Likert value={form.c16new} onChange={v => onSet("c16new", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION D (formerly E) — Teacher Capacity ───────────────── */}
          {/* Q18 (old e18) removed; two new questions added                 */}
          <div className="section-block">
            <SectionHeader badge="Section D" title="Teacher Capacity" />

            <FieldRow label="Q17 — Teachers are able to teach effectively in English medium.">
              <Likert value={form.e16} onChange={v => onSet("e16", v)} />
            </FieldRow>
            <FieldRow label="Q18 — Teachers naturally switch to local languages for explanation.">
              <Likert value={form.e17} onChange={v => onSet("e17", v)} />
            </FieldRow>
            {/* old e18 ("Multilingual classrooms require flexible language policy") DELETED */}
            {/* NEW Q19 */}
            <FieldRow label="Q19 — Teacher can teach in Urdu or in local Languages.">
              <Likert value={form.d19new} onChange={v => onSet("d19new", v)} />
            </FieldRow>
            <FieldRow label="Q20 — Teacher-student interaction improves in shared language.">
              <Likert value={form.e19} onChange={v => onSet("e19", v)} />
            </FieldRow>
            {/* NEW Q21 */}
            <FieldRow label="Q21 — Teacher use Urdu or local Languages while teaching subjects in English.">
              <Likert value={form.d21new} onChange={v => onSet("d21new", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION E (formerly F) — Primary Level MOI ──────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section E" title="Preferred Medium of Instruction — Primary Level (Grades 1–5)" />

            <FieldRow label="Q22 — Mother tongue should be medium of instruction at primary level.">
              <Likert value={form.f20} onChange={v => onSet("f20", v)} />
            </FieldRow>
            <FieldRow label="Q23 — Urdu should be medium of instruction at primary level.">
              <Likert value={form.f21} onChange={v => onSet("f21", v)} />
            </FieldRow>
            <FieldRow label="Q24 — English should be medium of instruction at primary level.">
              <Likert value={form.f22} onChange={v => onSet("f22", v)} />
            </FieldRow>
            <FieldRow label="Q25 — Bilingual (Mother tongue + Urdu) model should be used.">
              <Likert value={form.f23} onChange={v => onSet("f23", v)} />
            </FieldRow>
            <FieldRow label="Q26 — Gradual transition (Mother tongue → Urdu → English) is appropriate.">
              <Likert value={form.f24} onChange={v => onSet("f24", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION F (formerly G) — Middle Level MOI ───────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section F" title="Preferred Medium of Instruction — Middle Level (Grades 6–8)" />

            <FieldRow label="Q27 — Urdu should be medium of Instruction at middle level.">
              <Likert value={form.g25} onChange={v => onSet("g25", v)} />
            </FieldRow>
            <FieldRow label="Q28 — English should become medium at middle level.">
              <Likert value={form.g26} onChange={v => onSet("g26", v)} />
            </FieldRow>
            <FieldRow label="Q29 — Bilingual Urdu-English model should be adopted.">
              <Likert value={form.g27} onChange={v => onSet("g27", v)} />
            </FieldRow>
            <FieldRow label="Q30 — Mother tongue support should continue at middle level.">
              <Likert value={form.g28} onChange={v => onSet("g28", v)} />
            </FieldRow>
            <FieldRow label="Q31 — Gradual shift to English should begin at middle level.">
              <Likert value={form.g29} onChange={v => onSet("g29", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION G (formerly H) — Matriculation Level MOI ────────── */}
          {/* New question inserted after old Q30 (now Q32)                  */}
          <div className="section-block">
            <SectionHeader badge="Section G" title="Preferred Medium of Instruction — Matriculation Level (Grades 9–10)" />

            <FieldRow label="Q32 — English should be medium of Instruction at matric level.">
              <Likert value={form.h30} onChange={v => onSet("h30", v)} />
            </FieldRow>
            {/* NEW Q33 — added after Q32 */}
            <FieldRow label="Q33 — Mother Tongue should be medium at matric level.">
              <Likert value={form.g33new} onChange={v => onSet("g33new", v)} />
            </FieldRow>
            <FieldRow label="Q34 — Urdu should remain medium of Instruction at matric level.">
              <Likert value={form.h31} onChange={v => onSet("h31", v)} />
            </FieldRow>
            <FieldRow label="Q35 — Bilingual Urdu-English model is more effective.">
              <Likert value={form.h32} onChange={v => onSet("h32", v)} />
            </FieldRow>
            <FieldRow label="Q36 — Students should be prepared for English medium at higher education.">
              <Likert value={form.h33} onChange={v => onSet("h33", v)} />
            </FieldRow>
            <FieldRow label="Q37 — Technical subjects should be taught in English.">
              <Likert value={form.h34} onChange={v => onSet("h34", v)} />
            </FieldRow>
          </div>

          {/* ── SECTION I (formerly Policy/Section I) DELETED entirely ────── */}

          {/* ── SECTION H (formerly J) — Medium of Instruction and Dropout ─ */}
          <div className="section-block">
            <SectionHeader badge="Section H" title="Medium of Instruction and Dropout Ratio" />

            <FieldRow label="Q38 — Students are more likely to drop out when they do not understand the language of instruction.">
              <Likert value={form.k40} onChange={v => onSet("k40", v)} />
            </FieldRow>
            <FieldRow label="Q39 — English-medium of instruction at primary level contributes to early grade dropout.">
              <Likert value={form.k41} onChange={v => onSet("k41", v)} />
            </FieldRow>
            <FieldRow label="Q40 — Students from rural backgrounds drop out more due to language difficulties.">
              <Likert value={form.k42} onChange={v => onSet("k42", v)} />
            </FieldRow>
            <FieldRow label="Q41 — Mother tongue instruction can reduce dropout ratio in early grades.">
              <Likert value={form.k43} onChange={v => onSet("k43", v)} />
            </FieldRow>
            <FieldRow label="Q42 — Language mismatch between home and school increases dropout risk.">
              <Likert value={form.k44} onChange={v => onSet("k44", v)} />
            </FieldRow>
            <FieldRow label="Q43 — Students losing interest due to language difficulty leads to absenteeism.">
              <Likert value={form.k45} onChange={v => onSet("k45", v)} />
            </FieldRow>
            <FieldRow label="Q44 — Urdu medium reduces dropout compared to English medium in public schools.">
              <Likert value={form.k46} onChange={v => onSet("k46", v)} />
            </FieldRow>
            <FieldRow label="Q45 — Students with weak English foundation are more likely to leave school.">
              <Likert value={form.k47} onChange={v => onSet("k47", v)} />
            </FieldRow>
            <FieldRow label="Q46 — Multilingual instruction improves student retention.">
              <Likert value={form.k48} onChange={v => onSet("k48", v)} />
            </FieldRow>
            <FieldRow label="Q47 — Dropout ratio is higher in schools strictly enforcing English-only policy.">
              <Likert value={form.k49} onChange={v => onSet("k49", v)} />
            </FieldRow>
            <FieldRow label="Q48 — Students repeat grades more often due to language comprehension issues.">
              <Likert value={form.k50} onChange={v => onSet("k50", v)} />
            </FieldRow>
            <FieldRow label="Q49 — Early conceptual gaps caused by language difficulty lead to eventual dropout.">
              <Likert value={form.k51} onChange={v => onSet("k51", v)} />
            </FieldRow>

            <FieldRow label="Q50 — Dropout is highest at:">
              <RadioGroup options={DROPOUT_LEVEL} value={form.k52} onChange={v => onSet("k52", v)} />
            </FieldRow>
            <FieldRow label="Q51 — Language-related dropout is most common at:">
              <RadioGroup options={DROPOUT_GRADE} value={form.k53} onChange={v => onSet("k53", v)} />
            </FieldRow>
            <FieldRow label="Q52 — Students at risk of dropout mostly belong to:">
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