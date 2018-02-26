/**
 * Format a given value to a monetary value.
 *
 * @param  {String} value Value to format
 * @return {String}       Formatted monetary value
 */
const Money = (value) => {
    if (value === null) return ''

    return parseFloat(value)
        .toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP',
            currencyDisplay: 'symbol',
            minimumFractionDigits: 2,
        })
}

export default Money
