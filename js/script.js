$(document).ready(function () {

  const url = 'https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/players/count';
  let storedText;

  fetch(url)
    .then(function (response) {
      response.text().then(function (text) {
        storedText = Number(text).toLocaleString();
        document.getElementById("playerCount").innerHTML = storedText + " players on Score Saber"
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

// Functions calls when Submit button is pressed on site
function scoreSaberOnLoad() {

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 100)
  console.log(rndInt)

  // Fetches API from url
  url = fetch('https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/players?page='+rndInt+'&withMetadata=true')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {

      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      const rndInt = randomIntFromInterval(0, 50)
      console.log(rndInt)

      console.log(myJson.players[rndInt].id)
      console.log(myJson.players[rndInt].rank)
      let globalRank = myJson.players[rndInt].rank
      let countryRank = myJson.players[rndInt].countryRank
      let pp = myJson.players[rndInt].pp
      let totalScore = myJson.players[rndInt].scoreStats.totalScore
      let totalRankedScore = myJson.players[rndInt].scoreStats.totalRankedScore
      let profilePicture = myJson.players[rndInt].profilePicture
      document.getElementById("profilePicture").src = profilePicture
      document.getElementById("name").innerHTML = myJson.players[rndInt].name + " | " + myJson.players[rndInt].country
      document.getElementById("profileLink").href = "https://www.scoresaber.com/u/" + myJson.players[rndInt].id
      setTimeout(function () {
        document.getElementById("globalRank").innerHTML = globalRank;
      }, 100);
      setTimeout(function () {
        document.getElementById("countryRank").innerHTML = countryRank;
      }, 100);
      setTimeout(function () {
        document.getElementById("playerPP").innerHTML = Math.round(pp);
      }, 100);
      setTimeout(function () {
        document.getElementById("playerTotalRankedScore").innerHTML = totalRankedScore;
      }, 100);

    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
      
    });
}


// Functions calls when Submit button is pressed on site
function scoreSaber() {

  //  Fetches value from input box
  let scoreSaberId = document.getElementById("scoreSaberID").value

  if (isNaN(scoreSaberId) || scoreSaberId == "") {
    document.getElementById("alertError").style.visibility = "visible"
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById("alertError").style.visibility = "hidden"
        alert("Please input a ScoreSaber ID. Found at: https://scoresaber.com/u/{id}")
     }
     setTimeout(function(){
      document.getElementById("alertError").style.visibility = "hidden"
    }, 5000);

  } else {

     // Fetches API from url
  url = fetch('https://radiant-dawn-45124.herokuapp.com/https://scoresaber.com/api/player/' + scoreSaberId + '/full')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    // Collect Data from ScoreSaber API with submitted ID
    document.getElementById("alertError").style.visibility = "hidden"
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
    let badgesArray = myJson.badges
    if (typeof badgesArray !== 'undefined' && badgesArray.length > 0) {
      // the array is defined and has at least one element
      if (badgesArray.length == 1) {
        let playerBadgeImage1 = myJson.badges[0].image
        document.getElementById("image1").src = playerBadgeImage1
        document.getElementById("image1").style.visibility = "visible";
        document.getElementById("image2").style.visibility = "hidden";
        document.getElementById("image3").style.visibility = "hidden";
        document.getElementById("image4").style.visibility = "hidden";
      }

      if (badgesArray.length == 2) {
        let playerBadgeImage1 = myJson.badges[0].image
        let playerBadgeImage2 = myJson.badges[1].image
        document.getElementById("image1").src = playerBadgeImage1
        document.getElementById("image2").src = playerBadgeImage2
        document.getElementById("image1").style.visibility = "visible";
        document.getElementById("image2").style.visibility = "visible";
        document.getElementById("image3").style.visibility = "hidden";
        document.getElementById("image4").style.visibility = "hidden";
      }

      if (badgesArray.length == 3) {
        let playerBadgeImage1 = myJson.badges[0].image
        let playerBadgeImage2 = myJson.badges[1].image
        let playerBadgeImage3 = myJson.badges[2].image
        document.getElementById("image1").src = playerBadgeImage1
        document.getElementById("image2").src = playerBadgeImage2
        document.getElementById("image3").src = playerBadgeImage3
        document.getElementById("image1").style.visibility = "visible";
        document.getElementById("image2").style.visibility = "visible";
        document.getElementById("image3").style.visibility = "visible";
        document.getElementById("image4").style.visibility = "hidden";
      } 

      if (badgesArray.length >= 4) {
        let playerBadgeImage1 = myJson.badges[0].image
        let playerBadgeImage2 = myJson.badges[1].image
        let playerBadgeImage3 = myJson.badges[2].image
        let playerBadgeImage4 = myJson.badges[3].image
        document.getElementById("image1").style.visibility = "visible";
        document.getElementById("image2").style.visibility = "visible";
        document.getElementById("image3").style.visibility = "visible";
        document.getElementById("image4").style.visibility = "visible";
        document.getElementById("image1").src = playerBadgeImage1
        document.getElementById("image2").src = playerBadgeImage2
        document.getElementById("image3").src = playerBadgeImage3
        document.getElementById("image4").src = playerBadgeImage4
      }


    } else {
      document.getElementById("image1").style.visibility = "hidden";
      document.getElementById("image2").style.visibility = "hidden";
      document.getElementById("image3").style.visibility = "hidden";
      document.getElementById("image4").style.visibility = "hidden";
    }
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

}