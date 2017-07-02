'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-lovense-lush');

const PANEL = [
  {
    label: '',
    value: 'Goal #8 : 244 / 750 [ 506 Remaining ] (5494)',
  },
  {
    label: '',
    value: 'Mvp - "stuff2222" - 2503',
  },
  {
    label: '',
    value: 'Newest - "sc2436" - 10',
  },
];

describe('Transform::Lovense_Lush', () => {
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
    expect(results.goalAmount).to.equal(750);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(244);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(506);
  });

  it('should set goalCount', () => {
    expect(results.goalCount).to.equal(8);
  });

  it('should set goalTotal', () => {
    expect(results.goalTotal).to.equal(5494);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('stuff2222');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(2503);
  });

  it('should set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal('sc2436');
  });

  it('should set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(10);
  });

  it('should NOT set tipperCount', () => {
    expect(results.tipperCount).to.equal(null);
  });

});
