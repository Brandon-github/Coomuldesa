const displace = 100; // desplazamiento de elemenos
let count = 0; // contador
let list_length = -($(".carrousel__item").length - 1) ; // cantidad de elementos en el carrousel

// Evento para boton derecho del carrousel
$(".carrousel__row--right").click(function () {
  /**
   * Validacion que el desplazamiento del condador 
   * se encuentre en por debajo de 0
   */
  if (count < 0) {
    count += displace;
    $(".carrousel__list").css("margin-left", `${count}vw`);
  }
});

// Evento para boton derecho del carrousel
$(".carrousel__row--left").click(function () {
  /**
   * Validacion que el desplazamiento del condador 
   * se encuentre encima del numero de elementos 
   * por el desplazamiento
   */
  if (count > list_length * displace) {
    count -= displace;
    $(".carrousel__list").css("margin-left", `${count}vw`);
  }
});
