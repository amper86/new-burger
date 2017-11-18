$(function () {
    $('.accordeon-list__name').on('click', function (e) {

        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.accordeon-list__item'),
            list = $this.closest('.accordeon-list'),
            items = list.find('.accordeon-list__item'),
            activeClass = 'accordeon-list__item_active';

        if (!item.hasClass(activeClass)) {
            items.removeClass(activeClass);
            item.addClass(activeClass);
        } else {
            item.removeClass(activeClass);
        }
    });
});