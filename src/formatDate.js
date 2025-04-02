'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // Find the separator in the input date string (either "-" or "/")
  const separator = date.match(/[^0-9]/)[0];

  // Split the date string based on the separator
  const dateParts = date.split(separator);

  // Initialize variables for year, month, and day
  let year, month, day;

  // Map the parts of the date based on the fromFormat
  fromFormat.forEach((part, index) => {
    if (part === 'YYYY') {
      year = dateParts[index];
    } else if (part === 'YY') {
      const twoDigitYear = dateParts[index];
      year = (parseInt(twoDigitYear, 10) < 30) ? '20' + twoDigitYear : '19' + twoDigitYear;
    } else if (part === 'MM') {
      month = dateParts[index];
    } else if (part === 'DD') {
      day = dateParts[index];
    }
  });

  // Create the new formatted date based on the toFormat array
  let newDate = '';
  toFormat.forEach((part, index) => {
    if (part === 'YYYY') newDate += year;
    if (part === 'YY') newDate += year.slice(2); // Use last 2 digits of the year
    if (part === 'MM') newDate += month;
    if (part === 'DD') newDate += day;

    // Add the separator between parts except for the last part
    if (index < toFormat.length - 1) {
      newDate += separator;
    }
  });

  return newDate;
}

module.exports = formatDate;
