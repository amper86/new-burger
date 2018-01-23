$(function () {
    $('.menu-accord__link').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.menu-accord__item'),
            list = $this.closest('.menu-accord'),
            items = list.find('.menu-accord__item'),
            activeClass = 'menu-accord__item_active';

        if (!item.hasClass(activeClass)) {

            items.removeClass(activeClass);
            item.addClass(activeClass);

        } else {

            item.removeClass(activeClass);

        }
    });
});