const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  {
    label: /Received \/ Goal \(Total\)/,
    value: /(\d+) \/ (\d+) \((\d+)\)/,
    assert: 3
  },
  {
    label: /Hit Goal For/,
    value: /(\d+) times/,
    assert: 1
  }
]

module.exports = {
  name: 'Auto-Reset Tip Goal',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(true)
        .setGoalCount(matches[1][0])
        .setGoalCurrent(matches[0][0])
        .setGoalAmount(matches[0][1])
        .setGoalTotal(matches[0][2])
        .build();
  }
}