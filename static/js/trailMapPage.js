
function open_menu(id, name, difficulty, rating, traffic, image){
    var menu = document.getElementById('hike-popout');
    menu.classList.remove('hidden');
    menu.classList.add('block')

    var list = document.getElementById('hike-list');
    list.classList.remove('block');
    list.classList.add('hidden');

    populate_hike_popout(name, difficulty, rating, traffic, 'Hike Description', image);
}

function populate_hike_popout(hike_name, hike_difficulty, hike_rating, hike_traffic, hike_description, hike_image){
    
    console.log(hike_name, hike_difficulty, hike_traffic, hike_description, hike_image);
    var name = document.getElementById('hike_title');
    name.innerHTML = hike_name;

    var image = document.getElementById('hike_image');
    image.src = hike_image;

    var difficulty = document.getElementById('hike_difficulty');
    difficulty.innerHTML = "Difficulty " + hike_difficulty + " / 5";

    var traffic = document.getElementById('hike_traffic');
    traffic.replaceChildren();
    add_cars('hike_traffic', hike_traffic);
    
    
    var rating = document.getElementById('hike_rating');
    rating.replaceChildren();
    add_stars('hike_rating', hike_rating);

    var description = document.getElementById('hike_description');
    description.innerHTML = hike_description;


    
}

function open_list(id) {
    var menu = document.getElementById('hike-list');
    menu.classList.remove('hidden');
    menu.classList.add('block')

    var list = document.getElementById('hike-popout');
    list.classList.remove('block');
    list.classList.add('hidden');
}

function add_cars(element_id, cars){    
    if(cars > 5) {
        cars = 5;
    }
    tile_elements(element_id, 'c-', cars, "<i class='fas fa-car fa-sm'></i>");
}

function add_stars(element_id, stars){
    if(stars > 5) {
        stars = 5;
    }
    tile_elements(element_id, 's-', stars, "<i class='fas fa-star fa-sm' style='color: orange;'></i>");
    tile_elements(element_id, 's-', 5 - stars, "<i class='far fa-star fa-sm' style='color: orange;'></i>");
}

function tile_elements(element_id, prefix, n, inner_html){
    var element = document.getElementById(element_id);
    for(let i = 0; i < n; i++){
        var e = document.createElement(prefix + '-id-' + i);
        e.innerHTML = inner_html;
        element.appendChild(e);
    }
}