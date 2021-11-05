

function add_cars(element_id, cars){
    var element = document.getElementById(element_id);
    
    if(cars > 5) {
        cars = 5;
    }
    for(let i = 0; i < cars; i++){
        var a_car = document.createElement('c-id-i'); 
        a_car.innerHTML = "<i class='fas fa-car fa-sm'></i>";
        element.appendChild(a_car);
    }
}


function add_stars(element_id, stars){
    var element = document.getElementById(element_id);
    
    if(stars > 5) {
        stars = 5;
    }

    for(let i = 0; i < stars; i++){
        var a_star = document.createElement('s-id-i');
        a_star.innerHTML = "<i class='fas fa-star fa-sm' style='color: orange;'></i>";
        element.appendChild(a_star);
    }

    for(let i = 0; i < 5 - stars; i++){
        var a_star = document.createElement('s-id-i');
        a_star.innerHTML = "<i class='far fa-star fa-sm' style='color: orange;'></i>";
        element.appendChild(a_star);
    }
}