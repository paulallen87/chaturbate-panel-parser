'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-sequence-tips');

const PANEL = [
  {
    label: 'Next Tip Needed',
    value: '14',
  },
  {
    label: 'Last Tip From',
    value: 'masterofcams',
  },
  {
    label: 'Ascending',
    value: 'From 1 to 55',
  },
];

describe('Transform::Sequence_Tips', () => {
  let results = [];

  beforeEach(() => {
    results = transformer.transform(PANEL);
  });

  it('should set hasGoal', () => {
    expect(results.hasGoal).to.equal(true);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(results.hasMultipleGoals).to.equal(false);
  });

  it('should set goalAmount', () => {
    expect(results.goalAmount).to.equal(1540);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(91);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(1449);
  });

  it('should NOT set goalCount', () => {
    expect(results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(results.goalTotal).to.equal(null);
  });

  it('should NOT set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal(null);
  });

  it('should NOT set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(null);
  });

  it('should set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal('masterofcams');
  });

  it('should set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(13);
  });

  it('should NOT set tipperCount', () => {
    expect(results.tipperCount).to.equal(null);
  });

});
