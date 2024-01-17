// TODO - maybe need to delete this file, because unused

const isEmpty = (val) => {
  if (isBoolean(val)) {
    return false;
  }

  if (isArray(val)) {
    return !val.length;
  }

  if (isObject(val)) {
    return !Object.keys(val).length;
  }

  return !val;
};

const isUndefined = (val) => val === undefined;

const isNull = (val) => val === null;

const isBoolean = (val) => typeof val === "boolean";

const isString = (val) => typeof val === "string";

const isInteger = (val) => Number.isInteger(val);

const isNumber = (val) =>  !isInteger(val) && !isInfinity(val) && !Number.isNaN(val) && typeof val === "number";

const isBigint = (val) => typeof val === "bigint";

const isInfinity = (val) => val === Infinity;

const isArray = (val) => Array.isArray(val);

const isObject = (val) => !isNull(val) && !isArray(val) && typeof val === "object";

const isFunction = (val) => typeof val === "function";


module.exports = {
  isEmpty,
  isUndefined,
  isNull,
  isBoolean,
  isString,
  isInteger,
  isNumber,
  isBigint,
  isInfinity,
  isArray,
  isObject,
  isFunction,
};
