import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import "./landing.styles.scss";

const Landing = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="landing-container">
      <div>
        <div>
          <a href="/">Home</a>
          <a href="/about">Features</a>
          <a href="/how-to-use">How to use?</a>
          <a href={auth ? "/dashboard" : "/login"}>{auth ? "Go to dashboard" : "Login"}</a>
        </div>
      </div>
      <div>
        <h1>Track & Analyse your attendance with ease</h1>
        <h3>A smarter way to monitor attendance, uncover trends, and stay in control of your academics.</h3>
        <button type="button">Try it now</button>
      </div>

      <div className="features-section">
        <div className="features-intro">
          <p className="features-label">WHAT YOU GET</p>
          <h2>Powerful features built for attendance insights</h2>
          <p className="features-description">
            From quick analytics, Attendex helps you understand patterns, stay ahead of shortages, and keep your academics on track.
          </p>
          <button type="button" className="features-cta">
            More details
          </button>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-card__icon">
              <span className="material-symbols-outlined">view_module</span>
            </div>
            <h3>Multiple Layouts</h3>
            <p>Create separate layouts for different semesters, courses, or routines — each tracked independently</p>
          </article>

          <article className="feature-card">
            <div className="feature-card__icon">
              <span className="material-symbols-outlined">analytics</span>
            </div>
            <h3>Analysis Dashboard</h3>
            <p>Get clear insights with overall attendance, subject-wise stats, and absent day tracking.</p>
          </article>

          <article className="feature-card">
            <div className="feature-card__icon">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3>Weekly Routine with Tags</h3>
            <p>Set your day-wise schedule once and organize subjects using flexible tags.</p>
          </article>

          <article className="feature-card">
            <div className="feature-card__icon">
              <span className="material-symbols-outlined">date_range</span>
            </div>
            <h3>Custom Timeframe Tracking</h3>
            <p>Track attendance for any selected period — monthly, semester-wise, or custom.</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Landing;