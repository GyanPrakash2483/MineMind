const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

const port = 8000;

app.use(express.static('../client/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    // Access data from the POST request body
    console.log('Received form data:', req.body);

    request.post({
        headers: {'Content-Type': 'application/json'},
        url: 'http://localhost:5005/webhooks/rest/webhook',
        body: JSON.stringify(req.body)
    }, (error, response, body) => {
        console.log(JSON.parse(body)[0].text)
        res.send(JSON.parse(body)[0].text);
    });

}); 










app.listen(port, () => {
    console.log('Listening on port ' + port);
});