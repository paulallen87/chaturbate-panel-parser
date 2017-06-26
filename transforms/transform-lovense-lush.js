const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  {
    label: null,
    value: /Goal #(\d+) : (\d+) \/ (\d+) \[ (\d+) Remaining \] \((\d+)\)/,
    assert: 5
  },
  {
    label: null,
    value: /Mvp - "(.*?)" - (\d+)/,
    assert: 2
  },
  {
    label: null,
    value: /Newest - "(.*?)" - (\d+)/,
    assert: 2
  }
]

module.exports = {
  name: 'Lovense Lush',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(true)
        .setGoalCount(matches[0][0])
        .setGoalCurrent(matches[0][1])
        .setGoalAmount(matches[0][2])
        .setGoalRemaining(matches[0][3])
        .setGoalTotal(matches[0][4])
        .setTipBiggest(matches[1][0], matches[1][1])
        .setTipRecent(matches[2][0], matches[2][1])
        .build();
  }
}