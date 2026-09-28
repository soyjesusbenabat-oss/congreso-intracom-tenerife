/**
 * Pinta la web a partir de content.js y cambia de idioma sin recargar.
 * El idioma elegido se recuerda en el navegador y viaja a los enlaces de la plataforma.
 */
(function () {
  "use strict";

  var IDIOMAS = ["es", "en", "pt"];
  var PLATAFORMA = "https://conferences.portalintracom.com/{lang}/c/intracom-2026";
  var LEGAL = "https://conferences.portalintracom.com/{lang}/legal/{doc}";

  var lang = "es";
  try {
    var guardado = localStorage.getItem("intracom_lang");
    if (guardado && IDIOMAS.indexOf(guardado) >= 0) lang = guardado;
  } catch (e) {}
  if (!localStorageDisponible() && navigator.language) {
    var nav = navigator.language.slice(0, 2);
    if (IDIOMAS.indexOf(nav) >= 0) lang = nav;
  }

  function localStorageDisponible() {
    try {
      localStorage.setItem("__t", "1");
      localStorage.removeItem("__t");
      return true;
    } catch (e) {
      return false;
    }
  }

  var $ = function (sel, raiz) { return (raiz || document).querySelector(sel); };
  var $$ = function (sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); };

  function valor(obj, ruta) {
    return ruta.split(".").reduce(function (o, k) { return o == null ? null : o[k]; }, obj);
  }

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }

  function pintar(c) {
    // Textos sueltos marcados con data-t
    $$("[data-t]").forEach(function (n) {
      var v = valor(c, n.getAttribute("data-t"));
      if (typeof v === "string") n.textContent = v;
    });

    document.documentElement.lang = c.lang;
    document.title = c.meta.title;
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", c.meta.description);

    // Datos de la portada
    var chips = $("#heroChips");
    chips.innerHTML = "";
    c.hero.chips.forEach(function (ch) {
      var d = el("div", "chip");
      d.appendChild(el("b", null, ch.label));
      d.appendChild(el("span", null, ch.value));
      chips.appendChild(d);
    });

    var stats = $("#stats");
    stats.innerHTML = "";
    c.stats.forEach(function (s) {
      var d = el("div");
      d.appendChild(el("b", null, s.n));
      d.appendChild(el("span", null, s.l));
      stats.appendChild(d);
    });

    parrafos($("#aboutText"), c.about.paragraphs);
    parrafos($("#pubText"), c.publicaciones.paragraphs);
    parrafos($("#sedeText"), c.sede.paragraphs);

    // Mesas temáticas
    var mesas = $("#mesas-grid");
    mesas.innerHTML = "";
    c.mesas.items.forEach(function (m, i) {
      var card = el("article", "card mesa");
      card.appendChild(el("span", "mesa__n", "0" + (i + 1)));
      card.appendChild(el("p", "mesa__eje", m.eje));
      card.appendChild(el("h3", null, m.title));
      card.appendChild(el("p", null, m.desc));
      var tags = el("div", "tags");
      m.tags.forEach(function (t) { tags.appendChild(el("span", "tag", t)); });
      card.appendChild(tags);
      mesas.appendChild(card);
    });

    // Talleres ANECA
    var talleres = $("#talleres");
    talleres.innerHTML = "";
    c.aneca.talleres.forEach(function (t) {
      var d = el("div", "taller");
      d.appendChild(el("b", null, t.dia));
      var h = el("h3", null, t.title);
      h.style.margin = "6px 0 6px";
      d.appendChild(h);
      var p = el("p", null, t.desc);
      p.style.fontSize = "15px";
      d.appendChild(p);
      talleres.appendChild(d);
    });
    var puntos = $("#puntos");
    puntos.innerHTML = "";
    c.aneca.puntos.forEach(function (p) {
      var d = el("div", "punto");
      d.appendChild(el("i", null, p.n));
      var txt = el("div");
      var b = el("b", null, p.t);
      b.style.color = "#fff";
      txt.appendChild(b);
      var s = el("p", null, p.d);
      s.style.fontSize = "15px";
      txt.appendChild(s);
      d.appendChild(txt);
      puntos.appendChild(d);
    });

    // Formas de participar y requisitos
    var modos = $("#modos");
    modos.innerHTML = "";
    c.participacion.items.forEach(function (m) {
      var card = el("article", "card");
      card.appendChild(el("p", "mesa__eje", m.tag));
      var h = el("h3", null, m.title);
      h.style.marginTop = "8px";
      card.appendChild(h);
      card.appendChild(el("p", null, m.desc));
      modos.appendChild(card);
    });
    var req = $("#requisitos");
    req.innerHTML = "";
    c.participacion.requisitos.items.forEach(function (r) {
      var d = el("div");
      d.appendChild(el("b", null, r.t));
      d.appendChild(el("span", null, r.d));
      req.appendChild(d);
    });

    // Tarifas
    ["presencial", "online"].forEach(function (grupo) {
      var cont = $("#tarifas-" + grupo);
      cont.innerHTML = "";
      c.tarifas.items
        .filter(function (t) { return t.grupo === grupo; })
        .forEach(function (t) {
          var card = el("article", "card fee" + (t.destacada ? " fee--destacada" : ""));
          card.appendChild(el("span", "fee__price", t.precio));
          card.appendChild(el("h3", null, t.title));
          card.appendChild(el("p", null, t.desc));
          var a = el("a", "btn " + (t.destacada ? "btn--navy" : "btn--line") + " btn--sm", c.tarifas.cta);
          a.href = PLATAFORMA.replace("{lang}", lang);
          a.setAttribute("data-reg", "");
          card.appendChild(a);
          cont.appendChild(card);
        });
    });

    // Calendario
    var tl = $("#timeline");
    tl.innerHTML = "";
    c.fechas.items.forEach(function (f) {
      var fila = el("div", "tl");
      fila.appendChild(el("div", "tl__date", f.fecha));
      var txt = el("div");
      txt.appendChild(el("h3", null, f.t));
      txt.appendChild(el("p", null, f.d));
      fila.appendChild(txt);
      tl.appendChild(fila);
    });

    // Publicaciones
    lista($("#editoriales"), c.publicaciones.editoriales.items);
    lista($("#revistas"), c.publicaciones.revistas.items);

    // Comités
    var comites = $("#comites");
    comites.innerHTML = "";
    c.organizacion.grupos.forEach(function (g) {
      comites.appendChild(el("p", "group-title", g.title));
      var grid = el("div", "people");
      g.personas.forEach(function (p) {
        var d = el("div", "person");
        d.appendChild(el("b", null, p[0]));
        d.appendChild(el("span", null, p[1]));
        grid.appendChild(d);
      });
      comites.appendChild(grid);
    });

    // Enlaces que dependen del idioma
    $$("[data-reg]").forEach(function (a) { a.href = PLATAFORMA.replace("{lang}", lang); });
    $$("[data-legal]").forEach(function (a) {
      a.href = LEGAL.replace("{lang}", lang).replace("{doc}", a.getAttribute("data-legal"));
    });
    $$("#langs button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function parrafos(cont, textos) {
    cont.innerHTML = "";
    textos.forEach(function (t) { cont.appendChild(el("p", null, t)); });
  }

  function lista(cont, items) {
    cont.innerHTML = "";
    items.forEach(function (t) { cont.appendChild(el("span", "pill", t)); });
  }

  function cambiar(l) {
    lang = l;
    try { localStorage.setItem("intracom_lang", l); } catch (e) {}
    pintar(window.INTRACOM_CONTENT[l]);
  }

  $("#langs").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-lang]");
    if (b) cambiar(b.getAttribute("data-lang"));
  });

  var toggle = $("#menuToggle");
  toggle.addEventListener("click", function () {
    var menu = $("#menu");
    var abierto = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
  $("#menu").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      $("#menu").classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  pintar(window.INTRACOM_CONTENT[lang]);
})();
