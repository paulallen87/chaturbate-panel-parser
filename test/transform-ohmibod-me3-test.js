'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-ohmibod-me3');

const PANEL = [
  {
    label: '',
    value: 'Goal #4 : 19 / 1400 [ 1381 Remaining ]',
  },
  {
    label: '',
    value: '❤♡▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿▿',
  },
  {
    label: '',
    value: 'Best Lover ♥ "hornymat1972"♥1000',
  },
];

describe('Transform::Ohmibod_Me3', () => {
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
    expect(results.goalAmount).to.equal(1400);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(19);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(1381);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(4);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(5619);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('hornymat1972');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(1000);
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
