import RadioGroup    from "../components/RadioGroup.jsx";
import Likert        from "../components/Likert.jsx";
import FieldRow      from "../components/FieldRow.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {
<<<<<<< HEAD
  DROPOUT_LEVEL,      DROPOUT_LEVEL_UR,
  DROPOUT_GRADE,      DROPOUT_GRADE_UR,
  DROPOUT_BACKGROUND, DROPOUT_BACKGROUND_UR,
} from "../constants.js";

/* ─────────────────────────────────────────────────────────────
   All display text in both languages.
   Only labels change — form keys & saved values stay identical.
   ───────────────────────────────────────────────────────────── */
const T = {
  en: {
    back:        "← Back",
    pageLabel:   "Page 2 of 2",
    eyebrow:     "Page 2 of 2",
    headerTitle: "Equity, Capacity, Policy & Dropout",
    headerDesc:  "Equity and access, teacher capacity, medium preferences, and dropout analysis.",
    tags: ["§C Equity","§D Teacher Capacity","§E Primary MOI","§F Middle MOI","§G Matric MOI","§H Dropout"],

    badgeC: "Section C",
    secC:   "Equity and Access",
    d12:    "Q13 — English medium of instruction favors elite/private school students.",
    d13:    "Q14 — Students from regional language backgrounds are disadvantaged.",
    d14:    "Q15 — Language policy contributes to educational inequality.",
    c16new: "Q16 — More Job Opportunities are available for English medium students.",

    badgeD: "Section D",
    secD:   "Teacher Capacity",
    e16:    "Q17 — Teachers are able to teach effectively in English medium.",
    e17:    "Q18 — Teachers naturally switch to local languages for explanation.",
    d19new: "Q19 — Teacher can teach in Urdu or in local Languages.",
    e19:    "Q20 — Teacher-student interaction improves in shared language.",
    d21new: "Q21 — Teacher use Urdu or local Languages while teaching subjects in English.",

    badgeE: "Section E",
    secE:   "Preferred Medium of Instruction — Primary Level (Grades 1–5)",
    f20:    "Q22 — Mother tongue should be medium of instruction at primary level.",
    f21:    "Q23 — Urdu should be medium of instruction at primary level.",
    f22:    "Q24 — English should be medium of instruction at primary level.",
    f23:    "Q25 — Bilingual (Mother tongue + Urdu) model should be used.",
    f24:    "Q26 — Gradual transition (Mother tongue → Urdu → English) is appropriate.",

    badgeF: "Section F",
    secF:   "Preferred Medium of Instruction — Middle Level (Grades 6–8)",
    g25:    "Q27 — Urdu should be medium of Instruction at middle level.",
    g26:    "Q28 — English should become medium at middle level.",
    g27:    "Q29 — Bilingual Urdu-English model should be adopted.",
    g28:    "Q30 — Mother tongue support should continue at middle level.",
    g29:    "Q31 — Gradual shift to English should begin at middle level.",

    badgeG: "Section G",
    secG:   "Preferred Medium of Instruction — Matriculation Level (Grades 9–10)",
    h30:    "Q32 — English should be medium of Instruction at matric level.",
    g33new: "Q33 — Mother Tongue should be medium at matric level.",
    h31:    "Q34 — Urdu should remain medium of Instruction at matric level.",
    h32:    "Q35 — Bilingual Urdu-English model is more effective.",
    h33:    "Q36 — Students should be prepared for English medium at higher education.",
    h34:    "Q37 — Technical subjects should be taught in English.",

    badgeH: "Section H",
    secH:   "Medium of Instruction and Dropout Ratio",
    k40:    "Q38 — Students are more likely to drop out when they do not understand the language of instruction.",
    k41:    "Q39 — English-medium of instruction at primary level contributes to early grade dropout.",
    k42:    "Q40 — Students from rural backgrounds drop out more due to language difficulties.",
    k43:    "Q41 — Mother tongue instruction can reduce dropout ratio in early grades.",
    k44:    "Q42 — Language mismatch between home and school increases dropout risk.",
    k45:    "Q43 — Students losing interest due to language difficulty leads to absenteeism.",
    k46:    "Q44 — Urdu medium reduces dropout compared to English medium in public schools.",
    k47:    "Q45 — Students with weak English foundation are more likely to leave school.",
    k48:    "Q46 — Multilingual instruction improves student retention.",
    k49:    "Q47 — Dropout ratio is higher in schools strictly enforcing English-only policy.",
    k50:    "Q48 — Students repeat grades more often due to language comprehension issues.",
    k51:    "Q49 — Early conceptual gaps caused by language difficulty lead to eventual dropout.",
    k52:    "Q50 — Dropout is highest at:",
    k53:    "Q51 — Language-related dropout is most common at:",
    k54:    "Q52 — Students at risk of dropout mostly belong to:",

    prev:       "← Previous",
    submit:     "✓ Complete & Submit Survey",
    submitting: "Submitting…",
  },

  ur: {
    back:        "← واپس",
    pageLabel:   "صفحہ 2 از 2",
    eyebrow:     "صفحہ 2 از 2",
    headerTitle: "مساوات، استعداد، پالیسی اور ڈراپ آؤٹ",
    headerDesc:  "مساوات اور رسائی، اساتذہ کی استعداد، ذریعہ تعلیم کی ترجیحات، اور ڈراپ آؤٹ (اسکول چھوڑنے) کا تجزیہ۔",
    tags: ["§C مساوات","§D اساتذہ کی استعداد","§E پرائمری ذریعہ تعلیم","§F مڈل ذریعہ تعلیم","§G میٹرک ذریعہ تعلیم","§H ڈراپ آؤٹ"],

    badgeC: "حصہ C",
    secC:   "مساوات اور رسائی",
    d12:    "سوال 13 — انگریزی ذریعہ تعلیم اشرافیہ/نجی اسکولوں کے طلبہ کو فائدہ دیتا ہے۔",
    d13:    "سوال 14 — علاقائی زبانوں کے پس منظر والے طلبہ نقصان میں رہتے ہیں۔",
    d14:    "سوال 15 — زبان کی پالیسی تعلیمی عدم مساوات میں کردار ادا کرتی ہے۔",
    c16new: "سوال 16 — انگریزی میڈیم کے طلبہ کے لیے ملازمت کے زیادہ مواقع دستیاب ہیں۔",

    badgeD: "حصہ D",
    secD:   "اساتذہ کی استعداد",
    e16:    "سوال 17 — اساتذہ انگریزی میڈیم میں مؤثر طریقے سے پڑھانے کی صلاحیت رکھتے ہیں۔",
    e17:    "سوال 18 — اساتذہ وضاحت کے لیے فطری طور پر مقامی زبانوں میں بات کرنے لگتے ہیں۔",
    d19new: "سوال 19 — استاد اردو یا مقامی زبانوں میں پڑھا سکتا ہے۔",
    e19:    "سوال 20 — مشترکہ زبان میں استاد اور طالب علم کا باہمی رابطہ بہتر ہوتا ہے۔",
    d21new: "سوال 21 — اساتذہ انگریزی میں مضامین پڑھاتے ہوئے اردو یا مقامی زبانیں استعمال کرتے ہیں۔",

    badgeE: "حصہ E",
    secE:   "ترجیحی ذریعہ تعلیم — پرائمری سطح (جماعت 1 تا 5)",
    f20:    "سوال 22 — پرائمری سطح پر مادری زبان ذریعہ تعلیم ہونی چاہیے۔",
    f21:    "سوال 23 — پرائمری سطح پر اردو ذریعہ تعلیم ہونی چاہیے۔",
    f22:    "سوال 24 — پرائمری سطح پر انگریزی ذریعہ تعلیم ہونی چاہیے۔",
    f23:    "سوال 25 — دو لسانی ماڈل (مادری زبان + اردو) استعمال ہونا چاہیے۔",
    f24:    "سوال 26 — بتدریج منتقلی (پہلے مادری زبان، پھر اردو، پھر انگریزی) مناسب ہے۔",

    badgeF: "حصہ F",
    secF:   "ترجیحی ذریعہ تعلیم — مڈل سطح (جماعت 6 تا 8)",
    g25:    "سوال 27 — مڈل سطح پر اردو ذریعہ تعلیم ہونی چاہیے۔",
    g26:    "سوال 28 — مڈل سطح پر انگریزی کو ذریعہ تعلیم بننا چاہیے۔",
    g27:    "سوال 29 — دو لسانی اردو-انگریزی ماڈل اپنایا جانا چاہیے۔",
    g28:    "سوال 30 — مڈل سطح پر مادری زبان کی معاونت جاری رہنی چاہیے۔",
    g29:    "سوال 31 — انگریزی کی طرف بتدریج منتقلی مڈل سطح سے شروع ہونی چاہیے۔",

    badgeG: "حصہ G",
    secG:   "ترجیحی ذریعہ تعلیم — میٹرک سطح (جماعت 9 تا 10)",
    h30:    "سوال 32 — میٹرک سطح پر انگریزی ذریعہ تعلیم ہونی چاہیے۔",
    g33new: "سوال 33 — میٹرک سطح پر مادری زبان ذریعہ تعلیم ہونی چاہیے۔",
    h31:    "سوال 34 — میٹرک سطح پر اردو ہی ذریعہ تعلیم رہنی چاہیے۔",
    h32:    "سوال 35 — دو لسانی اردو-انگریزی ماڈل زیادہ مؤثر ہے۔",
    h33:    "سوال 36 — طلبہ کو اعلیٰ تعلیم میں انگریزی میڈیم کے لیے تیار کیا جانا چاہیے۔",
    h34:    "سوال 37 — فنی (ٹیکنیکل) مضامین انگریزی میں پڑھائے جانے چاہئیں۔",

    badgeH: "حصہ H",
    secH:   "ذریعہ تعلیم اور ڈراپ آؤٹ کی شرح",
    k40:    "سوال 38 — جب طلبہ ذریعہ تعلیم کی زبان نہیں سمجھتے تو ان کے اسکول چھوڑنے کا امکان زیادہ ہوتا ہے۔",
    k41:    "سوال 39 — پرائمری سطح پر انگریزی ذریعہ تعلیم ابتدائی جماعتوں میں اسکول چھوڑنے کا سبب بنتا ہے۔",
    k42:    "سوال 40 — دیہی پس منظر کے طلبہ زبان کی مشکلات کی وجہ سے زیادہ اسکول چھوڑتے ہیں۔",
    k43:    "سوال 41 — مادری زبان میں تدریس ابتدائی جماعتوں میں ڈراپ آؤٹ کی شرح کم کر سکتی ہے۔",
    k44:    "سوال 42 — گھر اور اسکول کی زبان میں فرق اسکول چھوڑنے کے خطرے کو بڑھاتا ہے۔",
    k45:    "سوال 43 — زبان کی مشکل کے باعث طلبہ کی دلچسپی ختم ہونا غیر حاضری کا سبب بنتا ہے۔",
    k46:    "سوال 44 — سرکاری اسکولوں میں اردو میڈیم، انگریزی میڈیم کے مقابلے میں ڈراپ آؤٹ کم کرتا ہے۔",
    k47:    "سوال 45 — کمزور انگریزی بنیاد والے طلبہ کے اسکول چھوڑنے کا امکان زیادہ ہوتا ہے۔",
    k48:    "سوال 46 — کثیر لسانی تدریس طلبہ کی اسکول میں برقراری کو بہتر بناتی ہے۔",
    k49:    "سوال 47 — صرف انگریزی کی سخت پالیسی والے اسکولوں میں ڈراپ آؤٹ کی شرح زیادہ ہوتی ہے۔",
    k50:    "سوال 48 — زبان کی سمجھ کے مسائل کی وجہ سے طلبہ زیادہ کثرت سے جماعتیں دہراتے ہیں۔",
    k51:    "سوال 49 — زبان کی مشکل سے پیدا ہونے والے ابتدائی تصوراتی خلا بالآخر اسکول چھوڑنے کا باعث بنتے ہیں۔",
    k52:    "سوال 50 — ڈراپ آؤٹ سب سے زیادہ کس سطح پر ہے:",
    k53:    "سوال 51 — زبان سے متعلق ڈراپ آؤٹ سب سے زیادہ کن جماعتوں میں عام ہے:",
    k54:    "سوال 52 — ڈراپ آؤٹ کے خطرے سے دوچار طلبہ زیادہ تر کس پس منظر سے تعلق رکھتے ہیں:",

    prev:       "← پچھلا صفحہ",
    submit:     "✓ سروے مکمل کریں اور جمع کروائیں",
    submitting: "جمع کیا جا رہا ہے…",
  },
};

export default function SurveyPage2({ form, onSet, onBack, onComplete, submitting }) {
  const lang = form.language === "ur" ? "ur" : "en";   // default = English
  const t    = T[lang];
  const isUr = lang === "ur";

  // In Urdu, wrap question text so it renders BIGGER in Jameel Noori
  // (styled by .urdu-q in urdu.css)
  const Q = txt => (isUr ? <span className="urdu-q">{txt}</span> : txt);

=======
  DROPOUT_LEVEL, DROPOUT_GRADE, DROPOUT_BACKGROUND,
} from "../constants.js";

export default function SurveyPage2({ form, onSet, onBack, onComplete, submitting }) {
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
  return (
    <div className="survey-shell">

      <div className="survey-topbar">
<<<<<<< HEAD
        <button className="btn-back" onClick={onBack}>{t.back}</button>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: "100%" }} />
        </div>
        <div className="progress-label">{t.pageLabel}</div>
=======
        <button className="btn-back" onClick={onBack}>← Back</button>
        <div className="progress-track">
          <div className="progress-bar" style={{ width: "100%" }} />
        </div>
        <div className="progress-label">Page 2 of 2</div>
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
=======
          <div className="card-header-content">
            <div className="card-header-eyebrow">Page 2 of 2</div>
            <div className="card-header-title">Equity, Capacity, Policy &amp; Dropout</div>
            <div className="card-header-desc">
              Equity and access, teacher capacity, medium preferences, and dropout analysis.
            </div>
            <div className="card-header-tags">
              {["§C Equity","§D Teacher Capacity","§E Primary MOI","§F Middle MOI","§G Matric MOI","§H Dropout"].map(t => (
                <span key={t} className="card-header-tag">{t}</span>
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
              ))}
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div
          className={isUr ? "card-body urdu" : "card-body"}
          dir={isUr ? "rtl" : "ltr"}
        >
=======
        <div className="card-body">
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3

          {/* ── SECTION C (formerly D) — Equity and Access ──────────────── */}
          {/* D15 has been moved to Section B on Page 1; replaced by new Q16 */}
          <div className="section-block">
<<<<<<< HEAD
            <SectionHeader badge={t.badgeC} title={t.secC} />

            <FieldRow label={Q(t.d12)}>
              <Likert value={form.d12} onChange={v => onSet("d12", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.d13)}>
              <Likert value={form.d13} onChange={v => onSet("d13", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.d14)}>
              <Likert value={form.d14} onChange={v => onSet("d14", v)} lang={lang} />
            </FieldRow>
            {/* NEW Q16 — replaces the slot left by D15 */}
            <FieldRow label={Q(t.c16new)}>
              <Likert value={form.c16new} onChange={v => onSet("c16new", v)} lang={lang} />
=======
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
            <FieldRow label="Q16 — More Job Opportunities are available for English medium students.">
              <Likert value={form.c16new} onChange={v => onSet("c16new", v)} />
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

          {/* ── SECTION D (formerly E) — Teacher Capacity ───────────────── */}
          {/* Q18 (old e18) removed; two new questions added                 */}
          <div className="section-block">
<<<<<<< HEAD
            <SectionHeader badge={t.badgeD} title={t.secD} />

            <FieldRow label={Q(t.e16)}>
              <Likert value={form.e16} onChange={v => onSet("e16", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.e17)}>
              <Likert value={form.e17} onChange={v => onSet("e17", v)} lang={lang} />
            </FieldRow>
            {/* old e18 ("Multilingual classrooms require flexible language policy") DELETED */}
            {/* NEW Q19 */}
            <FieldRow label={Q(t.d19new)}>
              <Likert value={form.d19new} onChange={v => onSet("d19new", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.e19)}>
              <Likert value={form.e19} onChange={v => onSet("e19", v)} lang={lang} />
            </FieldRow>
            {/* NEW Q21 */}
            <FieldRow label={Q(t.d21new)}>
              <Likert value={form.d21new} onChange={v => onSet("d21new", v)} lang={lang} />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

          {/* ── SECTION E (formerly F) — Primary Level MOI ──────────────── */}
          <div className="section-block">
<<<<<<< HEAD
            <SectionHeader badge={t.badgeE} title={t.secE} />

            <FieldRow label={Q(t.f20)}>
              <Likert value={form.f20} onChange={v => onSet("f20", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.f21)}>
              <Likert value={form.f21} onChange={v => onSet("f21", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.f22)}>
              <Likert value={form.f22} onChange={v => onSet("f22", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.f23)}>
              <Likert value={form.f23} onChange={v => onSet("f23", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.f24)}>
              <Likert value={form.f24} onChange={v => onSet("f24", v)} lang={lang} />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

          {/* ── SECTION F (formerly G) — Middle Level MOI ───────────────── */}
          <div className="section-block">
<<<<<<< HEAD
            <SectionHeader badge={t.badgeF} title={t.secF} />

            <FieldRow label={Q(t.g25)}>
              <Likert value={form.g25} onChange={v => onSet("g25", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.g26)}>
              <Likert value={form.g26} onChange={v => onSet("g26", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.g27)}>
              <Likert value={form.g27} onChange={v => onSet("g27", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.g28)}>
              <Likert value={form.g28} onChange={v => onSet("g28", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.g29)}>
              <Likert value={form.g29} onChange={v => onSet("g29", v)} lang={lang} />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

          {/* ── SECTION G (formerly H) — Matriculation Level MOI ────────── */}
          {/* New question inserted after old Q30 (now Q32)                  */}
          <div className="section-block">
<<<<<<< HEAD
            <SectionHeader badge={t.badgeG} title={t.secG} />

            <FieldRow label={Q(t.h30)}>
              <Likert value={form.h30} onChange={v => onSet("h30", v)} lang={lang} />
            </FieldRow>
            {/* NEW Q33 — added after Q32 */}
            <FieldRow label={Q(t.g33new)}>
              <Likert value={form.g33new} onChange={v => onSet("g33new", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.h31)}>
              <Likert value={form.h31} onChange={v => onSet("h31", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.h32)}>
              <Likert value={form.h32} onChange={v => onSet("h32", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.h33)}>
              <Likert value={form.h33} onChange={v => onSet("h33", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.h34)}>
              <Likert value={form.h34} onChange={v => onSet("h34", v)} lang={lang} />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

          {/* ── SECTION I (formerly Policy/Section I) DELETED entirely ────── */}

          {/* ── SECTION H (formerly J) — Medium of Instruction and Dropout ─ */}
          <div className="section-block">
<<<<<<< HEAD
            <SectionHeader badge={t.badgeH} title={t.secH} />

            <FieldRow label={Q(t.k40)}>
              <Likert value={form.k40} onChange={v => onSet("k40", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k41)}>
              <Likert value={form.k41} onChange={v => onSet("k41", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k42)}>
              <Likert value={form.k42} onChange={v => onSet("k42", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k43)}>
              <Likert value={form.k43} onChange={v => onSet("k43", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k44)}>
              <Likert value={form.k44} onChange={v => onSet("k44", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k45)}>
              <Likert value={form.k45} onChange={v => onSet("k45", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k46)}>
              <Likert value={form.k46} onChange={v => onSet("k46", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k47)}>
              <Likert value={form.k47} onChange={v => onSet("k47", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k48)}>
              <Likert value={form.k48} onChange={v => onSet("k48", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k49)}>
              <Likert value={form.k49} onChange={v => onSet("k49", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k50)}>
              <Likert value={form.k50} onChange={v => onSet("k50", v)} lang={lang} />
            </FieldRow>
            <FieldRow label={Q(t.k51)}>
              <Likert value={form.k51} onChange={v => onSet("k51", v)} lang={lang} />
            </FieldRow>

            <FieldRow label={Q(t.k52)}>
              <RadioGroup
                options={isUr ? DROPOUT_LEVEL_UR : DROPOUT_LEVEL}
                value={form.k52}
                onChange={v => onSet("k52", v)}
              />
            </FieldRow>
            <FieldRow label={Q(t.k53)}>
              <RadioGroup
                options={isUr ? DROPOUT_GRADE_UR : DROPOUT_GRADE}
                value={form.k53}
                onChange={v => onSet("k53", v)}
              />
            </FieldRow>
            <FieldRow label={Q(t.k54)}>
              <RadioGroup
                options={isUr ? DROPOUT_BACKGROUND_UR : DROPOUT_BACKGROUND}
                value={form.k54}
                onChange={v => onSet("k54", v)}
              />
=======
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
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
            </FieldRow>
          </div>

        </div>

        <div className="card-footer">
<<<<<<< HEAD
          <button className="btn btn-ghost" onClick={onBack}>{t.prev}</button>
          <button className="btn btn-gold" onClick={onComplete} disabled={submitting}>
            {submitting ? t.submitting : t.submit}
=======
          <button className="btn btn-ghost" onClick={onBack}>← Previous</button>
<button className="btn btn-gold" onClick={onComplete} disabled={submitting}>   
           {submitting ? "Submitting…" : "✓ Complete & Submit Survey"}
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
          </button>
        </div>
      </div>
    </div>
  );
}