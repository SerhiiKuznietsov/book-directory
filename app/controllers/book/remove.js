const { ctrl } = require('../../utils/controller-wrapper');
const { removeBook } = require('../../services/book');

exports.remove = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const bookId = await removeBook(id);

  res.json(bookId);
});
