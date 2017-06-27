'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-ohmibod-me3');

const PANEL = [
  { 
    label: '', 
    value: 'Goal #4 : 19 / 1400 [ 1381 Remaining ]' 
  },
  {
    label: '',
    value: '❤♡▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿'
  },
  { 
    label: '', 
    value: 'Best Lover ♥ "hornymat1972"♥1000' 
  }
]

describe('Transform::Ohmibod_Me3', () => {
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
    expect(this.results.goalAmount).to.equal(1400);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(19);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(1381);
  });

  it('should set goalCount', () => {
    expect(this.results.goalCount).to.equal(4);
  });

  it('should set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(5619);
  });

  it('should set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal('hornymat1972');
  });

  it('should set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(1000);
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