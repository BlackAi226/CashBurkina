// Script simple pour tracking des clics partenaires
document.addEventListener("DOMContentLoaded", () => {
  const partnerLinks = document.querySelectorAll(".btn");
  partnerLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Lien partenaire cliqué:", link.href);
      // Ici tu pourrais connecter Google Analytics ou autre tracker
    });
  });
});
