'use strict';

const expect = require('chai').expect;
const panelParser = require('../index');

const PANEL = [
  { 
    label: 'Tip Received / Goal', 
    value: '3641 / 6000' 
  },
  { 
    label: 'Highest Tip', 
    value: 'terryh38 (650)' 
  },
  { 
    label: 'Latest Tip Received', 
    value: 'tagak (50)' 
  } 
];

describe('PanelParser', () => {
  beforeEach(() => {
    this.results = panelParser('Tip Goal', PANEL);
  })

  it('should set hasGoal', () => {
    expect(this.results.hasGoal).to.equal(true);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(this.results.hasMultipleGoals).to.equal(false);
  });

  it('should set goalAmount', () => {
    expect(this.results.goalAmount).to.equal(6000);
  });

  it('should set goalCurrent', () => {
    expect(this.results.goalCurrent).to.equal(3641);
  });

  it('should set goalRemaining', () => {
    expect(this.results.goalRemaining).to.equal(2359);
  });

  it('should NOT set goalCount', () => {
    expect(this.results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(this.results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(this.results.tipBiggestUsername).to.equal('terryh38');
  });

  it('should set tipBiggestAmount', () => {
    expect(this.results.tipBiggestAmount).to.equal(650);
  });

  it('should set tipRecentUsername', () => {
    expect(this.results.tipRecentUsername).to.equal('tagak');
  });

  it('should set tipRecentAmount', () => {
    expect(this.results.tipRecentAmount).to.equal(50);
  });

  it('should NOT set tipperCount', () => {
    expect(this.results.tipperCount).to.equal(null);
  });

});