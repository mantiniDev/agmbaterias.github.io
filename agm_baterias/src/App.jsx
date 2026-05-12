import "./index.css";
import logo from "./assets/imagens/logo_bateria.png";
import moura from "./assets/imagens/moura-256.png";
import heliar from "./assets/imagens/heliar-256.png";
import acdelco from "./assets/imagens/acdelco-256.png";

const WHATSAPP =
  "https://wa.me/5519999939784?text=Ol%C3%A1%2C%20preciso%20de%20uma%20bateria!";
const PHONE = "tel:+5519999939784";
const DEV_SITE = "https://mantini.ia.br";

function App() {
  return (
    <div>
      {/* TOPBAR */}
      <div className="topbar">
        <span>⚡ Atendimento 24 Horas</span>
        <span>🚗 Chegamos em até 50 minutos</span>
        <span>💳 Parcelamento em até 10x</span>
        <span>🔒 Compra 100% Segura</span>
      </div>

      {/* HEADER */}
      <header>
        <div className="container nav">
          <div className="logo">
            <div className="logo-box">
              <img src={logo} alt="AGM Logo" />
            </div>
          </div>

          {/* nav removida */}

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="overlay"></div>

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">⚡ TROCA DE BATERIA 24 HORAS</div>

            {/* Logo grande ao lado do texto */}
            <div className="hero-logo-title">
              <div>
                <h2>
                  TROCA DE <br />
                  <span>BATERIA</span>
                  <br />
                  EM CAMPINAS
                </h2>
                <h3>24 HORAS</h3>
              </div>
              <img src={logo} alt="AGM Logo" className="hero-logo" />
            </div>

            <p>
              Entrega e instalação rápida em até
              <strong> 50 minutos </strong>
              na sua localização.
            </p>

            <div className="hero-buttons">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                📲 WhatsApp Agora
              </a>
              <a href={PHONE} className="btn-yellow">
                📞 Ligar Agora
              </a>
            </div>
          </div>

          <div className="hero-car"></div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="marcas" className="brands">
        <div className="container">
          <h2>TRABALHAMOS COM AS MELHORES MARCAS</h2>

          <div className="brands-grid">
            <div className="brand-card">
              <img src={moura} alt="Moura" />
            </div>
            <div className="brand-card">
              <img src={heliar} alt="Heliar" />
            </div>
            <div className="brand-card">
              <img src={acdelco} alt="ACDelco" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="avaliacoes" className="testimonials">
        <div className="container">
          <h2>O QUE NOSSOS CLIENTES DIZEM</h2>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Cliente"
              />
              <h3>Carlos Eduardo</h3>
              <p>Atendimento rápido e instalação impecável.</p>
            </div>
            <div className="testimonial-card">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Cliente"
              />
              <h3>Juliana Andrade</h3>
              <p>Resolveram tudo muito rápido.</p>
            </div>
            <div className="testimonial-card">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Cliente"
              />
              <h3>Ricardo Almeida</h3>
              <p>Preço justo e atendimento excelente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="AGM Logo" />
              <div>
                <h3>AGM Baterias</h3>
                <p>Troca de Baterias 24h</p>
              </div>
            </div>
            <p className="footer-text">
              Atendimento rápido com entrega e instalação em toda Campinas e
              região.
            </p>
          </div>

          <div className="footer-links">
            <h4>Links</h4>
            <a href="#home">Home</a>
            <a href="#marcas">Vantagens</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                📲 (19) 99993-9784
              </a>
            </p>
            <p>
              <a href={PHONE}>📞 (19) 99993-9784</a>
            </p>
            <p>📍 Campinas - SP</p>
            <p>🟢 Atendimento 24h</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 AGM Baterias — Todos os direitos reservados |{" "}
          <a
            href={DEV_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="dev-link"
          >
            Desenvolvido por Mantini IA
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
