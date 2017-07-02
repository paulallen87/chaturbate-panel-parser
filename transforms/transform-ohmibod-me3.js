'use strict';

const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX_MULTI = [
  {
    label: null,
    value: /Goal #(\d+) : (\d+) \/ (\d+) \[ (\d+) Remaining \]/,
    assert: 4,
  },
  undefined,
  {
    label: null,
    value: /Best.*?"(.*?)".*?(\d+)/,
    assert: 2,
  },
];

module.exports = {
  name: 'Ohmibod-Me3',
  transform: (panel) => {
    let matches = null;

    matches = matcher(REGEX_MULTI, panel);
    if (matches) {
      return (new Builder())
          .setHasGoal(true)
          .setHasMultipleGoals(true)
          .setGoalCount(matches[0][0])
          .setGoalCurrent(matches[0][1])
          .setGoalAmount(matches[0][2])
          .setGoalRemaining(matches[0][3])
          .setTipBiggest(matches[2][0], matches[2][1])
          .build();
    }

    return null;
  },
};
