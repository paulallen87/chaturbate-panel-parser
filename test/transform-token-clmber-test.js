'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-token-climber');

const PANEL = [
  {
    label: 'Current Level',
    value: '67 (of 1 to 78)',
  },
  {
    label: 'Additional Tips',
    value: '55',
  },
  {
    label: 'Highest Total Tips',
    value: 'scaryeire79(2000)',
  },
];

describe('Transform::Token_Climber', () => {
  let results = [];

  beforeEach(() => {
    results = transformer.transform(PANEL);
  });

  it('should set hasGoal', () => {
    expect(results.hasGoal).to.equal(true);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(results.hasMultipleGoals).to.equal(false);
  });

  it('should set goalAmount', () => {
    expect(results.goalAmount).to.equal(3148);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(2333);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(815);
  });

  it('should NOT set goalCount', () => {
    expect(results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('scaryeire79');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(2000);
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
