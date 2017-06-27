'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-reset-goals');

const PANEL = [
  {
    label: 'Received / Goal (Total Tokens)',
    value: '149 / 500 (4649)' 
  },
  { 
    label: 'Hit Goal For', 
    value: '9 times'
  },
  {
    label: '',
    value: ''
  }
];

describe('Transform::Reset_Goals', () => {
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
    expect(this.results.goalAmount).to.equal(500);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(149);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(351);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(9);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(4649);
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