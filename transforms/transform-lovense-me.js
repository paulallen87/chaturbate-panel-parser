const Builder = require('../builder');
const matcher = require('../matcher');

const REGEX = [
  {
    label: null,
    value: /(\d+) .*? - (\d+) .*? Received/,
    assert: 2
  },
  {
    label: null,
    value: /Best.*?"(.*?)".*?(\d+)/,
    assert: 2
  },
  {
    label: null,
    value: /Last.*?"(.*?)".*?(\d+)/,
    assert: 2
  }
]

module.exports = {
  name: 'Lovense-Me',
  transform: (panel) => {
    const matches = matcher(REGEX, panel);

    if (!matches) return;

    return (new Builder())
        // probably 'true', but need to check the subject
        .setHasGoal(false)
        .setHasMultipleGoals(false)
        .setTipperCount(matches[0][0])
        .setGoalCurrent(matches[0][1])
        .setTipBiggest(matches[1][0], matches[1][1])
        .setTipRecent(matches[2][0], matches[2][1])
        .build();
  }
}