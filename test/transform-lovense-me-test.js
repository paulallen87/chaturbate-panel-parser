'use strict';

const {expect} = require('chai');
const transformer = require('../transforms/transform-lovense-me');

const PANEL = [
  {
    label: '',
    value: '18 Lovers - 1033 Vibrations Received',
  },
  {
    label: '',
    value: 'Best Lover ♥ "mikehunt691234"♥425',
  },
  {
    label: '',
    value: 'Last Vibrations☆ "fujikon"☆5',
  },
];

describe('Transform::Lovense-Me', () => {
  let results = [];

  beforeEach(() => {
    results = transformer.transform(PANEL);
  });

  it('should NOT set hasGoal', () => {
    expect(results.hasGoal).to.equal(false);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(results.hasMultipleGoals).to.equal(false);
  });

  it('should NOT set goalAmount', () => {
    expect(results.goalAmount).to.equal(null);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(1033);
  });

  it('should NOT set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(null);
  });

  it('should NOT set goalCount', () => {
    expect(results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('mikehunt691234');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(425);
  });

  it('should set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal('fujikon');
  });

  it('should set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(5);
  });

  it('should set tipperCount', () => {
    expect(results.tipperCount).to.equal(18);
  });

});
