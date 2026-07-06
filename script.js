const btn = document.getElementById("locBtn");
const status = document.getElementById("status");
const info = document.getElementById("info");

btn.addEventListener("click", () => {

    if(!navigator.geolocation){
        status.textContent = "Geolocation is not supported.";
        return;
    }

    status.textContent = "Requesting permission...";

    navigator.geolocation.getCurrentPosition(success, error);

});

function success(position){

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "Location found! 🎉";

    document.getElementById("lat").textContent = latitude;
    document.getElementById("lon").textContent = longitude;

    const map = document.getElementById("mapLink");
    map.href = `https://www.google.com/maps?q=${latitude},${longitude}`;

    info.classList.remove("hidden");
}

function error(err){

    switch(err.code){
        case err.PERMISSION_DENIED:
            status.textContent = "❌ Permission denied.";
            break;

        case err.POSITION_UNAVAILABLE:
            status.textContent = "📡 Location unavailable.";
            break;

        case err.TIMEOUT:
            status.textContent = "⌛ Request timed out.";
            break;

        default:
            status.textContent = "Something went wrong.";
    }

}
