const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";


function handleResult(result) {
    resultData = JSON.parse(result);

    console.log("handling response");
    console.log(resultData);
}

jQuery.ajax({
    dataType: "json",
    method: "GET",
    url: URL,
    success: (result) => handleResult(result)
});