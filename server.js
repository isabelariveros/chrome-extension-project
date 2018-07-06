/* eslint no-console: "off" */
const express = require('express');
const fetch = require('request');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
let summName = "monomania";
let apiUrl = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summName + "?api_key=RGAPI-c3e11b91-57ec-41e8-b9a7-5f043a294483"

router.get("/lolapi", function(req,res){
    fetch(apiUrl, function(error, response, body){
        console.log("body", body);
        //console.log("response", response)
        return res.status("200").json(body)
    })
})
app.use(bodyParser.json());
app.use(express.static('code'));
app.use("/", router);

app.listen(3000, () => {
  console.log('express-handlebars example server listening on: 3000');
});