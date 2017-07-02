'use strict';

const {expect} = require('chai');
const panelParser = require('../index');

const PANEL = [
  {
    label: 'Tip Received / Goal',
    value: '3641 / 6000',
  },
  {
    label: 'Highest Tip',
    value: 'terryh38 (650)',
  },
  {
    label: 'Latest Tip Received',
    value: 'tagak (50)',
  },
];

describe('PanelParser', () => {
  let results = [];

  beforeEach(() => {
    results = panelParser('Tip Goal', PANEL);
  });

  it('should set hasGoal', () => {
    expect(results.hasGoal).to.equal(true);
  });

  it('should NOT set hasMultipleGoals', () => {
    expect(results.hasMultipleGoals).to.equal(false);
  });

  it('should set goalAmount', () => {
    expect(results.goalAmount).to.equal(6000);
  });

  it('should set goalCurrent', () => {
    expect(results.goalCurrent).to.equal(3641);
  });

  it('should set goalRemaining', () => {
    expect(results.goalRemaining).to.equal(2359);
  });

  it('should NOT set goalCount', () => {
    expect(results.goalCount).to.equal(null);
  });

  it('should NOT set goalTotal', () => {
    expect(results.goalTotal).to.equal(null);
  });

  it('should set tipBiggestUsername', () => {
    expect(results.tipBiggestUsername).to.equal('terryh38');
  });

  it('should set tipBiggestAmount', () => {
    expect(results.tipBiggestAmount).to.equal(650);
  });

  it('should set tipRecentUsername', () => {
    expect(results.tipRecentUsername).to.equal('tagak');
  });

  it('should set tipRecentAmount', () => {
    expect(results.tipRecentAmount).to.equal(50);
  });

  it('should NOT set tipperCount', () => {
    expect(results.tipperCount).to.equal(null);
  });

});
