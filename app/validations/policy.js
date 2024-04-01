const Joi = require("joi");
const { vld } = require("../utils/validator-wrapper");
const {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_PERMISSION_NAME_LENGTH,
  MAX_PERMISSION_NAME_LENGTH,
} = require("../constants/policy");

const policyIdSchema = Joi.number().positive().required();
const policyItemSchema = Joi.object({
  title: Joi.string().uppercase().min(MIN_TITLE_LENGTH).max(MAX_TITLE_LENGTH),
  permission: Joi.array()
    .not()
    .empty()
    .items(
      Joi.string()
        .min(MIN_PERMISSION_NAME_LENGTH)
        .max(MAX_PERMISSION_NAME_LENGTH)
        .lowercase()
    ),
}).required();

const validPolicyId = (id) => {
  const { error } = policyIdSchema.validate(id, { convert: false });

  if (error) throw error;
};

const validPolicyItem = (policyItem) => {
  const { error } = policyItemSchema.validate(policyItem, { convert: false });

  if (error) throw error;
};

exports.validPolicyCreate = vld(validPolicyItem);
exports.validPolicyRemove = vld(validPolicyId);
exports.validPolicyUpdate = vld((id, policyItem) => {
  validPolicyId(id);
  validPolicyItem(policyItem);
});
