
function scoreSaber() {
    //  Fetches value from input box
    var scoreSaberId = document.getElementById("scoreSaberID").value

  // Fetches API from url
    url = fetch('https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/player/'+scoreSaberId+'/full')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
      // Collect Data from ScoreSaber API with submitted ID
    console.log(myJson.name); // Player Name
    document.getElementById("name").innerHTML = myJson.name
    var globalRank = myJson.rank
    var countryRank = myJson.countryRank
    var pp = myJson.pp
    var playerCountry = myJson.country
    var totalScore = myJson.totalScore
    var totalRankedScore = myJson.scoreStats.totalRankedScore
    var accuracy = myJson.scoreStats.averageRankedAccuracy
    var profilePicture = myJson.profilePicture
    document.getElementById("profilePicture").src = profilePicture

    // setTimeout to declare animation for odometer 
    setTimeout(function(){
      document.getElementById("globalRank").innerHTML = globalRank;
    }, 100);
    setTimeout(function(){
      document.getElementById("countryRank").innerHTML = countryRank;
    }, 100);
    setTimeout(function(){
      document.getElementById("playerPP").innerHTML = pp;
    }, 100);
    setTimeout(function(){
      document.getElementById("playerTotalScore").innerHTML = totalScore;
    }, 100);
    setTimeout(function(){
      document.getElementById("playerTotalRankedScore").innerHTML = totalRankedScore;
    }, 100);
    
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}