const haversineDistance = ([lat1, lon1], [lat2, lon2], isMiles = false) => {
    const toRadian = angle => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const RADIUS_OF_EARTH_IN_KM = 6371;

    const dLat = distance(lat2, lat1);
    const dLon = distance(lon2, lon1);

    lat1 = toRadian(lat1);
    lat2 = toRadian(lat2);

    // Haversine Formula
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.asin(Math.sqrt(a));

    let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

    if (isMiles) {
      finalDistance /= 1.60934;
    }

    return finalDistance;
  };

hikeChecks = {
    "foodlandLL":[21.333544, -157.990561]
}

const success = (response)=>{
    console.log(response)
    coords = [response.coords.latitude, response.coords.longitude]
    console.log(haversineDistance(coords, foodlandLL, isMiles=true))
}
const error = (response)=>{
    console.log(response)
}

const getLocation = ()=>{
    navigator.geolocation.getCurrentPosition(success, error)
}

getLocation()