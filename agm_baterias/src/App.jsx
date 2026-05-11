import "./index.css";

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
              <img src="agm_baterias/imagens/logo_bateria.png" alt="AGM Logo" />
            </div>

            <div>
              <h1>AGM Baterias</h1>
              <p>Troca de Baterias 24h</p>
            </div>
          </div>

          <nav>
            <a href="#">Home</a>
            <a href="#">Vantagens</a>
            <a href="#">Como Funciona</a>
            <a href="#">Avaliações</a>
            <a href="#">Contato</a>
          </nav>

          <a href="#" className="btn-yellow">
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge">⚡ TROCA DE BATERIA 24 HORAS</div>

            <h2>
              TROCA DE <br />
              <span>BATERIA</span>
              <br />
              EM CAMPINAS
            </h2>

            <h3>24 HORAS</h3>

            <p>
              Entrega e instalação rápida em até
              <strong> 50 minutos </strong>
              na sua localização.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn-green">
                WhatsApp Agora
              </a>

              <a href="#" className="btn-yellow">
                Ligar Agora
              </a>
            </div>
          </div>

          <div className="hero-car">          

            <div className="plate">
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands">
        <div className="container">
          <h2>TRABALHAMOS COM AS MELHORES MARCAS</h2>

          <div className="brands-grid">
            <div className="brand-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_Moura.png"
                alt="Moura"
              />
            </div>

            <div className="brand-card">
              <img
                src="https://seeklogo.com/images/H/heliar-logo-B3D5DB22A4-seeklogo.com.png"
                alt="Heliar"
              />
            </div>

            <div className="brand-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/ACDelco_logo.svg"
                alt="ACDelco"
              />
            </div>

            <div className="brand-card">
              <img
                src="https://cral.com.br/wp-content/uploads/2020/09/logo-cral.png"
                alt="Cral"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
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
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="AGM Logo" />

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

            <a href="#">Home</a>
            <a href="#">Vantagens</a>
            <a href="#">Avaliações</a>
            <a href="#">Contato</a>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>

            <p>📞 (19) 99999-9999</p>
            <p>📍 Campinas - SP</p>
            <p>🟢 Atendimento 24h</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 AGM Baterias — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}

export default App;
