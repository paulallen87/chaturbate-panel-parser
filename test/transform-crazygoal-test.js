'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-crazygoal');

const PANEL = [
  {
    label: '',
    value: 'Goals Reached: 1 ● Current: 5 / 350',
  },
  {
    label: '',
    value: 'Goal Progress: ▒ ░ ░ ░ ░ ░ ░ ░ ░ ░  ● 1%',
  },
  {
    label: '',
    value: 'Remaining for Goal #2: 345 ● Total: 355',
  },
];

describe('Transform::CrazyGoal', () => {
  let results = [];

  beforeEach(() => {
    results = transformer.transform(PANEL);
  });

  it('should set hasGoal', () => {
    expect(results.hasGoal).to.equal(true);
  });

  it('should set hasMultipleGoals', () => {
    expect(results.hasMultipleGoals).to.equal(true);
  });

  it('should set goalAmount', () => {
    expect(results.goalAmount).to.equal(350);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(5);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(345);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(1);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(355);
  });

  it('should NOT set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal(null);
  });

  it('should NOT set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(null);
  });

  it('should NOT set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal(null);
  });

  it('should NOT set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(null);
  });

  it('should NOT set tipperCount', () => {
    expect(results.tipperCount).to.equal(null);
  });

});
