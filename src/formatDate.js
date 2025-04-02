'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
 
  const dateParts = date.split(fromFormat[3]);

  
  let year, month, day;

  
  fromFormat.forEach((part, index) => {
    if (part === 'YYYY') year = dateParts[index];
    if (part === 'YY') year = '20' + dateParts[index];
    if (part === 'MM') month = dateParts[index];
    if (part === 'DD') day = dateParts[index];
  });

  
  let newDate = '';
  toFormat.forEach((part, index) => {
    if (part === 'YYYY') newDate += year;
    if (part === 'YY') newDate += year.slice(2);
    if (part === 'MM') newDate += month;
    if (part === 'DD') newDate += day;

  
    if (index < toFormat.length - 1) {
      newDate += toFormat[3];
    }
  });

  return newDate;
}

module.exports = formatDate;

