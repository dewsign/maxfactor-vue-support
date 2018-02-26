import formatNumber from '../Modules/FormatNumber'

/**
 * Format a given value to a percentage value.
 *
 * @param  {String} value Value to format
 * @return {String}       Formatted percentage value
 */
const Percentage = (value) => {
    if (value === null) return ''

    return `${formatNumber(value)}%`
}

export default Percentage
