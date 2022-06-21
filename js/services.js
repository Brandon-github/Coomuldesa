$(document).ready(function() {
    $('.service__item').each(function (index) {
        $(this).removeClass('active');

        if (index === 0) {
            $(this).addClass('active');
        }

        let control = $('<span></span>')
            .addClass('service__control');

        $('.service__controls').append(control);
    });

    $('.service__control').each(function (index) {
        if (index === 0) {
            $(this).addClass('active');
        }
    });

    $('.service__control').each(function(index) {

        let service = document.querySelectorAll('.service__item')[index];

        $(this).click(function () {

            $('.service__control').removeClass('active');
            $(this).addClass('active');
            $('.service__item').removeClass('active');
            service.classList.add('active');
        });
    });
});

