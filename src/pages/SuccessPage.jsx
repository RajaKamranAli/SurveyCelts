export default function SuccessPage({ totalCount, onAnother, onDashboard }) {
  return (
    <div className="success-shell">

      {/* Animated checkmark ring */}
      <div className="success-ring">
        <span className="success-ring-inner">✓</span>
      </div>

      <h2 className="success-title">Survey Submitted!</h2>
      <p className="success-desc">
        Thank you for contributing to language policy research in Pakistan.
        Your response has been securely recorded and will inform
        multilingual education initiatives at CeLTS, AIOU.
      </p>

      {/* Counter card */}
      <div className="success-counter-card">
        <div className="counter-label">Total Responses Collected</div>
        <div className="counter-number">{totalCount}</div>
        <div className="counter-sub">responses in this session</div>
      </div>

      {/* Action buttons */}
      <div className="success-btns">
        <button className="btn btn-primary" onClick={onAnother}>
          + Submit Another Response
        </button>
        <button className="btn btn-outline" onClick={onDashboard}>
          ← Return to Dashboard
        </button>
      </div>

      {/* Contact info */}
      <div className="success-contact">
        <strong>Dr Ghulam Ali</strong><br />
        Director, Centre for Languages and Translation Studies<br />
        Allama Iqbal Open University, Islamabad<br />
        +92 300 6550455
      </div>
    </div>
  );
}
