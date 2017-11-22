
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.94344047, 30.30763986],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),

        burger1 = new ymaps.Placemark([59.89134973, 30.31609897], {
            hintContent: 'MR.Burger#1',
            balloonContent: 'Наша первая столовка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [46, 57]
        }),

        burger2 = new ymaps.Placemark([59.91562259, 30.49522761], {
            hintContent: 'MR.Burger#2',
            balloonContent: 'Burger World'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [46, 57]
        }),

        burger3 = new ymaps.Placemark([59.94527942, 30.38069471], {
            hintContent: 'MR.Burger#3',
            balloonContent: 'Burger Downtown'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [46, 57]
        }),

        burger4 = new ymaps.Placemark([59.97423723, 30.31386737], {
            hintContent: 'MR.Burger#4',
            balloonContent: 'Burger Island'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [46, 57]
        });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(burger1)
        .add(burger2)
        .add(burger3)
        .add(burger4);

});
