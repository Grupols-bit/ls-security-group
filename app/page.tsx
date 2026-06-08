export default function LSSecurityGroupHomePage() {
  const services = [
    {
      image: "/services/web-vulnerability.png",
      title: "Evaluación de Vulnerabilidades Web",
      text: "Revisamos tu página web para identificar riesgos expuestos, configuraciones inseguras, tecnología desactualizada, cabeceras de seguridad débiles y posibles superficies de ataque visibles.",
    },
    {
      image: "/services/cloud-email-security.png",
      title: "Seguridad en la Nube y Correo Empresarial",
      text: "Ayudamos a proteger Google Workspace, Microsoft 365, accesos de usuarios, MFA y cuentas de correo empresarial contra phishing y compromisos de credenciales.",
    },
    {
      image: "/services/security-monitoring.png",
      title: "Monitoreo de Seguridad",
      text: "Ofrecemos monitoreo práctico y revisión de alertas para empresas en crecimiento que necesitan protección sin contratar un equipo interno completo de ciberseguridad.",
    },
    {
      image: "/services/incident-response.png",
      title: "Respuesta ante Incidentes",
      text: "Apoyamos a empresas cuando enfrentan actividad sospechosa, malware, phishing, robo de cuentas, compromiso de páginas web o incidentes de seguridad.",
    },
  ];

  const industries = [
    "Pequeñas y medianas empresas",
    "Clínicas y consultorios médicos",
    "Restaurantes y hoteles",
    "Escuelas y universidades",
    "Servicios profesionales y financieros",
    "Organizaciones locales en Ecuador",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-white shadow-lg shadow-cyan-500/20">
              LS
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight text-white">
                LS Security Group
              </p>
              <p className="text-xs text-cyan-300">Cuenca · Ecuador</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#servicios" className="transition hover:text-cyan-300">
              Servicios
            </a>
            <a href="#industrias" className="transition hover:text-cyan-300">
              Industrias
            </a>
            <a href="#nosotros" className="transition hover:text-cyan-300">
              Nosotros
            </a>
            <a href="#contacto" className="transition hover:text-cyan-300">
              Contacto
            </a>
            <a
              href="#contacto"
              className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
            >
              Evaluación Gratis
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.25),transparent_35%),linear-gradient(120deg,rgba(15,23,42,0.95),rgba(2,6,23,0.85))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              Protección de ciberseguridad para empresas en crecimiento
            </p>

            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Protege tu empresa antes de que una amenaza digital se convierta
              en un problema real.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              LS Security Group ayuda a empresas en Ecuador a identificar
              vulnerabilidades en sus páginas web, fortalecer su seguridad en la
              nube, monitorear amenazas y responder rápidamente ante incidentes
              cibernéticos.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-lg bg-red-600 px-6 py-3 text-center font-bold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
              >
                Solicitar Evaluación de Seguridad
              </a>
              <a
                href="#servicios"
                className="rounded-lg border border-cyan-300/30 bg-white/5 px-6 py-3 text-center font-bold text-white transition hover:bg-white/10"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-900/95 p-6 shadow-2xl shadow-cyan-950/60">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-300">
                    Centro de Monitoreo
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Estado de seguridad empresarial
                  </p>
                </div>

                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                  Riesgos Activos
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                  <p className="text-sm text-slate-400">Sitio Web</p>
                  <p className="mt-2 text-2xl font-black text-white">
                    Evaluación
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-3/4 rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
                  <p className="text-sm text-slate-400">Correo Empresarial</p>
                  <p className="mt-2 text-2xl font-black text-white">
                    Protección
                  </p>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-2/3 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-300">
                    Hallazgos comunes
                  </p>
                  <p className="text-xs text-cyan-300">Revisión inicial</p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">
                      Cabeceras de seguridad débiles
                    </span>
                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">
                      Alto
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">
                      Plugins o tecnología desactualizada
                    </span>
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-bold text-yellow-300">
                      Medio
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-sm text-slate-300">
                      Configuración SSL/TLS mejorable
                    </span>
                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">
                      Revisión
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-300">Entregable</p>
                <p className="mt-2 text-lg font-black text-white">
                  Reporte profesional en PDF con riesgos y recomendaciones.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-slate-900/80">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 text-sm font-semibold text-slate-200 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-cyan-300">✦</span>
              Monitoreo de Seguridad
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-cyan-300">✦</span>
              Análisis de Vulnerabilidades
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-cyan-300">✦</span>
              Respuesta ante Incidentes
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="bg-slate-100 px-6 py-20 text-slate-950"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
              Nuestros Servicios
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Servicios prácticos de ciberseguridad para empresas que necesitan
              protección ahora.
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-red-600" />
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300/40 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="h-40 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-black text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 min-h-28 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>

                  <a
                    href="#contacto"
                    className="mt-auto inline-flex w-fit rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    Solicitar información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industrias" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                Industrias
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
                Diseñado para negocios que dependen de sus páginas web, correos
                y sistemas digitales.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-300">
              LS Security Group está enfocado en ayudar a empresas que necesitan
              proteger su presencia digital, sus clientes y su reputación.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="group rounded-2xl border border-cyan-300/15 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-black text-cyan-300">
                  ✓
                </div>
                <p className="text-lg font-bold text-white">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
              Nosotros
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-4xl">
              Una empresa de ciberseguridad enfocada en el crecimiento digital
              de Ecuador.
            </h2>

            <div className="mt-5 h-1 w-24 rounded-full bg-red-600" />

            <p className="mt-8 text-lg leading-8 text-slate-700">
              LS Security Group fue creada para ayudar a empresas a acceder a
              protección profesional de ciberseguridad sin necesidad de mantener
              un departamento interno grande.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Nuestra misión es hacer que la ciberseguridad sea práctica,
              entendible y efectiva para compañías que desean proteger sus
              páginas web, correos empresariales, herramientas en la nube y la
              confianza de sus clientes.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-400/50">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
              Nuestro enfoque
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xl font-black text-white">
                  01. Identificar riesgos
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Revisamos la exposición digital de la empresa y detectamos
                  debilidades que pueden afectar su operación.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xl font-black text-white">
                  02. Explicar con claridad
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Entregamos reportes entendibles, con riesgos, impacto para el
                  negocio y recomendaciones reales.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xl font-black text-white">
                  03. Mejorar la protección
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Ayudamos a fortalecer páginas web, correos, accesos, nube y
                  sistemas digitales críticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
              Contacto
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">
              ¿Listo para revisar la seguridad de tu empresa?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Solicita una evaluación de vulnerabilidades web y recibe un
              reporte claro con riesgos, impacto para el negocio y
              recomendaciones de corrección.
            </p>

            <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-white/5 p-6">
              <p className="text-lg font-bold text-white">Dominio oficial</p>
              <p className="mt-2 text-cyan-300">lssecuritygroup.com</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/5 p-8 shadow-2xl shadow-cyan-950/50">
            <p className="text-2xl font-black text-white">
              Solicita tu evaluación
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Contáctanos para revisar la exposición digital de tu empresa y
              recibir una propuesta clara.
            </p>

            <div className="mt-8">
              <a
                href="mailto:contactolssecuritygroup@gmail.com?subject=Solicitud%20de%20servicios%20de%20ciberseguridad%20-%20LS%20Security%20Group"
                className="flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-center font-black text-white transition hover:bg-red-500"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400 to-blue-600 font-black text-white">
                LS
              </div>
              <div>
                <p className="text-lg font-black">LS Security Group</p>
                <p className="text-xs text-cyan-300">Cuenca · Ecuador</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Protección de ciberseguridad para empresas en crecimiento.
            </p>
          </div>

          <div>
            <p className="font-black uppercase tracking-widest text-cyan-300">
              Servicios
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Evaluación de Vulnerabilidades Web</p>
              <p>Seguridad en la Nube y Correo Empresarial</p>
              <p>Monitoreo de Seguridad</p>
              <p>Respuesta ante Incidentes</p>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-widest text-cyan-300">
              Dominio
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>lssecuritygroup.com</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 LS Security Group. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}