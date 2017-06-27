const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX_MULTI = [
  {
    label: null,
    value: /Goals Reached: (\d+) ● Current: (\d+) \/ (\d+)/,
    assert: 3
  },
  undefined,
  {
    label: null,
    value: /Remaining for Goal #\d+: (\d+) ● Total: (\d+)/,
    assert: 2
  }
]

const REGEX_SINGLE = [
  {
    label: null,
    value: /Tips \/ Goal ● (\d+) \/ (\d+)/,
    assert: 2
  },
  undefined,
  {
    label: null,
    value: /Remaining for Goal: (\d+)/,
    assert: 1
  }
]

module.exports = {
  name: 'CrazyGoal',
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
          .setGoalRemaining(matches[2][0])
          .setGoalTotal(matches[2][1])
          .build();
    }

    matches = matcher(REGEX_SINGLE, panel);
    if (matches) {
      return (new Builder())
          .setHasGoal(true)
          .setHasMultipleGoals(false)
          .setGoalCurrent(matches[0][0])
          .setGoalAmount(matches[0][1])
          .setGoalRemaining(matches[2][0])
          .build();
    }
  }
}