'use strict';

const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX_ASCENDING = [
  {
    label: /Next Tip Needed/,
    value: /(\d+)/,
    assert: 1,
  },
  {
    label: /Last Tip From/,
    value: /^(.*?)$/,
    assert: 1,
  },
  {
    label: /Ascending/,
    value: /From (\d+) to (\d+)/,
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
  name: 'Sequence Tips',
  transform: (panel) => {
    let matches = null;

    matches = matcher(REGEX_ASCENDING, panel);
    if (matches) {

      const next = parseInt(matches[0][0], 10);
      const start = parseInt(matches[2][0], 10);
      const end = parseInt(matches[2][1], 10);
      const current = getTotal(start, next - 1);
      const remaining = getTotal(next, end);

      return (new Builder())
          .setHasGoal(true)
          .setHasMultipleGoals(false)
          .setGoalCurrent(current)
          .setGoalRemaining(remaining)
          .setTipRecent(matches[1][0], (next - 1))
          .build();
    }

    return null;
  },
};
