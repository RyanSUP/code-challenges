/*
competitions = [
  ['home', 'away']
]

results = [0,1,0] which index won each round
1 = home won
*/

// THis runs in O(n) with a space complexity if O(k) where k is the number of teams
function tournamentWinner(competitions, results) {
  // Make a map of the teams
    // Dont map the whole teams arrays, only winners
  let scoreboard = {}
  // loop through the results
  for(let i = 0; i < results.length; i++) {
    // add score to winning team
    let winner
    if(results[i]) {
      winner = competitions[i][0]
    } else {
      winner = competitions[i][1]
    }
    console.log(winner)
    if(winner in scoreboard) {
      console.log('Winner is in the scoreboard already')
      scoreboard[winner] += 3
    } else {
      scoreboard[winner] = 3
      console.log('Adding winner to scoreboard')
    }
  }
  console.log(scoreboard)
  // find the team with the most wins
  let winner = null
  let highScore = 0
  for(let team in scoreboard) {
    if(scoreboard[team] > highScore) {
      winner = team
      highScore = scoreboard[winner]
    }
  }
  // return team with most wins
  return winner;
}

let testA =  [
  ["AlgoMasters", "FrontPage Freebirds"],
  ["Runtime Terror", "Static Startup"],
  ["WeC#", "Hypertext Assassins"],
  ["AlgoMasters", "WeC#"],
  ["Static Startup", "Hypertext Assassins"],
  ["Runtime Terror", "FrontPage Freebirds"],
  ["AlgoMasters", "Runtime Terror"],
  ["Hypertext Assassins", "FrontPage Freebirds"],
  ["Static Startup", "WeC#"],
  ["AlgoMasters", "Static Startup"],
  ["FrontPage Freebirds", "WeC#"],
  ["Hypertext Assassins", "Runtime Terror"],
  ["AlgoMasters", "Hypertext Assassins"],
  ["WeC#", "Runtime Terror"],
  ["FrontPage Freebirds", "Static Startup"]
]


console.log(tournamentWinner(testA, [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]))
