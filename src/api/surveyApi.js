const API_URL = "/proxy/insertSurveyDataAsync";
const s = (val) => (val !== undefined && val !== null) ? String(val) : "";

export async function submitSurvey(form) {
  const payload = {
    // Section A
    respondentCategory:              s(form.respondentCategory),
    institutionType:                 s(form.institutionType),
    area:                            s(form.area),
    province:                        s(form.province),

    // Section B (Q1–Q12)
    motherTongueUnderstanding:       s(form.b1),
    englishDifficultyEarlyGrades:    s(form.b2),
    urduMoreAccessible:              s(form.b3),
    englishBarrierRural:             s(form.b4),
    englishBarrierUrban:             s(form.b5new),   // NEW
    foreignLanguageAffectsLearning:  s(form.b6),      // renamed from languageMismatchImpact
    participationLocalLanguage:      s(form.b5),

    earlyEducationMotherTongue:      s(form.c7),
    conceptLearningMotherTongue:     s(form.c8),      // renamed
    englishPromotesRoteLearning:     s(form.c9),
    urduBridgeLanguage:              s(form.c10),
    motherTongueReducesGap:          s(form.d15),

    // Section C (Q13–Q16)
    englishFavorsElite:              s(form.d12),
    regionalStudentsDisadvantaged:   s(form.d13),
    languagePolicyInequality:        s(form.d14),
    jobOpportunitiesEnglish:         s(form.c16new),  // NEW

    // Section D (Q17–Q21)
    teachersEffectiveEnglish:        s(form.e16),
    teachersSwitchLocalLanguage:     s(form.e17),
    teacherCanTeachUrduLocal:        s(form.d19new),  // NEW
    interactionSharedLanguage:       s(form.e19),
    teacherUsesUrduLocalInEnglish:   s(form.d21new),  // NEW

    // Section E (Q22–Q26)
    motherTonguePrimary:             s(form.f20),
    urduPrimary:                     s(form.f21),
    englishPrimary:                  s(form.f22),
    bilingualMotherUrdu:             s(form.f23),
    gradualTransitionPrimary:        s(form.f24),

    // Section F (Q27–Q31)
    urduMiddle:                      s(form.g25),
    englishMiddle:                   s(form.g26),
    bilingualUrduEnglishMiddle:      s(form.g27),     // renamed
    motherTongueSupportMiddle:       s(form.g28),
    gradualShiftEnglishMiddle:       s(form.g29),

    // Section G (Q32–Q37)
    englishMatric:                   s(form.h30),
    motherTongueMatric:              s(form.g33new),  // NEW
    urduMatric:                      s(form.h31),
    bilingualMatric:                 s(form.h32),
    preparedForHigherEducation:      s(form.h33),
    technicalSubjectsEnglish:        s(form.h34),

    // Section I — DELETED (no fields)

    // Section H (Q38–Q52)
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