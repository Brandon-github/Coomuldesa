$('.card__control').each(function(index, element) {
    $(this).click(function() {
        $('.card__control').each(function() {
            $(this).removeClass('active');
        });
        $(element).addClass('active');
    });
});