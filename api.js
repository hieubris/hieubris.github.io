const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

function handleResult(result) {

    let table = document.getElementById('apitable').getElementsByTagName('tbody')[0];

    for (idx in result.data) {
        let row = table.insertRow();
        let yearCell = row.insertCell(0);
        let popCell = row.insertCell(1);

        yearCell.innerHTML = result.data[idx]['Year'];
        popCell.innerHTML = result.data[idx]['Population'].toLocaleString(undefined, {minimumFractionDigits: 2});
    }

    document.getElementById("apitable").style.visibility = "visible";
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