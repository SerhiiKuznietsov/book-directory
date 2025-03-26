'use strict';

const { transactionWrapper } = require('../utils');
const { up, down } = require('./20240319195256-init/index');

exports.up = transactionWrapper(up);

exports.down = transactionWrapper(down);
