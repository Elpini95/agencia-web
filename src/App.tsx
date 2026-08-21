import { useState } from "react";
import KineticGrid from "@/components/ui/kinetic-grid";

const WHATSAPP_URL =
  "https://wa.me/5491130358596?text=Hola!%20Vi%20la%20p%C3%A1gina%20y%20quiero%20hacer%20una%20consulta%20para%20mi%20negocio.";

export default function App() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <KineticGrid globalColor="monochrome">
      <header>
        <div className="wrap header-row">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              ＋
            </span>
            AGENCIA WEB
          </a>
          <a
            className="btn btn-ghost"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">
            Agencia de desarrollo web &amp; consultoría de procesos
          </p>
          <h1>
            Un sitio distinto
            <br />
            para cada <em>rubro.</em>
            <br />
            Elegí el que se
            <br />
            parece al tuyo.
          </h1>
          <p className="hero-sub">
            Diseño y desarrollo de páginas, tiendas online y sistemas a
            medida — y consultoría para ordenar y digitalizar procesos que
            hoy se manejan a mano. Más abajo tenés el catálogo completo, con
            demos reales que podés recorrer.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-solid"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contame tu negocio →
            </a>
            <a className="btn btn-ghost" href="#catalogo">
              Ver el catálogo de demos
            </a>
          </div>
        </section>

        <section className="wrap" id="servicios">
          <div className="section-head">
            <p className="section-num">01 — Servicios</p>
            <h2>Lo que hacemos</h2>
            <p className="section-note">
              Desde una landing de una sola pantalla hasta un sistema con
              login y base de datos. Se define según lo que tu negocio
              necesita, no al revés.
            </p>
          </div>
          <div className="services">
            <div className="service">
              <span className="code mono">LP · 01</span>
              <h3>Landing page</h3>
              <p>
                Una página, un objetivo: que te escriban o te compren. Ideal
                para lanzar rápido.
              </p>
            </div>
            <div className="service">
              <span className="code mono">IN · 02</span>
              <h3>Sitio institucional</h3>
              <p>
                Quiénes son, qué hacen, dónde están. La carta de presentación
                de tu negocio.
              </p>
            </div>
            <div className="service">
              <span className="code mono">BL · 03</span>
              <h3>Blog</h3>
              <p>
                Artículos organizados, buscador y buena base para que te
                encuentren en Google.
              </p>
            </div>
            <div className="service">
              <span className="code mono">PA · 04</span>
              <h3>Panel de administrador</h3>
              <p>
                Un lugar propio para cargar productos, turnos o novedades sin
                tocar código.
              </p>
            </div>
            <div className="service">
              <span className="code mono">EC · 05</span>
              <h3>Ecommerce</h3>
              <p>Catálogo, carrito, checkout y stock. Tu vidriera abierta las 24 horas.</p>
            </div>
            <div className="service">
              <span className="code mono">SI · 06</span>
              <h3>Sistema a medida</h3>
              <p>
                Gestión de turnos, pedidos, reservas o lo que tu operación
                necesite resolver.
              </p>
            </div>
            <div className="service">
              <span className="code mono">AP · 07</span>
              <h3>App a medida</h3>
              <p>Una herramienta propia, pensada para cómo trabajás vos y tu equipo.</p>
            </div>
            <div className="service">
              <span className="code mono">CO · 08</span>
              <h3>Consultoría de procesos</h3>
              <p>
                Relevamos cómo trabaja tu equipo hoy y ordenamos lo que se
                puede simplificar o digitalizar.
              </p>
            </div>
            <div className="service">
              <span className="code mono">MT · 09</span>
              <h3>Mantenimiento mensual</h3>
              <p>
                Cambios, contenido al día y que el sitio nunca se caiga. Vos
                avisás, nosotros lo resolvemos.
              </p>
            </div>
          </div>
        </section>

        <section className="wrap" id="catalogo">
          <div className="section-head">
            <p className="section-num">02 — Catálogo</p>
            <h2>Demos por rubro</h2>
            <p className="section-note">
              Cada ficha abre un sitio real y funcionando. Entrá, recorrelo,
              y si algo se parece a lo que necesitás, hablamos.
            </p>
          </div>
          <div className="catalog">
            <a
              className="ficha"
              href="https://gastronomia-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-red)" }}>
                  Gastronomía
                </span>
                <span className="ficha-index mono">RUBRO 01</span>
              </div>
              <h3>Restaurantes y bares</h3>
              <p>
                Carta online, fotos que dan hambre y reserva de mesa por
                WhatsApp en dos toques.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>

            <a
              className="ficha"
              href="https://corralon-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-blue)" }}>
                  Corralón / Ferretería
                </span>
                <span className="ficha-index mono">RUBRO 02</span>
              </div>
              <h3>Materiales y ferretería</h3>
              <p>
                Catálogo por categorías, precios claros y pedidos que llegan
                directo por WhatsApp.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>

            <a
              className="ficha"
              href="https://gym-demo-ten-rosy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-mustard)" }}>
                  Gimnasio
                </span>
                <span className="ficha-index mono">RUBRO 03</span>
              </div>
              <h3>Gimnasios y boxes</h3>
              <p>
                Planes, horarios de clases y alta de socios nuevos sin
                planillas ni vueltas.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>

            <a
              className="ficha"
              href="https://mecanico-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-teal)" }}>
                  Mecánico
                </span>
                <span className="ficha-index mono">RUBRO 04</span>
              </div>
              <h3>Talleres mecánicos</h3>
              <p>
                Servicios, turnos y presupuesto rápido para que el cliente no
                tenga que llamar.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>

            <a
              className="ficha"
              href="https://salon-demo-web-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-red)" }}>
                  Salón / Belleza
                </span>
                <span className="ficha-index mono">RUBRO 05</span>
              </div>
              <h3>Peluquerías y estética</h3>
              <p>
                Reserva de turnos, galería de trabajos y contacto directo con
                la profesional.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>

            <a
              className="ficha"
              href="https://liliana-m-carro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-blue)" }}>
                  Ecommerce
                </span>
                <span className="ficha-index mono">RUBRO 06</span>
              </div>
              <h3>Tienda online</h3>
              <p>
                Catálogo, carrito y checkout completo. Para marcas que
                quieren vender online en serio.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>

            <a
              className="ficha"
              href="https://djs-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ficha-top">
                <span className="stamp" style={{ color: "var(--stamp-mustard)" }}>
                  DJ / Eventos
                </span>
                <span className="ficha-index mono">RUBRO 07</span>
              </div>
              <h3>DJs y música en vivo</h3>
              <p>
                Portfolio de sets, disponibilidad de fechas y cotización de
                eventos directo por WhatsApp.
              </p>
              <div className="ficha-cta">
                <span>Ver demo</span>
                <span className="arrow">→</span>
              </div>
            </a>
          </div>
        </section>

        <section className="wrap" id="automatizaciones">
          <div className="auto-panel">
            <div>
              <p className="eyebrow">Consultoría de procesos</p>
              <h2>Ordenamos el proceso antes de automatizarlo</h2>
              <p>
                Antes de sumar tecnología, miramos cómo trabaja tu equipo
                hoy: dónde se pierde tiempo, qué se repite a mano, qué
                información se cae entre un paso y otro. Después, si tiene
                sentido, se resuelve con automatizaciones — y si hace falta
                atención inmediata, con un chatbot con inteligencia
                artificial.
              </p>
            </div>
            <ul className="auto-list">
              <li>
                <span className="auto-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5" cy="18" r="2.1" />
                    <circle cx="12" cy="11" r="2.1" />
                    <circle cx="19" cy="5" r="2.1" />
                    <path d="M7 16.4 10 12.6" />
                    <path d="M14 9.4 17 6.6" />
                  </svg>
                </span>
                <p>Relevamiento de cómo se hacen las cosas hoy, paso a paso.</p>
              </li>
              <li>
                <span className="auto-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5.5h16v10H10l-4 3.5v-3.5H4z" />
                    <path
                      d="M12 7.6 12.9 9.7 15 10.6 12.9 11.5 12 13.6 11.1 11.5 9 10.6 11.1 9.7Z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </span>
                <p>Chatbot que responde consultas frecuentes y toma pedidos las 24 horas.</p>
              </li>
              <li>
                <span className="auto-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="5.5" width="16" height="14" rx="1.5" />
                    <path d="M4 9.5h16" />
                    <path d="M8 3.5v4M16 3.5v4" />
                    <circle cx="15.3" cy="14.3" r="3" />
                    <path d="M15.3 12.8v1.5l1.1.9" strokeWidth="1.3" />
                  </svg>
                </span>
                <p>Agenda de turnos automática, integrada a WhatsApp o al sitio.</p>
              </li>
              <li>
                <span className="auto-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12a7 7 0 0 1 12-5" />
                    <path d="M19 12a7 7 0 0 1-12 5" />
                    <path d="M17 4.3v3h-3" />
                    <path d="M7 19.7v-3h3" />
                  </svg>
                </span>
                <p>Avisos, seguimientos y pedidos que hoy se hacen a mano, resueltos solos.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="wrap cta-block">
          <div>
            <p className="section-num">03 — Contacto</p>
            <h2>Contanos tu idea y nosotros armamos tu sistema.</h2>
          </div>
          <a
            className="btn btn-solid"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp →
          </a>
        </section>
      </main>

      <footer className="wrap">
        <div className="footer-row">
          <span>DESARROLLO WEB &amp; CONSULTORÍA DE PROCESOS</span>
          <span>© {year}</span>
        </div>
      </footer>
    </KineticGrid>
  );
}
