/**
 * Format a given string to a number with two decimal places.
 *
 * @param  {String} value Value to format
 * @return {String}       Formatted value
 */
const FormatNumber = (value) => {
    const formattedValue = value
        .toLocaleString('en-GB', {
            minimumFractionDigits: 2,
        })

    return parseFloat(formattedValue)
}

export default FormatNumber
