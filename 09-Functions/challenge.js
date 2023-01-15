'use strict';

// <-- Coding Challenge #1 -->

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${[...this.options].join('\n')}\n(Write option number)`
    );

    if (this.options.map((option) => option.split(':')[0]).includes(input))
      this.answers[+input]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll requests are ${this.answers.join(', ')}`);
    }
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS
poll.displayResults.call({ answers: [5, 2, 3] }); // [5, 2, 3]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // Poll requests are 5, 2, 3

// <-- Coding Challenge #2 -->

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
