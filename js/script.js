// Font resizes depending on text length (Not really effecient as it doesn't scale up font but its fine for now)
function resize_to_fit2() {
  var fontsize = $('#name').css('font-size');
  $('#name').css('fontSize', parseFloat(fontsize) - 1);

  if ($('#name').height() >= 60) {
    resize_to_fit2();
  }
}

function resize_to_fit() {
  var fontsize = $('#playerTotalRankedScore').css('font-size');
  $('#playerTotalRankedScore').css('fontSize', parseFloat(fontsize) - 1);

  if ($('#playerTotalRankedScore').height() >= 30) {
    resize_to_fit();
  }

}


// Functions calls when Submit button is pressed on site
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
    document.getElementById("name").innerHTML = myJson.name + " | " + myJson.country
    resize_to_fit2();
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
      document.getElementById("playerTotalRankedScore").innerHTML = totalRankedScore;
    }, 100);
    resize_to_fit();
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}