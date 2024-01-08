class Flag {
  #flag = false;

  get isActive() {
    return this.#flag === true;
  }

  on() {
    this.#flag = true;
  }

  off() {
    this.#flag = false;
  }
}

module.exports = {
  Flag,
};
