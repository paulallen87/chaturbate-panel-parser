'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-tip-multi-goal');

const PANEL = [
  {
    label: 'Received / Goal (Total)',
    value: '96 / 350 (1661)',
  },
  {
    label: 'Highest Tip',
    value: 'absolutecoup (250)',
  },
  {
    label: 'Latest Tip Received',
    value: 'bluesgroof (5)',
  },
];

describe('Transform::Tip_Multi-Goal', () => {
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
    expect(results.goalCurrent).to.equal(96);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(254);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(4);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(1661);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('absolutecoup');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(250);
  });

  it('should set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal('bluesgroof');
  });

  it('should set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(5);
  });

  it('should NOT set tipperCount', () => {
    expect(results.tipperCount).to.equal(null);
  });

});
