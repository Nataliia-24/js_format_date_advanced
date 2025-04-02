'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // Identify the separator from the 'fromFormat' array
  const fromSeparator = fromFormat[3];

  // Split the input date based on the separator from the 'fromFormat'
  const dateParts = date.split(fromSeparator);

  // Create variables to hold the year, month, and day
  let year, month, day;

  // Extract year, month, and day based on the 'fromFormat'
  fromFormat.forEach((part, index) => {
    if (part === 'YYYY') year = dateParts[index];
    if (part === 'YY') year = dateParts[index];
    if (part === 'MM') month = dateParts[index];
    if (part === 'DD') day = dateParts[index];
  });

  // Convert the year if it's in two digits (from 'YY' to 'YYYY')
  if (year.length === 2) {
    // Use 20YY if YY < 30, else use 19YY
    year = parseInt(year) < 30 ? `20${year}` : `19${year}`;
  } else if (year.length === 4) {
    // Convert from YYYY to YY
    year = year.slice(2);
  }

  // Determine the output separator (use the separator from the input format)
  const toSeparator = fromSeparator;

  // Reformat the date based on the 'toFormat' array
  const formattedDate = toFormat.map(format => {
    if (format === 'YYYY') return year;
    if (format === 'YY') return year.slice(2);
    if (format === 'MM') return month;
    if (format === 'DD') return day;
  }).join(toSeparator);

  return formattedDate;
}

module.exports = formatDate;
