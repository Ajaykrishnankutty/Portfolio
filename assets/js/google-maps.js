function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.7681928, lng: 76.6521319};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Palakkad' // Title Location
    });
}