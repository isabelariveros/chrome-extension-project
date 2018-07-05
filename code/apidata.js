function getSummId(summName){
    console.log("Here is the summoner name used: ", summName);
    fetch("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summName + "?api_key=RGAPI-861be359-25cf-4cac-a289-732558d50429", {
        headers: {'Access-Control-Allow-Origin': '*'},
        method: 'GET'
    })
        .then(results => {
            console.log(results);
        })

}