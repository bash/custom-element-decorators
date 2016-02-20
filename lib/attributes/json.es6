/**
 * (c) 2016 Ruben Schmidmeister <ruben.schmidmeister@icloud.com>
 */

/**
 *
 * @param {*} defaultValue
 * @param {string} attributeName
 * @param {string} [propertyName]
 * @returns {Function}
 */
export function jsonAttribute (defaultValue, attributeName, propertyName) {
  if (propertyName === undefined) {
    propertyName = attributeName
  }

  function get () {
    try {
      return JSON.parse(this.getAttribute(attributeName))
    } catch (_) {
      return defaultValue
    }
  }

  function set (value) {
    this.setAttribute(attributeName, value)
  }

  return function (Target) {
    Object.defineProperty(Target.prototype, propertyName, { get, set })
  }
}