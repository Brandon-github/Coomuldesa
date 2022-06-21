// Evento al estar lista la pagina
$(document).ready(function () {
  // Reccorriendo items de cartas
  $(".card__item").each(function (index) {
    //remover clase active de todos los elementos
    $(this).removeClass("active");

    // Validacion de
    if (index === 0) {
      $(this).addClass("active");
    }

    // Creacion de elemento span y adicion de clase
    let control = $("<span></span>")
        .addClass("card__control");

    /**
     * agregar hijo al elemento 
     * contenedor del control de las cartas
     */
    $(".card__controls").append(control);
  });

  // recorriendo controladores de cartas
  $(".card__control").each(function (index) {
    // validacion de indice
    if (index === 0) {
        // adicion de clase active
        $(this).addClass('active');
    }
  });

  // Recorriendo elementos de control de cartas
  $('.card__control').each(function (index) {
    // obteniendo elemento en posicion selecionada
    let card = document.querySelectorAll('.card__item')[index];
    // evento click de elemento 
    $(this).click(function () {
      /**
       * Remover la clase active de todos los elementos
       * y adicionarla a elemento selecionado
       */
      $('.card__control').removeClass('active');
      $(this).addClass('active');
      $('.card__item').removeClass('active');
      card.classList.add('active');
    });
  });
});
