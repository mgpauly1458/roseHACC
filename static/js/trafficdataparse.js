async function getTraffic(date){
    url = '/getTrafficData/' + String(date)
    return $.ajax({
        url: url,
        type: 'GET',
        cache: false,
        datatype: 'json',
    }).responseJSON
};

