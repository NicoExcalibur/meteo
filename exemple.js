let city = "";
let apiId = '227cf9ef448c3934d2b5f68324038f5d';
 
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + apiId +'&units=metric';

let request = new XMLHttpRequest(); // créer un objet
request.open('GET', url); //
request.responseType = 'json';
request.send();

request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE ) {
      if (request.status === 200) {
        let response = request.response;
        let temp = response.main.temp;
        console.log(temp);

        document.querySelector('#temperature_label').textContent = temp;
        document.querySelector('#ville').textContent = city;
      }
    } else {
        alert('Un problème est survenu, revenez plus tard.');
    }
}

let changeCity = document.querySelector('#changer');
changeCity.addEventListener('click', () => {
    city = window.prompt('Entrez le nom de votre ville');
});

