var request = new XMLHttpRequest();

request.open('GET', 'https://datausa.io/api/data?drilldowns=Nation&measures=Population', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        console.log(data);
    }
    else {
        console.log('error');
    }
}

request.send();