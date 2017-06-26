'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-crazygoal');

const PANEL = [
  {
    label: '', 
    value: 'Goals Reached: 1 ● Current: 5 / 350'
  },
  {
    label: '',
    value: 'Goal Progress: ▒ ░ ░ ░ ░ ░ ░ ░ ░ ░  ● 1%'
  },
  {
    label: '',
    value: 'Remaining for Goal #2: 345 ● Total: 355'
  }
]

describe('Transform::CrazyGoal', () => {
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
    expect(this.results.goalAmount).to.equal(350);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(5);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(345);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(1);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(355);
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