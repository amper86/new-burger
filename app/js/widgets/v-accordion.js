$(function () {
    $('.accordeon-list__name').on('click', function (e) {

        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.accordeon-list__item'),
            list = $this.closest('.accordeon-list'),
            items = list.find('.accordeon-list__item'),
            activeClass = 'accordeon-list__item_active',
            content = $('.accordeon-list__content', item),
            otherContent = $('.accordeon-list__content', list),
            description = $('.accordeon-list__description', item),
            descriptionHeight = description.outerHeight(),
            picture = $('.accordeon-list__picture', item),
            pictureHeight = picture.outerHeight(),
            reqHeight = descriptionHeight + pictureHeight;


        if (!item.hasClass(activeClass)) {
            items.removeClass(activeClass);
            item.addClass(activeClass);

            otherContent.css({
                'height': 0
            });

            content.css({
                'height': reqHeight
            })

        } else {
            item.removeClass(activeClass);

            content.css({
                'height': 0
            })
        }
    });
});