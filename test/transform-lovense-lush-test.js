'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-lovense-lush');

const PANEL = [
  {
    label: '',
    value: 'Goal #8 : 244 / 750 [ 506 Remaining ] (5494)'
  },
  {
    label: '',
    value: 'Mvp - "stuff2222" - 2503'
  },
  {
    label: '',
    value: 'Newest - "sc2436" - 10'
  }
]

describe('Transform::Lovense_Lush', () => {
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
    expect(this.results.goalAmount).to.equal(750);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(244);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(506);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(8);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(5494);
  });

  it('should set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal('stuff2222');
  });

  it('should set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(2503);
  });

  it('should set tipRecentUsername', () => {
    expect(this.results.tipRecentUsername).to.equal('sc2436');
  });

  it('should set tipRecentAmount', () => {
    expect(this.results.tipRecentAmount).to.equal(10);
  });

  it('should NOT set tipperCount', () => {
    expect(this.results.tipperCount).to.equal(null);
  });

});