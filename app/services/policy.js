const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");
const {
  validPolicyUpdate,
  validPolicyCreate,
  validPolicyRemove,
} = require("../validations/policy");

const getPolicesList = async () => {
  // TODO - add filters and limits
  const { Policy } = getDbModels();

  const policesList = await Policy.findAll({
    attributes: ["id", "title", "createdAt"],
    raw: true,
  });

  return policesList;
};

const getPolicyById = async (id) => {
  const { Policy } = getDbModels();

  const foundPolicy = await Policy.findByPk(id, { raw: true });

  if (!foundPolicy) {
    throw new CustomError(`policy with id: "${id}" not found`).setStatus(404);
  }

  return foundPolicy;
};

const createPolicy = async (bookItem) => {
  validPolicyCreate(bookItem);

  const { Policy } = getDbModels();

  const { id } = await Policy.create(bookItem);

  if (!id) {
    throw new CustomError("policy not created");
  }

  return id;
};

const updatePolicy = async (id, bookItem) => {
  validPolicyUpdate(id, bookItem);

  await getPolicyById(id);

  const { Policy } = getDbModels();

  const [isPolicyUpdated] = await Policy.update(bookItem, {
    where: {
      id,
    },
  });

  if (!isPolicyUpdated) {
    throw new CustomError(`policy with id: "${id}" not updated`).setStatus(404);
  }

  return id;
};

const removePolicy = async (id) => {
  validPolicyRemove(id);

  await getPolicyById(id);

  const { Policy } = getDbModels();

  const isPolicyRemoved = await Policy.destroy({
    where: {
      id,
    },
  });

  if (!isPolicyRemoved) {
    throw new CustomError(`policy with id: "${id}" not removed`).setStatus(404);
  }

  return id;
};

module.exports = {
  getPolicesList,
  getPolicyById,
  createPolicy,
  updatePolicy,
  removePolicy,
};
