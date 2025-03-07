class DIContainer {
  constructor() {
    this.dependencies = {};
  }

  has(key) {
    return this.dependencies.hasOwnProperty(key);
  }

  get(key) {
    if (!this.has(key)) {
      throw new Error(`Dependency "${key}" not found`);
    }
    return this.dependencies[key];
  }

  getFactory(key) {
    this.get(key);
    return () => this.get(key);
  }

  register(key, dependency) {
    this.dependencies[key] = dependency;
  }

  remove(key) {
    this.get(key);
    delete this.dependencies[key];
  }
}

module.exports = { DIContainer };
