export default function FieldRow({ label, children }) {
  return (
    <div className="field-group">
      <div className="field-label">{label}</div>
      {children}
    </div>
  );
}
