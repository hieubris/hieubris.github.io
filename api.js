const URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

var request = new XMLHttpRequest();
request.open('GET', URL);
request.send();
request.onload = ()=> {
    console.log(JSON.parse(request.reponse));
}