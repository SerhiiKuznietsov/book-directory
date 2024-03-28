const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");

const validPolicyItem = (policyItem) => {
  const { error } = Joi.object({
    title: Joi.string().uppercase().min(2).max(128).required(),
    permission: Joi.object().min(1).max(20).required(),
  })
    .required()
    .validate(policyItem, { convert: false });

  if (error) throw error;

  // validations are duplicated due to incorrect error output in joi

  // TODO - add validation to accurately display errors based on the key
  const { error: keyCaseError } = Joi.object()
    .pattern(Joi.string().lowercase(), Joi.boolean())
    .error(new Error("permission key myst be lower case"))
    .validate(policyItem.permission, { convert: false });

  if (keyCaseError) throw keyCaseError;

  // TODO - add validation to accurately display errors based on the key
  const { error: keyLengthError } = Joi.object()
    .pattern(Joi.string().min(2).max(30), Joi.boolean())
    .error(new Error("wrong permission name size (min: 1, max: 2)"))
    .validate(policyItem.permission, { convert: false });

  if (keyLengthError) throw keyLengthError;
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
