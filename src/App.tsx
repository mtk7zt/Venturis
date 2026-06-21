import "./App.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Venturis AI</p>

        <h1>Building intelligent software for the future.</h1>

        <p className="subtitle">
          AI agents, automation systems, cloud tools, and next-generation digital products.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">Contact</a>
        </div>
      </section>

      <section id="projects" className="grid">
        <div>
          <h2>AI Agents</h2>
          <p>Research, coding, deployment, and automation agents.</p>
        </div>

        <div>
          <h2>Jarvis Core</h2>
          <p>A personal AI command system built with privacy and control.</p>
        </div>

        <div>
          <h2>Cloud Systems</h2>
          <p>Modern web apps, APIs, dashboards, and infrastructure.</p>
        </div>
      </section>

      <footer id="contact">
        <p>© 2026 Venturis AI. Built by Esosa.</p>
      </footer>
    </main>
  );
}

export default App;


