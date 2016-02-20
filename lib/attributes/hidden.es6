/**
 * (c) 2016 Ruben Schmidmeister <ruben.schmidmeister@icloud.com>
 */

import { booleanAttribute } from './boolean.es6'

/**
 *
 * @param {Function} Target
 * @returns {*}
 */
export function hiddenAttribute (Target) {
  return booleanAttribute('hidden')(Target)
}