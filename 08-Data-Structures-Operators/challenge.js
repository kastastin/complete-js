'use strict';

// <-- Coding Challenge #1 -->

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2030',
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5
  }
};

// Task 1
const [players1, players2] = game.players;

// Task 2
const [gk, ...fieldPlayers] = players1;

// Task 3
const allPlayers = [...players1, ...players2];

// Task 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task 5
const { team1, draw, team2 } = game.odds;
// const {odds: {team1, draw, team2}} = game;

// Task 6
const printGoals = function (...playNumbers) {
  const counter = game.scored.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr] || 0) + 1
    };
  }, {});

  for (let player of playNumbers)
    console.log(`${player} scored ${counter[player] ?? 0} goals`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Task 7
const chooseWinner = function (odds) {
  const oddsValues = [...Object.values(odds)];
  const minOdd = Math.min(...oddsValues);
  const winnerTeam = Object.keys(odds).find((key) => odds[key] === minOdd);

  return game[winnerTeam];
};

console.log(`The team '${chooseWinner(game.odds)}' is more likely to win`);
