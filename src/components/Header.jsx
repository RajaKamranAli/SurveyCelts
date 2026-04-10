export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-emblem">📋</div>
        <div>
          <div className="logo-wordmark">Language Policy
Survey Portal</div>
          <div className="logo-sub">Centre for Languages &amp; Translation Studies · AIOU</div>
        </div>
      </div>
      <div className="header-meta">
        <span className="meta-badge">Research Portal</span>
        <span className="meta-pulse" title="Live" />
      </div>
    </header>
  );
}
