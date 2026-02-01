/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40 * days;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= LONG_TERM) {
    return dailyRate - longTermDiscount;
  }

  if (days >= SHORT_TERM) {
    return dailyRate - shortTermDiscount;
  }

  return dailyRate;
}

module.exports = calculateRentalCost;
