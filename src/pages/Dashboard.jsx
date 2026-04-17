import { useState, useEffect } from "react";

// const API_GET = "http://survey.ruqqiasultanaclinic.com/api/UserTest/getallsurvey";
const API_GET = "/api/UserTest/getallsurvey";

/* ══════════════════════ GLOBAL STYLES ══════════════════════════════ */
const injectStyles = () => {
  if (document.getElementById("dash-gov-styles")) return;
  const el = document.createElement("style");
  el.id = "dash-gov-styles";
  el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

    :root {
       --cream:     #dde4ec;
      --cream-d:   #cdd6e0;
      --cream-dd:  #bcc8d4;
      --parchment: #d4dce6;
      --sage:      #2d6a4f;
      --sage-m:    #40916c;
      --sage-l:    #74c69d;
      --sage-xl:   #d8f3dc;
       --ink:       #1a1f2e;
      --ink-m:     #2d3444;
      --ink-l:     #4a5468;
      --ink-xl:    #7a8899;
      --gold:      #b5860d;
      --gold-l:    #e8b030;
      --gold-xl:   #fef3c7;
      --rust:      #9b4444;
      --rust-l:    #e07070;
      --white:     #ffffff;
      --shadow-s:  0 2px 8px rgba(26,26,46,0.07);
      --shadow-m:  0 6px 24px rgba(26,26,46,0.10);
      --shadow-l:  0 16px 48px rgba(26,26,46,0.13);
    }

    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

     .db-root {
      min-height:100vh;
      background: #dde4ec;
            font-family:'DM Sans',sans-serif;
      color: var(--ink);
      position:relative;
      overflow-x:hidden;
    }

    /* ── Background texture ── */
    .db-bg {
      position:fixed; inset:0; z-index:0; pointer-events:none;
    }
     .db-bg-paper {
      position:absolute; inset:0;
      background:
        radial-gradient(ellipse 80% 60% at 10% 10%, rgba(100,149,200,0.12) 0%, transparent 55%),
        radial-gradient(ellipse 60% 80% at 92% 90%, rgba(181,134,13,0.07) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200,215,230,0.5) 0%, transparent 70%);
    }
    .db-bg-lines {
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(45,106,79,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(45,106,79,0.04) 1px, transparent 1px);
      background-size:60px 60px;
    }
    .db-watermark {
      position:fixed; bottom:-60px; right:10px;
      font-family:'Playfair Display',serif;
      font-size:280px; font-weight:700; font-style:italic;
      color:rgba(45,106,79,0.04);
      pointer-events:none; z-index:0; user-select:none; line-height:1;
    }

    /* ── Top ribbon ── */
    .db-ribbon {
      height:5px;
      background:linear-gradient(90deg,
        var(--sage) 0%, var(--sage-m) 40%,
        var(--gold) 70%, var(--gold-l) 100%);
      position:relative; z-index:2;
    }

    /* ── Layout ── */
    .db-inner {
      position:relative; z-index:1;
      max-width:1200px; margin:0 auto; padding:0 40px 80px;
    }

    /* ── Nav ── */
    .db-nav {
      display:flex; align-items:center; justify-content:space-between;
      padding:24px 0;
      border-bottom:1px solid var(--cream-dd);
      margin-bottom:52px;
      animation:navSlide 0.7s ease both;
    }
    @keyframes navSlide {
      from { opacity:0; transform:translateY(-18px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .db-nav-left { display:flex; align-items:center; gap:16px; }
    .db-nav-emblem {
      width:52px; height:52px; border-radius:14px;
      background:linear-gradient(140deg, var(--sage) 0%, var(--sage-m) 100%);
      border:1px solid rgba(45,106,79,0.2);
      display:flex; align-items:center; justify-content:center;
      box-shadow: var(--shadow-m);
      flex-shrink:0;
    }
    .db-nav-emblem-inner {
      font-family:'Playfair Display',serif;
      font-size:19px; font-weight:700; color:#fff; letter-spacing:-0.5px;
    }
    .db-nav-org {
      font-size:11px; font-weight:600; letter-spacing:0.16em;
      text-transform:uppercase; color:var(--sage); opacity:0.9;
    }
    .db-nav-sub {
      font-size:10px; color:var(--ink-xl); margin-top:2px; letter-spacing:0.05em;
    }
    .db-nav-right { text-align:right; }
    .db-nav-live {
      display:inline-flex; align-items:center; gap:6px;
      font-size:11px; color:var(--sage-m); font-weight:600;
      background:var(--sage-xl); border:1px solid rgba(45,106,79,0.2);
      border-radius:100px; padding:5px 14px; margin-bottom:4px;
    }
    .db-pulse {
      width:7px; height:7px; border-radius:50%; background:var(--sage-m);
      animation:livePulse 2s ease-in-out infinite;
    }
    @keyframes livePulse {
      0%,100% { box-shadow:0 0 0 0 rgba(64,145,108,0.5); }
      50%      { box-shadow:0 0 0 6px rgba(64,145,108,0); }
    }
    .db-nav-date { font-size:11px; color:var(--ink-xl); letter-spacing:0.05em; }

    /* ── Hero ── */
    .db-hero { margin-bottom:48px; animation:fadeUp 0.9s ease 0.1s both; }
    @keyframes fadeUp {
      from { opacity:0; transform:translateY(28px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .db-kicker {
      display:inline-flex; align-items:center; gap:10px;
      font-size:10px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase;
      color:var(--gold);
      background:var(--gold-xl); border:1px solid rgba(181,134,13,0.25);
      border-radius:4px; padding:7px 16px; margin-bottom:22px;
    }
    .db-kicker::before,.db-kicker::after {
      content:''; display:inline-block; width:18px; height:1px; background:var(--gold);
    }
    .db-h1 {
      font-family:'Playfair Display',serif;
      font-size:clamp(40px,5.5vw,68px);
      font-weight:700; line-height:1.08;
      color:var(--ink); letter-spacing:-1.5px; margin-bottom:18px;
    }
    .db-h1-line2 {
      font-style:italic; color:var(--sage);
    }
    .db-desc {
      font-size:14.5px; line-height:1.85; font-weight:300;
      color:var(--ink-l); max-width:540px;
    }
    .db-ornament {
      display:flex; align-items:center; gap:16px; margin-top:28px;
    }
    .db-orn-line  { height:1px; width:60px; background:linear-gradient(90deg,rgba(45,106,79,0.35),transparent); }
    .db-orn-line-r{ height:1px; width:60px; background:linear-gradient(270deg,rgba(45,106,79,0.35),transparent); }
    .db-orn-diamond { width:7px; height:7px; border:1.5px solid rgba(45,106,79,0.3); transform:rotate(45deg); flex-shrink:0; }
    .db-orn-text { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:var(--ink-xl); }

    /* ── Stats ── */
    .db-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:32px; }
  .db-stat {
    background: linear-gradient(160deg, #ffffff 0%, #eaf0f6 100%);
  border:1.5px solid #c0ccd8; border-radius:16px; padding:22px 20px;
  position:relative; overflow:hidden;
  box-shadow: 0 2px 0px #b8b0a0, 0 6px 24px rgba(26,26,46,0.18);
  transition:transform 0.25s, box-shadow 0.25s, border-color 0.25s;
  animation:fadeUp 0.7s ease both;
}
    .db-stat::after {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg,rgba(255,255,255,0.8),transparent);
      border-radius:inherit; pointer-events:none;
    }
    .db-stat:hover {
  transform:translateY(-6px);
  border-color:#a8a090;
  box-shadow: 0 3px 0px #a8a090, 0 12px 36px rgba(26,26,46,0.22);
}
    .db-stat-topbar { position:absolute; top:0; left:0; right:0; height:3px; border-radius:16px 16px 0 0; }
    .db-stat-icon-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
    .db-stat-icon {
      width:40px; height:40px; border-radius:10px;
      display:flex; align-items:center; justify-content:center; font-size:18px;
      border:1px solid rgba(0,0,0,0.05);
    }
    .db-stat-chip {
      font-size:10px; font-weight:600; letter-spacing:0.07em;
      padding:3px 10px; border-radius:100px;
    }
   .db-stat-num {
  font-family:'Playfair Display',serif;
  font-size:50px; font-weight:700; line-height:1; color:#0d0d1f; margin-bottom:4px;
}
.db-stat-lbl { font-size:11px; color:#2a2a3a; font-weight:700; letter-spacing:0.06em; }
    .db-stat-glow {
      position:absolute; bottom:-30px; right:-30px;
      width:100px; height:100px; border-radius:50%;
      filter:blur(30px); opacity:0.08; pointer-events:none;
    }

    /* ── Buttons ── */
    .db-actions { display:flex; gap:12px; margin-bottom:44px; flex-wrap:wrap; animation:fadeUp 0.8s ease 0.3s both; }

    .db-btn-primary {
      display:inline-flex; align-items:center; gap:10px;
      background:linear-gradient(135deg, var(--sage) 0%, var(--sage-m) 100%);
      color:#fff; border:none; border-radius:10px;
      padding:13px 26px; font-size:14px; font-weight:600;
      cursor:pointer; font-family:'DM Sans',sans-serif;
      box-shadow:0 4px 16px rgba(45,106,79,0.35);
      transition:transform 0.2s, box-shadow 0.2s;
      position:relative; overflow:hidden;
    }
    .db-btn-primary::before {
      content:''; position:absolute; top:0; left:-100%; width:100%; height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent);
      transition:left 0.5s;
    }
    .db-btn-primary:hover::before { left:100%; }
    .db-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(45,106,79,0.45); }

    .db-btn-gold {
      display:inline-flex; align-items:center; gap:8px;
      background:linear-gradient(135deg, var(--gold), var(--gold-l));
      color:#fff; border:none; border-radius:10px;
      padding:13px 24px; font-size:14px; font-weight:600;
      cursor:pointer; font-family:'DM Sans',sans-serif;
      box-shadow:0 4px 16px rgba(181,134,13,0.3);
      transition:all 0.2s;
    }
    .db-btn-gold:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(181,134,13,0.45); }

    .db-btn-ghost {
      display:inline-flex; align-items:center; gap:8px;
      background:var(--white); color:var(--ink-l);
      border:1px solid var(--cream-dd); border-radius:10px;
      padding:13px 20px; font-size:14px; font-weight:500;
      cursor:pointer; font-family:'DM Sans',sans-serif;
      box-shadow: var(--shadow-s);
      transition:all 0.2s;
    }
    .db-btn-ghost:hover { background:var(--cream); border-color:var(--cream-dd); color:var(--ink); transform:translateY(-2px); box-shadow: var(--shadow-m); }

    /* ── Section header ── */
    .db-sec-hd { display:flex; align-items:center; gap:16px; margin-bottom:16px; animation:fadeUp 0.8s ease 0.38s both; }
    .db-sec-hd-lbl { font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--ink-xl); }
    .db-sec-hd-line { flex:1; height:1px; background:linear-gradient(90deg,var(--cream-dd),transparent); }
    .db-sec-hd-count {
      font-size:11px; color:var(--sage-m); font-weight:600;
      background:var(--sage-xl); border:1px solid rgba(45,106,79,0.15); border-radius:100px; padding:3px 12px;
    }

    /* ── Table ── */
      .db-table {
      background:#ffffff;
      border:1px solid #c0ccd8; border-radius:18px; overflow:hidden;
      animation:fadeUp 0.8s ease 0.43s both;
      box-shadow: var(--shadow-s);
    }
   .db-thead {
  display:grid; grid-template-columns:52px 1.2fr 1fr 1fr 1fr 96px;
  padding:14px 24px;
  background:#e8e2d6;
      border-bottom:1px solid var(--cream-dd);
    }
    .db-thead span {
      font-size:10px; font-weight:700; letter-spacing:0.13em;
      text-transform:uppercase; color:var(--ink-l);
    }
    .db-row {
      display:grid; grid-template-columns:52px 1.2fr 1fr 1fr 1fr 96px;
      padding:15px 24px; border-bottom:1px solid var(--cream-d);
      align-items:center; cursor:pointer;
      transition:all 0.16s ease;
      animation:rowIn 0.4s ease both;
    }
    @keyframes rowIn {
      from { opacity:0; transform:translateX(-12px); }
      to   { opacity:1; transform:translateX(0); }
    }
    .db-row:last-child { border-bottom:none; }
      .db-row:nth-child(even) { background:rgba(200,215,230,0.3); }
    .db-row:hover { background:rgba(100,149,200,0.12); border-color:rgba(100,149,200,0.2); transform:translateX(2px); }
    .db-row-num {
      font-family:'Playfair Display',serif; font-size:13px; font-weight:700;
      color:var(--ink-xl);
      background:var(--cream-d);
      width:28px; height:28px; border-radius:8px;
      display:flex; align-items:center; justify-content:center;
    }
    .db-row-cat { font-size:13px; font-weight:600; color:var(--sage); }
.db-row-cell { font-size:13px; color:#1a1a2e; font-weight:500; }
    .db-badge-done {
      display:inline-flex; align-items:center; gap:5px;
      background:var(--sage-xl);
      border:1px solid rgba(45,106,79,0.25);
      color:var(--sage); border-radius:100px;
      padding:4px 12px; font-size:10px; font-weight:700; letter-spacing:0.05em;
    }

    /* ── Empty ── */
    .db-empty { text-align:center; padding:70px 20px; }
    .db-empty-icon { font-size:48px; margin-bottom:16px; opacity:0.3; }
    .db-empty-title { font-family:'Playfair Display',serif; font-size:20px; color:var(--ink-xl); margin-bottom:8px; }
    .db-empty-desc { font-size:13px; color:var(--ink-xl); }

    /* ── Credit ── */
    .db-credit {
      margin-top:52px; padding-top:22px; border-top:1px solid var(--cream-dd);
      display:flex; align-items:center; justify-content:space-between;
      animation:fadeUp 0.8s ease 0.55s both;
    }
    .db-credit-text { font-size:12px; color:var(--ink-xl); line-height:1.7; }
    .db-credit-text strong { color:var(--ink-l); }
    .db-credit-mark {
      font-family:'Playfair Display',serif; font-size:26px; font-weight:700;
      font-style:italic; color:rgba(45,106,79,0.15); letter-spacing:-1px;
    }

    /* ── Modal ── */
    .db-overlay {
      position:fixed; inset:0; z-index:1000;
      background:rgba(26,26,46,0.5); backdrop-filter:blur(12px);
      display:flex; align-items:center; justify-content:center; padding:20px;
      animation:overlayIn 0.2s ease;
    }
    @keyframes overlayIn { from{opacity:0} to{opacity:1} }
    .db-modal {
      background:var(--white); border:1px solid var(--cream-dd);
      border-radius:20px; width:100%; max-width:800px;
      max-height:88vh; overflow-y:auto;
      box-shadow: var(--shadow-l);
      animation:modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes modalIn {
      from{opacity:0;transform:scale(0.93) translateY(16px)}
      to{opacity:1;transform:scale(1) translateY(0)}
    }
    .db-modal-hdr {
      padding:26px 30px 18px; border-bottom:1px solid var(--cream-dd);
      display:flex; justify-content:space-between; align-items:flex-start;
      position:sticky; top:0; background:var(--white); z-index:10;
    }
    .db-modal-id { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:var(--sage); margin-bottom:6px; font-weight:600; }
    .db-modal-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; color:var(--ink); }
    .db-modal-x {
      width:34px; height:34px; border-radius:50%;
      background:var(--cream); border:1px solid var(--cream-dd);
      color:var(--ink-l); font-size:18px;
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      transition:all 0.2s; flex-shrink:0;
    }
    .db-modal-x:hover { background:var(--cream-dd); color:var(--ink); }
    .db-modal-body { padding:22px 30px 28px; }
    .db-modal-sec { margin-bottom:24px; }
    .db-modal-sec-title {
      font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase;
      color:var(--sage); margin-bottom:10px; padding-bottom:7px;
      border-bottom:1px solid var(--cream-dd);
      display:flex; align-items:center; gap:8px;
    }
    .db-modal-sec-title::before { content:''; display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--sage-l); }
    .db-modal-fields { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
    .db-modal-field { background:var(--cream); border:1px solid var(--cream-dd); border-radius:10px; padding:11px 14px; }
    .db-modal-field-lbl { font-size:10px; color:var(--ink-xl); font-weight:600; letter-spacing:0.07em; margin-bottom:4px; text-transform:uppercase; }
    .db-modal-field-val { font-size:13px; color:var(--ink-m); font-weight:500; }
    .db-modal-footer { padding:0 30px 26px; text-align:center; }
    .db-modal-footer button {
      background:linear-gradient(135deg, var(--sage), var(--sage-m));
      color:#fff; border:none; border-radius:10px;
      padding:11px 40px; font-size:14px; font-weight:600;
      cursor:pointer; font-family:'DM Sans',sans-serif;
      box-shadow:0 4px 16px rgba(45,106,79,0.3); transition:all 0.2s;
    }
    .db-modal-footer button:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(45,106,79,0.45); }
    .db-modal::-webkit-scrollbar { width:4px; }
    .db-modal::-webkit-scrollbar-track { background:transparent; }
    .db-modal::-webkit-scrollbar-thumb { background:var(--cream-dd); border-radius:4px; }

    @media(max-width:720px) {
      .db-stats { grid-template-columns:1fr 1fr; }
      .db-thead,.db-row { grid-template-columns:40px 1fr 1fr; }
      .db-thead span:nth-child(n+4),.db-row>*:nth-child(n+4) { display:none; }
      .db-modal-fields { grid-template-columns:1fr; }
      .db-h1 { font-size:36px; }
      .db-inner { padding:0 20px 60px; }
    }
  `;
  document.head.appendChild(el);
};

/* ══════════════════════ MODAL SECTIONS ══════════════════════════════ */
const SECTIONS = [
  { title:"§A Background Information", fields:[
    ["Respondent Category","respondentCategory"],
    ["Institution Type","institutionType"],
    ["Area","area"],
    ["Province","province"],
  ]},
  { title:"§B Language of Instruction & Effectiveness", fields:[
    ["Mother Tongue Understanding","motherTongueUnderstanding"],
    ["English Difficulty (Early Grades)","englishDifficultyEarlyGrades"],
    ["Urdu More Accessible","urduMoreAccessible"],
    ["English Barrier (Rural)","englishBarrierRural"],
    ["English Barrier (Urban)","englishBarrierUrban"],
    ["Foreign Language Affects Learning","foreignLanguageAffectsLearning"],
    ["Participation (Local Language)","participationLocalLanguage"],
    ["Early Education Mother Tongue","earlyEducationMotherTongue"],
    ["Concept Learning Mother Tongue","conceptLearningMotherTongue"],
    ["English Promotes Rote Learning","englishPromotesRoteLearning"],
    ["Urdu as Bridge Language","urduBridgeLanguage"],
    ["Mother Tongue Reduces Gap","motherTongueReducesGap"],
  ]},
  { title:"§C Equity and Access", fields:[
    ["English Favors Elite","englishFavorsElite"],
    ["Regional Students Disadvantaged","regionalStudentsDisadvantaged"],
    ["Language Policy Inequality","languagePolicyInequality"],
    ["Job Opportunities (English)","jobOpportunitiesEnglish"],
  ]},
  { title:"§D Teacher Capacity", fields:[
    ["Teachers Effective in English","teachersEffectiveEnglish"],
    ["Teachers Switch to Local Language","teachersSwitchLocalLanguage"],
    ["Teacher Can Teach Urdu/Local","teacherCanTeachUrduLocal"],
    ["Interaction (Shared Language)","interactionSharedLanguage"],
    ["Teacher Uses Urdu/Local in English","teacherUsesUrduLocalInEnglish"],
  ]},
  { title:"§E Primary Level MOI (Grades 1–5)", fields:[
    ["Mother Tongue at Primary","motherTonguePrimary"],
    ["Urdu at Primary","urduPrimary"],
    ["English at Primary","englishPrimary"],
    ["Bilingual (Mother Tongue + Urdu)","bilingualMotherUrdu"],
    ["Gradual Transition","gradualTransitionPrimary"],
  ]},
  { title:"§F Middle Level MOI (Grades 6–8)", fields:[
    ["Urdu at Middle","urduMiddle"],
    ["English at Middle","englishMiddle"],
    ["Bilingual (Urdu-English)","bilingualUrduEnglishMiddle"],
    ["Mother Tongue Support at Middle","motherTongueSupportMiddle"],
    ["Gradual Shift to English","gradualShiftEnglishMiddle"],
  ]},
  { title:"§G Matric Level MOI (Grades 9–10)", fields:[
    ["English at Matric","englishMatric"],
    ["Mother Tongue at Matric","motherTongueMatric"],
    ["Urdu at Matric","urduMatric"],
    ["Bilingual at Matric","bilingualMatric"],
    ["Prepared for Higher Education","preparedForHigherEducation"],
    ["Technical Subjects in English","technicalSubjectsEnglish"],
  ]},
  { title:"§H Dropout and Language", fields:[
    ["Dropout Due to Language","dropoutDueToLanguage"],
    ["English Primary Dropout","englishPrimaryDropout"],
    ["Rural Dropout (Language)","ruralDropoutLanguage"],
    ["Mother Tongue Reduces Dropout","motherTongueReduceDropout"],
    ["Language Mismatch Dropout Risk","languageMismatchDropoutRisk"],
    ["Language Absenteeism","languageAbsenteeism"],
    ["Urdu Reduces Dropout","urduReduceDropout"],
    ["Weak English Dropout","weakEnglishDropout"],
    ["Multilingual Retention","multilingualRetention"],
    ["English-Only High Dropout","englishOnlyHighDropout"],
    ["Repeat Grades (Language)","repeatGradesLanguageIssue"],
    ["Early Gaps Lead to Dropout","earlyGapsLeadDropout"],
    ["Highest Dropout Level","highestDropoutLevel"],
    ["Language Dropout Stage","languageDropoutStage"],
    ["At-Risk Students Group","atRiskStudentsGroup"],
  ]},
];

/* ══════════════════════ ANIMATED COUNTER ═══════════════════════════ */
function AnimatedNum({ target }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!target) return;
    let start = null;
    const dur = 1400;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return val;
}

/* ══════════════════════ MAIN ════════════════════════════════════════ */
export default function Dashboard({ onStart, onAnalytics, onViewSurveys }) {
  const [surveys,  setSurveys]  = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [selected, setSelected] = useState(null);
  const [loginVisible, setLoginVisible] = useState(false);
  const [loginError,   setLoginError]   = useState("");
  const [loginTarget,  setLoginTarget]  = useState("analytics");

  useEffect(() => {
    injectStyles();
    fetch(API_GET)
      .then(r => r.json())
      .then(d => { setSurveys(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const now = new Date();
  const todayStr = now.toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"});
  const todayCount = surveys.filter(s =>
    new Date(s.submittedAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"}) === todayStr
  ).length;
  const dateLabel = now.toLocaleDateString("en-PK",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  const STATS = [
    { icon:"📊", val:surveys.length, lbl:"Total Responses",   color:"#2d6a4f", chip:"Cumulative", chipBg:"rgba(45,106,79,0.10)",  chipClr:"#2d6a4f", topbar:"linear-gradient(90deg,#2d6a4f,#40916c)" },
    { icon:"📅", val:todayCount,     lbl:"Collected Today",   color:"#b5860d", chip:"Live",        chipBg:"rgba(181,134,13,0.10)", chipClr:"#b5860d", topbar:"linear-gradient(90deg,#b5860d,#e8b030)" },
    { icon:"📋", val:8,             lbl:"Survey Sections",   color:"#5a5a72", chip:"Fixed",       chipBg:"rgba(90,90,114,0.08)",  chipClr:"#5a5a72", topbar:"linear-gradient(90deg,#5a5a72,#9898aa)" },
    { icon:"🌍", val:6,              lbl:"Provinces Covered", color:"#9b4444", chip:"PK",          chipBg:"rgba(155,68,68,0.08)",  chipClr:"#9b4444", topbar:"linear-gradient(90deg,#9b4444,#e07070)" },
  ];

  // CSV export with new fields
const handleAnalyticsClick = () => {
    setLoginTarget("analytics");
    setLoginVisible(true);
    setLoginError("");
  };

  const handleSurveysClick = () => {
    setLoginTarget("surveys");
    setLoginVisible(true);
    setLoginError("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const u = e.target.username.value;
    const p = e.target.password.value;
    if (u === "GhulamAdmin" && p === "Ghulam@123") {
      setLoginVisible(false);
      if (loginTarget === "analytics") {
        onAnalytics();
      } else {
        onViewSurveys();
      }
    } else {
      setLoginError("Invalid username or password.");
    }
  };

  // CSV export with new fields
  const handleExport = () => {
    if (!surveys.length) return;
  const headers = [
  "#","Respondent Category","Institution Type","Area","Province",
  "Mother Tongue Understanding","English Difficulty Early Grades","Urdu More Accessible","English Barrier Rural",
  "English Barrier Urban","Foreign Language Affects Learning","Participation Local Language",
  "Early Education Mother Tongue","Concept Learning Mother Tongue","English Promotes Rote Learning","Urdu Bridge Language","Mother Tongue Reduces Gap",
  "English Favors Elite","Regional Students Disadvantaged","Language Policy Inequality","Job Opportunities English",
  "Teachers Effective English","Teachers Switch Local Language","Teacher Can Teach Urdu Local","Interaction Shared Language","Teacher Uses Urdu Local In English",
  "Mother Tongue Primary","Urdu Primary","English Primary","Bilingual Mother Urdu","Gradual Transition Primary",
  "Urdu Middle","English Middle","Bilingual Urdu English Middle","Mother Tongue Support Middle","Gradual Shift English Middle",
  "English Matric","Mother Tongue Matric","Urdu Matric","Bilingual Matric","Prepared Higher Education","Technical Subjects English",
  "Dropout Due To Language","English Primary Dropout","Rural Dropout Language","Mother Tongue Reduce Dropout","Language Mismatch Dropout Risk","Language Absenteeism",
  "Urdu Reduce Dropout","Weak English Dropout","Multilingual Retention","English Only High Dropout","Repeat Grades Language Issue","Early Gaps Lead Dropout",
  "Highest Dropout Level","Language Dropout Stage","At Risk Students Group"
];
const keys = [
  "index","respondentCategory","institutionType","area","province",
  "motherTongueUnderstanding","englishDifficultyEarlyGrades","urduMoreAccessible","englishBarrierRural",
  "englishBarrierUrban","foreignLanguageAffectsLearning","participationLocalLanguage",
  "earlyEducationMotherTongue","conceptLearningMotherTongue","englishPromotesRoteLearning","urduBridgeLanguage","motherTongueReducesGap",
  "englishFavorsElite","regionalStudentsDisadvantaged","languagePolicyInequality","jobOpportunitiesEnglish",
  "teachersEffectiveEnglish","teachersSwitchLocalLanguage","teacherCanTeachUrduLocal","interactionSharedLanguage","teacherUsesUrduLocalInEnglish",
  "motherTonguePrimary","urduPrimary","englishPrimary","bilingualMotherUrdu","gradualTransitionPrimary",
  "urduMiddle","englishMiddle","bilingualUrduEnglishMiddle","motherTongueSupportMiddle","gradualShiftEnglishMiddle",
  "englishMatric","motherTongueMatric","urduMatric","bilingualMatric","preparedForHigherEducation","technicalSubjectsEnglish",
  "dropoutDueToLanguage","englishPrimaryDropout","ruralDropoutLanguage","motherTongueReduceDropout","languageMismatchDropoutRisk","languageAbsenteeism",
  "urduReduceDropout","weakEnglishDropout","multilingualRetention","englishOnlyHighDropout","repeatGradesLanguageIssue","earlyGapsLeadDropout",
  "highestDropoutLevel","languageDropoutStage","atRiskStudentsGroup"
];
    const escape = v => `"${String(v??'').replace(/"/g,'""')}"`;
    const rows = surveys.map((s,i) => keys.map(k => escape(k==="index" ? i+1 : s[k])).join(","));
    const csv = [headers.map(escape).join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type:"text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `CeLTS_Survey_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  return (
    <div className="db-root">
      <div className="db-bg">
        <div className="db-bg-paper"/>
        <div className="db-bg-lines"/>
      </div>
      <div className="db-watermark">C</div>

      <div className="db-ribbon"/>

      <div className="db-inner">
        {/* Nav */}
        <div className="db-nav">
          <div className="db-nav-left">
            <div className="db-nav-emblem">
              <div className="db-nav-emblem-inner">AI</div>
            </div>
            <div>
              <div className="db-nav-org">CeLTS · AIOU · Islamabad</div>
              <div className="db-nav-sub">Centre for Languages &amp; Translation Studies</div>
            </div>
          </div>
          <div className="db-nav-right">
            <div className="db-nav-live"><div className="db-pulse"/>System Live</div>
            <div className="db-nav-date">{dateLabel}</div>
          </div>
        </div>

        {/* Hero */}
        <div className="db-hero">
          <div className="db-kicker">Official Research Portal &nbsp;·&nbsp; 2026</div>
          <h1 className="db-h1">
            Language Policy<br/>
            <span className="db-h1-line2">Survey Dashboard</span>
          </h1>
          <p className="db-desc">
            Documenting multilingual education perspectives across all six provinces of Pakistan.
            A national research initiative under Allama Iqbal Open University, Islamabad.
          </p>
          <div className="db-ornament">
            <div className="db-orn-line"/>
            <div className="db-orn-diamond"/>
            <div className="db-orn-text">Evidence-Based Language Teaching Policy Framework</div>
            <div className="db-orn-diamond"/>
            <div className="db-orn-line-r"/>
          </div>
        </div>

        {/* Stats */}
        <div className="db-stats">
          {STATS.map((s,i) => (
            <div className="db-stat" key={s.lbl} style={{animationDelay:`${0.1+i*0.09}s`}}>
              <div className="db-stat-topbar" style={{background:s.topbar}}/>
              <div className="db-stat-icon-row">
                <div className="db-stat-icon" style={{background:`${s.color}12`}}>{s.icon}</div>
                <div className="db-stat-chip" style={{background:s.chipBg,color:s.chipClr}}>{s.chip}</div>
              </div>
              <div className="db-stat-num"><AnimatedNum target={s.val}/></div>
              <div className="db-stat-lbl">{s.lbl}</div>
              <div className="db-stat-glow" style={{background:s.color}}/>
            </div>
          ))}
        </div>

        {/* Actions */}
       <div className="db-actions">
          <button className="db-btn-primary" onClick={onStart}>✦ Start New Survey</button>
          <button className="db-btn-gold" onClick={handleAnalyticsClick}>📊 View Analytics</button>
          <button className="db-btn-gold" onClick={handleSurveysClick}>📋 View All Surveys</button>
          <button className="db-btn-ghost" onClick={handleExport}>📥 Export CSV</button>
        </div>

        {/* Table header */}
        <div className="db-sec-hd">
          <div className="db-sec-hd-lbl">Recent Submissions</div>
          <div className="db-sec-hd-line"/>
          <div className="db-sec-hd-count">{surveys.length} records</div>
        </div>

        {/* Table */}
        <div className="db-table">
          <div className="db-thead">
            <span>#</span>
            <span>Category</span>
            <span>Area</span>
            <span>Institution</span>
            <span>Province</span>
            <span>Status</span>
          </div>
          {loading ? (
            <div className="db-empty">
              <div className="db-empty-icon">⏳</div>
              <div className="db-empty-title">Loading data…</div>
            </div>
          ) : surveys.length === 0 ? (
            <div className="db-empty">
              <div className="db-empty-icon">📋</div>
              <div className="db-empty-title">No responses yet</div>
              <div className="db-empty-desc">Press "Start New Survey" to begin.</div>
            </div>
          ) : surveys.map((s,i) => (
            <div
              className="db-row"
              key={s.responseId ?? s.dpId ?? i}
              onClick={() => setSelected(s)}
              style={{animationDelay:`${i*0.03}s`}}
            >
              <div className="db-row-num">{i+1}</div>
              <div className="db-row-cat">{s.respondentCategory || "—"}</div>
              <div className="db-row-cell">{s.area || "—"}</div>
              <div className="db-row-cell">{s.institutionType || "—"}</div>
              <div className="db-row-cell">{s.province || "—"}</div>
              <div><span className="db-badge-done">✓ Done</span></div>
            </div>
          ))}
        </div>

        {/* Credit */}
        <div className="db-credit">
          <div className="db-credit-text">
            <strong>Dr Ghulam Ali</strong> · Director, Centre for Languages &amp; Translation Studies<br/>
            Allama Iqbal Open University, Islamabad &nbsp;·&nbsp; +92 300 6550455
          </div>
          <div className="db-credit-mark">CeLTS</div>
        </div>
      </div>

      {/* Modal */}
     {/* Login Popup */}
      {loginVisible && (
        <div className="db-overlay" onClick={() => setLoginVisible(false)}>
          <div className="db-modal" onClick={e => e.stopPropagation()} style={{maxWidth:"380px",padding:"36px 32px"}}>
            <div className="db-modal-hdr">
              <div>
                <div className="db-modal-id">Admin Access</div>
                <div className="db-modal-title">Analytics Login</div>
              </div>
              <button className="db-modal-x" onClick={() => setLoginVisible(false)}>×</button>
            </div>
            <form onSubmit={handleLoginSubmit} style={{marginTop:"24px",display:"flex",flexDirection:"column",gap:"16px"}}>
              <div>
                <label style={{fontSize:"12px",fontWeight:"600",color:"#4a5468",display:"block",marginBottom:"6px"}}>Username</label>
<input name="username" style={{width:"100%",padding:"10px 14px",border:"1px solid #c0ccd8",borderRadius:"8px",fontSize:"14px",fontFamily:"DM Sans,sans-serif"}} />
              </div>
              <div>
                <label style={{fontSize:"12px",fontWeight:"600",color:"#4a5468",display:"block",marginBottom:"6px"}}>Password</label>
<input name="password" type="password" style={{width:"100%",padding:"10px 14px",border:"1px solid #c0ccd8",borderRadius:"8px",fontSize:"14px",fontFamily:"DM Sans,sans-serif"}} />
              </div>
              {loginError && <div style={{color:"#c0392b",fontSize:"13px",fontWeight:"600"}}>{loginError}</div>}
              <button type="submit" className="db-btn-gold" style={{width:"100%",justifyContent:"center",marginTop:"4px"}}>🔐 Login to Analytics</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div className="db-overlay" onClick={() => setSelected(null)}>
          <div className="db-modal" onClick={e => e.stopPropagation()}>
            <div className="db-modal-hdr">
              <div>
                <div className="db-modal-id">Response #{selected.responseId ?? selected.dpId}</div>
                <div className="db-modal-title">
                  {selected.respondentCategory || "—"} &nbsp;·&nbsp; {selected.area || "—"}
                </div>
              </div>
              <button className="db-modal-x" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="db-modal-body">
              {SECTIONS.map(sec => (
                <div className="db-modal-sec" key={sec.title}>
                  <div className="db-modal-sec-title">{sec.title}</div>
                  <div className="db-modal-fields">
                    {sec.fields.map(([label,key]) => (
                      <div className="db-modal-field" key={key}>
                        <div className="db-modal-field-lbl">{label}</div>
                        <div className="db-modal-field-val">
                          {selected[key] || <span style={{color:"#ccc"}}>—</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="db-modal-footer">
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
