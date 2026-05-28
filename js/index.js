(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".hero-img")
      .css({
        opacity: 0,
        position: "relative",
        left: "400px", // Empieza 100px a la derecha
      })
      .animate(
        {
          opacity: 1,
          left: "0", // Termina en su posición original
        },
        1000,
      ); // Duración 1 segundo
  });

  $(".procedi-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".somos-hero-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });

  // procedimientos
  // 1. Abrir el primero por defecto al cargar
  const primerDropdown = document.querySelector(".btn-procedi");
  if (primerDropdown) {
    const bsDropdown = new bootstrap.Dropdown(primerDropdown);
    bsDropdown.show();
  }

  // 2. Control de scroll modificado para respetar el contenedor padre
  const botones = document.querySelectorAll(".btn-procedi");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
      // En lugar del botón, buscamos el contenedor padre completo
      const contenedorPadre = this.closest(".item-procedis");

      if (contenedorPadre) {
        requestAnimationFrame(function () {
          // Hacemos el scroll al contenedor, el cual obedecerá al 'scroll-margin-top' de CSS
          contenedorPadre.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    });
  });
})(jQuery);
