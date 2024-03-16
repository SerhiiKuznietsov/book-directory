const { useDbQueryEnrichers } = require("./enrichers");
const { parseQuery } = require("./parsers");

const createDbQuery = (parsedQuery, queryConfiguration) => {
  const result = {};

  useDbQueryEnrichers(result, parsedQuery, queryConfiguration);

  return result;
};

// TODO - add validation
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

module.exports = {
  SequelizeQueryBuilder,
};
