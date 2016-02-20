/**
 * (c) 2016 Ruben Schmidmeister <ruben.schmidmeister@icloud.com>
 */

import { jsonAttribute } from './attributes/json.es6'
import { booleanAttribute  } from './attributes/boolean.es6'
import { hiddenAttribute } from './attributes/hidden.es6'

@hiddenAttribute
@jsonAttribute([], 'list')
@booleanAttribute('is-awesome', 'isAwesome')
export class CustomElement extends HTMLElement {

}