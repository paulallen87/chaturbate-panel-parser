const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  {
    label: /Goal/,
    value: /(\d+)\/(\d+)\((\d+)\)/,
    assert: 3
  }
]

module.exports = {
  name: 'Tip Menu',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        .setHasGoal(true)
        .setHasMultipleGoals(true)
        .setGoalCurrent(matches[0][0])
        .setGoalAmount(matches[0][1])
        .setGoalTotal(matches[0][2])
        .build();
  }
}