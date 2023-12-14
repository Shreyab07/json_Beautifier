document.getElementById('beautifyBtn').addEventListener('click', function () {
    var jsonInput = document.getElementById('jsonInput').value;
    var beautifiedJson = beautifyJson(jsonInput);

    if (beautifiedJson) {
        document.getElementById('beautifiedJson').innerText = beautifiedJson;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Invalid JSON! Please enter valid JSON.');
    }
});

function beautifyJson(inputJson) {
    try {
        var parsedJson = JSON.parse(inputJson);
        return JSON.stringify(parsedJson, null, 4);
    } catch (error) {
        console.error(error);
        return null;
    }
}
