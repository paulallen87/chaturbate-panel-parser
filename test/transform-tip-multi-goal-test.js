'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-tip-multi-goal');

const PANEL = [
  { 
    label: 'Received / Goal (Total)', 
    value: '96 / 350 (1661)' 
  },
  { 
    label: 'Highest Tip', 
    value: 'absolutecoup (250)' 
  },
  { 
    label: 'Latest Tip Received', 
    value: 'bluesgroof (5)' 
  } 
];

describe('Transform::Tip_Multi-Goal', () => {
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
    expect(this.results.goalCurrent).to.equal(96);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(254);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(4);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(1661);
  });

  it('should set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal('absolutecoup');
  });

  it('should set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(250);
  });

  it('should set tipRecentUsername', () => {
    expect(this.results.tipRecentUsername).to.equal('bluesgroof');
  });

  it('should set tipRecentAmount', () => {
    expect(this.results.tipRecentAmount).to.equal(5);
  });

  it('should NOT set tipperCount', () => {
    expect(this.results.tipperCount).to.equal(null);
  });

});