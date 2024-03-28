const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const validPolicyItem = (policyItem) => {
  const { error } = Joi.object({
    title: Joi.string().uppercase().min(2).max(128),
    permission: Joi.array().min(1).max(20).items(Joi.string().min(2).max(30).lowercase()),
  })
    .required()
    .validate(policyItem, { convert: false });

  if (error) throw error;
};

const validPolicyId = (id) => {
  const { error } = Joi.number().required().validate(id);

  if (!error) return;

  throw error;
};

exports.validPolicyCreate = vld(validPolicyItem);

exports.validPolicyUpdate = vld((id, policyItem) => {
  validPolicyId(id);
  validPolicyItem(policyItem);
});

exports.validPolicyRemove = vld(validPolicyId);
