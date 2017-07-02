'use strict';

const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  {
    label: /Tip Received \/ Goal/,
    value: /(\d+) \/ (\d+)/,
    assert: 2,
  },
  {
    label: /Highest Tip/,
    value: /(.*?) \((\d+)\)/,
    assert: 2,
  },
  {
    label: /Latest Tip Received/,
    value: /(.*?) \((\d+)\)/,
    assert: 2,
  },
];

module.exports = {
  name: 'Tip Goal',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return null;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(false)
        .setGoalCurrent(matches[0][0])
        .setGoalAmount(matches[0][1])
        .setTipBiggest(matches[1][0], matches[1][1])
        .setTipRecent(matches[2][0], matches[2][1])
        .build();
  },
};
