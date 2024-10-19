const { createBook } = require('../../../../domain/book/useCases/create')

exports.create = async (req, reply) => {
  const { body } = req;

  const bookId = await createBook(body);

  reply.code(201).send({ id: bookId });
};
