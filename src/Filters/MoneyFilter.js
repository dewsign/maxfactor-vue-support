import formatNumber from '../Modules/FormatNumber'

/**
 * Format a given value to a monetary value.
 *
 * @param  {String} value Value to format
 * @return {String}       Formatted monetary value
 */
const Money = (value) => {
    if (value === null) return ''

    return formatNumber(value)
        .toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP',
            currencyDisplay: 'symbol',
        })
}

export default Money
