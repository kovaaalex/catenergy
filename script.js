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

const slider = document.getElementById('comparisonSlider');
const overlay = document.getElementById('comparisonOverlay');

slider.addEventListener('input', (e) => {
    const v = e.target.value;
    overlay.style.width = `${v}%`;
});

overlay.style.width = `${slider.value}%`;