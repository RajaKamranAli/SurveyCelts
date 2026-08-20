import RadioGroup    from "../components/RadioGroup.jsx";
import Likert        from "../components/Likert.jsx";
import FieldRow      from "../components/FieldRow.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
<<<<<<< HEAD
  RESPONDENT_CATEGORY, RESPONDENT_CATEGORY_UR,
  INSTITUTION_TYPE,    INSTITUTION_TYPE_UR,
  SURVEY_LANGUAGES,
} from "../constants.js";

/* ─────────────────────────────────────────────────────────────
   All display text in both languages.
   Only labels change — form keys & saved values stay identical.
   ───────────────────────────────────────────────────────────── */
const T = {
  en: {
    back:        "← Dashboard",
    pageLabel:   "Page 1 of 2",
    eyebrow:     "Page 1 of 2",
    headerTitle: "Background & Linguistic Reality",
    headerDesc:  "Evidence-Based Language Teaching Policy Framework — stakeholder background and learner language realities.",
    tags: ["§A Background Information", "§B Language of Instruction and Educational Effectiveness"],

    badgeA: "Section A",
    secA:   "Background Information",
    qCat:   "Q1 — Respondent Category",
    qInst:  "Q2 — Institution Type",

    badgeB: "Section B",
    secB:   "Language of Instruction and Educational Effectiveness",
    b1:     "Q1 — Students understand concepts better in their mother tongue.",
    b2:     "Q2 — Students face difficulty when instruction is in English at early grades.",
    b3:     "Q3 — Urdu is more accessible to students than English at primary level.",
    b4:     "Q4 — English medium creates comprehension barriers for rural students.",
    b5new:  "Q5 — English medium creates comprehension barriers for urban students.",
    b6:     "Q6 — Teaching in foreign Language affects learning outcomes.",
    b5:     "Q7 — Students actively participate when teachers use local languages.",
    c7:     "Q8 — Early grade education should be in mother tongue.",
    c8:     "Q9 — Conceptual learning improves when taught in mother tongue.",
    c9:     "Q10 — English medium promotes rote learning at early stages.",
    c10:    "Q11 — Urdu can function as a bridge language in multilingual classrooms.",
    d15:    "Q12 — Mother tongue instruction reduces learning gaps.",

    cancel: "← Cancel",
    next:   "Continue → Sections C – I",
  },

  ur: {
    back:        "← ڈیش بورڈ",
    pageLabel:   "صفحہ 1 از 2",
    eyebrow:     "صفحہ 1 از 2",
    headerTitle: "پس منظر اور لسانی حقیقت",
    headerDesc:  "شواہد پر مبنی زبانِ تدریس پالیسی فریم ورک — فریقین کا پس منظر اور طلبہ کی لسانی حقیقتیں۔",
    tags: ["§A بنیادی معلومات", "§B ذریعہ تعلیم اور تعلیمی تاثیر"],

    badgeA: "حصہ A",
    secA:   "بنیادی معلومات",
    qCat:   "سوال 1 — جواب دہندہ کا زمرہ",
    qInst:  "سوال 2 — ادارے کی قسم",

    badgeB: "حصہ B",
    secB:   "ذریعہ تعلیم اور تعلیمی تاثیر",
    b1:     "سوال 1 — طلبہ اپنی مادری زبان میں تصورات کو بہتر سمجھتے ہیں۔",
    b2:     "سوال 2 — ابتدائی جماعتوں میں انگریزی میں تدریس سے طلبہ کو مشکل پیش آتی ہے۔",
    b3:     "سوال 3 — پرائمری سطح پر اردو، انگریزی کی نسبت طلبہ کے لیے زیادہ قابلِ فہم ہے۔",
    b4:     "سوال 4 — انگریزی ذریعہ تعلیم دیہی طلبہ کے لیے فہم میں رکاوٹیں پیدا کرتا ہے۔",
    b5new:  "سوال 5 — انگریزی ذریعہ تعلیم شہری طلبہ کے لیے فہم میں رکاوٹیں پیدا کرتا ہے۔",
    b6:     "سوال 6 — غیر ملکی زبان میں تدریس تعلیمی نتائج پر اثر انداز ہوتی ہے۔",
    b5:     "سوال 7 — جب اساتذہ مقامی زبانیں استعمال کرتے ہیں تو طلبہ بھرپور شرکت کرتے ہیں۔",
    c7:     "سوال 8 — ابتدائی جماعتوں کی تعلیم مادری زبان میں ہونی چاہیے۔",
    c8:     "سوال 9 — مادری زبان میں تدریس سے تصوراتی سیکھنے کا عمل بہتر ہوتا ہے۔",
    c9:     "سوال 10 — انگریزی ذریعہ تعلیم ابتدائی مراحل میں رٹے کو فروغ دیتا ہے۔",
    c10:    "سوال 11 — کثیر لسانی کلاس رومز میں اردو ایک رابطے (پُل) کی زبان کے طور پر کام کر سکتی ہے۔",
    d15:    "سوال 12 — مادری زبان میں تدریس سیکھنے کے فرق کو کم کرتی ہے۔",

    cancel: "← منسوخ کریں",
    next:   "جاری رکھیں — حصے C تا I",
  },
};

export default function SurveyPage1({ form, onSet, onNext, onBack }) {
  const lang = form.language === "ur" ? "ur" : "en";   // default = English
  const t    = T[lang];
  const isUr = lang === "ur";

  // In Urdu, wrap question text so it renders BIGGER in Jameel Noori
  // (styled by .urdu-q in urdu.css)
  const Q = txt => (isUr ? <span className="urdu-q">{txt}</span> : txt);

=======
  RESPONDENT_CATEGORY, INSTITUTION_TYPE,
} from "../constants.js";

export default function SurveyPage1({ form, onSet, onNext, onBack }) {
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
  return (
    <div className="survey-shell">

      <div className="survey-topbar">
<<<<<<< HEAD
        <button className="btn-back" onClick={onBack}>{t.back}</button>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: "50%" }} />
        </div>
        <div className="progress-label">{t.pageLabel}</div>
=======
        <button className="btn-back" onClick={onBack}>← Dashboard</button>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: "50%" }} />
        </div>
        <div className="progress-label">Page 1 of 2</div>
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
      </div>

      <div className="survey-card">

        <div className="card-header">
<<<<<<< HEAD
          <div
            className={isUr ? "card-header-content urdu" : "card-header-content"}
            dir={isUr ? "rtl" : "ltr"}
          >
            <div className="card-header-eyebrow">{t.eyebrow}</div>
            <div className="card-header-title">{t.headerTitle}</div>
            <div className="card-header-desc">{t.headerDesc}</div>
            <div className="card-header-tags">
              {t.tags.map(tag => (
                <span key={tag} className="card-header-tag">{tag}</span>
              ))}
=======
          <div className="card-header-content">
            <div className="card-header-eyebrow">Page 1 of 2</div>
            <div className="card-header-title">Background &amp; Linguistic Reality</div>
            <div className="card-header-desc">
              Evidence-Based Language Teaching Policy Framework — stakeholder background and learner language realities.
            </div>
            <div className="card-header-tags">
              <span className="card-header-tag">§A Background Information</span>
              <span className="card-header-tag">§B Language of Instruction and Educational Effectiveness</span>
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div
          className={isUr ? "card-body urdu" : "card-body"}
          dir={isUr ? "rtl" : "ltr"}
        >

          {/* ── LANGUAGE SELECTOR — shown BEFORE "Background Information" ── */}
          {/* Value saved as form.language ("en" / "ur"); answers keep the   */}
          {/* same keys/values in both languages.                            */}
          <div className="section-block" dir="ltr">
            <SectionHeader badge="Language / زبان" title="Survey Language — سروے کی زبان" />
            <FieldRow label="Select survey language — سروے کی زبان منتخب کریں">
              <RadioGroup
                options={SURVEY_LANGUAGES}
                value={form.language || "en"}
                onChange={v => onSet("language", v)}
              />
            </FieldRow>
          </div>

          {/* ── SECTION A ─────────────────────────────────── */}
          <div className="section-block">
            <SectionHeader badge={t.badgeA} title={t.secA} />

            <FieldRow label={Q(t.qCat)}>
              <RadioGroup
                options={isUr ? RESPONDENT_CATEGORY_UR : RESPONDENT_CATEGORY}
                value={form.respondentCategory}
                onChange={v => onSet("respondentCategory", v)}
              />
            </FieldRow>
            <FieldRow label={Q(t.qInst)}>
              <RadioGroup
                options={isUr ? INSTITUTION_TYPE_UR : INSTITUTION_TYPE}
                value={form.institutionType}
                onChange={v => onSet("institutionType", v)}
              />
=======
        <div className="card-body">

          {/* ── SECTION A ─────────────────────────────────── */}
          <div className="section-block">
            <SectionHeader badge="Section A" title="Background Information" />

            <FieldRow label="Q1 — Respondent Category">
              <RadioGroup options={RESPONDENT_CATEGORY} value={form.respondentCategory} onChange={v => onSet("respondentCategory", v)} />
            </FieldRow>
            <FieldRow label="Q2 — Institution Type">
              <RadioGroup options={INSTITUTION_TYPE} value={form.institutionType} onChange={v => onSet("institutionType", v)} />
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

          {/* ── SECTION B — Language of Instruction and Educational Effectiveness ── */}
          {/* (merged former Section B + Section C; D15 appended at end)             */}
          <div className="section-block" style={{ marginBottom: 0 }}>
<<<<<<< HEAD
            <SectionHeader badge={t.badgeB} title={t.secB} />

            {/* ── former Section B questions ── */}
            <FieldRow label={Q(t.b1)}>
              <Likert value={form.b1} onChange={v => onSet("b1", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.b2)}>
              <Likert value={form.b2} onChange={v => onSet("b2", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.b3)}>
              <Likert value={form.b3} onChange={v => onSet("b3", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.b4)}>
              <Likert value={form.b4} onChange={v => onSet("b4", v)} lang={lang} />
            </FieldRow>

            {/* ── NEW Q5 (added after old Q4) ── */}
            <FieldRow label={Q(t.b5new)}>
              <Likert value={form.b5new} onChange={v => onSet("b5new", v)} lang={lang} />
            </FieldRow>

            {/* ── old b6 (text changed) → now Q6 ── */}
            <FieldRow label={Q(t.b6)}>
              <Likert value={form.b6} onChange={v => onSet("b6", v)} lang={lang} />
            </FieldRow>

            {/* ── old b5 → now Q7 ── */}
            <FieldRow label={Q(t.b5)}>
              <Likert value={form.b5} onChange={v => onSet("b5", v)} lang={lang} />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>

            {/* ── former Section C questions merged in (Q11 deleted) ── */}
            {/* old c7 → Q8 */}
<<<<<<< HEAD
            <FieldRow label={Q(t.c7)}>
              <Likert value={form.c7} onChange={v => onSet("c7", v)} lang={lang} />
            </FieldRow>
            {/* old c8 → Q9 */}
            <FieldRow label={Q(t.c8)}>
              <Likert value={form.c8} onChange={v => onSet("c8", v)} lang={lang} />
            </FieldRow>
            {/* old c9 → Q10 */}
            <FieldRow label={Q(t.c9)}>
              <Likert value={form.c9} onChange={v => onSet("c9", v)} lang={lang} />
            </FieldRow>
            {/* old c10 → Q11 */}
            <FieldRow label={Q(t.c10)}>
              <Likert value={form.c10} onChange={v => onSet("c10", v)} lang={lang} />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
            {/* old c11 (Q11 original) DELETED — not rendered */}

            {/* ── old D15 moved here → Q12 ── */}
<<<<<<< HEAD
            <FieldRow label={Q(t.d15)}>
              <Likert value={form.d15} onChange={v => onSet("d15", v)} lang={lang} />
=======
            <FieldRow label="Q12 — Mother tongue instruction reduces learning gaps.">
              <Likert value={form.d15} onChange={v => onSet("d15", v)} />
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

        </div>

        <div className="card-footer">
<<<<<<< HEAD
          <button className="btn btn-ghost" onClick={onBack}>{t.cancel}</button>
          <button className="btn btn-primary" onClick={onNext}>
            {t.next}
=======
          <button className="btn btn-ghost" onClick={onBack}>← Cancel</button>
          <button className="btn btn-primary" onClick={onNext}>
            Continue → Sections C – I
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
          </button>
        </div>
      </div>
    </div>
  );
}