import { useState, useEffect } from "react";

const API_GET = "http://localhost:8013/api/UserTest/getallsurvey";

/* ══════════════════════ COLORS ══════════════════════════════════════ */
const PALETTE = [
  "#2d6a4f",  // deep green
  "#e8b030",  // amber
  "#c0392b",  // red
  "#3b6fd4",  // blue
  "#8e44ad",  // purple
  "#d35400",  // orange
  "#16a085",  // teal
  "#e91e63",  // pink
  "#27ae60",  // mid green
  "#2980b9",  // sky blue
  "#f39c12",  // yellow
  "#7f8c8d",  // grey
  "#1a3a2e",  // dark green
  "#9b59b6",  // violet
  "#e74c3c",  // bright red
];

/* ══════════════════════ INJECT STYLES ═══════════════════════════════ */
const injectStyles = () => {
  if (document.getElementById("analytics-styles")) return;
  const el = document.createElement("style");
  el.id = "analytics-styles";
  el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

    .an-root {
      min-height:100vh;
      background:#f7f4ef;
      font-family:'DM Sans',sans-serif;
      color:#1a1a2e;
    }
    .an-ribbon {
      height:5px;
      background:linear-gradient(90deg,#2d6a4f 0%,#40916c 40%,#b5860d 70%,#e8b030 100%);
    }
    .an-inner { max-width:1260px; margin:0 auto; padding:28px 40px 80px; }

    /* Header */
    .an-header {
      display:flex; align-items:center; gap:16px; margin-bottom:36px;
      padding-bottom:22px; border-bottom:1px solid #e0dbd0;
    }
    .an-back-btn {
      border:1px solid #e0dbd0; background:#fff; border-radius:8px;
      padding:8px 16px; cursor:pointer; font-size:13px; font-family:'DM Sans',sans-serif;
      color:#5a5a72; transition:all 0.18s; box-shadow:0 2px 6px rgba(0,0,0,0.06);
    }
    .an-back-btn:hover { background:#f7f4ef; color:#1a1a2e; transform:translateY(-1px); }
    .an-header-title-block { flex:1; }
    .an-header-eyebrow { font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#2d6a4f; margin-bottom:4px; }
    .an-header-title { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:#1a1a2e; }
    .an-total-badge {
      background:#fff; border:1px solid #e0dbd0; border-radius:12px;
      padding:12px 24px; text-align:center; box-shadow:0 2px 8px rgba(0,0,0,0.06);
    }
    .an-total-num { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:#2d6a4f; }
    .an-total-lbl { font-size:11px; color:#9898aa; margin-top:2px; }

    /* Section grid */
    .an-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
    .an-sec-card {
      background:#fff; border:1px solid #e0dbd0; border-radius:16px;
      padding:22px 20px; cursor:pointer;
      transition:box-shadow 0.2s, transform 0.2s, border-color 0.2s;
      display:flex; align-items:center; gap:14px;
      box-shadow:0 2px 8px rgba(0,0,0,0.05);
    }
    .an-sec-card:hover {
      box-shadow:0 8px 28px rgba(45,106,79,0.14);
      transform:translateY(-3px);
      border-color:rgba(45,106,79,0.2);
    }
    .an-sec-icon { font-size:30px; flex-shrink:0; }
    .an-sec-label { font-size:15px; font-weight:600; color:#1a1a2e; }
    .an-sec-sub { font-size:12px; color:#9898aa; margin-top:3px; }
    .an-sec-arrow { margin-left:auto; font-size:18px; color:#d0ccc4; }

    /* Section detail */
    .an-detail-header {
      display:flex; align-items:center; gap:12px; margin-bottom:30px;
    }
    .an-detail-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; color:#1a1a2e; }

    /* Chart containers */
    .an-chart-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-bottom:28px; align-items:start; }
    .an-chart-grid-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:24px; margin-bottom:28px; align-items:start; }
    .an-chart-block {
      background:#fff; border:1px solid #e0dbd0; border-radius:14px;
      padding:22px 20px; box-shadow:0 2px 8px rgba(0,0,0,0.04);
    }
    .an-chart-title {
      font-size:13px; font-weight:600; color:#1a1a2e; margin-bottom:16px;
      padding-bottom:10px; border-bottom:1px solid #f0ebe0;
      line-height:1.4;
    }
    .an-section-divider {
      border:none; border-top:2px solid #e8f4ef;
      margin:8px 0 28px;
    }
    .an-subsection-title {
      font-size:15px; font-weight:700; color:#1a1a2e;
      margin-bottom:20px; display:flex; align-items:center; gap:8px;
    }
    .an-subsection-title::before {
      content:''; display:inline-block; width:4px; height:18px;
      background:#2d6a4f; border-radius:2px;
    }

    /* Likert summary */
    .an-likert-list { display:flex; flex-direction:column; gap:10px; }
    .an-likert-item { }
    .an-likert-q { font-size:12px; color:#5a5a72; margin-bottom:6px; font-weight:500; }
    .an-likert-bars { display:flex; flex-direction:column; gap:3px; }
    .an-likert-bar-row { display:flex; align-items:center; gap:8px; }
    .an-likert-bar-lbl { width:68px; font-size:10px; color:#9898aa; text-align:right; flex-shrink:0; }
    .an-likert-bar-track { flex:1; background:#f0ebe0; border-radius:4px; height:14px; overflow:hidden; }
    .an-likert-bar-fill { height:100%; border-radius:4px; display:flex; align-items:center; padding-left:6px; transition:width 0.6s ease; }
    .an-likert-bar-num { font-size:10px; color:#fff; font-weight:600; }
    .an-likert-bar-count { width:20px; font-size:10px; color:#9898aa; }

    /* Stat cards row */
    .an-stat-row { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:24px; }
    .an-stat-mini {
      background:#fff; border:1px solid #e0dbd0; border-radius:12px;
      padding:16px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.04);
    }
    .an-stat-mini-num { font-family:'Playfair Display',serif; font-size:26px; font-weight:700; }
    .an-stat-mini-pct { font-size:12px; color:#9898aa; margin-top:2px; }
    .an-stat-mini-lbl { font-size:11px; color:#5a5a72; margin-top:4px; font-weight:500; }

    /* Loading / empty */
    .an-loading { text-align:center; padding:80px 20px; color:#9898aa; font-size:15px; }
    .an-empty   { text-align:center; padding:80px 20px; color:#9898aa; }
    .an-empty-icon { font-size:48px; margin-bottom:14px; opacity:0.3; }
    .an-empty-title { font-family:'Playfair Display',serif; font-size:20px; }

    @media(max-width:780px) {
      .an-grid { grid-template-columns:1fr; }
      .an-chart-grid-2 { grid-template-columns:1fr; }
      .an-chart-grid-3 { grid-template-columns:1fr; }
      .an-stat-row { grid-template-columns:1fr 1fr; }
      .an-inner { padding:20px 16px 60px; }
    }
  `;
  document.head.appendChild(el);
};

/* ══════════════════════ CHART UTILITIES ════════════════════════════ */
function count(data, key) {
  const map = {};
  data.forEach(r => {
    const v = String(r[key] || "—");
    map[v] = (map[v] || 0) + 1;
  });
  return Object.entries(map)
    .sort((a,b) => b[1]-a[1])
    .map(([label, value]) => ({ label, value }));
}

function countFixed(data, key, options) {
  return options.map(opt => ({
    label: opt,
    value: data.filter(r => String(r[key]) === opt).length,
  }));
}

/* ══════════════════════ PIE CHART ══════════════════════════════════ */
function PieChart({ data }) {
  const total = data.reduce((s,d) => s+d.value, 0);
  if (total === 0) return <div style={{textAlign:"center",color:"#ccc",padding:"20px",fontSize:12}}>No data</div>;
  let angle = -90;
  const slices = data.filter(d=>d.value>0).map((d, i) => {
    const pct = d.value / total;
    const start = angle;
    angle += pct * 360;
    return { ...d, pct, start, end: angle, color: PALETTE[i % PALETTE.length] };
  });
  const polarToXY = (deg, r) => {
    const rad = (deg * Math.PI) / 180;
    return [50 + r * Math.cos(rad), 50 + r * Math.sin(rad)];
  };
  return (
    <div>
      <svg viewBox="0 0 100 100" width="160" height="160" style={{display:"block",margin:"0 auto"}}>
        {slices.map((s, i) => {
          const [x1,y1] = polarToXY(s.start, 38);
          const [x2,y2] = polarToXY(s.end, 38);
          const large = (s.end - s.start) > 180 ? 1 : 0;
          return (
            <path key={i}
              d={`M50,50 L${x1},${y1} A38,38 0 ${large},1 ${x2},${y2} Z`}
              fill={s.color} stroke="#fff" strokeWidth="1"
            />
          );
        })}
      </svg>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"5px 10px",marginTop:10}}>
        {slices.map((s,i) => (
          <div key={i} style={{display:"flex",alignItems:"center",gap:5,fontSize:11}}>
            <div style={{width:9,height:9,borderRadius:2,background:s.color,flexShrink:0}}/>
            <span style={{color:"#5a5a72"}}>{s.label} ({Math.round(s.pct*100)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════ BAR CHART ══════════════════════════════════ */
function BarChart({ data, horizontal = true }) {
  const max = Math.max(...data.map(d=>d.value), 1);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:7}}>
      {data.map((d,i) => (
        <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:100,fontSize:11,color:"#5a5a72",textAlign:"right",flexShrink:0,lineHeight:1.3}}>{d.label}</div>
          <div style={{flex:1,background:"#f0ebe0",borderRadius:4,height:20,overflow:"hidden"}}>
            <div style={{
              width:`${(d.value/max)*100}%`, height:"100%",
              background: PALETTE[i % PALETTE.length], borderRadius:4,
              display:"flex", alignItems:"center", paddingLeft:7,
              transition:"width 0.6s ease", minWidth: d.value > 0 ? 4 : 0,
            }}>
              {d.value > 0 && <span style={{fontSize:11,color:"#fff",fontWeight:600}}>{d.value}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════ LIKERT SUMMARY CHART ════════════════════════ */
const LIKERT_LABELS = ["1","2","3","4","5"];
const LIKERT_COLORS = ["#c0392b","#e07070","#9898aa","#74c69d","#2d6a4f"];
const LIKERT_NAMES  = ["Strongly Disagree","Disagree","Neutral","Agree","Strongly Agree"];

function LikertBar({ label, data, total }) {
  return (
    <div className="an-likert-item">
      <div className="an-likert-q">{label}</div>
      <div className="an-likert-bars">
        {LIKERT_LABELS.map((lbl, i) => {
          const cnt = data.filter(v => String(v) === lbl).length;
          const pct = total > 0 ? (cnt/total)*100 : 0;
          return (
            <div className="an-likert-bar-row" key={i}>
              <div className="an-likert-bar-lbl">{LIKERT_NAMES[i]}</div>
              <div className="an-likert-bar-track">
                <div className="an-likert-bar-fill" style={{width:`${pct}%`,background:LIKERT_COLORS[i]}}>
                  {cnt > 0 && <span className="an-likert-bar-num">{cnt}</span>}
                </div>
              </div>
              <div className="an-likert-bar-count">{cnt}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LikertGroup({ questions, data }) {
  const total = data.length || 1;
  return (
    <div className="an-likert-list">
      {questions.map(([label, key]) => (
        <LikertBar key={key} label={label} data={data.map(r => r[key])} total={total} />
      ))}
    </div>
  );
}

/* ══════════════════════ SECTION A ══════════════════════════════════ */
function SectionA({ data }) {
  return (
    <div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q1 — Respondent Category</div>
          <PieChart data={count(data,"respondentCategory")} />
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q2 — Institution Type</div>
          <PieChart data={count(data,"institutionType")} />
        </div>
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q3 — Area</div>
          <PieChart data={count(data,"area")} />
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q4 — Province / Region</div>
          <BarChart data={count(data,"province")} />
        </div>
      </div>
      {/* Cross-tab: Category by Area */}
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Respondent Category × Area (Cross-tab)</div>
        <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
          {["Urban","Semi-Urban","Rural"].map(area => {
            const filtered = data.filter(r => r.area === area);
            if (!filtered.length) return null;
            return (
              <div key={area} style={{flex:1,minWidth:160}}>
                <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:8}}>{area} ({filtered.length})</div>
                <BarChart data={count(filtered,"respondentCategory")} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Category by Province */}
      <div className="an-chart-block">
        <div className="an-chart-title">Respondent Category × Province (Cross-tab)</div>
        <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
          {["Punjab","Sindh","KPK","Balochistan","ICT","GB/AJK"].map(prov => {
            const filtered = data.filter(r => r.province === prov);
            if (!filtered.length) return null;
            return (
              <div key={prov} style={{flex:1,minWidth:140}}>
                <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:8}}>{prov} ({filtered.length})</div>
                <BarChart data={count(filtered,"respondentCategory")} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION B ══════════════════════════════════ */
function SectionB({ data }) {
  const QUESTIONS = [
    ["Q1 — Students understand concepts better in their mother tongue","motherTongueUnderstanding"],
    ["Q2 — Students face difficulty when instruction is in English at early grades","englishDifficultyEarlyGrades"],
    ["Q3 — Urdu is more accessible to students than English at primary level","urduMoreAccessible"],
    ["Q4 — English medium creates comprehension barriers for rural students","englishBarrierRural"],
    ["Q5 — Students actively participate when teachers use local languages","participationLocalLanguage"],
    ["Q6 — Language mismatch affects learning outcomes","languageMismatchImpact"],
  ];

  // Mean scores
  const means = QUESTIONS.map(([label, key]) => {
    const vals = data.map(r => Number(r[key])).filter(v => !isNaN(v) && v > 0);
    const mean = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) : "—";
    return { label: label.replace(/^Q\d+ — /,""), mean, count: vals.length };
  });

  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section B — Linguistic Reality (Likert 1–5 breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-block">
        <div className="an-chart-title">Mean Scores — Linguistic Reality</div>
        <BarChart data={means.map(m => ({ label: m.label.slice(0,32)+"…", value: parseFloat(m.mean)||0 }))} />
        <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:5}}>
          {means.map((m,i) => (
            <div key={i} style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#5a5a72",borderBottom:"1px solid #f0ebe0",paddingBottom:4}}>
              <span>{m.label.slice(0,55)}</span>
              <span style={{fontWeight:600,color:"#2d6a4f",flexShrink:0,marginLeft:8}}>μ = {m.mean}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION C ══════════════════════════════════ */
function SectionC({ data }) {
  const QUESTIONS = [
    ["Q7 — Early grade education should be in mother tongue","earlyEducationMotherTongue"],
    ["Q8 — Conceptual learning improves when taught in familiar language","conceptLearningFamiliarLanguage"],
    ["Q9 — English medium promotes rote learning at early stages","englishPromotesRoteLearning"],
    ["Q10 — Urdu can function as a bridge language in multilingual classrooms","urduBridgeLanguage"],
    ["Q11 — Multilingual instruction improves learning outcomes","multilingualImprovesLearning"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section C — Educational Effectiveness (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      {/* Responses by category cross-tab */}
      <div className="an-chart-block">
        <div className="an-chart-title">Q7 (Early Mother Tongue Education) — Response by Respondent Category</div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
          {["Teacher","Policymaker","School Administrator","Parent","Researcher"].map(cat => {
            const filtered = data.filter(r => r.respondentCategory === cat);
            if (!filtered.length) return null;
            return (
              <div key={cat} style={{flex:1,minWidth:140}}>
                <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:8}}>{cat} ({filtered.length})</div>
                <BarChart data={countFixed(filtered,"earlyEducationMotherTongue",LIKERT_LABELS)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION D ══════════════════════════════════ */
function SectionD({ data }) {
  const QUESTIONS = [
    ["Q12 — English medium favors elite/private school students","englishFavorsElite"],
    ["Q13 — Students from regional language backgrounds are disadvantaged","regionalStudentsDisadvantaged"],
    ["Q14 — Language policy contributes to educational inequality","languagePolicyInequality"],
    ["Q15 — Mother tongue instruction reduces learning gaps","motherTongueReducesGap"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section D — Equity & Access (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q12 — English Favors Elite (by Area)</div>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            {["Urban","Rural"].map(area => {
              const f = data.filter(r=>r.area===area);
              return (
                <div key={area} style={{flex:1,minWidth:120}}>
                  <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{area}</div>
                  <BarChart data={countFixed(f,"englishFavorsElite",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q14 — Policy Contributes to Inequality (by Category)</div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            {["Teacher","Policymaker","Parent"].map(cat => {
              const f = data.filter(r=>r.respondentCategory===cat);
              if (!f.length) return null;
              return (
                <div key={cat} style={{flex:1,minWidth:100}}>
                  <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{cat}</div>
                  <BarChart data={countFixed(f,"languagePolicyInequality",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION E ══════════════════════════════════ */
function SectionE({ data }) {
  const QUESTIONS = [
    ["Q16 — Teachers are able to teach effectively in English medium","teachersEffectiveEnglish"],
    ["Q17 — Teachers naturally switch to local languages for explanation","teachersSwitchLocalLanguage"],
    ["Q18 — Multilingual classrooms require flexible language policy","multilingualFlexiblePolicy"],
    ["Q19 — Teacher-student interaction improves in shared language","interactionSharedLanguage"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section E — Teacher Capacity (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q16 — Teachers Effective in English (by Institution Type)</div>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            {["Public","Private"].map(inst => {
              const f = data.filter(r=>r.institutionType===inst);
              if(!f.length) return null;
              return (
                <div key={inst} style={{flex:1,minWidth:110}}>
                  <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{inst}</div>
                  <BarChart data={countFixed(f,"teachersEffectiveEnglish",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q17 — Teachers Switch to Local Language (by Area)</div>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            {["Urban","Rural"].map(area => {
              const f = data.filter(r=>r.area===area);
              return (
                <div key={area} style={{flex:1,minWidth:110}}>
                  <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{area}</div>
                  <BarChart data={countFixed(f,"teachersSwitchLocalLanguage",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION F ══════════════════════════════════ */
function SectionF({ data }) {
  const QUESTIONS = [
    ["Q20 — Mother tongue should be medium at primary level","motherTonguePrimary"],
    ["Q21 — Urdu should be medium at primary level","urduPrimary"],
    ["Q22 — English should be medium at primary level","englishPrimary"],
    ["Q23 — Bilingual (Mother tongue + Urdu) model should be used","bilingualMotherUrdu"],
    ["Q24 — Gradual transition (MT → Urdu → English) is appropriate","gradualTransitionPrimary"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section F — Preferred MOI at Primary Level Grades 1–5 (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      {/* Compare Q20 vs Q22 side by side */}
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q20 — Mother Tongue at Primary (by Province)</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {["Punjab","Sindh","KPK","Balochistan"].map(prov => {
              const f = data.filter(r=>r.province===prov);
              if(!f.length) return null;
              return (
                <div key={prov} style={{flex:1,minWidth:90}}>
                  <div style={{fontSize:10,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{prov}</div>
                  <BarChart data={countFixed(f,"motherTonguePrimary",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q22 — English at Primary (by Province)</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {["Punjab","Sindh","KPK","Balochistan"].map(prov => {
              const f = data.filter(r=>r.province===prov);
              if(!f.length) return null;
              return (
                <div key={prov} style={{flex:1,minWidth:90}}>
                  <div style={{fontSize:10,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{prov}</div>
                  <BarChart data={countFixed(f,"englishPrimary",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION G ══════════════════════════════════ */
function SectionG({ data }) {
  const QUESTIONS = [
    ["Q25 — Urdu should be medium at middle level","urduMiddle"],
    ["Q26 — English should become medium at middle level","englishMiddle"],
    ["Q27 — Bilingual Urdu-English model should be adopted","bilingualUrduEnglish"],
    ["Q28 — Mother tongue support should continue at middle level","motherTongueSupportMiddle"],
    ["Q29 — Gradual shift to English should begin at middle level","gradualShiftEnglishMiddle"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section G — Preferred MOI at Middle Level Grades 6–8 (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q26 — English at Middle Level (by Area)</div>
          <div style={{display:"flex",gap:14}}>
            {["Urban","Rural"].map(area => {
              const f = data.filter(r=>r.area===area);
              return (
                <div key={area} style={{flex:1}}>
                  <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{area}</div>
                  <BarChart data={countFixed(f,"englishMiddle",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q27 — Bilingual Model (Urdu-English) by Category</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {["Teacher","Parent","Policymaker"].map(cat => {
              const f = data.filter(r=>r.respondentCategory===cat);
              if(!f.length) return null;
              return (
                <div key={cat} style={{flex:1,minWidth:90}}>
                  <div style={{fontSize:10,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{cat}</div>
                  <BarChart data={countFixed(f,"bilingualUrduEnglish",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION H ══════════════════════════════════ */
function SectionH({ data }) {
  const QUESTIONS = [
    ["Q30 — English should be medium at matric level","englishMatric"],
    ["Q31 — Urdu should remain medium at matric level","urduMatric"],
    ["Q32 — Bilingual Urdu-English model is more effective","bilingualMatric"],
    ["Q33 — Students should be prepared for English medium at higher education","preparedForHigherEducation"],
    ["Q34 — Technical subjects should be taught in English","technicalSubjectsEnglish"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section H — Preferred MOI at Matriculation Level Grades 9–10 (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q30 — English at Matric (by Institution Type)</div>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            {["Public","Private","Semi-Government","Madrassa"].map(inst => {
              const f = data.filter(r=>r.institutionType===inst);
              if(!f.length) return null;
              return (
                <div key={inst} style={{flex:1,minWidth:90}}>
                  <div style={{fontSize:10,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{inst}</div>
                  <BarChart data={countFixed(f,"englishMatric",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q34 — Technical Subjects in English (by Area)</div>
          <div style={{display:"flex",gap:14}}>
            {["Urban","Rural"].map(area => {
              const f = data.filter(r=>r.area===area);
              return (
                <div key={area} style={{flex:1}}>
                  <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{area}</div>
                  <BarChart data={countFixed(f,"technicalSubjectsEnglish",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION I ══════════════════════════════════ */
function SectionI({ data }) {
  const QUESTIONS = [
    ["Q35 — Pakistan needs multilingual education policy","needMultilingualPolicy"],
    ["Q36 — Language policy should reflect linguistic diversity","policyReflectDiversity"],
    ["Q37 — Uniform national language policy is not suitable","uniformPolicyNotSuitable"],
    ["Q38 — Regional flexibility should be allowed in language policy","regionalFlexibility"],
    ["Q39 — Evidence-based linguistic survey should guide policy","evidenceBasedPolicy"],
  ];

  const total = data.length || 1;
  const agreeCount = (key) =>
    data.filter(r => ["4","5"].includes(String(r[key]))).length;

  return (
    <div>
      {/* Agreement summary cards */}
      <div className="an-stat-row" style={{gridTemplateColumns:"repeat(5,1fr)"}}>
        {QUESTIONS.map(([label, key]) => {
          const cnt = agreeCount(key);
          const pct = Math.round((cnt/total)*100);
          return (
            <div className="an-stat-mini" key={key}>
              <div className="an-stat-mini-num" style={{color:"#2d6a4f",fontSize:22}}>{pct}%</div>
              <div className="an-stat-mini-pct">Agree/Strongly Agree</div>
              <div className="an-stat-mini-lbl" style={{fontSize:10}}>{label.replace(/^Q\d+ — /,"").slice(0,40)}</div>
            </div>
          );
        })}
      </div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section I — Policy Direction (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q35 — Need Multilingual Policy (by Category)</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {["Teacher","Policymaker","Parent","Researcher"].map(cat => {
              const f = data.filter(r=>r.respondentCategory===cat);
              if(!f.length) return null;
              return (
                <div key={cat} style={{flex:1,minWidth:80}}>
                  <div style={{fontSize:10,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{cat}</div>
                  <BarChart data={countFixed(f,"needMultilingualPolicy",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="an-chart-block">
          <div className="an-chart-title">Q38 — Regional Flexibility (by Province)</div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {["Punjab","Sindh","KPK","Balochistan"].map(prov => {
              const f = data.filter(r=>r.province===prov);
              if(!f.length) return null;
              return (
                <div key={prov} style={{flex:1,minWidth:80}}>
                  <div style={{fontSize:10,fontWeight:600,color:"#2d6a4f",marginBottom:6}}>{prov}</div>
                  <BarChart data={countFixed(f,"regionalFlexibility",LIKERT_LABELS)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTION J ══════════════════════════════════ */
function SectionK({ data }) {
  const LIKERT_QS = [
    ["Q40 — Students more likely to drop out when they don't understand instruction language","dropoutDueToLanguage"],
    ["Q41 — English-medium instruction at primary level contributes to early grade dropout","englishPrimaryDropout"],
    ["Q42 — Students from rural backgrounds drop out more due to language difficulties","ruralDropoutLanguage"],
    ["Q43 — Mother tongue instruction can reduce dropout ratio in early grades","motherTongueReduceDropout"],
    ["Q44 — Language mismatch between home and school increases dropout risk","languageMismatchDropoutRisk"],
    ["Q45 — Students losing interest due to language difficulty leads to absenteeism","languageAbsenteeism"],
    ["Q46 — Urdu medium reduces dropout compared to English medium in public schools","urduReduceDropout"],
    ["Q47 — Students with weak English foundation are more likely to leave school","weakEnglishDropout"],
    ["Q48 — Multilingual instruction improves student retention","multilingualRetention"],
    ["Q49 — Dropout ratio is higher in schools strictly enforcing English-only policy","englishOnlyHighDropout"],
    ["Q50 — Students repeat grades more often due to language comprehension issues","repeatGradesLanguageIssue"],
    ["Q51 — Early conceptual gaps caused by language difficulty lead to eventual dropout","earlyGapsLeadDropout"],
  ];

  const MULTI_QS = [
    ["Q52 — Dropout is highest at","highestDropoutLevel",["Primary level","Middle level","Matric level","Equal at all levels"]],
    ["Q53 — Language-related dropout is most common at","languageDropoutStage",["Grade 1–3","Grade 4–5","Grade 6–8","Grade 9–10"]],
    ["Q54 — Students at risk of dropout mostly belong to","atRiskStudentsGroup",["Mother tongue speakers (non-Urdu)","Urdu-medium background","Weak English background","All equally"]],
  ];

  const total = data.length || 1;
  // Agreement % for key dropout questions
  const agreeDropout = (key) => Math.round((data.filter(r=>["4","5"].includes(String(r[key]))).length / total)*100);

  return (
    <div>
      {/* Key insight cards */}
      <div className="an-stat-row">
        {[
          ["dropoutDueToLanguage","Language Causes Dropout"],
          ["englishPrimaryDropout","English Primary Dropout"],
          ["motherTongueReduceDropout","MT Reduces Dropout"],
          ["multilingualRetention","Multilingual Improves Retention"],
        ].map(([key, label]) => (
          <div className="an-stat-mini" key={key}>
            <div className="an-stat-mini-num" style={{color:"#c0392b"}}>{agreeDropout(key)}%</div>
            <div className="an-stat-mini-pct">Agree/Strongly Agree</div>
            <div className="an-stat-mini-lbl">{label}</div>
          </div>
        ))}
      </div>

      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section K — Dropout Ratio Q40–Q51 (Likert breakdown)</div>
        <LikertGroup questions={LIKERT_QS} data={data} />
      </div>

      {/* Multiple choice */}
      <div className="an-chart-grid-3">
        {MULTI_QS.map(([label, key, options]) => (
          <div className="an-chart-block" key={key}>
            <div className="an-chart-title">{label}</div>
            <PieChart data={countFixed(data, key, options)} />
          </div>
        ))}
      </div>

      {/* Q52 by Area cross-tab */}
      <div className="an-chart-block">
        <div className="an-chart-title">Q52 — Highest Dropout Level (by Area)</div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
          {["Urban","Semi-Urban","Rural"].map(area => {
            const f = data.filter(r=>r.area===area);
            if(!f.length) return null;
            return (
              <div key={area} style={{flex:1,minWidth:160}}>
                <div style={{fontSize:11,fontWeight:600,color:"#2d6a4f",marginBottom:8}}>{area} ({f.length})</div>
                <BarChart data={countFixed(f,"highestDropoutLevel",["Primary level","Middle level","Matric level","Equal at all levels"])} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTIONS CONFIG ════════════════════════════ */
const SECTIONS = [
  { id:"A", label:"§A Background Information",       icon:"👤", desc:"Respondent category, institution, area, province" },
  { id:"B", label:"§B Linguistic Reality",           icon:"🗣️", desc:"Language mismatch, comprehension, participation" },
  { id:"C", label:"§C Educational Effectiveness",    icon:"📚", desc:"Mother tongue learning, rote learning, multilingualism" },
  { id:"D", label:"§D Equity & Access",              icon:"⚖️", desc:"Inequality, elite bias, regional disadvantage" },
  { id:"E", label:"§E Teacher Capacity",             icon:"👩‍🏫", desc:"English teaching, code-switching, shared language" },
  { id:"F", label:"§F Primary MOI (Grades 1–5)",    icon:"🏫", desc:"Preferred medium at primary level" },
  { id:"G", label:"§G Middle MOI (Grades 6–8)",     icon:"📖", desc:"Preferred medium at middle level" },
  { id:"H", label:"§H Matric MOI (Grades 9–10)",    icon:"🎓", desc:"Preferred medium at matriculation level" },
  { id:"I", label:"§I Policy Direction",             icon:"📜", desc:"Multilingual policy, regional flexibility, evidence-based" },
  { id:"K", label:"§K Dropout Ratio",                icon:"📉", desc:"Language-related dropout and retention analysis" },
];

const SECTION_COMPONENTS = { A:SectionA, B:SectionB, C:SectionC, D:SectionD, E:SectionE, F:SectionF, G:SectionG, H:SectionH, I:SectionI, K:SectionK };

/* ══════════════════════ MAIN ════════════════════════════════════════ */
export default function AnalyticsPage({ onBack }) {
  const [data,    setData]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [active,  setActive]  = useState(null);

  useEffect(() => {
    injectStyles();
    fetch(API_GET)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const SectionComp = active ? SECTION_COMPONENTS[active] : null;
  const activeInfo  = SECTIONS.find(s => s.id === active);

  return (
    <div className="an-root">
      <div className="an-ribbon"/>
      <div className="an-inner">

        {/* Header */}
        <div className="an-header">
          <button className="an-back-btn" onClick={onBack}>← Dashboard</button>
          <div className="an-header-title-block">
            <div className="an-header-eyebrow">CeLTS · AIOU · Evidence-Based Language Teaching Policy Framework</div>
            <div className="an-header-title">Survey Analytics</div>
          </div>
          <div className="an-total-badge">
            <div className="an-total-num">{data.length}</div>
            <div className="an-total-lbl">Total Responses</div>
          </div>
        </div>

        {loading ? (
          <div className="an-loading">⏳ Loading analytics…</div>
        ) : data.length === 0 ? (
          <div className="an-empty">
            <div className="an-empty-icon">📋</div>
            <div className="an-empty-title">No data available yet.</div>
          </div>
        ) : !active ? (

          /* ── Section grid ── */
          <div className="an-grid">
            {SECTIONS.map(sec => (
              <div key={sec.id} className="an-sec-card" onClick={() => setActive(sec.id)}>
                <div className="an-sec-icon">{sec.icon}</div>
                <div>
                  <div className="an-sec-label">{sec.label}</div>
                  <div className="an-sec-sub">{sec.desc}</div>
                </div>
                <div className="an-sec-arrow">›</div>
              </div>
            ))}
          </div>

        ) : (

          /* ── Section detail ── */
          <div>
            <div className="an-detail-header">
              <button className="an-back-btn" onClick={() => setActive(null)}>← All Sections</button>
              <div className="an-detail-title">{activeInfo.icon} {activeInfo.label}</div>
            </div>
            <SectionComp data={data} />
          </div>

        )}
      </div>
    </div>
  );
}