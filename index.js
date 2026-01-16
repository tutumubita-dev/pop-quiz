console.log(`hello`);

let score = 0;
console.log(score);

const useranswer1 = Number(
  prompt(`how cute are bunnies?
  1. very cute
  2. not cute
  `)
);

if (useranswer1 < 1 || useranswer1 > 2 || isNaN(useranswer1)) {
  alert(`pick 1 or 2`);
} else if (useranswer1 === 1) {
  score++;
}

const useranswer2 = Number(
  prompt(`how fluffy are bunnies?
  1. very fluffy
  2. not fluffy
  `)
);

if (useranswer2 < 1 || useranswer2 > 2 || isNaN(useranswer2)) {
  alert(`pick 1 or 2`);
} else if (useranswer2 === 1) {
  score++;
}

const useranswer3 = Number(
  prompt(`should i buy a bunny?
  1. yes
  2.no
  `)
);

if (useranswer3 < 1 || useranswer3 > 2 || isNaN(useranswer3)) {
  alert(`pick 1 or 2`);
} else if (useranswer3 === 1) {
  score++;
}
if (score <= 1) {
  alert(`Oh no you failed the bunny test :(`);
} else if (score >= 2) {
  alert(`Well done you, you belong in Jonathan's class`);
}
alert(`Final score: ${score} / 3`);
