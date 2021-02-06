

alert("Salut ! J'ai ajouté vos suggestions à l'abécédaire, et j'ai un peu fignolé les détails. Je travaille en ce moment à un formulaire qui permettra à tout le monde de participer directement. Bonne lecture !")
const mediaQuery = window.matchMedia('(min-width: 882px)')

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function() {
    if (mediaQuery.matches) {
      $('body,html').animate({
        scrollTop: 400
      }, 0);
      return false;
    } else {
      $('body,html').animate({
        scrollTop: 0
      }, 0);
      return false;
    };
  })
});
//quand quelqu'un clique sur un des a du container alphabet faire en sorte que le container de la lettre correspondant à l'ID
// de la lettre cliquée se voit ajouter puis retirer une classe "surbrillance"
$(".alphabet a").on("click", function() {
  var lettre = $(this).text()
  var ref = lettre.toLowerCase()
  $("#" + ref).addClass("animate__animated animate__rubberBand animate__infinite")
  setTimeout(function() {
    $("#" + ref).removeClass("animate__animated animate__rubberBand animate__infinite")
  }, 2000);
})
