const request = require('supertest');
const { App } = require('../src/app');
const { FastifyServer } = require('../src/server');
const { newLogger } = require('../src/utils/logger');
const { level } = require('../src/config/logger');
const { host, port } = require('../src/config/server');

const logger = newLogger(level);

describe('API Tests', () => {
  let app;
  let server;
  let roleId;

  beforeAll(async () => {
    app = new App(new FastifyServer(host, port, logger), logger);
    server = app._server._instance.server;
    await app.start();

    const roleData = { name: 'Temp Admin' };
    const roleRes = await request(server).post('/api/role').send(roleData);
    roleId = roleRes.body.id;
  });

  afterAll(async () => {
    await request(server).delete(`/api/role/${roleId}`);

    await app.stop();
  });

  test('GET /user should return 200', async () => {
    const res = await request(server).get('/api/user');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  test('POST /user should create a user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      roleId,
    };

    const postRes = await request(server).post('/api/user').send(userData);
    expect(postRes.status).toBe(201);
    expect(postRes.body).toHaveProperty('id');
    expect(typeof postRes.body.id).toBe('string');

    const userId = postRes.body.id;
    const getRes = await request(server).get(`/api/user/${userId}`);

    expect(getRes.status).toBe(200);
    expect(getRes.body).toMatchObject({
      id: userId,
      name: userData.name,
      email: userData.email,
    });
    expect(getRes.body).toHaveProperty('createdAt');
    expect(getRes.body).toHaveProperty('updatedAt');
    expect(new Date(getRes.body.createdAt).getTime()).toBeLessThanOrEqual(
      Date.now()
    );
  });

  test('PUT /user/:id should update a user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      roleId,
    };

    const postRes = await request(server).post('/api/user').send(userData);
    expect(postRes.status).toBe(201);
    const userId = postRes.body.id;

    const updatedData = {
      name: 'Updated user name',
      email: 'updated_user@example.com',
      roleId,
    };
    const putRes = await request(server)
      .put(`/api/user/${userId}`)
      .send(updatedData);

    expect(putRes.status).toBe(200);
    expect(putRes.body).toHaveProperty('id', userId);

    const getRes = await request(server).get(`/api/user/${userId}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body).toMatchObject({
      id: userId,
      name: userData.name,
      email: userData.email,
      ...updatedData,
    });

    expect(getRes.body).toHaveProperty('createdAt');
    expect(getRes.body).toHaveProperty('updatedAt');
    expect(new Date(getRes.body.createdAt).getTime()).toBeLessThanOrEqual(
      Date.now()
    );
  });

  test('DELETE /user/:id should delete a user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      roleId,
    };

    const postRes = await request(server).post('/api/user').send(userData);
    expect(postRes.status).toBe(201);
    const userId = postRes.body.id;

    const deleteRes = await request(server).delete(`/api/user/${userId}`);
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body).toHaveProperty('id', userId);

    const getRes = await request(server).get(`/api/user/${userId}`);
    expect(getRes.status).toBe(404);
  });
});
