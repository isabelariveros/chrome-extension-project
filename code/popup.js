function getSummId(summName){
  console.log("Here is the summoner name used: ", summName);
fetch("http://localhost:3000/lolapi", {
  body: JSON.stringify({summName}),
  method: "POST",
  headers: {"Content-Type": "application/json"}
}).then(response => {
      // return response.json().id;
      console.log(response);
  })
}