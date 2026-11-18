var CONFIG = {
  name: "Tu Negocio",
  initials: "TN",
  pill: "Atención personalizada",
  headline: "Cuida tu estilo con quienes saben hacerlo",
  lead: "Un servicio cercano, profesional y puntual. Reserva en un minuto y ven a vivir la experiencia.",
  button1: "Reservar ahora",
  button2: "Ver servicios",
  heroEmoji: "✂️",
  chip1: ["⭐ 4.9 de 5", "Reseñas de ejemplo"],
  chip2: ["📍 Managua", "Atención con cita"],
  servicesTitle: "Lo que hacemos por ti",
  servicesText: "Servicios pensados para que salgas feliz con tu resultado.",
  services: [
    [
      "💈",
      "Servicio clásico",
      "Atención cuidadosa, con productos de calidad y buen trato.",
      "Desde C$ 250",
    ],
    [
      "✨",
      "Servicio premium",
      "Una experiencia completa con más detalle y tiempo para ti.",
      "Desde C$ 450",
    ],
    [
      "🎁",
      "Paquetes y combos",
      "Combina servicios y ahorra. Ideal para ocasiones especiales.",
      "Desde C$ 600",
    ],
  ],
  steps: [
    ["Escríbenos", "Cuéntanos qué necesitas por WhatsApp o con el formulario."],
    ["Agenda tu cita", "Elegimos juntos el día y la hora que mejor te quede."],
    ["Disfruta", "Te atendemos con calma y cuidado. Sin sorpresas."],
  ],
  reviews: [
    [
      "Ana M.",
      "Muy buena atención y puntualidad. Lo recomiendo con confianza.",
    ],
    ["Carlos R.", "Quedé encantado con el resultado. Volveré seguro."],
    [
      "Daniela P.",
      "Lugar limpio, amable y profesional. Excelente experiencia.",
    ],
  ],
  contactTitle: "Reserva tu cita",
  contactText: "Escríbenos y te respondemos en minutos.",
  contactDetails:
    "📍 Managua, Nicaragua · 🕒 Lun a Sáb, 9:00 a. m. a 6:00 p. m.",
  faqs: [
    [
      "¿Necesito cita?",
      "Recomendamos reservar para asegurar tu espacio, pero también atendemos según disponibilidad.",
    ],
    ["¿Qué formas de pago aceptan?", "Efectivo y transferencia."],
    [
      "¿Dónde están ubicados?",
      "En Managua. Te enviamos la ubicación exacta por WhatsApp al confirmar.",
    ],
  ],
  whatsapp: "50557344053",
  brand: "#6d4cff",
  brand2: "#3d7bff",
  demoBar:
    "Plantilla Órbita (landing de 1 página) · Demo creada por Quark Studio · Los textos son de ejemplo",
};
/* ===== Fin de la configuración ===== */
var $ = function (i) {
    return document.getElementById(i);
  },
  C = CONFIG;
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c];
  });
}
var R = document.documentElement.style;
R.setProperty("--brand", C.brand);
R.setProperty("--brand2", C.brand2);
$("bar").textContent = C.demoBar;
if (!C.demoBar) $("bar").style.display = "none";
document.title = C.name;
$("logo").innerHTML = "<i>" + esc(C.initials) + "</i>" + esc(C.name);
$("pill").textContent = C.pill;
$("h1").textContent = C.headline;
$("lead").textContent = C.lead;
$("b1").textContent = C.button1;
$("b2").textContent = C.button2;
$("disc").textContent = C.heroEmoji;
$("c1").innerHTML = esc(C.chip1[0]) + "<small>" + esc(C.chip1[1]) + "</small>";
$("c2").innerHTML = esc(C.chip2[0]) + "<small>" + esc(C.chip2[1]) + "</small>";
$("st").textContent = C.servicesTitle;
$("ss").textContent = C.servicesText;
$("svc").innerHTML = C.services
  .map(function (s) {
    return (
      '<div class="card rv"><div class="ic">' +
      s[0] +
      "</div><h3>" +
      esc(s[1]) +
      "</h3><p>" +
      esc(s[2]) +
      "</p><b>" +
      esc(s[3]) +
      "</b></div>"
    );
  })
  .join("");
$("steps").innerHTML = C.steps
  .map(function (s) {
    return (
      '<div class="st rv"><h3>' +
      esc(s[0]) +
      "</h3><p>" +
      esc(s[1]) +
      "</p></div>"
    );
  })
  .join("");
$("rev").innerHTML = C.reviews
  .map(function (r) {
    return (
      '<div class="card q rv"><span class="stars">★★★★★</span><p>“' +
      esc(r[1]) +
      "”</p><b>" +
      esc(r[0]) +
      "</b></div>"
    );
  })
  .join("");
$("ct").textContent = C.contactTitle;
$("cs").textContent = C.contactText;
$("cd").textContent = C.contactDetails;
$("fs").innerHTML = C.services
  .map(function (s) {
    return "<option>" + esc(s[1]) + "</option>";
  })
  .join("");
$("faqs").innerHTML = C.faqs
  .map(function (f) {
    return (
      "<details><summary>" +
      esc(f[0]) +
      "</summary><p>" +
      esc(f[1]) +
      "</p></details>"
    );
  })
  .join("");
$("ft").textContent = "© 2026 " + C.name + " · Sitio hecho con Quark Studio";
function wa(t) {
  return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(t);
}
$("wa").href = wa("Hola " + C.name + ", quiero más información.");
$("wa").target = "_blank";
$("wa").rel = "noopener";
$("f").onsubmit = function (e) {
  e.preventDefault();
  window.open(
    wa(
      "Hola " +
        C.name +
        ", soy " +
        $("fn").value +
        ". Me interesa: " +
        $("fs").value +
        ". " +
        $("fm").value,
    ),
    "_blank",
    "noopener",
  );
};
var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".rv").forEach(function (el) {
  io.observe(el);
});
