function getSummId(summName){
    console.log("Here is the summoner name used: ", summName);
    fetch("http://localhost:3000/lolapi")
    .then(results => {
        console.log("hello", results.json());
    })
}
