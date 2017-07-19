'use strict';

const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX_MULTI = [
  {
    label: null,
    value: /Goal #(\d+) : (\d+) \/ (\d+) \[ (\d+) Remaining \] \((\d+)\)/,
    assert: 5,
  },
  undefined,
  {
    label: null,
    value: /Best.*?"(.*?)".*?(\d+)/,
    assert: 2,
  },
];

const REGEX_MULTI_NO_TOTAL = [
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

const REGEX_SINGLE = [
  {
    label: null,
    value: /(\d+) .*? - (\d+) .*? Received/,
    assert: 2,
  },
  {
    label: null,
    value: /Best.*?"(.*?)".*?(\d+)/,
    assert: 2,
  },
  {
    label: null,
    value: /Last.*?"(.*?)".*?(\d+)/,
    assert: 2,
  },
];

module.exports = {
  name: 'Lovense-Me',
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
          .setGoalRemaining(matches[[0][3]])
          .setGoalTotal(matches[0][4])
          .setTipBiggest(matches[2][0], matches[2][1])
          .build();
    }

    matches = matcher(REGEX_MULTI_NO_TOTAL, panel);
    if (matches) {
      return (new Builder())
          .setHasGoal(true)
          .setHasMultipleGoals(true)
          .setGoalCount(matches[0][0])
          .setGoalCurrent(matches[0][1])
          .setGoalAmount(matches[0][2])
          .setGoalRemaining(matches[[0][3]])
          .setTipBiggest(matches[2][0], matches[2][1])
          .build();
    }

    matches = matcher(REGEX_SINGLE, panel);
    if (matches) {
      return (new Builder())
          // Probably 'true', but need to check the subject
          .setHasGoal(false)
          .setHasMultipleGoals(false)
          .setTipperCount(matches[0][0])
          .setGoalCurrent(matches[0][1])
          .setTipBiggest(matches[1][0], matches[1][1])
          .setTipRecent(matches[2][0], matches[2][1])
          .build();
    }

    return null;
  },
};
