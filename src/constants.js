<<<<<<< HEAD
// ─────────────────────────────────────────────────────────────
// Survey language toggle (shown at the top of Page 1)
// ─────────────────────────────────────────────────────────────
export const SURVEY_LANGUAGES = [
  { value: "en", label: "English" },
  { value: "ur", label: "اردو" },
];

// ─────────────────────────────────────────────────────────────
// IMPORTANT: the `value` fields NEVER change between languages —
// only `label` changes. So the saved data is identical whether
// the respondent answers in English or in Urdu.
// ─────────────────────────────────────────────────────────────

// Section A
=======
// Section A

>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
export const RESPONDENT_CATEGORY = [
  { value: "teacher",       label: "Teacher" },
  { value: "policymaker",   label: "Policymaker" },
  { value: "administrator", label: "School Administrator" },
  { value: "parent",        label: "Parent" },
  { value: "researcher",    label: "Researcher" },
<<<<<<< HEAD
  { value: "student",       label: "Student" },
];
export const RESPONDENT_CATEGORY_UR = [
  { value: "teacher",       label: "استاد" },
  { value: "policymaker",   label: "پالیسی ساز" },
  { value: "administrator", label: "اسکول منتظم" },
  { value: "parent",        label: "والدین" },
  { value: "researcher",    label: "محقق" },
  { value: "student",       label: "طالب علم" },
];

=======
  { value: "student",       label: "Student" },   // ← ADD THIS LINE
];
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
export const INSTITUTION_TYPE = [
  { value: "public",        label: "Public" },
  { value: "private",       label: "Private" },
  { value: "semi_gov",      label: "Semi-Government" },
  { value: "madrassa",      label: "Madrassa" },
];
<<<<<<< HEAD
export const INSTITUTION_TYPE_UR = [
  { value: "public",        label: "سرکاری" },
  { value: "private",       label: "نجی" },
  { value: "semi_gov",      label: "نیم سرکاری" },
  { value: "madrassa",      label: "مدرسہ" },
];
=======
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3

export const AREAS = [
  { value: "urban",      label: "Urban" },
  { value: "semi_urban", label: "Semi-Urban" },
  { value: "rural",      label: "Rural" },
];
<<<<<<< HEAD
export const AREAS_UR = [
  { value: "urban",      label: "شہری" },
  { value: "semi_urban", label: "نیم شہری" },
  { value: "rural",      label: "دیہی" },
];
=======
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3

export const PROVINCES = [
  { value: "punjab",     label: "Punjab" },
  { value: "sindh",      label: "Sindh" },
  { value: "kpk",        label: "KPK" },
  { value: "balochistan",label: "Balochistan" },
  { value: "ict",        label: "ICT" },
  { value: "gb_ajk",     label: "GB/AJK" },
];
<<<<<<< HEAD
export const PROVINCES_UR = [
  { value: "punjab",     label: "پنجاب" },
  { value: "sindh",      label: "سندھ" },
  { value: "kpk",        label: "خیبر پختونخوا" },
  { value: "balochistan",label: "بلوچستان" },
  { value: "ict",        label: "وفاقی دارالحکومت (ICT)" },
  { value: "gb_ajk",     label: "گلگت بلتستان / آزاد کشمیر" },
];

// Section H (dropout) — multiple choice
=======

// Section K — multiple choice
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
export const DROPOUT_LEVEL = [
  { value: "primary", label: "Primary level" },
  { value: "middle",  label: "Middle level" },
  { value: "matric",  label: "Matric level" },
  { value: "equal",   label: "Equal at all levels" },
];
<<<<<<< HEAD
export const DROPOUT_LEVEL_UR = [
  { value: "primary", label: "پرائمری سطح" },
  { value: "middle",  label: "مڈل سطح" },
  { value: "matric",  label: "میٹرک سطح" },
  { value: "equal",   label: "تمام سطحوں پر برابر" },
];
=======
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3

export const DROPOUT_GRADE = [
  { value: "grade_1_3", label: "Grade 1–3" },
  { value: "grade_4_5", label: "Grade 4–5" },
  { value: "grade_6_8", label: "Grade 6–8" },
  { value: "grade_9_10",label: "Grade 9–10" },
];
<<<<<<< HEAD
export const DROPOUT_GRADE_UR = [
  { value: "grade_1_3", label: "جماعت 1 تا 3" },
  { value: "grade_4_5", label: "جماعت 4 تا 5" },
  { value: "grade_6_8", label: "جماعت 6 تا 8" },
  { value: "grade_9_10",label: "جماعت 9 تا 10" },
];
=======
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3

export const DROPOUT_BACKGROUND = [
  { value: "mother_tongue", label: "Mother tongue speakers (non-Urdu)" },
  { value: "urdu_medium",   label: "Urdu-medium background" },
  { value: "weak_english",  label: "Weak English background" },
  { value: "all_equally",   label: "All equally" },
];
<<<<<<< HEAD
export const DROPOUT_BACKGROUND_UR = [
  { value: "mother_tongue", label: "مادری زبان بولنے والے (غیر اردو)" },
  { value: "urdu_medium",   label: "اردو میڈیم پس منظر" },
  { value: "weak_english",  label: "کمزور انگریزی پس منظر" },
  { value: "all_equally",   label: "سب برابر" },
];
=======
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3

export const LIKERT5 = [
  { value: 1, label: "1 — Strongly Disagree" },
  { value: 2, label: "2 — Disagree" },
  { value: 3, label: "3 — Neutral" },
  { value: 4, label: "4 — Agree" },
  { value: 5, label: "5 — Strongly Agree" },
];
<<<<<<< HEAD
// Same values 1–5 → database values stay exactly the same
export const LIKERT5_UR = [
  { value: 1, label: "بالکل متفق نہیں" },
  { value: 2, label: "متفق نہیں" },
  { value: 3, label: "غیر جانب دار" },
  { value: 4, label: "متفق" },
  { value: 5, label: "مکمل طور پر متفق" },
];
=======
>>>>>>> 5bc574d5e9cf6e5cc27fa06bd2113cc68b9b19e3
