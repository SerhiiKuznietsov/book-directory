class Ctrl {
  constructor(useCase) {
    if (useCase) {
      this.useCase = useCase;
    } else {
      this.useCase = {
        execute: async () => {
          throw new Error('use case is undefined');
        },
      };
    }
  }

  handle = async () => {
    throw new Error('handle method is undefined');
  };
}

module.exports = {
  Ctrl,
};
