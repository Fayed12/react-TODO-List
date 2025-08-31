import "./about.css";

function About() {
  return (
    <main className="about">
      <section className="about__hero">
        <h1 className="about__title">
          About <span>My Todo</span>
        </h1>
        <p className="about__subtitle">
          A lightweight task manager to help you focus, plan, and get things
          done.
        </p>
      </section>

      <section className="about__grid">
        <article className="about__card">
          <h2>Our Mission</h2>
          <p>
            Keep productivity simple. No clutter, no distractions—just your
            tasks, clear filters, and quick actions.
          </p>
        </article>

        <article className="about__card">
          <h2>What You Can Do</h2>
          <ul className="about__list">
            <li>Add, edit, and mark tasks as done</li>
            <li>Filter by status & search by title</li>
            <li>Fast UI powered by React & MUI</li>
          </ul>
        </article>

        <article className="about__card">
          <h2>Tech Stack</h2>
          <ul className="about__list">
            <li>React Router for navigation</li>
            <li>Context API for state</li>
            <li>MUI components + custom CSS</li>
          </ul>
        </article>
      </section>

      <section className="about__cta">
        <h3>Have feedback?</h3>
        <p>We’d love to hear your ideas to make My Todo better.</p>
        <a className="about__button" href="mailto:hello@mytodo.app">
          Contact Us
        </a>
      </section>
    </main>
  );
}

export default About;
