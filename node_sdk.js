// npm install snappyjs
var snappy = require('snappy')
var request = require('request');

var requestBody = [{
    "tm": 1480042727121,
    "stm": 1480042728943,
    "cs1": "user:526",
    "p": "/v2/projects/yYo1XPl1/charts",
    "s": "bb9aa471-3bc9-455b-b3a1-eeb9e0e9a0e3",
    "u": "7328beea-ee89-43a0-86cb-48879e90a67d",
    "ai": "${ai}",
    "t": "cstm",
    "d": "gta.growingio.com",
    "n": "create_chart",
    "e": {
        "account_id": "${ai}",
        "chart_dimension_count": 12,
        "chart_id": 9999,
        "chart_metric_count": 1,
        "chart_name": "node dim test",
        "chart_type": "line"
    }
}]

var data = JSON.stringify(requestBody);
console.log(data)

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
    }
}

snappy.compress(data, function(err, compressed) {
    var options = {
        url: 'https://api.growingio.com/custom/${ai}/events',
        headers: {
            'Content-Type': 'text/plain',
            'X-Client-Id': '${client id}'
        },
        body: compressed
    };
    request.post(options, callback);
})