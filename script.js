// Ikigai Afribusiness — Capture page script
(function () {
  var whatsappUrl = "https://wa.me/22891480269?text=Salut,%20je%20veux%20recevoir%20mon%20guide";

  var benefits = [
    ["Tes vraies forces", "Identifie ce que la communauté reconnaît déjà en toi"],
    ["Le marché local", "Trouve le problème que ta compétence peut résoudre"],
    ["La validation rapide", "Teste si les gens sont prêts à payer, sans investir"],
    ["Ton Projet Zéro", "Formule ta première offre concrète dès aujourd'hui"]
  ];

  var grid = document.getElementById("benGrid");
  if (grid) {
    grid.innerHTML = benefits.map(function (b) {
      return '' +
        '<div class="ben-item">' +
          '<div class="ben-icon"><svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6l3 3 5-5" stroke="#185FA5" stroke-width="1.5" stroke-linecap="round"/></svg></div>' +
          '<div class="ben-text"><div class="ben-title">' + b[0] + '</div><div class="ben-sub">' + b[1] + '</div></div>' +
        '</div>';
    }).join("");
  }

  var btn = document.getElementById("ctaBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      window.open(whatsappUrl, "_top");
    });
  }
})();
