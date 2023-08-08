const URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';


function handleResult(result) {
    resultData = JSON.parse(result);

    console.log("handling response");
    console.log(resultData);
}

$(document).ready(function() {
    $.ajax({
        url: URL,
        type: "GET",
        success: (result) => handleResult(result)
    })
})