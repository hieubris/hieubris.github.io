const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

function handleResult(result) {

    let ret = "";

    for (idx in result.data) {
        ret += `${result.data[idx]['Year']} --- ${result.data[idx]['Population'].toLocaleString(undefined, {minimumFractionDigits: 2})}\n`;
    }

    document.getElementById("apiresult").innerHTML = ret;
}

function getData() {
    fetch(URL)
    .then(response => {
        return response.json();
    }).then(data => {
        handleResult(data);
    }).catch(error => {
        console.log(error);
    });
}

document.getElementById("apicall").onclick = getData;