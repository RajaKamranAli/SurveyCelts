import { useState, useEffect, useMemo } from "react";

// const API_GET = "http://survey.ruqqiasultanaclinic.com/api/UserTest/getallsurvey";
const API_GET = "/api/UserTest/getallsurvey";

// http://survey.ruqqiasultanaclinic.com/swagger/index.html
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
  "#288750",  // mid green
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
  const COLORS = ["#A32D2D","#F09595","#B4B2A9","#5DCAA5","#0F6E56"];
  const counts = LIKERT_LABELS.map(l => data.filter(v => String(v) === l).length);
  const pcts = counts.map(c => total > 0 ? Math.round((c/total)*100) : 0);
  return (
    <div style={{marginBottom:20}}>
      <div style={{fontSize:12,color:"#5a5a72",marginBottom:7,lineHeight:1.4,fontWeight:500}}>{label}</div>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        <div style={{fontSize:11,color:"#9898aa",width:34,textAlign:"right",flexShrink:0}}>{pcts[0]+pcts[1]}%</div>
        <div style={{flex:1,display:"flex",alignItems:"center"}}>
          <div style={{flex:1,display:"flex",justifyContent:"flex-end",gap:1}}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                height:22, width:`${i===2 ? pcts[i]/4 : pcts[i]/2}%`,
                background:COLORS[i], borderRadius:2,
                display:"flex", alignItems:"center", justifyContent:"center",
                minWidth: pcts[i]>0 ? 3 : 0, overflow:"hidden",
              }}>
                {pcts[i]>10 && i!==2 && <span style={{fontSize:10,color:"#fdd",fontWeight:600}}>{pcts[i]}%</span>}
              </div>
            ))}
          </div>
          <div style={{width:2,background:"#ccc",height:26,flexShrink:0,borderRadius:1}}/>
          <div style={{flex:1,display:"flex",justifyContent:"flex-start",gap:1}}>
            {[2,3,4].map(i => (
              <div key={i} style={{
                height:22, width:`${i===2 ? pcts[i]/4 : pcts[i]/2}%`,
                background:COLORS[i], borderRadius:2,
                display:"flex", alignItems:"center", justifyContent:"center",
                minWidth: pcts[i]>0 ? 3 : 0, overflow:"hidden",
              }}>
                {pcts[i]>10 && i!==2 && <span style={{fontSize:10,color:"#cef",fontWeight:600}}>{pcts[i]}%</span>}
              </div>
            ))}
          </div>
        </div>
        <div style={{fontSize:11,color:"#9898aa",width:34,flexShrink:0}}>{pcts[3]+pcts[4]}%</div>
      </div>
    </div>
  );
}

function LikertGroup({ questions, data }) {
  const total = data.length || 1;
const COLORS = ["#c0392b","#e8a0a0","#b0aaa0","#52c4a0","#1a6b50"];
const LEGEND = [["#c0392b","Strongly disagree"],["#e8a0a0","Disagree"],["#b0aaa0","Neutral"],["#52c4a0","Agree"],["#1a6b50","Strongly agree"]];


  const pctData = questions.map(([,key]) =>
    ["1","2","3","4","5"].map(l => Math.round((data.filter(r=>String(r[key])===l).length/total)*100))
  );
  const means = questions.map(([,key]) => {
    const vals = data.map(r=>Number(r[key])).filter(v=>!isNaN(v)&&v>0);
    return vals.length ? +(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) : 0;
  });
  const shortLabels = questions.map(([label]) => label.replace(/^Q\d+ — /,"").slice(0,18)+"…");

  const chartId = "lk_" + Math.random().toString(36).slice(2,7);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const load = () => {
      if (!window.Chart) return setTimeout(load, 200);

      const stackedCtx = document.getElementById(chartId+"_s");
      const bubbleCtx  = document.getElementById(chartId+"_b");
      const radarCtx   = document.getElementById(chartId+"_r");
      if (!stackedCtx||!bubbleCtx||!radarCtx) return;

      [chartId+"_s",chartId+"_b",chartId+"_r"].forEach(id => {
        const existing = window.Chart.getChart(id);
        if (existing) existing.destroy();
      });

      new window.Chart(stackedCtx, {
        type:"bar",
        data:{ labels:shortLabels, datasets:LEGEND.map(([c,l],si)=>({ label:l, data:pctData.map(p=>p[si]), backgroundColor:c })) },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
          scales:{ x:{stacked:true,ticks:{font:{size:10}},grid:{display:false}}, y:{stacked:true,max:100,ticks:{font:{size:10},callback:v=>v+"%"},grid:{color:"rgba(0,0,0,0.05)"}} } }
      });

      const rawCounts = questions.map(([,key]) => ["1","2","3","4","5"].map(l=>data.filter(r=>String(r[key])===l).length));
      new window.Chart(bubbleCtx, {
        type:"bubble",
        data:{ datasets:[0,1,2,3,4].map(si=>({ label:LEGEND[si][1], backgroundColor:COLORS[si]+"bb", borderColor:COLORS[si], borderWidth:1,
          data:rawCounts.map((r,qi)=>({x:si+1,y:qi+1,r:Math.max(r[si]*2.5,r[si]>0?4:0)})) })) },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
          scales:{ x:{min:0.3,max:5.7,ticks:{callback:v=>["","SD","D","N","A","SA"][v]||"",font:{size:10}},grid:{color:"rgba(0,0,0,0.05)"}},
            y:{min:0.3,max:questions.length+0.7,ticks:{callback:v=>shortLabels[v-1]||"",font:{size:10}},grid:{color:"rgba(0,0,0,0.05)"}} } }
      });

      new window.Chart(radarCtx, {
        type:"radar",
        data:{ labels:shortLabels, datasets:[{ data:means, backgroundColor:"rgba(13,110,86,0.15)", borderColor:"#0F6E56", borderWidth:2, pointBackgroundColor:"#0F6E56", pointRadius:4 }] },
        options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
          scales:{ r:{min:1,max:5,ticks:{stepSize:1,font:{size:10},backdropColor:"transparent"},grid:{color:"rgba(0,0,0,0.08)"},pointLabels:{font:{size:9}}} } }
      });
    };
    if (!window.Chart) {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
      s.onload = load; document.head.appendChild(s);
    } else load();
  }, [data]);

  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"6px 18px",marginBottom:18,paddingBottom:14,borderBottom:"1px solid #f0ebe0"}}>
        {LEGEND.map(([c,l])=>(
          <div key={l} style={{display:"flex",alignItems:"center",gap:6,fontSize:11,color:"#5a5a72"}}>
            <div style={{width:10,height:10,borderRadius:2,background:c,flexShrink:0}}/>{l}
          </div>
        ))}
      </div>

      <div style={{display:"flex",flexDirection:"column",gap:4,marginBottom:28}}>
        {questions.map(([label,key],qi) => (
          <div key={key} style={{marginBottom:12}}>
            <div style={{fontSize:12,color:"#2d2d44",marginBottom:6,fontWeight:600,lineHeight:1.4}}>{label}</div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:11,color:"#9898aa",width:34,textAlign:"right",flexShrink:0}}>{pctData[qi][0]+pctData[qi][1]}%</div>
              <div style={{flex:1,display:"flex",alignItems:"center"}}>
                <div style={{flex:1,position:"relative",height:32}}>
  {/* Left side: SD + D flush-right from center */}
  <div style={{position:"absolute",right:"50%",top:0,display:"flex",justifyContent:"flex-end",gap:2,width:"50%"}}>
    {[0,1].map(i=>(
      <div key={i} style={{height:32,width:`${pctData[qi][i]}%`,background:COLORS[i],borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
        {pctData[qi][i]>12&&<span style={{fontSize:10,color:"#fdd",fontWeight:600}}>{pctData[qi][i]}%</span>}
      </div>
    ))}
  </div>
  {/* Center divider */}
  <div style={{position:"absolute",left:"50%",top:0,width:3,height:36,background:"#aaa",borderRadius:2,transform:"translateX(-50%)"}}/>
  {/* Right side: A + SA flush-left from center */}
  <div style={{position:"absolute",left:"50%",top:0,display:"flex",justifyContent:"flex-start",gap:2,width:"50%"}}>
    {[3,4].map(i=>(
      <div key={i} style={{height:32,width:`${pctData[qi][i]}%`,background:COLORS[i],borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",flexShrink:0}}>
        {pctData[qi][i]>12&&<span style={{fontSize:10,color:"#cef",fontWeight:600}}>{pctData[qi][i]}%</span>}
      </div>
    ))}
  </div>
</div>
              </div>
              <div style={{fontSize:11,color:"#9898aa",width:34,flexShrink:0}}>{pctData[qi][3]+pctData[qi][4]}%</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
        <div style={{background:"#fff",border:"1px solid #e0dbd0",borderRadius:12,padding:16}}>
          <div style={{fontSize:12,fontWeight:600,color:"#1a1a2e",marginBottom:12}}>100% stacked view</div>
          <div style={{position:"relative",height:`${questions.length*34+60}px`}}>
            <canvas id={chartId+"_s"} role="img" aria-label="Stacked bar chart">Stacked Likert.</canvas>
          </div>
        </div>
        <div style={{background:"#fff",border:"1px solid #e0dbd0",borderRadius:12,padding:16}}>
          <div style={{fontSize:12,fontWeight:600,color:"#1a1a2e",marginBottom:12}}>Bubble matrix</div>
          <div style={{position:"relative",height:`${questions.length*34+60}px`}}>
            <canvas id={chartId+"_b"} role="img" aria-label="Bubble matrix">Bubble Likert.</canvas>
          </div>
        </div>
        <div style={{background:"#fff",border:"1px solid #e0dbd0",borderRadius:12,padding:16,gridColumn:"1/-1"}}>
          <div style={{fontSize:12,fontWeight:600,color:"#1a1a2e",marginBottom:12}}>Mean scores radar</div>
          <div style={{position:"relative",height:280}}>
            <canvas id={chartId+"_r"} role="img" aria-label="Radar chart">Radar.</canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   RELATIONSHIPS MODULE — cross-question relationship visualisations
   ----------------------------------------------------------------------
     • Correlation Heatmap          (Pearson, Likert questions)
     • Question-vs-Question Picker  (interactive stacked cross-tab + bubble)
     • Sankey / Flow Diagram        (answer flow between 2-3 questions)
     • Network Graph                (strongest correlation web)
     • TopCorrelations              (small card embedded under each section)
   All charts are pure SVG / DOM — no extra deps required.
   ══════════════════════════════════════════════════════════════════════ */

/* Master question bank — every Likert question across B-H */
const ALL_LIKERT_QUESTIONS = [
  // Section B
  ["B-Q1",  "MT understanding",          "motherTongueUnderstanding",       "B"],
  ["B-Q2",  "English diff. early",       "englishDifficultyEarlyGrades",    "B"],
  ["B-Q3",  "Urdu more accessible",      "urduMoreAccessible",              "B"],
  ["B-Q4",  "Eng barrier rural",         "englishBarrierRural",             "B"],
  ["B-Q5",  "Eng barrier urban",         "englishBarrierUrban",             "B"],
  ["B-Q6",  "Foreign lang outcomes",     "teachingForeignLanguageOutcomes", "B"],
  ["B-Q7",  "Participation local lang",  "participationLocalLanguage",      "B"],
  ["B-Q8",  "Early ed in MT",            "earlyEducationMotherTongue",      "B"],
  ["B-Q9",  "Concept learn MT",          "conceptLearningMotherTongue",     "B"],
  ["B-Q10", "Eng = rote learning",       "englishPromotesRoteLearning",     "B"],
  ["B-Q11", "Urdu bridge lang",          "urduBridgeLanguage",              "B"],
  ["B-Q12", "MT reduces gap",            "motherTongueReducesGap",          "B"],
  // Section C
  ["C-Q13", "Eng favors elite",          "englishFavorsElite",              "C"],
  ["C-Q14", "Regional disadvantaged",    "regionalStudentsDisadvantaged",   "C"],
  ["C-Q15", "Policy = inequality",       "languagePolicyInequality",        "C"],
  ["C-Q16", "Jobs for English med.",     "jobOpportunitiesEnglishMedium",   "C"],
  // Section D
  ["D-Q17", "Teachers effective Eng",    "teachersEffectiveEnglish",        "D"],
  ["D-Q18", "Teachers switch local",     "teachersSwitchLocalLanguage",     "D"],
  ["D-Q19", "Teach in Urdu/local",       "teacherUrduLocalLanguage",        "D"],
  ["D-Q20", "Interaction shared lang",   "interactionSharedLanguage",       "D"],
  ["D-Q21", "Urdu while Eng subj",       "teacherUrduWhileEnglish",         "D"],
  // Section E
  ["E-Q22", "MT primary",                "motherTonguePrimary",             "E"],
  ["E-Q23", "Urdu primary",              "urduPrimary",                     "E"],
  ["E-Q24", "Eng primary",               "englishPrimary",                  "E"],
  ["E-Q25", "Bilingual MT+Urdu",         "bilingualMotherUrdu",             "E"],
  ["E-Q26", "Gradual transition",        "gradualTransitionPrimary",        "E"],
  // Section F
  ["F-Q27", "Urdu middle",               "urduMiddle",                      "F"],
  ["F-Q28", "Eng middle",                "englishMiddle",                   "F"],
  ["F-Q29", "Bilingual Urdu-Eng",        "bilingualUrduEnglish",            "F"],
  ["F-Q30", "MT support middle",         "motherTongueSupportMiddle",       "F"],
  ["F-Q31", "Gradual shift Eng",         "gradualShiftEnglishMiddle",       "F"],
  // Section G
  ["G-Q32", "Eng matric",                "englishMatric",                   "G"],
  ["G-Q33", "MT matric",                 "motherTongueMatric",              "G"],
  ["G-Q34", "Urdu matric",               "urduMatric",                      "G"],
  ["G-Q35", "Bilingual matric",          "bilingualMatric",                 "G"],
  ["G-Q36", "Prepared higher ed",        "preparedForHigherEducation",      "G"],
  ["G-Q37", "Technical in Eng",          "technicalSubjectsEnglish",        "G"],
  // Section H
  ["H-Q38", "Dropout from language",     "dropoutDueToLanguage",            "H"],
  ["H-Q39", "Eng primary dropout",       "englishPrimaryDropout",           "H"],
  ["H-Q40", "Rural dropout lang",        "ruralDropoutLanguage",            "H"],
  ["H-Q41", "MT reduces dropout",        "motherTongueReduceDropout",       "H"],
  ["H-Q42", "Lang mismatch dropout",     "languageMismatchDropoutRisk",     "H"],
  ["H-Q43", "Lang absenteeism",          "languageAbsenteeism",             "H"],
  ["H-Q44", "Urdu lower dropout",        "urduReduceDropout",               "H"],
  ["H-Q45", "Weak Eng dropout",          "weakEnglishDropout",              "H"],
  ["H-Q46", "Multilingual retention",    "multilingualRetention",           "H"],
  ["H-Q47", "Eng-only high dropout",     "englishOnlyHighDropout",          "H"],
  ["H-Q48", "Repeat grades lang",        "repeatGradesLanguageIssue",       "H"],
  ["H-Q49", "Early gaps dropout",        "earlyGapsLeadDropout",            "H"],
];

const SECTION_COLOR = {
  B: "#2d6a4f", C: "#8e44ad", D: "#3b6fd4", E: "#e8b030",
  F: "#d35400", G: "#16a085", H: "#c0392b",
};

/* Likert palette used inside the Relationships module (independent of the
   one used by LikertGroup above so visuals match the relationships design). */
const REL_LIKERT_NAMES  = ["Strongly Disagree","Disagree","Neutral","Agree","Strongly Agree"];
const REL_LIKERT_COLORS = ["#c0392b","#e07070","#b0aaa0","#74c69d","#2d6a4f"];

/* Math helpers */
function pearson(xs, ys) {
  const pairs = [];
  for (let i = 0; i < xs.length; i++) {
    const a = Number(xs[i]); const b = Number(ys[i]);
    if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) pairs.push([a, b]);
  }
  const n = pairs.length;
  if (n < 3) return { r: 0, n };
  let sx=0, sy=0, sxx=0, syy=0, sxy=0;
  for (const [a,b] of pairs) { sx+=a; sy+=b; sxx+=a*a; syy+=b*b; sxy+=a*b; }
  const num = n*sxy - sx*sy;
  const den = Math.sqrt((n*sxx - sx*sx) * (n*syy - sy*sy));
  return { r: den === 0 ? 0 : num/den, n };
}

function corrColor(r) {
  const t = Math.max(-1, Math.min(1, r));
  if (t >= 0) {
    const a = t;
    const R = Math.round(247 + (45  - 247) * a);
    const G = Math.round(244 + (106 - 244) * a);
    const B = Math.round(239 + (79  - 239) * a);
    return `rgb(${R},${G},${B})`;
  } else {
    const a = -t;
    const R = Math.round(247 + (192 - 247) * a);
    const G = Math.round(244 + (57  - 244) * a);
    const B = Math.round(239 + (43  - 239) * a);
    return `rgb(${R},${G},${B})`;
  }
}

/* 1. CORRELATION HEATMAP */
function CorrelationHeatmap({ data, questions = ALL_LIKERT_QUESTIONS }) {
  const matrix = useMemo(() => {
    return questions.map(([,, k1]) =>
      questions.map(([,, k2]) => pearson(data.map(r => r[k1]), data.map(r => r[k2])).r)
    );
  }, [data, questions]);

  const [hover, setHover] = useState(null);
  const cell = 22;
  const labelW = 110;
  const size = questions.length * cell;

  return (
    <div style={{overflow:"auto",maxWidth:"100%"}}>
      <div style={{display:"inline-block",position:"relative"}}>
        <svg width={size + labelW + 30} height={size + labelW + 20} style={{fontFamily:"DM Sans, sans-serif"}}>
          {questions.map(([code,,, sec], i) => (
            <text key={"x"+i}
              x={labelW + i*cell + cell/2}
              y={labelW - 6}
              fontSize="9"
              fill={SECTION_COLOR[sec] || "#5a5a72"}
              textAnchor="end"
              transform={`rotate(-55, ${labelW + i*cell + cell/2}, ${labelW - 6})`}
              fontWeight="600"
            >{code}</text>
          ))}
          {questions.map(([code,,, sec], i) => (
            <text key={"y"+i}
              x={labelW - 6}
              y={labelW + i*cell + cell/2 + 3}
              fontSize="9"
              fill={SECTION_COLOR[sec] || "#5a5a72"}
              textAnchor="end"
              fontWeight="600"
            >{code}</text>
          ))}
          {matrix.map((row, i) => row.map((r, j) => (
            <g key={`${i}-${j}`}
              onMouseEnter={() => setHover({i,j,r})}
              onMouseLeave={() => setHover(null)}
            >
              <rect
                x={labelW + j*cell}
                y={labelW + i*cell}
                width={cell-1} height={cell-1}
                fill={corrColor(r)}
                stroke={hover && hover.i===i && hover.j===j ? "#1a1a2e" : "#fff"}
                strokeWidth={hover && hover.i===i && hover.j===j ? 1.5 : 0.5}
                rx="2"
              />
              {Math.abs(r) >= 0.4 && (
                <text
                  x={labelW + j*cell + (cell-1)/2}
                  y={labelW + i*cell + (cell-1)/2 + 3}
                  fontSize="7.5"
                  fill={Math.abs(r) > 0.6 ? "#fff" : "#1a1a2e"}
                  textAnchor="middle"
                  fontWeight="600"
                  pointerEvents="none"
                >{r.toFixed(2)}</text>
              )}
            </g>
          )))}
        </svg>
        {hover && (
          <div style={{
            position:"absolute", top:8, right:8,
            background:"#1a1a2e", color:"#fff", padding:"8px 12px",
            borderRadius:8, fontSize:11, lineHeight:1.5,
            boxShadow:"0 4px 14px rgba(0,0,0,0.2)", maxWidth:240
          }}>
            <div style={{fontWeight:600,marginBottom:4}}>
              {questions[hover.i][0]} × {questions[hover.j][0]}
            </div>
            <div>{questions[hover.i][1]}</div>
            <div style={{color:"#9898aa"}}>vs</div>
            <div>{questions[hover.j][1]}</div>
            <div style={{marginTop:6,fontSize:13,fontWeight:700,color:hover.r>=0?"#74c69d":"#e07070"}}>
              r = {hover.r.toFixed(3)}
            </div>
          </div>
        )}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:12,marginTop:14,fontSize:11,color:"#5a5a72"}}>
        <span>Strong negative</span>
        <div style={{
          width:200, height:12, borderRadius:3,
          background:"linear-gradient(90deg, rgb(192,57,43) 0%, rgb(247,244,239) 50%, rgb(45,106,79) 100%)"
        }}/>
        <span>Strong positive</span>
        <span style={{marginLeft:"auto",color:"#9898aa"}}>Pearson r · cells with |r|≥0.4 labeled</span>
      </div>
    </div>
  );
}

/* 2. QUESTION-vs-QUESTION PICKER */
function QuestionVsQuestion({ data, questions = ALL_LIKERT_QUESTIONS }) {
  const [keyA, setKeyA] = useState(questions[0][2]);
  const [keyB, setKeyB] = useState(questions[7][2]);

  const qA = questions.find(q => q[2] === keyA);
  const qB = questions.find(q => q[2] === keyB);

  const matrix = useMemo(() => {
    const m = Array.from({length:5}, () => Array(5).fill(0));
    data.forEach(r => {
      const a = parseInt(r[keyA]); const b = parseInt(r[keyB]);
      if (a>=1 && a<=5 && b>=1 && b<=5) m[a-1][b-1]++;
    });
    return m;
  }, [data, keyA, keyB]);

  const corr = useMemo(
    () => pearson(data.map(r => r[keyA]), data.map(r => r[keyB])),
    [data, keyA, keyB]
  );

  const totalPerA = matrix.map(row => row.reduce((s,v)=>s+v,0));

  const select = (val, onChange) => (
    <select
      value={val} onChange={e => onChange(e.target.value)}
      style={{
        width:"100%", padding:"10px 12px", border:"1px solid #e0dbd0",
        borderRadius:8, fontSize:12, fontFamily:"DM Sans, sans-serif",
        color:"#1a1a2e", background:"#fff", cursor:"pointer",
        boxShadow:"0 2px 6px rgba(0,0,0,0.04)"
      }}
    >
      {questions.map(([code, lbl,, ]) => (
        <option key={code} value={questions.find(q => q[0]===code)[2]}>
          {code} — {lbl}
        </option>
      ))}
    </select>
  );

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr auto",gap:12,alignItems:"center",marginBottom:20}}>
        <div>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#2d6a4f",marginBottom:6}}>Question A</div>
          {select(keyA, setKeyA)}
        </div>
        <div style={{fontSize:18,color:"#9898aa"}}>×</div>
        <div>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#2d6a4f",marginBottom:6}}>Question B</div>
          {select(keyB, setKeyB)}
        </div>
        <div style={{
          background: corr.r >= 0 ? "#e8f4ef" : "#fbe6e3",
          border:`1px solid ${corr.r >= 0 ? "#2d6a4f" : "#c0392b"}`,
          borderRadius:10, padding:"10px 16px", textAlign:"center", minWidth:110
        }}>
          <div style={{fontSize:10,color:"#5a5a72",fontWeight:600}}>Correlation</div>
          <div style={{fontFamily:"Playfair Display, serif",fontSize:22,fontWeight:700,color:corr.r>=0?"#2d6a4f":"#c0392b"}}>
            {corr.r.toFixed(3)}
          </div>
          <div style={{fontSize:9,color:"#9898aa"}}>n = {corr.n}</div>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:18}}>
        <div style={{background:"#faf8f3",border:"1px solid #f0ebe0",borderRadius:10,padding:16}}>
          <div style={{fontSize:12,fontWeight:600,color:"#1a1a2e",marginBottom:14}}>
            How <span style={{color:"#2d6a4f"}}>{qA[0]}</span> respondents answered <span style={{color:"#2d6a4f"}}>{qB[0]}</span>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {[4,3,2,1,0].map(ai => {
              const total = totalPerA[ai] || 1;
              return (
                <div key={ai} style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:90,fontSize:10,color:"#5a5a72",textAlign:"right",lineHeight:1.2}}>
                    A: {REL_LIKERT_NAMES[ai]}
                    <div style={{fontSize:9,color:"#9898aa"}}>n={totalPerA[ai]}</div>
                  </div>
                  <div style={{flex:1,display:"flex",height:24,borderRadius:4,overflow:"hidden",background:"#f0ebe0"}}>
                    {matrix[ai].map((cnt, bi) => {
                      const pct = (cnt/total)*100;
                      return (
                        <div key={bi} title={`${REL_LIKERT_NAMES[bi]}: ${cnt} (${pct.toFixed(0)}%)`} style={{
                          width:`${pct}%`, background:REL_LIKERT_COLORS[bi],
                          display:"flex",alignItems:"center",justifyContent:"center",
                          fontSize:9,color:"#fff",fontWeight:600,minWidth:cnt>0?2:0
                        }}>
                          {pct >= 12 ? `${pct.toFixed(0)}%` : ""}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"6px 12px",marginTop:14,paddingTop:12,borderTop:"1px solid #f0ebe0"}}>
            {REL_LIKERT_NAMES.map((n,i) => (
              <div key={i} style={{display:"flex",alignItems:"center",gap:5,fontSize:10,color:"#5a5a72"}}>
                <div style={{width:9,height:9,borderRadius:2,background:REL_LIKERT_COLORS[i]}}/>{n}
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"#faf8f3",border:"1px solid #f0ebe0",borderRadius:10,padding:16}}>
          <div style={{fontSize:12,fontWeight:600,color:"#1a1a2e",marginBottom:14}}>Joint distribution (bubble matrix)</div>
          <svg viewBox="0 0 320 280" style={{width:"100%",height:"auto",fontFamily:"DM Sans, sans-serif"}}>
            <text x="160" y="275" fontSize="10" fill="#5a5a72" textAnchor="middle" fontWeight="600">{qB[0]} →</text>
            <text x="12" y="140" fontSize="10" fill="#5a5a72" textAnchor="middle" fontWeight="600" transform="rotate(-90, 12, 140)">{qA[0]} →</text>
            {[1,2,3,4,5].map((v,i) => (
              <g key={"gx"+i}>
                <text x={50 + i*55} y="262" fontSize="9" fill="#9898aa" textAnchor="middle">{v}</text>
                <text x={32} y={235 - i*45 + 3} fontSize="9" fill="#9898aa" textAnchor="middle">{v}</text>
              </g>
            ))}
            {[0,1,2,3,4,5].map(i => (
              <g key={"g"+i}>
                <line x1={50 + i*55 - 27.5} y1="20" x2={50 + i*55 - 27.5} y2="245" stroke="#eee" strokeWidth="0.5"/>
                <line x1="40" y1={235 - i*45 + 22.5} x2={325} y2={235 - i*45 + 22.5} stroke="#eee" strokeWidth="0.5"/>
              </g>
            ))}
            {matrix.map((row, ai) => row.map((cnt, bi) => {
              if (cnt === 0) return null;
              const r = Math.min(20, 4 + Math.sqrt(cnt) * 3);
              const cx = 50 + bi*55;
              const cy = 235 - ai*45;
              const intensity = cnt / Math.max(...matrix.flat());
              return (
                <g key={`b-${ai}-${bi}`}>
                  <circle cx={cx} cy={cy} r={r}
                    fill={`rgba(45,106,79,${0.25 + intensity*0.55})`}
                    stroke="#2d6a4f" strokeWidth="1"/>
                  {cnt >= 3 && (
                    <text x={cx} y={cy+3} fontSize="9" fill="#fff" textAnchor="middle" fontWeight="600">{cnt}</text>
                  )}
                </g>
              );
            }))}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* 3. SANKEY / FLOW DIAGRAM */
function SankeyFlow({ data, questions = ALL_LIKERT_QUESTIONS }) {
  const def = ["motherTonguePrimary","englishPrimary","englishMatric"];
  const [sel, setSel] = useState(def);

  const setStage = (idx, val) => setSel(s => s.map((v,i) => i===idx ? val : v));
  const stages = sel.map(k => questions.find(q => q[2] === k) || questions[0]);

  const flows = useMemo(() => {
    const links = [];
    for (let s = 0; s < stages.length - 1; s++) {
      const k1 = stages[s][2]; const k2 = stages[s+1][2];
      const map = {};
      data.forEach(r => {
        const a = parseInt(r[k1]); const b = parseInt(r[k2]);
        if (a>=1 && a<=5 && b>=1 && b<=5) {
          const key = `${a}|${b}`;
          map[key] = (map[key] || 0) + 1;
        }
      });
      links.push(map);
    }
    return links;
  }, [data, sel]);

  const W = 720, H = 360;
  const colW = 140;
  const gapX = (W - stages.length * colW) / (stages.length - 1 || 1);

  const nodeData = stages.map((stage, si) => {
    const k = stage[2];
    const counts = [1,2,3,4,5].map(v => data.filter(r => parseInt(r[k])===v).length);
    const total = counts.reduce((s,v)=>s+v,0) || 1;
    let y = 30;
    return counts.map((c, vi) => {
      const h = (c/total) * (H - 60);
      const node = { x: si*(colW+gapX), y, h, count: c, value: vi+1, total };
      y += h + 4;
      return node;
    });
  });

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:18}}>
        {sel.map((k, idx) => (
          <div key={idx}>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#2d6a4f",marginBottom:6}}>Stage {idx+1}</div>
            <select value={k} onChange={e => setStage(idx, e.target.value)}
              style={{width:"100%",padding:"9px 10px",border:"1px solid #e0dbd0",borderRadius:8,fontSize:11,background:"#fff",cursor:"pointer"}}>
              {questions.map(([code, lbl,, ]) => (
                <option key={code} value={questions.find(q=>q[0]===code)[2]}>{code} — {lbl}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div style={{background:"#faf8f3",border:"1px solid #f0ebe0",borderRadius:10,padding:18,overflow:"auto"}}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",minWidth:600,height:"auto",fontFamily:"DM Sans, sans-serif"}}>
          {flows.map((flowMap, si) => {
            const sourceCol = nodeData[si];
            const targetCol = nodeData[si+1];
            const yOffsetSrc = sourceCol.map(()=>0);
            const yOffsetTgt = targetCol.map(()=>0);
            return Object.entries(flowMap).sort((a,b)=>b[1]-a[1]).map(([key, cnt]) => {
              const [a,b] = key.split("|").map(Number);
              const src = sourceCol[a-1]; const tgt = targetCol[b-1];
              const ratioSrc = cnt / (src.count || 1);
              const ratioTgt = cnt / (tgt.count || 1);
              const hSrc = src.h * ratioSrc;
              const hTgt = tgt.h * ratioTgt;
              const y1 = src.y + yOffsetSrc[a-1]; yOffsetSrc[a-1] += hSrc;
              const y2 = tgt.y + yOffsetTgt[b-1]; yOffsetTgt[b-1] += hTgt;
              const x1 = src.x + colW; const x2 = tgt.x;
              const cx = (x1+x2)/2;
              const path = `M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2} L${x2},${y2+hTgt} C${cx},${y2+hTgt} ${cx},${y1+hSrc} ${x1},${y1+hSrc} Z`;
              return (
                <path key={`${si}-${key}`} d={path}
                  fill={REL_LIKERT_COLORS[a-1]} opacity="0.45"
                  stroke="none">
                  <title>{`${REL_LIKERT_NAMES[a-1]} → ${REL_LIKERT_NAMES[b-1]}: ${cnt} respondents`}</title>
                </path>
              );
            });
          })}
          {nodeData.map((col, si) => col.map((n, vi) => (
            <g key={`n-${si}-${vi}`}>
              <rect x={n.x} y={n.y} width={colW} height={n.h}
                fill={REL_LIKERT_COLORS[vi]} rx="3"/>
              {n.h > 12 && (
                <text x={n.x + colW/2} y={n.y + n.h/2 + 4}
                  fontSize="10" fill="#fff" textAnchor="middle" fontWeight="600">
                  {REL_LIKERT_NAMES[vi]} ({n.count})
                </text>
              )}
            </g>
          )))}
          {stages.map((s, si) => (
            <text key={"s"+si} x={si*(colW+gapX) + colW/2} y="18"
              fontSize="11" fill="#1a1a2e" textAnchor="middle" fontWeight="700">
              {s[0]} — {s[1]}
            </text>
          ))}
        </svg>
      </div>
      <div style={{fontSize:11,color:"#9898aa",marginTop:10,textAlign:"center"}}>
        Each ribbon = group of respondents flowing from one answer to the next. Hover for counts.
      </div>
    </div>
  );
}

/* 4. NETWORK GRAPH */
function CorrelationNetwork({ data, questions = ALL_LIKERT_QUESTIONS, threshold = 0.4 }) {
  const edges = useMemo(() => {
    const out = [];
    for (let i = 0; i < questions.length; i++) {
      for (let j = i+1; j < questions.length; j++) {
        const { r } = pearson(data.map(rw=>rw[questions[i][2]]), data.map(rw=>rw[questions[j][2]]));
        if (Math.abs(r) >= threshold) out.push({ a:i, b:j, r });
      }
    }
    return out;
  }, [data, questions, threshold]);

  const degree = questions.map((_, i) => edges.filter(e => e.a===i || e.b===i).length);

  const W = 640, H = 520, cx = W/2, cy = H/2, R = 220;
  const nodes = questions.map(([code,, , sec], i) => {
    const ang = (i / questions.length) * 2 * Math.PI - Math.PI/2;
    return {
      code, sec,
      x: cx + R * Math.cos(ang),
      y: cy + R * Math.sin(ang),
      ang
    };
  });

  const [hover, setHover] = useState(null);

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:10}}>
        <div style={{fontSize:11,color:"#5a5a72"}}>
          Showing <span style={{fontWeight:700,color:"#2d6a4f"}}>{edges.length}</span> connections with |r| ≥ {threshold}
        </div>
        <div style={{display:"flex",gap:14,fontSize:10,color:"#5a5a72",flexWrap:"wrap"}}>
          {Object.entries(SECTION_COLOR).map(([s,c]) => (
            <div key={s} style={{display:"flex",alignItems:"center",gap:5}}>
              <div style={{width:10,height:10,borderRadius:"50%",background:c}}/>§{s}
            </div>
          ))}
        </div>
      </div>

      <div style={{background:"#faf8f3",border:"1px solid #f0ebe0",borderRadius:10,padding:12,position:"relative"}}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto",fontFamily:"DM Sans, sans-serif"}}>
          {edges.map((e, idx) => {
            const isHover = hover && (hover === e.a || hover === e.b);
            const fade = hover !== null && !isHover;
            return (
              <line key={idx}
                x1={nodes[e.a].x} y1={nodes[e.a].y}
                x2={nodes[e.b].x} y2={nodes[e.b].y}
                stroke={e.r >= 0 ? "#2d6a4f" : "#c0392b"}
                strokeOpacity={fade ? 0.05 : Math.min(0.7, Math.abs(e.r))}
                strokeWidth={Math.max(0.6, Math.abs(e.r) * 3.5)}
              />
            );
          })}
          {nodes.map((n, i) => {
            const r = 8 + Math.min(degree[i], 14) * 1.1;
            const isHover = hover === i;
            const labelX = cx + (R + 30) * Math.cos(n.ang);
            const labelY = cy + (R + 30) * Math.sin(n.ang);
            return (
              <g key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{cursor:"pointer"}}>
                <circle cx={n.x} cy={n.y} r={r}
                  fill={SECTION_COLOR[n.sec] || "#5a5a72"}
                  stroke={isHover ? "#1a1a2e" : "#fff"}
                  strokeWidth={isHover ? 2.5 : 1.5}/>
                <text x={labelX} y={labelY}
                  fontSize="9.5" fill="#1a1a2e"
                  textAnchor={Math.cos(n.ang) > 0.1 ? "start" : Math.cos(n.ang) < -0.1 ? "end" : "middle"}
                  dominantBaseline="middle"
                  fontWeight={isHover ? "700" : "500"}>
                  {n.code}
                </text>
              </g>
            );
          })}
        </svg>
        {hover !== null && (
          <div style={{position:"absolute",top:12,left:12,background:"#1a1a2e",color:"#fff",padding:"8px 12px",borderRadius:8,fontSize:11,maxWidth:260}}>
            <div style={{fontWeight:700,marginBottom:4}}>{questions[hover][0]} — {questions[hover][1]}</div>
            <div style={{color:"#9898aa"}}>
              {degree[hover]} strong connection{degree[hover]!==1?"s":""}
            </div>
          </div>
        )}
      </div>
      <div style={{fontSize:11,color:"#9898aa",marginTop:10,textAlign:"center"}}>
        Line thickness = strength · Green = positive correlation · Red = negative · Node size = number of strong links
      </div>
    </div>
  );
}

/* 5. TOP CORRELATIONS — small embeddable card */
function TopCorrelations({ data, sectionKey, limit = 6 }) {
  const inSection = ALL_LIKERT_QUESTIONS.filter(q => q[3] === sectionKey);

  const ranked = useMemo(() => {
    if (inSection.length === 0) return [];
    const all = [];
    inSection.forEach(qa => {
      ALL_LIKERT_QUESTIONS.forEach(qb => {
        if (qa[2] === qb[2]) return;
        const { r, n } = pearson(data.map(r=>r[qa[2]]), data.map(r=>r[qb[2]]));
        if (n >= 5 && Math.abs(r) >= 0.25) all.push({ qa, qb, r, n });
      });
    });
    const seen = new Set();
    const dedup = [];
    all.sort((x,y) => Math.abs(y.r) - Math.abs(x.r))
       .forEach(item => {
         const key = [item.qa[2], item.qb[2]].sort().join("|");
         if (seen.has(key)) return;
         seen.add(key);
         dedup.push(item);
       });
    return dedup.slice(0, limit);
  }, [data, sectionKey, limit, inSection]);

  if (inSection.length === 0) return null;

  if (ranked.length === 0) {
    return (
      <div style={{fontSize:12,color:"#9898aa",textAlign:"center",padding:20}}>
        Not enough data yet for relationship analysis.
      </div>
    );
  }

  return (
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
      {ranked.map((it, i) => (
        <div key={i} style={{
          display:"flex",alignItems:"center",gap:12,padding:"10px 12px",
          background:"#faf8f3",border:"1px solid #f0ebe0",borderRadius:10
        }}>
          <div style={{
            minWidth:54,height:54,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",
            flexDirection:"column",
            background: it.r >= 0 ? "#e8f4ef" : "#fbe6e3",
            border:`1.5px solid ${it.r >= 0 ? "#2d6a4f" : "#c0392b"}`,
          }}>
            <div style={{fontFamily:"Playfair Display, serif",fontSize:16,fontWeight:700,color:it.r>=0?"#2d6a4f":"#c0392b"}}>
              {it.r >= 0 ? "+" : ""}{it.r.toFixed(2)}
            </div>
            <div style={{fontSize:8,color:"#9898aa"}}>n={it.n}</div>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:11,color:"#1a1a2e",fontWeight:600,lineHeight:1.4}}>
              <span style={{color:SECTION_COLOR[it.qa[3]]}}>{it.qa[0]}</span> {it.qa[1]}
            </div>
            <div style={{fontSize:10,color:"#9898aa",margin:"2px 0"}}>
              {it.r >= 0 ? "moves with ↗" : "moves opposite ↘"}
            </div>
            <div style={{fontSize:11,color:"#1a1a2e",fontWeight:600,lineHeight:1.4}}>
              <span style={{color:SECTION_COLOR[it.qb[3]]}}>{it.qb[0]}</span> {it.qb[1]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* 6. SECTION REL — full page combining all four */
function SectionRel({ data }) {
  const [tab, setTab] = useState("heatmap");

  const tabs = [
    { id:"heatmap",  label:"Correlation Heatmap",   icon:"🔥" },
    { id:"picker",   label:"Question vs Question",  icon:"⚖️" },
    { id:"sankey",   label:"Answer Flow (Sankey)",  icon:"🌊" },
    { id:"network",  label:"Network of Links",      icon:"🕸️" },
  ];

  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:20,background:"linear-gradient(135deg,#e8f4ef 0%,#fff 100%)"}}>
        <div style={{display:"flex",alignItems:"center",gap:14}}>
          <div style={{fontSize:30}}>🔗</div>
          <div>
            <div style={{fontFamily:"Playfair Display, serif",fontSize:18,fontWeight:700,color:"#1a1a2e"}}>
              Question Relationships
            </div>
            <div style={{fontSize:12,color:"#5a5a72",marginTop:3}}>
              Discover how every question relates to every other question — patterns, agreement, opposition, and respondent flow.
            </div>
          </div>
        </div>
      </div>

      <div style={{display:"flex",gap:6,marginBottom:18,flexWrap:"wrap"}}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding:"10px 16px",
              border: tab===t.id ? "1px solid #2d6a4f" : "1px solid #e0dbd0",
              background: tab===t.id ? "#2d6a4f" : "#fff",
              color: tab===t.id ? "#fff" : "#1a1a2e",
              borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer",
              fontFamily:"DM Sans, sans-serif",
              transition:"all 0.18s",
              boxShadow:"0 2px 6px rgba(0,0,0,0.04)"
            }}>
            <span style={{marginRight:6}}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>

      <div className="an-chart-block">
        {tab === "heatmap" && (<>
          <div className="an-chart-title">Pearson Correlation Heatmap — All Likert Questions</div>
          <CorrelationHeatmap data={data} />
        </>)}
        {tab === "picker" && (<>
          <div className="an-chart-title">Compare Two Questions Side-by-Side</div>
          <QuestionVsQuestion data={data} />
        </>)}
        {tab === "sankey" && (<>
          <div className="an-chart-title">Respondent Answer Flow Across 3 Questions</div>
          <SankeyFlow data={data} />
        </>)}
        {tab === "network" && (<>
          <div className="an-chart-title">Network of Strongest Question Relationships</div>
          <CorrelationNetwork data={data} />
        </>)}
      </div>
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
   {/* Students by Area */}
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Students — Count by Area</div>
        <BarChart data={
          [...new Set(data.map(r => r.area).filter(Boolean))].map(area => ({
            label: area,
            value: data.filter(r =>
              String(r.respondentCategory).toLowerCase() === "student" &&
              r.area === area
            ).length
          })).filter(d => d.value > 0)
        } />
      </div>

      {/* Teachers by Institution Type */}
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Teachers — Count by Institution Type</div>
        <BarChart data={
          [...new Set(data.map(r => r.institutionType).filter(Boolean))].map(inst => ({
            label: inst,
            value: data.filter(r =>
              String(r.respondentCategory).toLowerCase() === "teacher" &&
              r.institutionType === inst
            ).length
          })).filter(d => d.value > 0)
        } />
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
/* Matches Page 1 Section B: "Language of Instruction and Educational Effectiveness" */
/* Q1–Q12 as rendered in SurveyPage1                                                */
function SectionB({ data }) {
  const QUESTIONS = [
    ["Q1 — Students understand concepts better in their mother tongue","motherTongueUnderstanding"],
    ["Q2 — Students face difficulty when instruction is in English at early grades","englishDifficultyEarlyGrades"],
    ["Q3 — Urdu is more accessible to students than English at primary level","urduMoreAccessible"],
    ["Q4 — English medium creates comprehension barriers for rural students","englishBarrierRural"],
    ["Q5 — English medium creates comprehension barriers for urban students","englishBarrierUrban"],
    ["Q6 — Teaching in foreign Language affects learning outcomes","teachingForeignLanguageOutcomes"],
    ["Q7 — Students actively participate when teachers use local languages","participationLocalLanguage"],
    ["Q8 — Early grade education should be in mother tongue","earlyEducationMotherTongue"],
    ["Q9 — Conceptual learning improves when taught in mother tongue","conceptLearningMotherTongue"],
    ["Q10 — English medium promotes rote learning at early stages","englishPromotesRoteLearning"],
    ["Q11 — Urdu can function as a bridge language in multilingual classrooms","urduBridgeLanguage"],
    ["Q12 — Mother tongue instruction reduces learning gaps","motherTongueReducesGap"],
  ];

  const means = QUESTIONS.map(([label, key]) => {
    const vals = data.map(r => Number(r[key])).filter(v => !isNaN(v) && v > 0);
    const mean = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) : "—";
    return { label: label.replace(/^Q\d+ — /,""), mean, count: vals.length };
  });

  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section B — Language of Instruction and Educational Effectiveness (Likert 1–5 breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-block">
        <div className="an-chart-title">Mean Scores — Language of Instruction and Educational Effectiveness</div>
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
/* Matches Page 2 Section C: "Equity and Access" — Q13–Q16 */
function SectionC({ data }) {
  const QUESTIONS = [
    ["Q13 — English medium of instruction favors elite/private school students","englishFavorsElite"],
    ["Q14 — Students from regional language backgrounds are disadvantaged","regionalStudentsDisadvantaged"],
    ["Q15 — Language policy contributes to educational inequality","languagePolicyInequality"],
    ["Q16 — More Job Opportunities are available for English medium students","jobOpportunitiesEnglishMedium"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section C — Equity and Access (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q13 — English Favors Elite (by Area)</div>
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
          <div className="an-chart-title">Q15 — Language Policy Contributes to Inequality (by Category)</div>
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

/* ══════════════════════ SECTION D ══════════════════════════════════ */
/* Matches Page 2 Section D: "Teacher Capacity" — Q17–Q21 */
function SectionD({ data }) {
  const QUESTIONS = [
    ["Q17 — Teachers are able to teach effectively in English medium","teachersEffectiveEnglish"],
    ["Q18 — Teachers naturally switch to local languages for explanation","teachersSwitchLocalLanguage"],
    ["Q19 — Teacher can teach in Urdu or in local Languages","teacherUrduLocalLanguage"],
    ["Q20 — Teacher-student interaction improves in shared language","interactionSharedLanguage"],
    ["Q21 — Teacher use Urdu or local Languages while teaching subjects in English","teacherUrduWhileEnglish"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section D — Teacher Capacity (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q17 — Teachers Effective in English (by Institution Type)</div>
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
          <div className="an-chart-title">Q18 — Teachers Switch to Local Language (by Area)</div>
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

/* ══════════════════════ SECTION E ══════════════════════════════════ */
/* Matches Page 2 Section E: "Preferred Medium of Instruction — Primary Level (Grades 1–5)" — Q22–Q26 */
function SectionE({ data }) {
  const QUESTIONS = [
    ["Q22 — Mother tongue should be medium of instruction at primary level","motherTonguePrimary"],
    ["Q23 — Urdu should be medium of instruction at primary level","urduPrimary"],
    ["Q24 — English should be medium of instruction at primary level","englishPrimary"],
    ["Q25 — Bilingual (Mother tongue + Urdu) model should be used","bilingualMotherUrdu"],
    ["Q26 — Gradual transition (Mother tongue → Urdu → English) is appropriate","gradualTransitionPrimary"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section E — Preferred Medium of Instruction — Primary Level (Grades 1–5) (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      {/* Compare Q22 vs Q24 side by side */}
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q22 — Mother Tongue at Primary (by Province)</div>
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
          <div className="an-chart-title">Q24 — English at Primary (by Province)</div>
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

/* ══════════════════════ SECTION F ══════════════════════════════════ */
/* Matches Page 2 Section F: "Preferred Medium of Instruction — Middle Level (Grades 6–8)" — Q27–Q31 */
function SectionF({ data }) {
  const QUESTIONS = [
    ["Q27 — Urdu should be medium of Instruction at middle level","urduMiddle"],
    ["Q28 — English should become medium at middle level","englishMiddle"],
    ["Q29 — Bilingual Urdu-English model should be adopted","bilingualUrduEnglish"],
    ["Q30 — Mother tongue support should continue at middle level","motherTongueSupportMiddle"],
    ["Q31 — Gradual shift to English should begin at middle level","gradualShiftEnglishMiddle"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section F — Preferred Medium of Instruction — Middle Level (Grades 6–8) (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q28 — English at Middle Level (by Area)</div>
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
          <div className="an-chart-title">Q29 — Bilingual Model (Urdu-English) by Category</div>
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

/* ══════════════════════ SECTION G ══════════════════════════════════ */
/* Matches Page 2 Section G: "Preferred Medium of Instruction — Matriculation Level (Grades 9–10)" — Q32–Q37 */
function SectionG({ data }) {
  const QUESTIONS = [
    ["Q32 — English should be medium of Instruction at matric level","englishMatric"],
    ["Q33 — Mother Tongue should be medium at matric level","motherTongueMatric"],
    ["Q34 — Urdu should remain medium of Instruction at matric level","urduMatric"],
    ["Q35 — Bilingual Urdu-English model is more effective","bilingualMatric"],
    ["Q36 — Students should be prepared for English medium at higher education","preparedForHigherEducation"],
    ["Q37 — Technical subjects should be taught in English","technicalSubjectsEnglish"],
  ];
  return (
    <div>
      <div className="an-chart-block" style={{marginBottom:28}}>
        <div className="an-chart-title">Section G — Preferred Medium of Instruction — Matriculation Level (Grades 9–10) (Likert breakdown)</div>
        <LikertGroup questions={QUESTIONS} data={data} />
      </div>
      <div className="an-chart-grid-2">
        <div className="an-chart-block">
          <div className="an-chart-title">Q32 — English at Matric (by Institution Type)</div>
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
          <div className="an-chart-title">Q37 — Technical Subjects in English (by Area)</div>
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

/* ══════════════════════ SECTION H ══════════════════════════════════ */
/* Matches Page 2 Section H: "Medium of Instruction and Dropout Ratio" — Q38–Q52 */
function SectionH({ data }) {
  const LIKERT_QS = [
    ["Q38 — Students are more likely to drop out when they do not understand the language of instruction","dropoutDueToLanguage"],
    ["Q39 — English-medium of instruction at primary level contributes to early grade dropout","englishPrimaryDropout"],
    ["Q40 — Students from rural backgrounds drop out more due to language difficulties","ruralDropoutLanguage"],
    ["Q41 — Mother tongue instruction can reduce dropout ratio in early grades","motherTongueReduceDropout"],
    ["Q42 — Language mismatch between home and school increases dropout risk","languageMismatchDropoutRisk"],
    ["Q43 — Students losing interest due to language difficulty leads to absenteeism","languageAbsenteeism"],
    ["Q44 — Urdu medium reduces dropout compared to English medium in public schools","urduReduceDropout"],
    ["Q45 — Students with weak English foundation are more likely to leave school","weakEnglishDropout"],
    ["Q46 — Multilingual instruction improves student retention","multilingualRetention"],
    ["Q47 — Dropout ratio is higher in schools strictly enforcing English-only policy","englishOnlyHighDropout"],
    ["Q48 — Students repeat grades more often due to language comprehension issues","repeatGradesLanguageIssue"],
    ["Q49 — Early conceptual gaps caused by language difficulty lead to eventual dropout","earlyGapsLeadDropout"],
  ];

  const MULTI_QS = [
    ["Q50 — Dropout is highest at","highestDropoutLevel",["Primary level","Middle level","Matric level","Equal at all levels"]],
    ["Q51 — Language-related dropout is most common at","languageDropoutStage",["Grade 1–3","Grade 4–5","Grade 6–8","Grade 9–10"]],
    ["Q52 — Students at risk of dropout mostly belong to","atRiskStudentsGroup",["Mother tongue speakers (non-Urdu)","Urdu-medium background","Weak English background","All equally"]],
  ];

  const total = data.length || 1;
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
        <div className="an-chart-title">Section H — Medium of Instruction and Dropout Ratio Q38–Q49 (Likert breakdown)</div>
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

      {/* Q50 by Area cross-tab */}
      <div className="an-chart-block">
        <div className="an-chart-title">Q50 — Dropout is Highest at (by Area)</div>
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
  { id:"A", label:"§A Background Information",                                         icon:"👤", desc:"Respondent category, institution, area, province" },
  { id:"B", label:"§B Language of Instruction and Educational Effectiveness",          icon:"🗣️", desc:"Language mismatch, comprehension, participation, MOI effectiveness" },
  { id:"C", label:"§C Equity and Access",                                              icon:"⚖️", desc:"Inequality, elite bias, regional disadvantage, job opportunities" },
  { id:"D", label:"§D Teacher Capacity",                                               icon:"👩‍🏫", desc:"English teaching, code-switching, shared language" },
  { id:"E", label:"§E Preferred Medium of Instruction — Primary Level (Grades 1–5)",  icon:"🏫", desc:"Preferred medium at primary level" },
  { id:"F", label:"§F Preferred Medium of Instruction — Middle Level (Grades 6–8)",   icon:"📖", desc:"Preferred medium at middle level" },
  { id:"G", label:"§G Preferred Medium of Instruction — Matriculation Level (Grades 9–10)", icon:"🎓", desc:"Preferred medium at matriculation level" },
  { id:"H", label:"§H Medium of Instruction and Dropout Ratio",                        icon:"📉", desc:"Language-related dropout and retention analysis" },
  { id:"REL", label:"§🔗 Question Relationships",                                       icon:"🔗", desc:"Heatmap · Q-vs-Q picker · Sankey flow · Network graph" },
];

/* Wrap each section so the user automatically sees a "Top Relationships"
   card at the bottom of every section (except A which has no Likert qs). */
function withRelationships(Comp, sectionKey) {
  return function Wrapped({ data }) {
    return (
      <>
        <Comp data={data} />
        {sectionKey !== "A" && (
          <div className="an-chart-block" style={{marginTop:28}}>
            <div className="an-chart-title">
              🔗 Top Relationships — how Section {sectionKey} questions connect to other questions
            </div>
            <TopCorrelations data={data} sectionKey={sectionKey} />
          </div>
        )}
      </>
    );
  };
}

const SECTION_COMPONENTS = {
  A:   withRelationships(SectionA, "A"),
  B:   withRelationships(SectionB, "B"),
  C:   withRelationships(SectionC, "C"),
  D:   withRelationships(SectionD, "D"),
  E:   withRelationships(SectionE, "E"),
  F:   withRelationships(SectionF, "F"),
  G:   withRelationships(SectionG, "G"),
  H:   withRelationships(SectionH, "H"),
  REL: SectionRel,
};

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
