const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  undefined,
  undefined,
  {
    label: /Goals Reached: (\d+)/,
    value: /Current: (\d+) \/ (\d+)/,
    assert: 3
  }
]

module.exports = {
  name: 'CrazyGoalz',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(true)
        .setGoalCount(matches[2][0])
        .setGoalCurrent(matches[2][1])
        .setGoalAmount(matches[2][2])
        .build();
  }
}