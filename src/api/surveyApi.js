// const API_URL = "http://survey.ruqqiasultanaclinic.com/insertSurveyDataAsync";
const API_URL = "/proxy/insertSurveyDataAsync";

// Convert a form value to string safely
const s = (val) => (val !== undefined && val !== null) ? String(val) : "";

export async function submitSurvey(form) {
  const payload = {
    // ── Required by API ───────────────────────────────
    model: "",

    // ── Section A: Background ─────────────────────────
    respondentCategory:              s(form.respondentCategory),
    institutionType:                 s(form.institutionType),
    area:                            s(form.area),
    province:                        s(form.province),

    // ── Section B: Linguistic Reality ─────────────────
    motherTongueUnderstanding:       s(form.b1),
    englishDifficultyEarlyGrades:    s(form.b2),
    urduMoreAccessible:              s(form.b3),
    englishBarrierRural:             s(form.b4),
    participationLocalLanguage:      s(form.b5),
    languageMismatchImpact:          s(form.b6),

    // ── Section C: Educational Effectiveness ──────────
    earlyEducationMotherTongue:      s(form.c7),
    conceptLearningFamiliarLanguage: s(form.c8),
    englishPromotesRoteLearning:     s(form.c9),
    urduBridgeLanguage:              s(form.c10),
    multilingualImprovesLearning:    s(form.c11),

    // ── Section D: Equity and Access ──────────────────
    englishFavorsElite:              s(form.d12),
    regionalStudentsDisadvantaged:   s(form.d13),
    languagePolicyInequality:        s(form.d14),
    motherTongueReducesGap:          s(form.d15),

    // ── Section E: Teacher Capacity ───────────────────
    teachersEffectiveEnglish:        s(form.e16),
    teachersSwitchLocalLanguage:     s(form.e17),
    multilingualFlexiblePolicy:      s(form.e18),
    interactionSharedLanguage:       s(form.e19),

    // ── Section F: Primary MOI ────────────────────────
    motherTonguePrimary:             s(form.f20),
    urduPrimary:                     s(form.f21),
    englishPrimary:                  s(form.f22),
    bilingualMotherUrdu:             s(form.f23),
    gradualTransitionPrimary:        s(form.f24),

    // ── Section G: Middle MOI ─────────────────────────
    urduMiddle:                      s(form.g25),
    englishMiddle:                   s(form.g26),
    bilingualUrduEnglish:            s(form.g27),
    motherTongueSupportMiddle:       s(form.g28),
    gradualShiftEnglishMiddle:       s(form.g29),

    // ── Section H: Matric MOI ─────────────────────────
    englishMatric:                   s(form.h30),
    urduMatric:                      s(form.h31),
    bilingualMatric:                 s(form.h32),
    preparedForHigherEducation:      s(form.h33),
    technicalSubjectsEnglish:        s(form.h34),

    // ── Section I: Policy Direction ───────────────────
    needMultilingualPolicy:          s(form.i35),
    policyReflectDiversity:          s(form.i36),
    uniformPolicyNotSuitable:        s(form.i37),
    regionalFlexibility:             s(form.i38),
    evidenceBasedPolicy:             s(form.i39),

    // ── Section K: Dropout ────────────────────────────
    dropoutDueToLanguage:            s(form.k40),
    englishPrimaryDropout:           s(form.k41),
    ruralDropoutLanguage:            s(form.k42),
    motherTongueReduceDropout:       s(form.k43),
    languageMismatchDropoutRisk:     s(form.k44),
    languageAbsenteeism:             s(form.k45),
    urduReduceDropout:               s(form.k46),
    weakEnglishDropout:              s(form.k47),
    multilingualRetention:           s(form.k48),
    englishOnlyHighDropout:          s(form.k49),
    repeatGradesLanguageIssue:       s(form.k50),
    earlyGapsLeadDropout:            s(form.k51),
    highestDropoutLevel:             s(form.k52),
    languageDropoutStage:            s(form.k53),
    atRiskStudentsGroup:             s(form.k54),
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Server error ${response.status}: ${errBody}`);
  }

  return await response.json();
}