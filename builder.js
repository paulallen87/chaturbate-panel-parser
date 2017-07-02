'use strict';

/**
 * Builder for a new goal object.
 */
class Builder {

  /**
   * Constructor.
   * 
   * @constructor
   */
  constructor() {
    this._hasGoal = false;
    this._hasMultipleGoals = false;

    this._goalAmount = null;
    this._goalCurrent = null;
    this._goalRemaining = null;
    this._goalCount = null;
    this._goalTotal = null;

    this._tipBiggestUsername = null;
    this._tipBiggestAmount = null;
    this._tipRecentUsername = null;
    this._tipRecentAmount = null;

    this._tipperCount = null;
  }

  /**
   * Setter for is the goal exists.
   * 
   * @param {boolean} val
   * @return {this}
   */
  setHasGoal(val) {
    this._hasGoal = Boolean(val);
    return this;
  }

  /**
   * Getter for is the goal exists.
   * 
   * @return {boolean}
   */
  hasGoal() {
    return this._hasGoal;
  }

  /**
   * Setter for if multiple goals exist.
   * 
   * @param {boolean} val 
   * @return {this}
   */
  setHasMultipleGoals(val) {
    this._hasMultipleGoals = Boolean(val);
    return this;
  }

  /**
   * Getter for if multiple goals exist.
   * 
   * @return {boolean}
   */
  hasMultipleGoals() {
    return this._hasMultipleGoals;
  }

  /**
   * Setter for the goal amount.
   *
   * @param {nunmber} val 
   * @return {this}
   */
  setGoalAmount(val) {
    this._goalAmount = parseInt(val || 0, 10);
    return this;
  }

  /**
   * Getter for the goal amount.
   * 
   * @return {number}
   */
  getGoalAmount() {
    if (this._goalAmount !== null) {
      return this._goalAmount;
    }

    if (this._goalCurrent === null) return null;
    if (this._goalRemaining === null) return null;

    return this._goalCurrent + this._goalRemaining;
  }

  /**
   * Setter for the current goal amount.
   *
   * @param {number} val
   * @return {this}
   */
  setGoalCurrent(val) {
    this._goalCurrent = parseInt(val || 0, 10);
    return this;
  }

  /**
   * Getter for the current goal amount.
   * 
   * @return {number}
   */
  getGoalCurrent() {
    if (this._goalCurrent !== null) {
      return this._goalCurrent;
    }

    return null;
  }

  /**
   * Setter for the remaining goal.
   *
   * @param {number} val
   * @return {this}
   */
  setGoalRemaining(val) {
    this._goalRemaining = parseInt(val || 0, 10);
    return this;
  }

  /**
   * Getter for the remaining goal.
   * 
   * @return {number}
   */
  getGoalRemaining() {
    if (this._goalRemaining !== null) {
      return this._goalRemaining;
    }

    if (this._goalCurrent === null) return null;
    if (this._goalAmount === null) return null;

    return this._goalAmount - this._goalCurrent;
  }

  /**
   * Setter for the goal count.
   *
   * @param {number} val 
   * @return {this}
   */
  setGoalCount(val) {
    this._goalCount = parseInt(val || 0, 10);
    return this;
  }

  /**
   * Getter for the goal count.
   * 
   * @return {number}
   */
  getGoalCount() {
    if (this._goalCount !== null) {
      return this._goalCount;
    }

    if (!this.hasMultipleGoals()) return null;
    if (this._goalTotal === null) return null;
    if (this._goalAmount === null) return null;

    return Math.floor(this._goalTotal / this._goalAmount);
  }

  /**
   * Setter for the goal total.
   * 
   * @param {number} val 
   * @return {this}
   */
  setGoalTotal(val) {
    this._goalTotal = parseInt(val || 0, 10);
    return this;
  }

  /**
   * Getter for the goal total.
   * 
   * @return {number}
   */
  getGoalTotal() {
    if (this._goalTotal !== null) {
      return this._goalTotal;
    }

    if (this._goalCount === null) return null;
    if (this._goalAmount === null) return null;

    const total = (this._goalCount * this._goalAmount);

    if (this._goalCurrent === null) return total;

    return total + this._goalCurrent;
  }

  /**
   * Setter for the biggest tip.
   *
   * @param {string} username 
   * @param {number} amount 
   * @return {this}
   */
  setTipBiggest(username, amount) {
    this._tipBiggestUsername = username;
    this._tipBiggestAmount = parseInt(amount || 0, 10);
    return this;
  }

  /**
   * Setter for the most recent tip.
   *
   * @param {string} username 
   * @param {number} amount 
   * @return {this}
   */
  setTipRecent(username, amount) {
    this._tipRecentUsername = username;
    this._tipRecentAmount = parseInt(amount || 0, 10);
    return this;
  }

  /**
   * Setter for the tipper count.
   *
   * @param {number} val 
   * @return {this}
   */
  setTipperCount(val) {
    this._tipperCount = parseInt(val || 0, 10);
    return this;
  }

  /**
   * Returns the built goal object.
   * 
   * @return {Object}
   */
  build() {
    return {
      hasGoal: this.hasGoal(),
      hasMultipleGoals: this.hasMultipleGoals(),
      goalAmount: this.getGoalAmount(),
      goalCurrent: this.getGoalCurrent(),
      goalRemaining: this.getGoalRemaining(),
      goalCount: this.getGoalCount(),
      goalTotal: this.getGoalTotal(),
      tipBiggestUsername: this._tipBiggestUsername,
      tipBiggestAmount: this._tipBiggestAmount,
      tipRecentUsername: this._tipRecentUsername,
      tipRecentAmount: this._tipRecentAmount,
      tipperCount: this._tipperCount,
    };
  }
}

module.exports = Builder;
