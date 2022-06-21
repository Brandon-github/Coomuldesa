const displace = 100; // desplazamiento de elemenos
let count = 0; // contador
let list_length = $(".carrousel__item").length - 1; // cantidad de elementos en el carrousel

/*

0 -100 -200 -300

*/

$(".carrousel__row--right").click(function () {
  count += displace;
  $(".carrousel__list").css("margin-left", `${count}vw`);
  console.log(count);
});

$(".carrousel__row--left").click(function () {
  count -= displace;
  $(".carrousel__list").css("margin-left", `${count}vw`);
  console.log(count);
});
