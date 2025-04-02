'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // Спочатку отримуємо роздільник з fromFormat
  const fromSeparator = fromFormat[3];

  // Розбиваємо дату на частини за допомогою роздільника з fromFormat
  const dateParts = date.split(fromSeparator);

  // Оголошуємо змінні для року, місяця та дня
  let year, month, day;

  // Перетворюємо dateParts відповідно до fromFormat
  fromFormat.forEach((part, index) => {
    if (part === 'YYYY') year = dateParts[index];
    if (part === 'YY') year = dateParts[index];
    if (part === 'MM') month = dateParts[index];
    if (part === 'DD') day = dateParts[index];
  });

  // Переводимо рік з формату 'YY' в 'YYYY'
  if (year.length === 2) {
    year = parseInt(year) < 30 ? `20${year}` : `19${year}`;
  } else if (year.length === 4) {
    // Переводимо рік з 'YYYY' в 'YY'
    year = year.slice(2);
  }

  // Тепер формуємо нову дату, базуючись на toFormat
  const toSeparator = fromSeparator;

  // Перетворюємо дату відповідно до формату 'toFormat'
  const formattedDate = toFormat.map(format => {
    if (format === 'YYYY') return year;
    if (format === 'YY') return year.slice(2);
    if (format === 'MM') return month;
    if (format === 'DD') return day;
  }).join(toSeparator);

  return formattedDate;
}

module.exports = formatDate;
