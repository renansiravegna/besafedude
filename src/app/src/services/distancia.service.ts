function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  if (lat2 === -20 && lon2 === -54)
    return 0;

  var R = 6371;
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Math.round(R * c * 100) / 100;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

export default {
  calcularDistancia(lat1, lon1, lat2, lon2) {
    return getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
  }
}
