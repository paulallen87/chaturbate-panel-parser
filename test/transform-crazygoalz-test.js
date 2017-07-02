'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-crazygoalz');

const PANEL = [
  {
    label: '\'CrazyGoalz\' Reset',
    value: 'by CrazyWare',
  },
  {
    label: 'Goal Progress',
    value: '███████░░░ 70%',
  },
  {
    label: 'Goals Reached: 107',
    value: 'Current: 7 / 10',
  },
];

describe('Transform::CrazyGoalz', () => {
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
    expect(results.goalAmount).to.equal(10);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(7);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(3);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(107);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(1077);
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
