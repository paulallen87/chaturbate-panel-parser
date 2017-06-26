'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-lovense-me');

const PANEL = [
  {
    label: '',
    value: '18 Lovers - 1033 Vibrations Received'
  },
  {
    label: '',
    value: 'Best Lover ♥ "mikehunt691234"♥425'
  },
  {
    label: '',
    value: 'Last Vibrations☆ "fujikon"☆5'
  }
]

describe('Transform::Lovense-Me', () => {
  beforeEach(() => {
    this.results = transformer.transform(PANEL);
  })

  it('should NOT set hasGoal', () => {
    expect(this.results.hasGoal).to.equal(false);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(this.results.hasMultipleGoals).to.equal(false);
  });

  it('should NOT set goalAmount', () => {
    expect(this.results.goalAmount).to.equal(null);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(1033);
  });

  it('should NOT set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(null);
  });

  it('should NOT set goalCount', () => {
    expect(this.results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal('mikehunt691234');
  });

  it('should set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(425);
  });

  it('should set tipRecentUsername', () => {
    expect(this.results.tipRecentUsername).to.equal('fujikon');
  });

  it('should set tipRecentAmount', () => {
    expect(this.results.tipRecentAmount).to.equal(5);
  });

  it('should set tipperCount', () => {
    expect(this.results.tipperCount).to.equal(18);
  });

});