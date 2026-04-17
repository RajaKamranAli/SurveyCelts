import { useState, useEffect } from "react";

const API_GET = "/api/UserTest/getallsurvey";

export default function AllSurveysPage({ onBack }) {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(API_GET)
      .then(r => r.json())
      .then(d => { setSurveys(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{minHeight:"100vh",background:"#dde4ec",fontFamily:"DM Sans,sans-serif",padding:"40px"}}>

      {/* Header row */}
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"32px"}}>
          <div>
            <div style={{fontSize:"11px",fontWeight:"700",letterSpacing:"0.18em",textTransform:"uppercase",color:"#7a8899",marginBottom:"6px"}}>Admin Panel</div>
            <h2 style={{fontFamily:"Playfair Display,serif",fontSize:"36px",fontWeight:"700",color:"#1a1f2e",margin:0}}>All Survey Submissions</h2>
          </div>
          <button
            onClick={onBack}
            style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"#fff",color:"#4a5468",border:"1px solid #bcc8d4",borderRadius:"10px",padding:"11px 22px",fontSize:"14px",fontWeight:"600",cursor:"pointer",fontFamily:"DM Sans,sans-serif"}}
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Record count */}
        <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"}}>
          <div style={{fontSize:"10px",fontWeight:"700",letterSpacing:"0.18em",textTransform:"uppercase",color:"#7a8899"}}>All Submissions</div>
          <div style={{flex:1,height:"1px",background:"linear-gradient(90deg,#bcc8d4,transparent)"}}/>
          <div style={{fontSize:"11px",color:"#40916c",fontWeight:"600",background:"#d8f3dc",border:"1px solid rgba(45,106,79,0.15)",borderRadius:"100px",padding:"3px 12px"}}>{surveys.length} records</div>
        </div>

        {/* Table */}
        <div style={{background:"#fff",border:"1px solid #c0ccd8",borderRadius:"18px",overflow:"hidden",boxShadow:"0 2px 8px rgba(26,26,46,0.07)"}}>
          <div style={{display:"grid",gridTemplateColumns:"52px 1.2fr 1fr 1fr 1fr 96px",padding:"14px 24px",background:"#e8e2d6",borderBottom:"1px solid #cdd6e0"}}>
            {["#","Category","Area","Institution","Province","Status"].map(h => (
              <span key={h} style={{fontSize:"10px",fontWeight:"700",letterSpacing:"0.13em",textTransform:"uppercase",color:"#4a5468"}}>{h}</span>
            ))}
          </div>

          {loading ? (
            <div style={{textAlign:"center",padding:"70px 20px",color:"#7a8899"}}>⏳ Loading data…</div>
          ) : surveys.length === 0 ? (
            <div style={{textAlign:"center",padding:"70px 20px",color:"#7a8899"}}>No submissions found.</div>
          ) : surveys.map((s, i) => (
            <div
              key={s.responseId ?? s.dpId ?? i}
              onClick={() => setSelected(s)}
              style={{
                display:"grid",gridTemplateColumns:"52px 1.2fr 1fr 1fr 1fr 96px",
                padding:"15px 24px",borderBottom:"1px solid #cdd6e0",
                alignItems:"center",cursor:"pointer",
                background: i % 2 === 0 ? "#fff" : "rgba(200,215,230,0.3)",
                transition:"background 0.15s"
              }}
              onMouseEnter={e => e.currentTarget.style.background="rgba(100,149,200,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background= i % 2 === 0 ? "#fff" : "rgba(200,215,230,0.3)"}
            >
              <div style={{fontFamily:"Playfair Display,serif",fontSize:"13px",fontWeight:"700",color:"#7a8899",background:"#cdd6e0",width:"28px",height:"28px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"}}>{i+1}</div>
              <div style={{fontSize:"13px",fontWeight:"600",color:"#2d6a4f"}}>{s.respondentCategory || "—"}</div>
              <div style={{fontSize:"13px",color:"#1a1a2e",fontWeight:"500"}}>{s.area || "—"}</div>
              <div style={{fontSize:"13px",color:"#1a1a2e",fontWeight:"500"}}>{s.institutionType || "—"}</div>
              <div style={{fontSize:"13px",color:"#1a1a2e",fontWeight:"500"}}>{s.province || "—"}</div>
              <div><span style={{display:"inline-flex",alignItems:"center",gap:"5px",background:"#d8f3dc",border:"1px solid rgba(45,106,79,0.25)",color:"#2d6a4f",borderRadius:"100px",padding:"4px 12px",fontSize:"10px",fontWeight:"700"}}>✓ Done</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(26,26,46,0.5)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"}}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{background:"#fff",borderRadius:"20px",width:"100%",maxWidth:"600px",maxHeight:"88vh",overflowY:"auto",boxShadow:"0 16px 48px rgba(26,26,46,0.13)",padding:"30px"}}
          >
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
              <div>
                <div style={{fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase",color:"#2d6a4f",fontWeight:"600",marginBottom:"4px"}}>Response #{selected.responseId ?? selected.dpId}</div>
                <div style={{fontFamily:"Playfair Display,serif",fontSize:"20px",fontWeight:"700",color:"#1a1f2e"}}>{selected.respondentCategory || "—"} · {selected.area || "—"}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{width:"34px",height:"34px",borderRadius:"50%",background:"#dde4ec",border:"1px solid #bcc8d4",color:"#4a5468",fontSize:"18px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
              {Object.entries(selected).map(([k,v]) => v && (
                <div key={k} style={{background:"#dde4ec",border:"1px solid #bcc8d4",borderRadius:"10px",padding:"10px 14px"}}>
                  <div style={{fontSize:"10px",color:"#7a8899",fontWeight:"600",letterSpacing:"0.07em",marginBottom:"4px",textTransform:"uppercase"}}>{k}</div>
                  <div style={{fontSize:"13px",color:"#2d3444",fontWeight:"500"}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{textAlign:"center",marginTop:"20px"}}>
              <button onClick={() => setSelected(null)} style={{background:"linear-gradient(135deg,#2d6a4f,#40916c)",color:"#fff",border:"none",borderRadius:"10px",padding:"11px 40px",fontSize:"14px",fontWeight:"600",cursor:"pointer"}}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
