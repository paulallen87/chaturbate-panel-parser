'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-crazygoalz');

const PANEL = [
  {
    label: '\'CrazyGoalz\' Reset', 
    value: 'by CrazyWare'
  },
  {
    label: 'Goal Progress',
    value: '███████░░░ 70%'
  },
  {
    label: 'Goals Reached: 107',
    value: 'Current: 7 / 10'
  }
]

describe('Transform::CrazyGoalz', () => {
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
    expect(this.results.goalAmount).to.equal(10);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(7);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(3);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(107);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(1077);
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