'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-tip-menu');

const PANEL = [
  {
    label: 'Goal',
    value: '64/100(864)',
  },
  {
    label: 'Tip Menu is Active!',
    value: 'Type /menu to see it',
  },
  {
    label: '',
    value: 'Tip 50tks For "boob flash"',
  },
];

describe('Transform::Tip_Menu', () => {
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
    expect(results.goalAmount).to.equal(100);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(64);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(36);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(8);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(864);
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
