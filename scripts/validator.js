/**
 * Validator
 * @constructor
 */
function Validator() {
	this.isArray     = isArray;
	this.isBoolean   = isBoolean;
	this.isFunction  = isFunction;
	this.isNumber    = isNumber;
	this.isObject    = isObject;
	this.isString    = isString;
	this.isUndefined = isUndefined;

	const ARRAY     = "object";
	const BOOLEAN   = "boolean";
	const FUNCTION  = "function";
	const NUMBER    = "number";
	const OBJECT    = "object";
	const STRING    = "string";
	const UNDEFINED = "undefined";

	/**
	 * isArray
	 * @param Array
	 * @returns {boolean}
	 */
	function isArray(Array) {
		if(ARRAY !== typeof(Array)) {
			return false;
		}

		return true;
	}

	/**
	 * isBoolean
	 * @param Boolean
	 * @returns {boolean}
	 */
	function isBoolean(Boolean) {
		if(BOOLEAN !== typeof(Boolean)) {
			return false;
		}

		return true;
	}

	/**
	 * isFunction
	 * @param Function
	 * @returns {boolean}
	 */
	function isFunction(Function) {
		if(FUNCTION !== typeof(Function)) {
			return false;
		}

		return true;
	}

	/**
	 * isNumber
	 * @param Number
	 * @returns {boolean}
	 */
	function isNumber(Number) {
		if(NUMBER !== typeof(Number)) {
			return false;
		}

		return true;
	}

	/**
	 * isObject
	 * @param Object
	 * @returns {boolean}
	 */
	function isObject(Object) {
		if(OBJECT !== typeof(Object)) {
			return false;
		}

		return true;
	}

	/**
	 * isString
	 * @param String
	 * @returns {boolean}
	 */
	function isString(String) {
		if(STRING !== typeof(String)) {
			return false;
		}

		return true;
	}

	/**
	 * isUndefined
	 * @param Undefined
	 * @returns {boolean}
	 */
	function isUndefined(Undefined) {
		if(UNDEFINED !== typeof(Undefined)) {
			return false;
		}

		return true;
	}
}