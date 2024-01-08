const { CustomError } = require("./error");

const validationNameError = "Validation error";
const validationParamsError = "Validation params error";

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

const isUndefined = (val) => {
  return val === undefined;
};

const isNull = (val) => {
  return val === null;
};

const isBoolean = (val) => {
  return typeof val === "boolean";
};

const isString = (val) => {
  return typeof val === "string";
};

const isInteger = (val) => {
  return Number.isInteger(+val);
};

const isNumber = (val) => {
  return typeof val === "number" && !Number.isNaN(val);
};

const isBigint = (val) => {
  return typeof val === "bigint";
};

const isArray = (val) => {
  return Array.isArray(val);
};

const isObject = (val) => {
  return !isNull(val) && !isArray(val) && typeof val === "object";
};

const isFunction = (val) => {
  return typeof val === "function";
};

const isBetween = (val, { min = 0, max }) => {
  if (!isNumber(min) || (!isNumber(max) && !isUndefined(max)) || max < min) {
    throw new CustomError("invalid min and/or max value specified")
      .setName(validationParamsError)
      .setStatus(400);
  }

  let numValue;
  if (isString(val) || isArray(val)) {
    numValue = val.length;
  }
  if (isObject(val)) {
    numValue = Object.keys(val).length;
  }
  if (isNumber(val) || isBigint(val)) {
    numValue = val;
  }
  if (isUndefined(val) || isNull(val)) {
    numValue = 0;
  }
  if (isBoolean(val)) {
    numValue = +val;
  }

  if (isUndefined(numValue)) {
    throw new CustomError("cannot define numerical equivalent of the value")
      .setName(validationNameError)
      .setStatus(400);
  }

  const fitsMinVal = numValue >= min;
  const fitsMaxVal = isUndefined(max) || numValue <= max;
  return fitsMinVal && fitsMaxVal;
};

const isPossibleObjectKeys = (val, possibleKeysArr) => {
  if (!isObject(val)) {
    throw new CustomError("first value not object")
      .setName(validationNameError)
      .setStatus(400);
  }

  if (!isArray(possibleKeysArr)) {
    throw new CustomError("second value not array")
      .setName(validationNameError)
      .setStatus(400);
  }

  const keys = Object.keys(val);

  for (const keyItem of keys) {
    if (!possibleKeysArr.includes(keyItem)) {
      return false;
    }
  }

  return true;
};

module.exports = {
  defaults: {
    isEmpty,
    isUndefined,
    isNull,
    isBoolean,
    isString,
    isInteger,
    isNumber,
    isBigint,
    isArray,
    isObject,
    isFunction,
    isBetween,
    isPossibleObjectKeys,
  },
};
