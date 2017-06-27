const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX_MULTI = [
  {
    label: /Received \/ Goal \(Total Tokens\)/,
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
  name: 'Reset Goals',
  transform: (panel) => {
    let matches = null;

    matches = matcher(REGEX_MULTI, panel);
    if (matches) {
      return (new Builder())
          .setHasGoal(true)
          .setHasMultipleGoals(true)
          .setGoalCurrent(matches[0][0])
          .setGoalAmount(matches[0][1])
          .setGoalTotal(matches[0][2])
          .setGoalCount(matches[1][0])
          .build();
    }
  }
}