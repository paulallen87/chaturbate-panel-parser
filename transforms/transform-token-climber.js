'use strict';

const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX_ASCENDING = [
  {
    label: /Current Level/,
    value: /(\d+) \(of (\d+) to (\d+)\)/,
    assert: 3,
  },
  {
    label: /Additional Tips/,
    value: /(\d+)/,
    assert: 1,
  },
  {
    label: /Highest Total Tips/,
    value: /(.*?)\((\d+)\)/,
    assert: 2,
  },
];

/**
 * Calculates the total value of a sequence.
 *
 * @param {number} start 
 * @param {number} end 
 * @return {number}
 */
const getTotal = (start, end) => {
  const keys = new Array(end - start + 1).keys();
  const values = Array.from(keys).map((i) => i + start);
  return values.reduce((current, next) => {
    return (current || 0) + next;
  });
};

module.exports = {
  name: 'Token Climber',
  transform: (panel) => {
    let matches = null;

    matches = matcher(REGEX_ASCENDING, panel);
    if (matches) {

      const level = parseInt(matches[0][0], 10);
      const start = parseInt(matches[0][1], 10);
      const end = parseInt(matches[0][2], 10);
      const additional = parseInt(matches[1][0], 10);

      const current = getTotal(start, level) + additional;
      const remaining = getTotal(level + 1, end) + (level - additional);

      return (new Builder())
          .setHasGoal(true)
          .setHasMultipleGoals(false)
          .setGoalCurrent(current)
          .setGoalRemaining(remaining)
          .setTipBiggest(matches[2][0], matches[2][1])
          .build();
    }

    return null;
  },
};
