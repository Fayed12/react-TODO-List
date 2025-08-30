import "./error.css";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="error-page" role="main" aria-labelledby="err-title">
      <div className="scene">
        {/* background gradient + floating shapes */}
        <div className="bg-orb orb1" />
        <div className="bg-orb orb2" />
        <div className="bg-orb orb3" />

        {/* main card */}
        <section className="card" aria-describedby="err-desc">
          <div className="illustration" aria-hidden="true">
            {/* robot/ghost SVG with simple animation built-in */}
            <svg
              viewBox="0 0 300 220"
              className="robot"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#7dd3fc" />
                  <stop offset="1" stopColor="#60a5fa" />
                </linearGradient>
                <filter
                  id="shadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="10"
                    stdDeviation="10"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>

              {/* body */}
              <g transform="translate(50,20)">
                <rect
                  x="30"
                  y="30"
                  rx="18"
                  ry="18"
                  width="140"
                  height="120"
                  fill="url(#g1)"
                  filter="url(#shadow)"
                  className="body"
                />
                {/* eyes */}
                <circle
                  cx="70"
                  cy="80"
                  r="10"
                  fill="#0b1220"
                  className="eye left"
                />
                <circle
                  cx="120"
                  cy="80"
                  r="10"
                  fill="#0b1220"
                  className="eye right"
                />
                {/* mouth */}
                <rect
                  x="75"
                  y="105"
                  rx="6"
                  width="40"
                  height="8"
                  fill="#071428"
                  className="mouth"
                />
                {/* antenna */}
                <line
                  x1="100"
                  y1="30"
                  x2="100"
                  y2="8"
                  stroke="#7dd3fc"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="antenna"
                />
                <circle
                  cx="100"
                  cy="4"
                  r="6"
                  fill="#fef08a"
                  className="antenna-dot"
                />
                {/* left hand */}
                <rect
                  x="12"
                  y="65"
                  rx="8"
                  ry="8"
                  width="18"
                  height="8"
                  fill="#7dd3fc"
                  className="hand left-hand"
                />
                {/* right hand */}
                <rect
                  x="160"
                  y="65"
                  rx="8"
                  ry="8"
                  width="18"
                  height="8"
                  fill="#7dd3fc"
                  className="hand right-hand"
                />
                {/* crack / error mark */}
                <g className="x-mark" transform="translate(80,35) rotate(20)">
                  <line
                    x1="-10"
                    y1="-10"
                    x2="30"
                    y2="30"
                    stroke="#ff6b6b"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="30"
                    y1="-10"
                    x2="-10"
                    y2="30"
                    stroke="#ff6b6b"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </svg>

            <svg
              className="paper plane1"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M2 21l20-9L2 3l5 7-5 11z" fill="#fff" opacity="0.9" />
            </svg>

            <svg
              className="paper plane2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M2 21l20-9L2 3l5 7-5 11z" fill="#fff" opacity="0.6" />
            </svg>
          </div>

          <header className="card-text">
            <h1 id="err-title">404 Error page not found </h1>
            <p id="err-desc">
              this link is invalid
            </p>

            <div className="actions">
              <button
                className="btn primary"
                onClick={() => navigate("/", { replace: true })}
                aria-label="Go to home"
              >
                Home
              </button>

              <button
                className="btn ghost"
                onClick={() => window.history.back()}
                aria-label="Go back"
              >
                Back
              </button>
            </div>
          </header>
        </section>

        <div className="confetti">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={`c c${i + 1}`} />
          ))}
        </div>
      </div>
    </main>
  );
}
