/* eslint no-console: "off" */
const express = require('express');
const fetch = require('request');

const app = express();
const router = express.Router();

router.get("/lolapi", function(req,res){
    var summName = "monomania";
    fetch("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summName + "?api_key=RGAPI-861be359-25cf-4cac-a289-732558d50429", function(error, response, body){
        console.log(body);
        return res.json(body);
    })
})

app.use(express.static('code'));
app.use("/", router);

app.listen(3000, () => {
  console.log('express-handlebars example server listening on: 3000');
});