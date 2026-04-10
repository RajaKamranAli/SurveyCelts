export default function SectionHeader({ badge, title }) {
  return (
    <div>
      <div className="sec-head">
        <span className="sec-badge">{badge}</span>
        <span className="sec-title">{title}</span>
      </div>
      <div className="sec-divider" />
    </div>
  );
}
