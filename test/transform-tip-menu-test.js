'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-tip-menu');

const PANEL = [
  {
    label: 'Goal',
    value: '64/100(864)'
  },
  {
    label: 'Tip Menu is Active!',
    value: 'Type /menu to see it'
  },
  {
    label: '',
    value: 'Tip 50tks For "boob flash"'
  }
]

describe('Transform::Tip_Menu', () => {
  beforeEach(() => {
    this.results = transformer.transform(PANEL);
  })

  it('should set hasGoal', () => {
    expect(this.results.hasGoal).to.equal(true);
  });

  it('should set hasMultipleGoals', () => {
    expect(this.results.hasMultipleGoals).to.equal(true);
  });

  it('should set goalAmount', () => {
    expect(this.results.goalAmount).to.equal(100);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(64);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(36);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(8);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(864);
  });

  it('should NOT set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal(null);
  });

  it('should NOT set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(null);
  });

  it('should NOT set tipRecentUsername', () => {
    expect(this.results.tipRecentUsername).to.equal(null);
  });

  it('should NOT set tipRecentAmount', () => {
    expect(this.results.tipRecentAmount).to.equal(null);
  });

  it('should NOT set tipperCount', () => {
    expect(this.results.tipperCount).to.equal(null);
  });

});