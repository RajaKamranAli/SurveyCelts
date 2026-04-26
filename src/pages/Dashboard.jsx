import { useState, useEffect, useRef } from "react";

// const API_GET = "http://survey.ruqqiasultanaclinic.com/api/UserTest/getallsurvey";
const API_GET = "/api/UserTest/getallsurvey";

/* ══════════════════════ GLOBAL STYLES — 3D EDU THEME ══════════════════════ */
const injectStyles = () => {
  if (document.getElementById("dash-edu3d-styles")) return;
  const el = document.createElement("style");
  el.id = "dash-edu3d-styles";
  el.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,700;1,600;1,700&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

    :root {
      /* Educational deep-space palette */
      --bg-0:      #0b1020;
      --bg-1:      #111a36;
      --bg-2:      #1a2550;
      --ink-0:     #f5f7ff;
      --ink-1:     #c8d0ee;
      --ink-2:     #8a97c4;
      --ink-3:     #5b6796;

      /* Accent — knowledge gold + chalk teal + ink violet */
      --gold:      #f5b840;
      --gold-2:    #ffd870;
      --teal:      #4fd1c5;
      --teal-2:    #7ef0e6;
      --violet:    #8b6cf2;
      --violet-2:  #b39bff;
      --rose:      #ff7a90;

      --glass:     rgba(255,255,255,0.06);
      --glass-2:   rgba(255,255,255,0.10);
      --stroke:    rgba(255,255,255,0.12);
      --stroke-2:  rgba(255,255,255,0.22);

      --grad-hero:  linear-gradient(135deg,#f5b840 0%,#ff7a90 45%,#8b6cf2 100%);
      --grad-teal:  linear-gradient(135deg,#4fd1c5,#8b6cf2);
      --grad-gold:  linear-gradient(135deg,#f5b840,#ff7a90);
      --grad-card:  linear-gradient(160deg,rgba(255,255,255,0.10) 0%,rgba(255,255,255,0.02) 100%);

      --shadow-glow: 0 20px 60px rgba(139,108,242,0.35), 0 8px 24px rgba(0,0,0,0.4);
      --shadow-soft: 0 12px 40px rgba(0,0,0,0.45);
    }

    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

    /* ── ROOT ── */
    .edu-root {
      min-height:100vh;
      background:
        radial-gradient(ellipse 90% 60% at 15% 0%, rgba(139,108,242,0.35) 0%, transparent 60%),
        radial-gradient(ellipse 80% 60% at 85% 30%, rgba(79,209,197,0.22) 0%, transparent 55%),
        radial-gradient(ellipse 70% 60% at 50% 100%, rgba(245,184,64,0.18) 0%, transparent 60%),
        linear-gradient(180deg, var(--bg-0) 0%, var(--bg-1) 50%, var(--bg-0) 100%);
      font-family:'Outfit',sans-serif;
      color: var(--ink-0);
      position:relative;
      overflow-x:hidden;
      perspective: 1600px;
    }

    /* ── ANIMATED EDU BACKGROUND ── */
    .edu-bg { position:fixed; inset:0; z-index:0; pointer-events:none; overflow:hidden; }

    /* Grid floor (chalkboard perspective) */
    .edu-bg-grid {
      position:absolute; inset:-20% -10% -40% -10%;
      background-image:
        linear-gradient(rgba(139,108,242,0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79,209,197,0.14) 1px, transparent 1px);
      background-size: 70px 70px;
      transform: perspective(800px) rotateX(60deg) translateY(20%);
      transform-origin: center bottom;
      mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, #000 30%, transparent 80%);
      animation: gridFlow 18s linear infinite;
    }
    @keyframes gridFlow {
      from { background-position: 0 0, 0 0; }
      to   { background-position: 0 70px, 70px 0; }
    }

    /* Stars / particles */
    .edu-bg-stars {
      position:absolute; inset:0;
      background-image:
        radial-gradient(1.5px 1.5px at 12% 18%, rgba(255,255,255,0.9), transparent 50%),
        radial-gradient(1px 1px at 78% 32%, rgba(255,255,255,0.7), transparent 50%),
        radial-gradient(1.5px 1.5px at 35% 78%, rgba(245,184,64,0.9), transparent 50%),
        radial-gradient(1px 1px at 88% 88%, rgba(255,255,255,0.6), transparent 50%),
        radial-gradient(1px 1px at 50% 12%, rgba(127,240,230,0.8), transparent 50%),
        radial-gradient(1.5px 1.5px at 22% 55%, rgba(255,255,255,0.7), transparent 50%),
        radial-gradient(1px 1px at 65% 60%, rgba(179,155,255,0.9), transparent 50%);
      animation: twinkle 4s ease-in-out infinite;
    }
    @keyframes twinkle {
      0%,100% { opacity:0.7; }
      50%     { opacity:1; }
    }

    /* Floating orbs */
    .edu-orb {
      position:absolute; border-radius:50%;
      filter: blur(40px); opacity:0.55;
      animation: orbFloat 14s ease-in-out infinite;
    }
    .edu-orb.o1 { width:380px; height:380px; left:-80px; top:8%;
      background: radial-gradient(circle, var(--violet) 0%, transparent 70%); }
    .edu-orb.o2 { width:320px; height:320px; right:-60px; top:42%;
      background: radial-gradient(circle, var(--teal) 0%, transparent 70%);
      animation-delay:-5s; }
    .edu-orb.o3 { width:280px; height:280px; left:30%; bottom:-60px;
      background: radial-gradient(circle, var(--gold) 0%, transparent 70%);
      animation-delay:-9s; }
    @keyframes orbFloat {
      0%,100% { transform: translate(0,0) scale(1); }
      33%     { transform: translate(40px,-30px) scale(1.08); }
      66%     { transform: translate(-30px,20px) scale(0.95); }
    }

    /* Floating 3D edu icons */
    .edu-float {
      position:absolute; font-size:42px;
      opacity:0.18; filter: drop-shadow(0 8px 24px rgba(139,108,242,0.5));
      animation: floatY 9s ease-in-out infinite;
      transform-style: preserve-3d;
    }
    .edu-float.f1 { top:14%;  left:8%;  animation-delay:0s;   }
    .edu-float.f2 { top:22%;  right:10%; animation-delay:-2s; font-size:48px; }
    .edu-float.f3 { top:55%;  left:5%;   animation-delay:-4s; }
    .edu-float.f4 { top:68%;  right:7%;  animation-delay:-6s; font-size:38px; }
    .edu-float.f5 { top:38%;  left:48%;  animation-delay:-3s; font-size:32px; opacity:0.12; }
    .edu-float.f6 { top:80%;  left:32%;  animation-delay:-7s; }
    @keyframes floatY {
      0%,100% { transform: translateY(0) rotate(-6deg) rotateY(0deg); }
      50%     { transform: translateY(-26px) rotate(6deg) rotateY(20deg); }
    }

    /* Geometric 3D shapes (cubes) */
    .edu-cube {
      position:absolute; width:60px; height:60px;
      transform-style: preserve-3d;
      animation: cubeSpin 16s linear infinite;
    }
    .edu-cube .face {
      position:absolute; inset:0;
      background: var(--grad-teal);
      border:1px solid rgba(255,255,255,0.2);
      opacity:0.35;
    }
    .edu-cube .f-front  { transform: translateZ(30px); }
    .edu-cube .f-back   { transform: rotateY(180deg) translateZ(30px); }
    .edu-cube .f-right  { transform: rotateY(90deg)  translateZ(30px); }
    .edu-cube .f-left   { transform: rotateY(-90deg) translateZ(30px); }
    .edu-cube .f-top    { transform: rotateX(90deg)  translateZ(30px); }
    .edu-cube .f-bottom { transform: rotateX(-90deg) translateZ(30px); }
    .edu-cube.c1 { top:18%; right:20%; }
    .edu-cube.c2 { top:62%; left:18%;  width:46px; height:46px; animation-duration:22s; animation-direction:reverse; }
    .edu-cube.c2 .face { transform: translateZ(23px); }
    .edu-cube.c2 .f-back { transform: rotateY(180deg) translateZ(23px); }
    .edu-cube.c2 .f-right { transform: rotateY(90deg) translateZ(23px); }
    .edu-cube.c2 .f-left { transform: rotateY(-90deg) translateZ(23px); }
    .edu-cube.c2 .f-top { transform: rotateX(90deg) translateZ(23px); }
    .edu-cube.c2 .f-bottom { transform: rotateX(-90deg) translateZ(23px); }
    @keyframes cubeSpin {
      from { transform: rotateX(0deg) rotateY(0deg); }
      to   { transform: rotateX(360deg) rotateY(360deg); }
    }

    /* Top ribbon (gradient laser line) */
    .edu-ribbon {
      height:3px;
      background: linear-gradient(90deg, var(--teal) 0%, var(--violet) 50%, var(--gold) 100%);
      position:relative; z-index:2;
      box-shadow: 0 0 24px rgba(139,108,242,0.6);
    }

    /* Layout */
    .edu-inner {
      position:relative; z-index:1;
      max-width:1240px; margin:0 auto; padding:0 40px 80px;
    }

    /* ── NAV ── */
    .edu-nav {
      display:flex; align-items:center; justify-content:space-between;
      padding:26px 0;
      margin-bottom:60px;
      animation: navSlide 0.8s cubic-bezier(0.22,1,0.36,1) both;
    }
    @keyframes navSlide {
      from { opacity:0; transform: translateY(-22px); }
      to   { opacity:1; transform: translateY(0); }
    }
    .edu-nav-left { display:flex; align-items:center; gap:18px; }
    .edu-nav-emblem {
      width:60px; height:60px; border-radius:18px;
      background: var(--grad-hero);
      display:flex; align-items:center; justify-content:center;
      box-shadow: 0 10px 30px rgba(245,184,64,0.4), inset 0 1px 0 rgba(255,255,255,0.4);
      flex-shrink:0;
      transform-style: preserve-3d;
      animation: emblemPulse 4s ease-in-out infinite;
    }
    @keyframes emblemPulse {
      0%,100% { transform: rotateY(0deg) scale(1); box-shadow: 0 10px 30px rgba(245,184,64,0.4), inset 0 1px 0 rgba(255,255,255,0.4); }
      50%     { transform: rotateY(180deg) scale(1.05); box-shadow: 0 14px 40px rgba(139,108,242,0.5), inset 0 1px 0 rgba(255,255,255,0.4); }
    }
    .edu-nav-emblem-inner {
      font-family:'Fraunces',serif;
      font-size:22px; font-weight:700; color:#fff; letter-spacing:-1px;
      backface-visibility: hidden;
    }
    .edu-nav-org {
      font-size:11px; font-weight:700; letter-spacing:0.22em;
      text-transform:uppercase;
      background: var(--grad-teal);
      -webkit-background-clip:text; background-clip:text; color:transparent;
    }
    .edu-nav-sub { font-size:11px; color:var(--ink-2); margin-top:4px; letter-spacing:0.05em; }
    .edu-nav-right { text-align:right; }
    .edu-nav-live {
      display:inline-flex; align-items:center; gap:8px;
      font-size:11px; color:var(--teal-2); font-weight:600;
      background: rgba(79,209,197,0.10);
      border:1px solid rgba(79,209,197,0.3);
      border-radius:100px; padding:6px 16px; margin-bottom:6px;
      backdrop-filter: blur(10px);
    }
    .edu-pulse {
      width:8px; height:8px; border-radius:50%; background: var(--teal);
      box-shadow: 0 0 12px var(--teal);
      animation: livePulse 2s ease-in-out infinite;
    }
    @keyframes livePulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(79,209,197,0.6), 0 0 12px var(--teal); }
      50%     { box-shadow: 0 0 0 8px rgba(79,209,197,0), 0 0 20px var(--teal); }
    }
    .edu-nav-date { font-size:11px; color:var(--ink-2); letter-spacing:0.05em; }

    /* ── HERO ── */
    .edu-hero { margin-bottom:56px; animation: fadeUp 1s ease 0.1s both; transform-style: preserve-3d; }
    @keyframes fadeUp {
      from { opacity:0; transform: translateY(36px); }
      to   { opacity:1; transform: translateY(0); }
    }
    .edu-kicker {
      display:inline-flex; align-items:center; gap:12px;
      font-size:10px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase;
      color: var(--gold-2);
      background: rgba(245,184,64,0.10);
      border:1px solid rgba(245,184,64,0.3);
      border-radius:100px; padding:8px 18px; margin-bottom:26px;
      backdrop-filter: blur(10px);
    }
    .edu-kicker::before {
      content:'✦'; color: var(--gold);
    }
    .edu-h1 {
      font-family:'Fraunces',serif;
      font-size:clamp(44px,6vw,82px);
      font-weight:700; line-height:1.04;
      color: var(--ink-0); letter-spacing:-2px; margin-bottom:22px;
      text-shadow: 0 4px 30px rgba(139,108,242,0.25);
    }
    .edu-h1-line2 {
      font-style:italic;
      background: var(--grad-hero);
      -webkit-background-clip:text; background-clip:text; color:transparent;
      filter: drop-shadow(0 4px 24px rgba(245,184,64,0.4));
    }
    .edu-desc {
      font-size:15.5px; line-height:1.85; font-weight:300;
      color: var(--ink-1); max-width:580px;
    }
    .edu-ornament {
      display:flex; align-items:center; gap:18px; margin-top:32px;
    }
    .edu-orn-line  { height:1px; width:70px; background:linear-gradient(90deg,rgba(139,108,242,0.6),transparent); }
    .edu-orn-line-r{ height:1px; width:70px; background:linear-gradient(270deg,rgba(139,108,242,0.6),transparent); }
    .edu-orn-diamond {
      width:9px; height:9px;
      background: var(--grad-teal);
      transform:rotate(45deg); flex-shrink:0;
      box-shadow: 0 0 12px rgba(79,209,197,0.6);
    }
    .edu-orn-text { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--ink-2); font-weight:600; }

    /* ── STATS — 3D TILT GLASS CARDS ── */
    .edu-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-bottom:36px; perspective:1200px; }
    .edu-stat {
      position:relative; padding:24px 22px;
      background: var(--grad-card);
      border:1px solid var(--stroke);
      border-radius:20px;
      backdrop-filter: blur(20px) saturate(140%);
      -webkit-backdrop-filter: blur(20px) saturate(140%);
      box-shadow: var(--shadow-soft), inset 0 1px 0 rgba(255,255,255,0.08);
      overflow:hidden;
      transform-style: preserve-3d;
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.3s;
      animation: cardIn 0.8s cubic-bezier(0.22,1,0.36,1) both;
      cursor: default;
    }
    @keyframes cardIn {
      from { opacity:0; transform: translateY(40px) rotateX(-12deg); }
      to   { opacity:1; transform: translateY(0) rotateX(0deg); }
    }
    .edu-stat::before {
      content:''; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
      background: linear-gradient(135deg, rgba(255,255,255,0.16) 0%, transparent 40%);
    }
    .edu-stat::after {
      content:''; position:absolute; top:-2px; left:-2px; right:-2px; height:3px;
      background: var(--topbar, var(--grad-teal));
      border-radius: 20px 20px 0 0;
      box-shadow: 0 0 20px rgba(139,108,242,0.5);
    }
    .edu-stat:hover {
      transform: translateY(-8px) rotateX(6deg) rotateY(-4deg);
      border-color: var(--stroke-2);
      box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139,108,242,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
    }
    .edu-stat-icon-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; position:relative; z-index:2; }
    .edu-stat-icon {
      width:48px; height:48px; border-radius:14px;
      display:flex; align-items:center; justify-content:center; font-size:22px;
      background: var(--icon-bg, rgba(139,108,242,0.18));
      border:1px solid rgba(255,255,255,0.12);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.18);
      transform: translateZ(20px);
    }
    .edu-stat-chip {
      font-size:10px; font-weight:700; letter-spacing:0.1em;
      padding:5px 12px; border-radius:100px;
      text-transform:uppercase;
      background: rgba(255,255,255,0.08);
      border:1px solid var(--stroke);
      color: var(--chip-clr, var(--ink-1));
    }
    .edu-stat-num {
      font-family:'Fraunces',serif;
      font-size:56px; font-weight:700; line-height:1;
      color: var(--ink-0); margin-bottom:6px;
      letter-spacing:-2px;
      background: var(--num-grad, linear-gradient(135deg,#fff,#c8d0ee));
      -webkit-background-clip:text; background-clip:text; color:transparent;
      filter: drop-shadow(0 2px 12px rgba(255,255,255,0.15));
      transform: translateZ(30px);
    }
    .edu-stat-lbl {
      font-size:11px; color:var(--ink-2); font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
      transform: translateZ(15px);
    }
    .edu-stat-glow {
      position:absolute; bottom:-50px; right:-50px;
      width:140px; height:140px; border-radius:50%;
      filter: blur(40px); opacity:0.4; pointer-events:none;
      background: var(--glow-clr, var(--violet));
    }

    /* ── BUTTONS ── */
    .edu-actions { display:flex; gap:14px; margin-bottom:48px; flex-wrap:wrap; animation: fadeUp 0.9s ease 0.4s both; }

    .edu-btn {
      display:inline-flex; align-items:center; gap:10px;
      border:none; border-radius:14px;
      padding:14px 28px; font-size:14px; font-weight:600;
      cursor:pointer; font-family:'Outfit',sans-serif;
      transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s, filter 0.25s;
      position:relative; overflow:hidden;
      letter-spacing:0.02em;
    }
    .edu-btn::before {
      content:''; position:absolute; top:0; left:-120%; width:60%; height:100%;
      background: linear-gradient(110deg, transparent, rgba(255,255,255,0.35), transparent);
      transition: left 0.6s;
      transform: skewX(-20deg);
    }
    .edu-btn:hover::before { left:140%; }
    .edu-btn:hover { transform: translateY(-3px) scale(1.02); }
    .edu-btn:active { transform: translateY(-1px) scale(0.99); }

    .edu-btn-primary {
      background: var(--grad-hero);
      color:#fff;
      box-shadow: 0 12px 30px rgba(139,108,242,0.5), inset 0 1px 0 rgba(255,255,255,0.3);
    }
    .edu-btn-primary:hover { box-shadow: 0 16px 40px rgba(139,108,242,0.65), inset 0 1px 0 rgba(255,255,255,0.3); }

    .edu-btn-gold {
      background: var(--grad-gold);
      color:#1a1230;
      box-shadow: 0 10px 28px rgba(245,184,64,0.45), inset 0 1px 0 rgba(255,255,255,0.4);
    }
    .edu-btn-gold:hover { box-shadow: 0 14px 36px rgba(245,184,64,0.6), inset 0 1px 0 rgba(255,255,255,0.4); }

    .edu-btn-ghost {
      background: var(--glass);
      color: var(--ink-0);
      border:1px solid var(--stroke-2);
      backdrop-filter: blur(14px);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
    }
    .edu-btn-ghost:hover { background: var(--glass-2); border-color: rgba(255,255,255,0.32); }

    /* ── SECTION HEADER ── */
    .edu-sec-hd { display:flex; align-items:center; gap:18px; margin-bottom:18px; animation: fadeUp 0.9s ease 0.5s both; }
    .edu-sec-hd-lbl { font-size:10px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--ink-2); }
    .edu-sec-hd-line { flex:1; height:1px; background:linear-gradient(90deg,var(--stroke-2),transparent); }

    /* ── CREDIT ── */
    .edu-credit {
      margin-top:60px; padding-top:26px;
      border-top:1px solid var(--stroke);
      display:flex; align-items:center; justify-content:space-between; gap:20px;
      animation: fadeUp 0.9s ease 0.6s both;
      flex-wrap:wrap;
    }
    .edu-credit-text { font-size:13px; color:var(--ink-2); line-height:1.8; }
    .edu-credit-text strong {
      background: var(--grad-teal);
      -webkit-background-clip:text; background-clip:text; color:transparent;
      font-weight:700;
    }
    .edu-credit-mark {
      font-family:'Fraunces',serif; font-size:34px; font-weight:700;
      font-style:italic;
      background: var(--grad-hero);
      -webkit-background-clip:text; background-clip:text; color:transparent;
      letter-spacing:-1px;
      filter: drop-shadow(0 4px 20px rgba(245,184,64,0.3));
    }

    /* ── MODAL ── */
    .edu-overlay {
      position:fixed; inset:0; z-index:1000;
      background: rgba(11,16,32,0.7); backdrop-filter: blur(16px);
      display:flex; align-items:center; justify-content:center; padding:20px;
      animation: overlayIn 0.25s ease;
    }
    @keyframes overlayIn { from{opacity:0} to{opacity:1} }
    .edu-modal {
      background: linear-gradient(160deg, rgba(26,37,80,0.95) 0%, rgba(17,26,54,0.95) 100%);
      border:1px solid var(--stroke-2);
      border-radius:24px; width:100%; max-width:820px;
      max-height:88vh; overflow-y:auto;
      box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(139,108,242,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
      backdrop-filter: blur(30px);
      animation: modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
    }
    @keyframes modalIn {
      from{opacity:0; transform: scale(0.9) translateY(20px) rotateX(-8deg)}
      to{opacity:1; transform: scale(1) translateY(0) rotateX(0deg)}
    }
    .edu-modal-hdr {
      padding:28px 32px 20px; border-bottom:1px solid var(--stroke);
      display:flex; justify-content:space-between; align-items:flex-start;
      position:sticky; top:0;
      background: linear-gradient(180deg, rgba(26,37,80,0.98), rgba(26,37,80,0.85));
      backdrop-filter: blur(20px);
      z-index:10;
    }
    .edu-modal-id { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color: var(--gold-2); margin-bottom:8px; font-weight:700; }
    .edu-modal-title { font-family:'Fraunces',serif; font-size:24px; font-weight:700; color: var(--ink-0); }
    .edu-modal-x {
      width:38px; height:38px; border-radius:50%;
      background: var(--glass); border:1px solid var(--stroke-2);
      color: var(--ink-1); font-size:20px;
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      transition: all 0.25s; flex-shrink:0;
    }
    .edu-modal-x:hover { background: var(--glass-2); color: var(--ink-0); transform: rotate(90deg) scale(1.05); }
    .edu-modal-body { padding:24px 32px 30px; }
    .edu-modal-sec { margin-bottom:26px; }
    .edu-modal-sec-title {
      font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase;
      color: var(--teal-2); margin-bottom:12px; padding-bottom:9px;
      border-bottom:1px solid var(--stroke);
      display:flex; align-items:center; gap:10px;
    }
    .edu-modal-sec-title::before {
      content:''; display:inline-block; width:8px; height:8px; border-radius:50%;
      background: var(--grad-teal);
      box-shadow: 0 0 10px var(--teal);
    }
    .edu-modal-fields { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
    .edu-modal-field {
      background: var(--glass); border:1px solid var(--stroke);
      border-radius:12px; padding:12px 16px;
      transition: border-color 0.2s, background 0.2s;
    }
    .edu-modal-field:hover { background: var(--glass-2); border-color: var(--stroke-2); }
    .edu-modal-field-lbl { font-size:10px; color:var(--ink-3); font-weight:700; letter-spacing:0.1em; margin-bottom:5px; text-transform:uppercase; }
    .edu-modal-field-val { font-size:13.5px; color: var(--ink-0); font-weight:500; }
    .edu-modal-footer { padding:0 32px 28px; text-align:center; }
    .edu-modal::-webkit-scrollbar { width:6px; }
    .edu-modal::-webkit-scrollbar-track { background:transparent; }
    .edu-modal::-webkit-scrollbar-thumb { background: var(--stroke-2); border-radius:6px; }

    /* Login form inputs */
    .edu-input {
      width:100%; padding:12px 16px;
      background: var(--glass);
      border:1px solid var(--stroke-2);
      border-radius:12px; font-size:14px;
      font-family:'Outfit',sans-serif;
      color: var(--ink-0);
      transition: border-color 0.2s, background 0.2s;
      outline:none;
    }
    .edu-input:focus { border-color: var(--teal); background: var(--glass-2); box-shadow: 0 0 0 3px rgba(79,209,197,0.15); }
    .edu-label { font-size:12px; font-weight:600; color: var(--ink-1); display:block; margin-bottom:8px; letter-spacing:0.05em; }

    @media(max-width:880px) {
      .edu-stats { grid-template-columns:1fr 1fr; }
      .edu-modal-fields { grid-template-columns:1fr; }
      .edu-h1 { font-size:42px; }
      .edu-inner { padding:0 22px 60px; }
      .edu-credit { flex-direction:column; align-items:flex-start; }
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
    if (!target) { setVal(0); return; }
    let start = null;
    const dur = 1600;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return val;
}

/* ══════════════════════ 3D TILT WRAPPER ════════════════════════════ */
function Tilt3D({ children, className, style, max = 10 }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    node.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateY(-6px)`;
  };
  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = '';
  };
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

/* ══════════════════════ MAIN ════════════════════════════════════════ */
export default function Dashboard({ onStart, onAnalytics, onViewSurveys }) {
  const [surveys,  setSurveys]  = useState([]);
  const [, setLoading]  = useState(true);
  const [selected, setSelected] = useState(null);
  const [isAdmin,      setIsAdmin]      = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [loginError,   setLoginError]   = useState("");

  useEffect(() => {
    injectStyles();
    fetch(API_GET)
      .then(r => r.json())
      .then(d => { setSurveys(Array.isArray(d) ? d : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const now = new Date();
  const todayStr = now.toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"});
  const todayCount = surveys.filter(s =>
    new Date(s.submittedAt||Date.now()).toLocaleDateString("en-PK",{day:"numeric",month:"short",year:"numeric"}) === todayStr
  ).length;
  const dateLabel = now.toLocaleDateString("en-PK",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  const STATS = [
    { icon:"🎓", val:surveys.length, lbl:"Total Responses",   chip:"Cumulative",
      topbar:"linear-gradient(90deg,#8b6cf2,#b39bff)",
      iconBg:"rgba(139,108,242,0.22)", chipClr:"#b39bff",
      numGrad:"linear-gradient(135deg,#fff 0%,#b39bff 100%)",
      glow:"#8b6cf2" },
    { icon:"📚", val:todayCount,     lbl:"Collected Today",   chip:"Live",
      topbar:"linear-gradient(90deg,#f5b840,#ffd870)",
      iconBg:"rgba(245,184,64,0.22)", chipClr:"#ffd870",
      numGrad:"linear-gradient(135deg,#fff 0%,#ffd870 100%)",
      glow:"#f5b840" },
    { icon:"🧪", val:8,             lbl:"Survey Sections",   chip:"Fixed",
      topbar:"linear-gradient(90deg,#4fd1c5,#7ef0e6)",
      iconBg:"rgba(79,209,197,0.22)", chipClr:"#7ef0e6",
      numGrad:"linear-gradient(135deg,#fff 0%,#7ef0e6 100%)",
      glow:"#4fd1c5" },
    { icon:"🌏", val:6,              lbl:"Provinces Covered", chip:"PK",
      topbar:"linear-gradient(90deg,#ff7a90,#f5b840)",
      iconBg:"rgba(255,122,144,0.22)", chipClr:"#ff9bac",
      numGrad:"linear-gradient(135deg,#fff 0%,#ff9bac 100%)",
      glow:"#ff7a90" },
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const u = e.target.username.value;
    const p = e.target.password.value;
    if (u === "GhulamAdmin" && p === "Ghulam@123") {
      setIsAdmin(true);
      setLoginVisible(false);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password.");
    }
  };

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
    <div className="edu-root">
      {/* Animated educational background */}
      <div className="edu-bg">
        <div className="edu-bg-grid"/>
        <div className="edu-bg-stars"/>
        <div className="edu-orb o1"/>
        <div className="edu-orb o2"/>
        <div className="edu-orb o3"/>
        <div className="edu-float f1">📖</div>
        <div className="edu-float f2">🎓</div>
        <div className="edu-float f3">✏️</div>
        <div className="edu-float f4">🌐</div>
        <div className="edu-float f5">🧠</div>
        <div className="edu-float f6">📐</div>
        <div className="edu-cube c1">
          <div className="face f-front"/><div className="face f-back"/>
          <div className="face f-right"/><div className="face f-left"/>
          <div className="face f-top"/><div className="face f-bottom"/>
        </div>
        <div className="edu-cube c2">
          <div className="face f-front"/><div className="face f-back"/>
          <div className="face f-right"/><div className="face f-left"/>
          <div className="face f-top"/><div className="face f-bottom"/>
        </div>
      </div>

      <div className="edu-ribbon"/>

      <div className="edu-inner">
        {/* Nav */}
        <div className="edu-nav">
          <div className="edu-nav-left">
            <div className="edu-nav-emblem">
              <div className="edu-nav-emblem-inner">AI</div>
            </div>
            <div>
              <div className="edu-nav-org">CeLTS · AIOU · Islamabad</div>
              <div className="edu-nav-sub">Centre for Languages &amp; Translation Studies</div>
            </div>
          </div>
          <div className="edu-nav-right">
            <div className="edu-nav-live"><div className="edu-pulse"/>System Live</div>
            <div className="edu-nav-date">{dateLabel}</div>
          </div>
        </div>

        {/* Hero */}
        <div className="edu-hero">
          <div className="edu-kicker">Official Research Portal · 2026</div>
          <h1 className="edu-h1">
            Language Policy<br/>
            <span className="edu-h1-line2">Survey Dashboard</span>
          </h1>
          <p className="edu-desc">
            Documenting multilingual education perspectives across all six provinces of Pakistan.
            A national research initiative under Allama Iqbal Open University, Islamabad.
          </p>
          <div className="edu-ornament">
            <div className="edu-orn-line"/>
            <div className="edu-orn-diamond"/>
            <div className="edu-orn-text">Evidence-Based Language Teaching Policy Framework</div>
            <div className="edu-orn-diamond"/>
            <div className="edu-orn-line-r"/>
          </div>
        </div>

        {/* Stats */}
        <div className="edu-stats">
          {STATS.map((s,i) => (
            <Tilt3D
              key={s.lbl}
              className="edu-stat"
              style={{
                animationDelay:`${0.15 + i*0.1}s`,
                ['--topbar']: s.topbar,
                ['--icon-bg']: s.iconBg,
                ['--chip-clr']: s.chipClr,
                ['--num-grad']: s.numGrad,
                ['--glow-clr']: s.glow,
              }}
            >
              <div className="edu-stat-icon-row">
                <div className="edu-stat-icon">{s.icon}</div>
                <div className="edu-stat-chip">{s.chip}</div>
              </div>
              <div className="edu-stat-num"><AnimatedNum target={s.val}/></div>
              <div className="edu-stat-lbl">{s.lbl}</div>
              <div className="edu-stat-glow"/>
            </Tilt3D>
          ))}
        </div>

        {/* Actions */}
        <div className="edu-actions">
          <button className="edu-btn edu-btn-primary" onClick={onStart}>✦ Start New Survey</button>
          {!isAdmin ? (
            <button className="edu-btn edu-btn-gold" onClick={() => { setLoginVisible(true); setLoginError(""); }}>
              🔐 Admin Login
            </button>
          ) : (
            <>
              <button className="edu-btn edu-btn-gold" onClick={onAnalytics}>📊 View Analytics</button>
              <button className="edu-btn edu-btn-gold" onClick={onViewSurveys}>📋 View All Surveys</button>
              <button className="edu-btn edu-btn-ghost" onClick={handleExport}>⬇ Export CSV</button>
              <button className="edu-btn edu-btn-ghost" onClick={() => setIsAdmin(false)}>🚪 Logout</button>
            </>
          )}
        </div>

        {/* Section header */}
        <div className="edu-sec-hd">
          <div className="edu-sec-hd-lbl">Research Overview</div>
          <div className="edu-sec-hd-line"/>
        </div>

        {/* Credit */}
        <div className="edu-credit">
          <div className="edu-credit-text">
            <strong>Dr Ghulam Ali</strong> · Director, Centre for Languages &amp; Translation Studies<br/>
            Allama Iqbal Open University, Islamabad &nbsp;·&nbsp; +92 300 6550455
          </div>
          <div className="edu-credit-mark">CeLTS</div>
        </div>
      </div>

      {/* Login Popup */}
      {loginVisible && (
        <div className="edu-overlay" onClick={() => setLoginVisible(false)}>
          <div className="edu-modal" onClick={e => e.stopPropagation()} style={{maxWidth:"420px"}}>
            <div className="edu-modal-hdr">
              <div>
                <div className="edu-modal-id">Admin Access</div>
                <div className="edu-modal-title">Admin Login</div>
              </div>
              <button className="edu-modal-x" onClick={() => setLoginVisible(false)}>×</button>
            </div>
            <form onSubmit={handleLoginSubmit} style={{padding:"24px 32px 32px",display:"flex",flexDirection:"column",gap:"18px"}}>
              <div>
                <label className="edu-label">Username</label>
                <input name="username" className="edu-input" autoComplete="username"/>
              </div>
              <div>
                <label className="edu-label">Password</label>
                <input name="password" type="password" className="edu-input" autoComplete="current-password"/>
              </div>
              {loginError && (
                <div style={{color:"#ff7a90",fontSize:"13px",fontWeight:"600"}}>{loginError}</div>
              )}
              <button type="submit" className="edu-btn edu-btn-gold" style={{width:"100%",justifyContent:"center",marginTop:"6px"}}>
                🔐 Login to Analytics
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="edu-overlay" onClick={() => setSelected(null)}>
          <div className="edu-modal" onClick={e => e.stopPropagation()}>
            <div className="edu-modal-hdr">
              <div>
                <div className="edu-modal-id">Response #{selected.responseId ?? selected.dpId}</div>
                <div className="edu-modal-title">
                  {selected.respondentCategory || "—"} &nbsp;·&nbsp; {selected.area || "—"}
                </div>
              </div>
              <button className="edu-modal-x" onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="edu-modal-body">
              {SECTIONS.map(sec => (
                <div className="edu-modal-sec" key={sec.title}>
                  <div className="edu-modal-sec-title">{sec.title}</div>
                  <div className="edu-modal-fields">
                    {sec.fields.map(([label,key]) => (
                      <div className="edu-modal-field" key={key}>
                        <div className="edu-modal-field-lbl">{label}</div>
                        <div className="edu-modal-field-val">
                          {selected[key] || <span style={{color:"var(--ink-3)"}}>—</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="edu-modal-footer">
              <button className="edu-btn edu-btn-primary" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
