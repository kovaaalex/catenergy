ymaps.ready(function() {
    let myMap = new ymaps.Map("map", {
        center: [59.939355, 30.323036],
            zoom: 17,
            controls: ['zoomControl', 'fullscreenControl']
        });
            
        let myPlacemark = new ymaps.Placemark([59.939355, 30.323036], {       
        }, {
            iconLayout: 'default#image',
            iconImageHref: './assets/images/logo/mappin.svg',
            iconImageSize: [100, 100],
            iconImageOffset: [-20, -40],
            hideIconOnBalloonOpen: false
        });
          
        myMap.geoObjects.add(myPlacemark);
});