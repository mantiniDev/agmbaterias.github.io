import "./index.css";

const WHATSAPP = "https://wa.me/5519991234567?text=Ol%C3%A1%2C%20preciso%20de%20uma%20bateria!";
const PHONE    = "tel:+5519991234567";

const steps = [
  { icon: "💬", title: "VOCÊ CHAMA",        desc: "Fale conosco pelo WhatsApp ou telefone." },
  { icon: "🚚", title: "VAMOS ATÉ VOCÊ",    desc: "Nossa equipe vai até o local em até 50 minutos." },
  { icon: "⚡", title: "INSTALAMOS NA HORA", desc: "Instalação rápida e segura com equipamentos profissionais." },
  { icon: "✅", title: "TUDO PRONTO!",       desc: "Você volta a rodar com segurança e tranquilidade." },
];

const brands = [
  { name: "Moura",   src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_Moura.png" },
  { name: "Heliar",  src: "https://seeklogo.com/images/H/heliar-logo-B3D5DB22A4-seeklogo.com.png" },
  { name: "Zetta",   src: "https://zettabaterias.com.br/wp-content/uploads/2021/03/logo-zetta.png" },
  { name: "ACDelco", src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/ACDelco_logo.svg" },
  { name: "Cral",    src: "https://cral.com.br/wp-content/uploads/2020/09/logo-cral.png" },
  { name: "Eletran", src: "https://www.eletran.com.br/wp-content/uploads/2020/07/logo-eletran.png" },
];

const testimonials = [
  { name: "Carlos Eduardo", city: "Cambuí, Campinas - SP",   img: "https://randomuser.me/api/portraits/men/32.jpg",  text: "Atendimento rápido e de qualidade! Chegaram em menos de 40 minutos e resolveram tudo." },
  { name: "Juliana Andrade", city: "Taquaral, Campinas - SP", img: "https://randomuser.me/api/portraits/women/44.jpg", text: "Serviço excelente! Instalaram a bateria na hora e o preço foi o melhor que pesquisei." },
  { name: "Ricardo Almei",  city: "Barão Geraldo, Campinas - SP", img: "https://randomuser.me/api/portraits/men/75.jpg",  text: "Super recomendado! Atendimento via WhatsApp perfeito." },
];

const stats = [
  { icon: "🔋", value: "+5.000", label: "BATERIAS INSTALADAS",   sub: "Clientes satisfeitos" },
  { icon: "👥", value: "+1.200", label: "CLIENTES SATISFEITOS",  sub: "Avaliações 5 estrelas" },
  { icon: "⏱️", value: "50 MIN", label: "TEMPO MÉDIO DE CHEGADA", sub: "Rapidez que faz a diferença" },
  { icon: "📍", value: "100%",   label: "CAMPINAS E REGIÃO",      sub: "Atendemos toda a região" },
];

const features = [
  { icon: "🚚", title: "ENTREGA E INSTALAÇÃO GRÁTIS" },
  { icon: "⏱️", title: "CHEGAMOS EM ATÉ 50 MINUTOS" },
  { icon: "🔋", title: "BATERIAS DE ALTA QUALIDADE E PROCEDÊNCIA" },
  { icon: "🛡️", title: "GARANTIA DE ATÉ 24 MESES" },
  { icon: "💳", title: "PARCELE EM ATÉ 10X NO CARTÃO" },
  { icon: "📍", title: "ATENDEMOS CAMPINAS E REGIÃO", sub: "Atendimento todos os dias das 7h às 22h" },
];

function Stars() {
  return <span className="stars">★★★★★</span>;
}

function App() {
  return (
    <div className="site">

      {/* TOPBAR */}
      <div className="topbar">
        <span>⚡ Atendimento 24 Horas</span>
        <span>🚗 Chegamos em até 50 minutos</span>
        <span>💳 Parcele em até 10x no cartão</span>
        <span>🔒 Compra 100% Segura</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <div className="logo-icon">🔋</div>
            <div>
              <div className="logo-agm">AGM<span>⚡</span></div>
              <div className="logo-sub">BATERIAS</div>
            </div>
          </div>

          <nav className="main-nav">
            <a href="#home">HOME</a>
            <a href="#marcas">BATERIAS</a>
            <a href="#vantagens">VANTAGENS</a>
            <a href="#como-funciona">COMO FUNCIONA</a>
            <a href="#avaliacoes">AVALIAÇÕES</a>
            <a href="#contato">CONTATO</a>
          </nav>

          <a href={WHATSAPP} target="_blank" className="btn-phone">
            <span className="btn-phone-icon">📲</span>
            <div>
              <div className="btn-phone-num">(19) 99123-4567</div>
              <div className="btn-phone-sub">CHAMAR NO WHATSAPP</div>
            </div>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d?auto=format&fit=crop&w=1600&q=80"
            alt="Carro AGM"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-inner">
          <div className="hero-text">
            <h2>
              TROCA DE<br />
              <em>BATERIA</em><br />
              <em className="yellow">EM CAMPINAS</em>
            </h2>
            <h3>24 HORAS</h3>
            <p>Entrega e instalação rápida em até <strong className="yellow">50 minutos</strong> na sua localização!</p>
          </div>

          <div className="hero-plate">
            <div className="plate-box">
              <div className="plate-agm">AGM<span>⚡</span></div>
              <div className="plate-sub">BATERIAS</div>
            </div>
          </div>
        </div>

        {/* Feature bar */}
        <div className="feature-bar">
          <div className="container feature-bar-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <div className="feature-title">{f.title}</div>
                  {f.sub && <div className="feature-sub">{f.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA bar */}
        <div className="cta-bar">
          <div className="container cta-bar-inner">
            <a href={WHATSAPP} target="_blank" className="cta-whatsapp">
              <span>📲</span>
              <div>
                <div className="cta-num">(19) 99123-4567</div>
                <div className="cta-sub">SOLICITAR ATENDIMENTO AGORA</div>
              </div>
            </a>

            <a href={PHONE} className="cta-ligar">
              <span>📞</span>
              <div>
                <div className="cta-ligar-title">LIGAR AGORA</div>
                <div className="cta-ligar-sub">ATENDIMENTO IMEDIATO</div>
              </div>
            </a>

            <div className="cta-google">
              <span className="google-g">G</span>
              <strong>4,9</strong>
              <Stars />
              <span className="google-count">+1.200 avaliações no Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="how-section">
        <div className="container">
          <h2 className="section-title">COMO <span className="yellow">FUNCIONA</span></h2>

          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-wrap">
                <div className="step-card">
                  <div className="step-num">{i + 1}</div>
                  <div className="step-icon">{s.icon}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
                {i < steps.length - 1 && <div className="step-arrow">›</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="brands-section">
        <div className="container">
          <h2 className="section-title">TRABALHAMOS COM AS <span className="yellow">MELHORES MARCAS</span></h2>
          <p className="section-sub">Baterias de alta qualidade para todos os tipos de veículos.</p>

          <div className="brands-grid">
            {brands.map((b) => (
              <div key={b.name} className="brand-card">
                <img src={b.src} alt={b.name} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                <span style={{display:'none'}} className="brand-fallback">{b.name}</span>
              </div>
            ))}
          </div>

          <div className="brands-cta">
            <a href={WHATSAPP} target="_blank" className="btn-outline">VER TODAS AS BATERIAS →</a>
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section id="avaliacoes" className="testimonials-section">
        <div className="container testimonials-grid">
          <div className="testimonials-list">
            <h2 className="section-title">O QUE NOSSOS <span className="yellow">CLIENTES DIZEM</span></h2>

            <div className="testimonial-cards">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card">
                  <Stars />
                  <p>"{t.text}"</p>
                  <div className="testimonial-author">
                    <img src={t.img} alt={t.name} />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="atendimento-box">
            <h3>ATENDIMENTO<br />ESPECIALIZADO</h3>
            <p>com rapidez e eficiência.</p>
            <a href={WHATSAPP} target="_blank" className="btn-green-lg">
              📲 (19) 99123-4567<br /><span>CLIQUE PARA CHAMAR</span>
            </a>
            <div className="atendimento-info">
              <div>⏰ ATENDIMENTO TODOS OS DIAS</div>
              <div>🕐 DAS 7H ÀS 22H</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value yellow">{s.value}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="container footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon small">🔋</div>
              <div>
                <div className="logo-agm small">AGM<span>⚡</span></div>
                <div className="logo-sub small">BATERIAS</div>
              </div>
            </div>
            <p>A energia que move você, com a qualidade que seu carro merece.</p>
            <div className="social-links">
              <a href="#">📸</a>
              <a href="#">👍</a>
              <a href="#">G</a>
              <a href={WHATSAPP} target="_blank">💬</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>LINKS RÁPIDOS</h4>
            <a href="#home">Home</a>
            <a href="#marcas">Baterias</a>
            <a href="#vantagens">Vantagens</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-payment">
            <h4>FORMAS DE PAGAMENTO</h4>
            <div className="payment-cards">
              <span className="pay-card visa">VISA</span>
              <span className="pay-card master">●● Mastercard</span>
              <span className="pay-card elo">elo</span>
              <span className="pay-card hiper">Hipercard</span>
            </div>
            <div className="payment-cards mt">
              <span className="pay-card pix">◆ PIX</span>
              <span className="pay-card boleto">≡ Boleto</span>
            </div>
          </div>

          <div className="footer-contact">
            <h4>ATENDIMENTO</h4>
            <p>📲 (19) 99123-4567<br /><small>WhatsApp</small></p>
            <p>🕐 Todos os dias das 7h às 22h</p>
            <p>📍 Campinas e região - SP</p>
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