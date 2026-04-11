// Section A

export const RESPONDENT_CATEGORY = [
  { value: "teacher",       label: "Teacher" },
  { value: "policymaker",   label: "Policymaker" },
  { value: "administrator", label: "School Administrator" },
  { value: "parent",        label: "Parent" },
  { value: "researcher",    label: "Researcher" },
  { value: "student",       label: "Student" },   // ← ADD THIS LINE
];
export const INSTITUTION_TYPE = [
  { value: "public",        label: "Public" },
  { value: "private",       label: "Private" },
  { value: "semi_gov",      label: "Semi-Government" },
  { value: "madrassa",      label: "Madrassa" },
];

export const AREAS = [
  { value: "urban",      label: "Urban" },
  { value: "semi_urban", label: "Semi-Urban" },
  { value: "rural",      label: "Rural" },
];

export const PROVINCES = [
  { value: "punjab",     label: "Punjab" },
  { value: "sindh",      label: "Sindh" },
  { value: "kpk",        label: "KPK" },
  { value: "balochistan",label: "Balochistan" },
  { value: "ict",        label: "ICT" },
  { value: "gb_ajk",     label: "GB/AJK" },
];

// Section K — multiple choice
export const DROPOUT_LEVEL = [
  { value: "primary", label: "Primary level" },
  { value: "middle",  label: "Middle level" },
  { value: "matric",  label: "Matric level" },
  { value: "equal",   label: "Equal at all levels" },
];

export const DROPOUT_GRADE = [
  { value: "grade_1_3", label: "Grade 1–3" },
  { value: "grade_4_5", label: "Grade 4–5" },
  { value: "grade_6_8", label: "Grade 6–8" },
  { value: "grade_9_10",label: "Grade 9–10" },
];

export const DROPOUT_BACKGROUND = [
  { value: "mother_tongue", label: "Mother tongue speakers (non-Urdu)" },
  { value: "urdu_medium",   label: "Urdu-medium background" },
  { value: "weak_english",  label: "Weak English background" },
  { value: "all_equally",   label: "All equally" },
];

export const LIKERT5 = [
  { value: 1, label: "1 — Strongly Disagree" },
  { value: 2, label: "2 — Disagree" },
  { value: 3, label: "3 — Neutral" },
  { value: 4, label: "4 — Agree" },
  { value: 5, label: "5 — Strongly Agree" },
];
