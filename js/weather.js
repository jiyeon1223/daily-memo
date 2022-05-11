navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY ="ad489dece53b3de44bbff549bb5aebe2"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unit=metric`;
    fetch(url).then(response => response.json().then(data => ));
}

function onGeoError() {
    alert("두번 안 물어봅니다.")
}