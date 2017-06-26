'use strict';

const expect = require('chai').expect;
const transformer = require('../transforms/transform-token-keno');

const PANEL = [
  { 
    label: 'Board Count', 
    value: '67 #s / 44 prizes' 
  },
  { 
    label: 'Tips / On Board', 
    value: '1751 / 5509' 
  },
  { 
    label: 'MVP', 
    value: 'bubbalickity (646)' 
  } 
];

describe('Transform::Token_Keno', () => {
  beforeEach(() => {
    this.results = transformer.transform(PANEL);
  })

  it('should set hasGoal', () => {
    expect(this.results.hasGoal).to.equal(true);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(this.results.hasMultipleGoals).to.equal(false);
  });

  it('should set goalAmount', () => {
    expect(this.results.goalAmount).to.equal(7260);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(1751);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(5509);
  });

  it('should NOT set goalCount', () => {
    expect(this.results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal('bubbalickity');
  });

  it('should set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(646);
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