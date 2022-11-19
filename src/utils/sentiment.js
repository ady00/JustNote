const fs = require('fs');

const deepai = require('deepai'); 

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function sentiment() {
    var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: "i hate kids and hate myself",
    });
    return resp;
})()