'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-auto-reset-tip-goal');

const PANEL = [
  {
    label: 'Received / Goal (Total)',
    value: '33 / 50 (2083)',
  },
  {
    label: 'Hit Goal For',
    value: '41 times',
  },
  {
    label: 'Last Reached',
    value: '2 minutes ago',
  },
];

describe('Transform::Auto-Reset_Tip_Goal', () => {
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
    expect(results.goalAmount).to.equal(50);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(33);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(17);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(41);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(2083);
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
