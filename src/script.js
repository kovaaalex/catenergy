const slider = document.getElementById('comparisonSlider');
const overlay = document.getElementById('comparisonOverlay');
const API_KEY = import.meta.env.VITE_YANDEX_MAPS_API_KEY;

slider.addEventListener('input', (e) => {
    const v = e.target.value;
    overlay.style.width = `${v}%`;
});

overlay.style.width = `${slider.value}%`;

function initMapWithKey() {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`;
    script.onload = () => {
        ymaps.ready(function() {
            let myMap = new ymaps.Map("map", {
                center: [59.939355, 30.323036],
                zoom: 17,
                controls: ['zoomControl', 'fullscreenControl']
            });
            
            let myPlacemark = new ymaps.Placemark([59.939355, 30.323036], {}, {
                iconLayout: 'default#image',
                iconImageHref: '/src/assets/images/logo/mappin.svg',
                iconImageSize: [100, 100],
                iconImageOffset: [-20, -40],
                hideIconOnBalloonOpen: false
            });
            
            myMap.geoObjects.add(myPlacemark);
        });
    };
    document.head.appendChild(script);
}

initMapWithKey();
