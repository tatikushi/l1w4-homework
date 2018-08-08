function getImage(lat, lon) {
    return 'http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=600x400&markers=color:blue|'+lat+','+lon;
}

navigator.geolocation.getCurrentPosition(function (position) {
    var src = getImage(position.coords.latitude, position.coords.longitude);
    var map = document.getElementById('map');
    map.innerHTML = "<img src='"+src+"' alt=''>";


});


