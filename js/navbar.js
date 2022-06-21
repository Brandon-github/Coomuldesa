// Evento para el menu de hamburguesa
$('.burger').click(function() {
    $(this).toggleClass('active');
    $('.nav__list').toggleClass('active');
});

// Evento para activar el buscador
$('#search').click(function() {
    $('.nav__search').addClass('active');
    $('.nav__input').focus();
});

// Evento para desactivar buscador
$('.nav__exit').click(function() {
    $('.nav__search').removeClass('active');
    $('.nav__input').val('');
});

/**
 * Control de adaptacion de redes 
 * sociales de la barra de navegacion
 */
function togglerSocials() {
    let socials = $('.nav__socials');

    // validacion de ancho de pantalla
    if ($(document).width() < 1100) {
        $('.nav__list').append(socials)
    } else {
        $('nav__socials').remove();
        $('.nav').append(socials);
    }
}

// eventos de ventana para aplicar a la navegacion
$(window).on({
    load: function() {
        togglerSocials();
    },
    resize: function() {
        togglerSocials()
    }
});




