function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  window.open(mapLink, "_blank");
}

function showError(error) {
  console.log("Помилка отримання місцезнаходження: ", error);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
  console.log("Геолокація не підтримується вашим браузером.");
}
