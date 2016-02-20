/**
 * (c) 2016 Ruben Schmidmeister <ruben.schmidmeister@icloud.com>
 */

/**
 *
 * @param {string} attributeName
 * @param {string} [propertyName]
 * @returns {Function}
 */
export function booleanAttribute (attributeName, propertyName) {
  if (propertyName === undefined) {
    propertyName = attributeName
  }

  function get () {
    return this.hasAttribute(attributeName)
  }

  function set (value) {
    if (value) {
      this.setAttribute(attributeName, "")
    } else {
      this.removeAttribute(attributeName)
    }
  }

  return function (Target) {
    Object.defineProperty(Target.prototype, propertyName, { get, set })
  }
}