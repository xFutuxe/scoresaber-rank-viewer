

function scoreSaber() {
    //  Fetches value from input box
    var scoreSaberId = document.getElementById("scoreSaberID").value


    url = fetch('https://scoresaber.com/api/player/'+scoreSaberId+'/full')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
      // Collect Data from ScoreSaber API with submitted ID
    console.log(myJson.name); // Player Name
    document.getElementById("name").innerHTML = myJson.name
    var globalRank = myJson.rank
    var countryRank = myJson.countryRank
    setTimeout(function(){
      document.getElementById("globalRank").innerHTML = globalRank;
    }, 100);
    setTimeout(function(){
      document.getElementById("countryRank").innerHTML = countryRank;
    }, 100);
    
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}