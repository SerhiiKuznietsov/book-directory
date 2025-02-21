class RoleControllers {
  constructor(getList, getSingle, create, update, remove) {
    this.getList = getList.handle;
    this.getSingle = getSingle.handle;
    this.create = create.handle;
    this.update = update.handle;
    this.remove = remove.handle;
  }
}

module.exports = {
  RoleControllers,
};
