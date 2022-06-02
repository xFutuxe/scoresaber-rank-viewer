$(document).ready(function () {

  let url = 'https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/players/count';
  let storedText;

  fetch(url)
    .then(function (response) {
      response.text().then(function (text) {
        storedText = text;
        document.getElementById("playerCount").innerHTML = storedText
      });
    });


  scoreSaberOnLoad();
  // Allows you to press enter instead of using the submit button
  $('input').keyup(function (event) {
    if (event.which === 13) {
      scoreSaber();

    }
  });

  //On site load ends below here
});

// Picks a random ID from array
let scoresaberIDs = ['76561198333869741', '76561198045386379', '76561198308438667', '76561198309885407', '2769016623220259', '76561198205370764', '76561198180044686']
const random = Math.floor(Math.random() * scoresaberIDs.length);
console.log(scoresaberIDs[random]);

// Functions calls when Submit button is pressed on site
function scoreSaberOnLoad() {


  // Fetches API from url
  url = fetch('https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/player/' + scoresaberIDs[random] + '/full')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // Collect Data from ScoreSaber API with submitted ID
      console.log(myJson.name); // Player Name
      document.getElementById("name").innerHTML = myJson.name + " | " + myJson.country
      document.getElementById("profileLink").href = "https://www.scoresaber.com/u/" + scoresaberIDs[random]
      let globalRank = myJson.rank
      let countryRank = myJson.countryRank
      let pp = myJson.pp
      let roundedPP = Math.trunc(pp)
      let playerCountry = myJson.country
      let totalScore = myJson.totalScore
      let totalRankedScore = myJson.scoreStats.totalRankedScore
      let accuracy = myJson.scoreStats.averageRankedAccuracy
      let profilePicture = myJson.profilePicture
      document.getElementById("profilePicture").src = profilePicture

      // setTimeout to declare animation for odometer 
      setTimeout(function () {
        document.getElementById("globalRank").innerHTML = globalRank;
      }, 100);
      setTimeout(function () {
        document.getElementById("countryRank").innerHTML = countryRank;
      }, 100);
      setTimeout(function () {
        document.getElementById("playerPP").innerHTML = roundedPP;
      }, 100);
      setTimeout(function () {
        document.getElementById("playerTotalRankedScore").innerHTML = totalRankedScore;
      }, 100);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}



// Functions calls when Submit button is pressed on site
function scoreSaber() {

  //  Fetches value from input box
  let scoreSaberId = document.getElementById("scoreSaberID").value

  // Fetches API from url
  url = fetch('https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/player/' + scoreSaberId + '/full')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      // Collect Data from ScoreSaber API with submitted ID
      console.log(myJson.name); // Player Name
      document.getElementById("name").innerHTML = myJson.name + " | " + myJson.country
      document.getElementById("profileLink").href = "https://www.scoresaber.com/u/" + scoreSaberId
      let globalRank = myJson.rank
      let countryRank = myJson.countryRank
      let pp = myJson.pp
      let playerCountry = myJson.country
      let totalScore = myJson.totalScore
      let totalRankedScore = myJson.scoreStats.totalRankedScore
      let accuracy = myJson.scoreStats.averageRankedAccuracy
      let profilePicture = myJson.profilePicture
      document.getElementById("profilePicture").src = profilePicture

      // setTimeout to declare animation for odometer 
      setTimeout(function () {
        document.getElementById("globalRank").innerHTML = globalRank;
      }, 100);
      setTimeout(function () {
        document.getElementById("countryRank").innerHTML = countryRank;
      }, 100);
      setTimeout(function () {
        document.getElementById("playerPP").innerHTML = pp;
      }, 100);
      setTimeout(function () {
        document.getElementById("playerTotalRankedScore").innerHTML = totalRankedScore;
      }, 100);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}