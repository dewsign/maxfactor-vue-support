/**
 * Get the ordinal suffix for an integer
 *
 * @param  {Integer} n  Get ordinal for this value
 * @return {String}     Input n with ordinal suffix
 */
const GetOrdinal = n => n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')

export default GetOrdinal
