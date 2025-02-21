class Container {
  constructor() {
    this.data = {};
  }

  async initRepositories() {}

  async initUseCases() {}


  async init() {
    await this.initRepositories();
    await this.initUseCases();
  }

  set(key, dependency) {
    if (this.data[key]) {
      throw new Error('The dependency key is already occupied');
    }

    this.data[key] = dependency;
  }

  get(key) {
    return this.data[key];
  }
}

module.exports = { Container };
