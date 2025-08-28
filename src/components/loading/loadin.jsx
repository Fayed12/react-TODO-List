import "./loading.css";

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-bg"></div>

      <div className="loading-card">
        <div className="spinner"></div>
        <h1 className="loading-title">Loading your workspace…</h1>
        <p className="hint">Please wait a moment</p>
      </div>
    </div>
  );
}

export default Loading;
