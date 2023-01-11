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
console.log('----------');

// <-- Coding Challenge #2 -->

// Task 1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// Task 2
const getAverageOdd = function () {
  const odds = Object.values(game.odds);
  const averageOdd = odds.reduce((acc, curr) => acc + curr, 0) / odds.length;
  return averageOdd.toFixed(2);
};
console.log(`Average Odd: ${getAverageOdd()}`);

// Task 3
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(`Odd of ${game[team] ?? 'draw'}: ${odd}\n`);
  const isDraw = team === 'draw' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${isDraw}: ${odd}`);
}

// Task 4 BONUS
const scorers = game.scored.reduce((acc, curr) => {
  return {
    ...acc,
    [curr]: (acc[curr] || 0) + 1
  };
}, {});
console.log(scorers);

// <-- Coding Challenge #3 -->
console.clear();

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card']
]);

// Task 1
console.log('Unique Events:');
const events = new Set([...gameEvents.values()]);
for (const uniqueEvent of events) console.log(uniqueEvent);

// Task 2
gameEvents.delete(64);

// Task 3
const minutes = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${minutes / gameEvents.size} minutes`
);

// Task 4
for (const [time, event] of gameEvents)
  console.log(
    `${time <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${time}: ${event}`
  );
