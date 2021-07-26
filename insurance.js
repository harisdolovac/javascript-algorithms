function insurance(age, size, numofdays) {
  let total = 0;
  let ageInsurance = age < 25 ? 10 * numofdays : 0;

  let carSize =
    size === "economy"
      ? 0
      : size === "medium"
      ? 10 * numofdays
      : size === "full-size"
      ? 15 * numofdays
      : 15 * numofdays;

  let rentalDays = numofdays * 50;

  total += ageInsurance + carSize + rentalDays;
  if (numofdays < 0) {
    return 0;
  }
  return total;
}
console.log(insurance(21, "economy", -10));

/*
Car Size (string) : There may be an additional daily charge based on the car size:

car size surcharge "economy" $0 "medium" $10 "full-size" $15

Rental Days (integer) : There is a base daily charge of $50 for renting a car. Simply multiply the one day cost by the number of days the car is rented in order to get the full cost.

Note: Negative rental days should return 0 cost. Any other car size NOT listed should come with a same surcharge as the "full-size", $15.
*/
