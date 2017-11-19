$(function () {
    $('.menu-accord__link').on('click', function (e) {
        e.preventDefault();

        var $this = $(this);
            item = $this.closest('.menu-accord__item'),
            list = $this.closest('.menu-accord'),
            items = list.find('.menu-accord__item'),
            activeClass = 'menu-accord__item_active',
            content = $('menu-accord__description', item);
            /*otherContent = $('.menu-accord__description', list),
            reqWidth = content.outerWidth();*/


        if (!item.hasClass(activeClass)) {
            items.removeClass(activeClass);
            item.addClass(activeClass);

            /*otherContent.css({
                'height': 0
            });

            content.css({
                'height': reqHeight
            })*/

        } else {
            item.removeClass(activeClass);

            /*content.css({
                'height': 0
            })*/
        }
    });
});