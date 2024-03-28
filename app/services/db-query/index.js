const { CustomError } = require("../../utils/error");
const { isArray, isString, isEmpty } = require("../../utils/validator");
const { useDbQueryEnrichers } = require("./enrichers");
const { parseQuery } = require("./parsers");

const createDbQuery = (parsedQuery, queryConfiguration) => {
  const result = {};

  useDbQueryEnrichers(result, parsedQuery, queryConfiguration);

  return result;
};

class SequelizeQueryBuilder {
  #config = {};
  #parsedQuery;

  constructor(model, query) {
    this.#setModel(model);
    this.#setQuery(query);
  }

  #setModel(model) {
    this.#config.model = model;

    return this;
  }

  #setQuery(query) {
    this.#parsedQuery = parseQuery(query);

    return this;
  }

  setAccessFields(accessFields) {
    this.#config.accessFields = accessFields;

    return this;
  }

  activateRaw() {
    this.#config.raw = true;

    return this;
  }

  getDbQuery() {
    return createDbQuery(this.#parsedQuery, this.#config);
  }
}

class SequelizeFindInterface {
  #config = {
    accessFields: [],
    model: undefined,
    raw: false,
    nestedModel: {},
  };

  #parsedQuery;

  constructor(model) {
    this.#setModel(model);
  }

  #setModel(model) {
    if (!model) {
      throw new CustomError("model value is empty");
    }

    this.#config.model = model;

    return this;
  }

  #setQuery(query) {
    this.#parsedQuery = parseQuery(query);

    return this;
  }

  setNestedModel(model, as, attributes) {
    // TODO - move validation to another location
    if (!model) {
      throw new CustomError("nested model is undefined");
    }

    // TODO - move validation to another location
    if (!isString(as)) {
      throw new CustomError('alias "as" for nested model not string');
    }

    const nestedModelOption = {
      model,
      as,
    };

    if (isArray(attributes) && !isEmpty(attributes.length)) {
      nestedModelOption.attributes = attributes;
    }

    this.#config.nestedModel[model.name] = nestedModelOption;

    return this;
  }

  setDefaultAttrs(defaultAttrs) {
    // TODO - add validation for array
    const { name, rawAttributes } = this.#config.model;

    // TODO - move validation to another location
    defaultAttrs.forEach((fieldName) => {
      if (!rawAttributes.hasOwnProperty(fieldName)) {
        throw new CustomError(
          "the model does not have the requested field"
        ).setCause(
          new CustomError(
            `the "${name}" model does not have a "${fieldName}" field`
          )
        );
      }
    });

    this.#config.defaultAttrs = defaultAttrs;

    return this;
  }

  activateRaw() {
    this.#config.raw = true;

    return this;
  }

  getFindQuery(query) {
    this.#setQuery(query);

    return createDbQuery(this.#parsedQuery, this.#config);
  }
}

module.exports = {
  SequelizeQueryBuilder,
  SequelizeFindInterface,
};
