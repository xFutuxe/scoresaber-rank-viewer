
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

$(document).ready(function() {

   var screenSize = window.matchMedia("(max-width: 500px)")
   function checkScreenSize(screenSize) {
     if (screenSize == "max-width: 500px") {
       alert("Mobile does not work properly. For a better experience please vist on desktop.");
     }
   }
   checkScreenSize();
    scoreSaberOnLoad();
    // Allows you to press enter instead of using the submit button
    $('input').keyup(function(event) {
        if (event.which === 13)
        {
            scoreSaber();

        }
    });

    //On site load ends below here
});

    // Picks a random ID from array
    var scoresaberIDs = ['76561198333869741', '76561198045386379', '76561198308438667', '76561198309885407', '2769016623220259', '76561198205370764', '76561198180044686']
    const random = Math.floor(Math.random() * scoresaberIDs.length);
    console.log(scoresaberIDs[random]);

// Functions calls when Submit button is pressed on site
function scoreSaberOnLoad() {


  // Fetches API from url
    url = fetch('https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/player/'+scoresaberIDs[random]+'/full')
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