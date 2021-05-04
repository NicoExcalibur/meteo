let chosenCity;

if("geolocation" in navigator) {
    // Récupération de la position
    navigator.geolocation.watchPosition((position) => {
        
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + 'appid=227cf9ef448c3934d2b5f68324038f5d&units=metric';
        console.log(url);

        let request = new XMLHttpRequest(); // créer un objet
    
        request.open('GET', url); //
        request.responseType = 'json';
        request.send();
    
        request.onload = function() {
            if (request.readyState === XMLHttpRequest.DONE ) {
                if (request.status === 200) {
                    let response = request.response;
                    let temp = response.main.temp;
                    let city = response.name;
                    // console.log(temp);
    
                    document.querySelector('#temperature_label').textContent = temp;
                    document.querySelector('#ville').textContent = city;
                }
            } else {
                alert('Un problème est survenu, revenez plus tard.');
            }
        }
    }, error, options);
    
} else {
    chosenCity = 'Paris';
    getTemperature(chosenCity);
}

var options = {
    enableHighAccuracy: true
}

let changeCity = document.querySelector('#changer');
changeCity.addEventListener('click', () => {
    chosenCity = prompt('Entrez le nom de votre ville');
    getTemperature(chosenCity);
});

function error() {
    chosenCity = "Paris";
    getTemperature(chosenCity);
}

function getTemperature(city) {
    // get your own api key at https://openweathermap.org/api
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=227cf9ef448c3934d2b5f68324038f5d&units=metric';
    
    let request = new XMLHttpRequest(); // créer un objet

    request.open('GET', url); //
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if (request.readyState === XMLHttpRequest.DONE ) {
            if (request.status === 200) {
                let response = request.response;
                let temp = response.main.temp;
                let city = response.name;
                // console.log(temp);

                document.querySelector('#temperature_label').textContent = temp;
                document.querySelector('#ville').textContent = city;
            }
        } else {
            alert('Un problème est survenu, revenez plus tard.');
        }
    }
}

