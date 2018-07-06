/* eslint no-console: "off" */
const express = require('express');
const fetch = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const router = express.Router();
let summName = "monomania";



router.post("/lolapi", function(req,res){
    function callApi() {
    summName = req.body.summName;
    let apiUrl = "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summName + "?api_key=RGAPI-c3e11b91-57ec-41e8-b9a7-5f043a294483";
    return new Promise((resolve, reject) => {
        fetch(apiUrl, function(error, response, body){
            console.log("body", body);
            //console.log("response", response)
            // return res.status("200").json(body)
            resolve(body);
        })
    })
}
callApi().then(results => {
    console.log(results)
    return results;
})
})

app.use(express.static('code'));
app.use("/", router);

app.listen(3000, () => {
  console.log('express-handlebars example server listening on: 3000');
});