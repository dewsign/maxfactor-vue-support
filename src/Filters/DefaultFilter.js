/**
 * Set a default value to be used when there is no base value.
 *
 * @param  {String} value        Base value
 * @param  {String} defaultValue Default value
 * @return {String}              Value
 */
const Default = (value, defaultValue) => {
    if (!value && defaultValue) return defaultValue

    return value
}

export default Default
