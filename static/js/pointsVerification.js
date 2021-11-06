
const success = (response)=>{
    console.log(response)
}
const error = (response)=>{
    console.log(response)
}

const getLocation = ()=>{
    navigator.geolocation.getCurrentPosition(success, error)
}

getLocation()