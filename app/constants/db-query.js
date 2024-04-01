const MIN_LIMIT_LENGTH = 20;
const DEFAULT_LIMIT_LENGTH = MIN_LIMIT_LENGTH;
const NORMAL_GROUPING_NAME = "ASC";
const REVERSE_GROUPING_NAME = "DESC";
const ALL_GROUPING_NAME = [NORMAL_GROUPING_NAME, REVERSE_GROUPING_NAME];

module.exports = {
  MIN_LIMIT_LENGTH,
  DEFAULT_LIMIT_LENGTH,
  NORMAL_GROUPING_NAME,
  REVERSE_GROUPING_NAME,
  ALL_GROUPING_NAME,
  MAX_LIMIT_LENGTH: 50,
  DEFAULT_PAGE_LENGTH: 0,
};
