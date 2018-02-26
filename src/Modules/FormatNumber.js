/**
 * Format a given string to a 'number' with two decimal places.
 *
 * @param  {String} value Value to format
 * @return {String}       Formatted value
 */
const FormatNumber = value => parseFloat(value)
    .toLocaleString('en-GB', {
        minimumFractionDigits: 2,
    })

export default FormatNumber
