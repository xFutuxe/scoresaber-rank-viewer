function scoreSaber() {
    //  Fetches value from input box
    var scoreSaberId = document.getElementById("scoreSaberID").value


    url = fetch('https://new.scoresaber.com/api/player/'+scoreSaberId+'/full')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
      // Collect Data from ScoreSaber API with submitted ID
    console.log(myJson.playerInfo.playerName); // Player Name
    document.getElementById("name").innerHTML = myJson.playerInfo.playerName


  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}
