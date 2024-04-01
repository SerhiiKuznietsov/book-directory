const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const {
  MIN_TITLE_LENGHT,
  MAX_TITLE_LENGHT,
  MIN_PERMISSION_NAME_LENGHT,
  MAX_PERMISSION_NAME_LENGHT,
} = require("../constants/policy");

const policyIdShema = Joi.number().positive().required();
const policyItemShema = Joi.object({
  title: Joi.string().uppercase().min(MIN_TITLE_LENGHT).max(MAX_TITLE_LENGHT),
  permission: Joi.array()
    .not()
    .empty()
    .items(
      Joi.string()
        .min(MIN_PERMISSION_NAME_LENGHT)
        .max(MAX_PERMISSION_NAME_LENGHT)
        .lowercase()
    ),
}).required();

const validPolicyId = (id) => {
  const { error } = policyIdShema.validate(id, { convert: false });

  if (error) throw error;
};

const validPolicyItem = (policyItem) => {
  const { error } = policyItemShema.validate(policyItem, { convert: false });

  if (error) throw error;
};

exports.validPolicyCreate = vld(validPolicyItem);
exports.validPolicyRemove = vld(validPolicyId);
exports.validPolicyUpdate = vld((id, policyItem) => {
  validPolicyId(id);
  validPolicyItem(policyItem);
});
