const API_KEYS="c2e333028e122a8f322fae19365307cd";
function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    console.log("You live in", lat, lon);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric&lang=kr`
    fetch(url).then(response => response.json())
    .then((data)=>{
        const city=document.querySelector("#weather span:first-child");
        const weather=document.querySelector("#weather span:last-child");

        city.innerText=data.name;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp} °C`;
    });
}

function onGeoErr(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);