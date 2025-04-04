const request = require('supertest');
const { App } = require('../src/app');
const { FastifyServer } = require('../src/server');
const { logger } = require('../src/utils/logger');
const { host, port } = require('../src/config/server');

describe('API Tests', () => {
  let app;
  let server;

  beforeAll(async () => {
    app = new App(
      new FastifyServer(host, port, logger),
      logger
    );
    server = app._server._instance.server;
    await app.start();
  });

  afterAll(async () => {
    await app.stop();
  });

  test('GET /book should return 200', async () => {
    const res = await request(server).get('/api/book');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  test('POST /book should create a book', async () => {
    const bookData = { title: 'Fastify Guide' };

    const postRes = await request(server).post('/api/book').send(bookData);
    expect(postRes.status).toBe(201);
    expect(postRes.body).toHaveProperty('id');
    expect(typeof postRes.body.id).toBe('string');

    const bookId = postRes.body.id;
    const getRes = await request(server).get(`/api/book/${bookId}`);

    expect(getRes.status).toBe(200);
    expect(getRes.body).toMatchObject({ id: bookId, title: bookData.title });
    expect(getRes.body).toHaveProperty('createdAt');
    expect(getRes.body).toHaveProperty('updatedAt');
    expect(new Date(getRes.body.createdAt).getTime()).toBeLessThanOrEqual(
      Date.now()
    );
  });

  test('POST /book should return 400 if data is invalid', async () => {
    const invalidBookData = {};

    const postRes = await request(server).post('/api/book').send(invalidBookData);
    expect(postRes.status).toBe(400);
    expect(postRes.body).toHaveProperty('name', 'Error');
    expect(postRes.body).toHaveProperty('message', "body must have required property 'title'");
  });

  test('PUT /book/:id should update a book', async () => {
    const bookData = { title: 'Fastify Guide' };

    const postRes = await request(server).post('/api/book').send(bookData);
    expect(postRes.status).toBe(201);
    const bookId = postRes.body.id;

    const updatedData = { title: 'Updated Fastify Guide' };
    const putRes = await request(server)
      .put(`/api/book/${bookId}`)
      .send(updatedData);

    expect(putRes.status).toBe(200);
    expect(putRes.body).toHaveProperty('id', bookId);


    const getRes = await request(server).get(`/api/book/${bookId}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body).toHaveProperty('id', bookId);
    expect(getRes.body).toHaveProperty('title', updatedData.title);
  });

  test('DELETE /book/:id should delete a book', async () => {
    const bookData = { title: 'Deleted Fastify Guide' };

    const postRes = await request(server).post('/api/book').send(bookData);
    expect(postRes.status).toBe(201);
    const bookId = postRes.body.id;

    const deleteRes = await request(server).delete(`/api/book/${bookId}`);
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body).toHaveProperty('id', bookId);

    const getRes = await request(server).get(`/api/book/${bookId}`);
    expect(getRes.status).toBe(404);
  });
});
