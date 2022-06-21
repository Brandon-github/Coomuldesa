// Evento al estar lista la pagina
$(document).ready(function () {
  // REcorriendo items de de servicios
  $(".service__item").each(function (index) {
    // Remover clase active de todos los elementos
    $(this).removeClass("active");

    /**
     * Validacion de que el indice
     * del elemento sea 0 al hacer
     * el recorrido
     */
    if (index === 0) {
      $(this).addClass("active");
    }

    // Creacion de elemento span y adicion de clase
    let control = $("<span></span>")
      .addClass("service__control");

    /**
     * agregar hijo al elemento 
     * contenedor del control de los servicios
     */
    $(".service__controls").append(control);
  });

  // recoriendo controladores de servicios
  $(".service__control").each(function (index) {
    // validacion de indice
    if (index === 0) {
      $(this).addClass("active");
    }
  });

  // Recorriendo controladores de servicios
  $(".service__control").each(function (index) {
    // obteniendo elemento en posicion selecionada
    let service = document.querySelectorAll(".service__item")[index];
    // evento click de elemento
    $(this).click(function () {
      /**
       * Remover la clase active de todos los elementos
       * y adicionarla a elementos selecionados
       */
      $(".service__control").removeClass("active");
      $(this).addClass("active");
      $(".service__item").removeClass("active");
      service.classList.add("active");
    });
  });
});
