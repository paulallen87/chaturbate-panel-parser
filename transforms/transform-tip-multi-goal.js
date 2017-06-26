const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  {
    label: /Received \/ Goal \(Total\)/,
    value: /(\d+) \/ (\d+) \((\d+)\)/,
    assert: 3
  },
  {
    label: /Highest Tip/,
    value: /(.*?) \((\d+)\)/,
    assert: 2
  },
  {
    label: /Latest Tip Received/,
    value: /(.*?) \((\d+)\)/,
    assert: 2
  }
]

module.exports = {
  name: 'Tip Multi-Goal',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(true)
        .setGoalCurrent(matches[0][0])
        .setGoalAmount(matches[0][1])
        .setGoalTotal(matches[0][2])
        .setTipBiggest(matches[1][0], matches[1][1])
        .setTipRecent(matches[2][0], matches[2][1])
        .build();
  }
}