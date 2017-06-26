const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
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

module.exports = {
  name: 'CrazyGoal',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

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
}