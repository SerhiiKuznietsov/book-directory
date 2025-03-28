class DIContainer {
  constructor() {
    this.dependencies = new Map();
  }

  has(key) {
    return this.dependencies.has(key);
  }

  get(key) {
    if (!this.has(key)) {
      throw new Error(`Dependency "${key}" not found in DI container`);
    }
    return this.dependencies.get(key);
  }

  getFactory(key) {
    if (!this.has(key)) {
      throw new Error(`Dependency "${key}" not found in DI container`);
    }
    return () => this.get(key);
  }

  register(key, dependency) {
    if (this.has(key)) {
      throw new Error(`Dependency "${key}" already exists in DI container`);
    }
    this.dependencies.set(key, dependency);
  }

  remove(key) {
    if (!this.has(key)) {
      throw new Error(`Cannot remove "${key}": not found in DI container`);
    }
    this.dependencies.delete(key);
  }

  clear() {
    this.dependencies.clear();
  }

  clone() {
    const newContainer = new DIContainer();
    this.dependencies.forEach((value, key) => {
      newContainer.register(key, value);
    });

    return newContainer;
  }
}

module.exports = { DIContainer };
