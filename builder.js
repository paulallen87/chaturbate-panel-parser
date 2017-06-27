class Builder {
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

  setHasGoal(val) {
    this._hasGoal = !!val;
    return this;
  }

  hasGoal() {
    return this._hasGoal;
  }

  setHasMultipleGoals(val) {
    this._hasMultipleGoals = !!val;
    return this;
  }

  hasMultipleGoals() {
    return this._hasMultipleGoals;
  }

  setGoalAmount(val) {
    this._goalAmount = parseInt(val || 0, 10);
    return this;
  }

  getGoalAmount() {
    if (this._goalAmount != null) {
      return this._goalAmount;
    }

    if (this._goalCurrent == null) return null;
    if (this._goalRemaining == null) return null;

    return this._goalCurrent + this._goalRemaining;
  }

  setGoalCurrent(val) {
    this._goalCurrent = parseInt(val || 0, 10);
    return this;
  }

  getGoalCurrent() {
    if (this._goalCurrent != null) {
      return this._goalCurrent;
    }

    return null;
  }

  setGoalRemaining(val) {
    this._goalRemaining = parseInt(val || 0, 10);
    return this;
  }

  getGoalRemaining() {
    if (this._goalRemaining != null) {
      return this._goalRemaining;
    }

    if (this._goalCurrent == null) return null;
    if (this._goalAmount == null) return null;

    return this._goalAmount - this._goalCurrent;
  }

  setGoalCount(val) {
    this._goalCount = parseInt(val || 0, 10);
    return this;
  }

  getGoalCount() {
    if (this._goalCount != null) {
      return this._goalCount;
    }

    if (!this.hasMultipleGoals()) return null;
    if (this._goalTotal == null) return null;
    if (this._goalAmount == null) return null;

    return Math.floor(this._goalTotal / this._goalAmount);
  }

  setGoalTotal(val) {
    this._goalTotal = parseInt(val || 0, 10);
    return this;
  }

  getGoalTotal() {
    if (this._goalTotal != null) {
      return this._goalTotal;
    }

    if (this._goalCount == null) return null;
    if (this._goalAmount == null) return null;

    const total = (this._goalCount * this._goalAmount)

    if (this._goalCurrent == null) return total;

    return  total + this._goalCurrent;
  }

  setTipBiggest(username, amount) {
    this._tipBiggestUsername = username;
    this._tipBiggestAmount = parseInt(amount || 0, 10);
    return this;
  }

  setTipRecent(username, amount) {
    this._tipRecentUsername = username;
    this._tipRecentAmount = parseInt(amount || 0, 10);
    return this;
  }

  setTipperCount(val) {
    this._tipperCount = parseInt(val || 0, 10);
    return this;
  }

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
      tipperCount: this._tipperCount
    }
  }
}

module.exports = Builder;