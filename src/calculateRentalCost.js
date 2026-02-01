/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  let totalCost = days * dailyRate;

  if (days >= LONG_TERM) {
    totalCost -= longTermDiscount;
  }

  if (days >= SHORT_TERM && days < LONG_TERM) {
    totalCost -= shortTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
