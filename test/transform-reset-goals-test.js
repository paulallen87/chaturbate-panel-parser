'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-reset-goals');

const PANEL = [
  {
    label: 'Received / Goal (Total Tokens)',
    value: '149 / 500 (4649)',
  },
  {
    label: 'Hit Goal For',
    value: '9 times',
  },
  {
    label: '',
    value: '',
  },
];

describe('Transform::Reset_Goals', () => {
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
    expect(results.goalAmount).to.equal(500);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(149);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(351);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(9);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(4649);
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
