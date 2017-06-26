const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  undefined,
  {
    label: /Tips \/ On Board/,
    value: /(\d+) \/ (\d+)/,
    assert: 2
  },
  {
    label: /MVP/,
    value: /(.*?) \((\d+)\)/,
    assert: 2
  }
]

module.exports = {
  name: 'Token Keno',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(false)
        .setGoalCurrent(matches[1][0])
        .setGoalRemaining(matches[1][1])
        .setTipBiggest(matches[2][0], matches[2][1])
        .build();
  }
}