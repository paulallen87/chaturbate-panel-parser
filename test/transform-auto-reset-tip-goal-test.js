'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-auto-reset-tip-goal');

const PANEL = [
  {
    label: 'Received / Goal (Total)',
    value: '33 / 50 (2083)'
  },
  {
    label: 'Hit Goal For',
    value: '41 times' },
  {
    label: 'Last Reached',
    value: '2 minutes ago'
  }
];

describe('Transform::Auto-Reset_Tip_Goal', () => {
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
    expect(this.results.goalAmount).to.equal(50);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(33);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(17);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(41);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(2083);
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