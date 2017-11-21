$(function () {
    $('.reviews-button').on('click', function(e) {

        e.preventDefault();

        $('.reviews-popup__container').css('display', 'block');

        var $this = $(this),
            container = $this.closest('.reviews__description'),
            name = container.find('h3'),
            nameText = name.text(),
            review = container.find('p'),
            reviewText = review.text();

        $('.reviews-popup__container h3').text(nameText);
        $('.reviews-popup__container p').text(reviewText);

        $('.reviews-popup').fadeIn(600);

        console.log(name.text());


    });

    $('.reviews-popup__dismiss').on('click', function (e) {

        e.preventDefault();

        $('.reviews-popup').fadeOut(200);
    })
});