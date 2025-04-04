const request = require('supertest');
const { App } = require('../src/app');
const { FastifyServer } = require('../src/server');
const { logger } = require('../src/utils/logger');
const { host, port } = require('../src/config/server');

describe('API Tests', () => {
  let app;
  let server;

  beforeAll(async () => {
    app = new App(new FastifyServer(host, port, logger), logger);
    server = app._server._instance.server;
    await app.start();
  });

  afterAll(async () => {
    await app.stop();
  });

  test('GET /role should return 200', async () => {
    const res = await request(server).get('/api/role');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  test('POST /role should create a role', async () => {
    const roleData = { name: 'Create role' };

    const postRes = await request(server).post('/api/role').send(roleData);
    expect(postRes.status).toBe(201);
    expect(postRes.body).toHaveProperty('id');
    expect(typeof postRes.body.id).toBe('string');

    const roleId = postRes.body.id;
    const getRes = await request(server).get(`/api/role/${roleId}`);

    expect(getRes.status).toBe(200);
    expect(getRes.body).toMatchObject({ id: roleId, name: roleData.name });
    expect(getRes.body).toHaveProperty('createdAt');
    expect(getRes.body).toHaveProperty('updatedAt');
    expect(new Date(getRes.body.createdAt).getTime()).toBeLessThanOrEqual(
      Date.now()
    );
  });

  test('PUT /role/:id should update a role', async () => {
    const roleData = { name: 'Update role' };

    const postRes = await request(server).post('/api/role').send(roleData);
    expect(postRes.status).toBe(201);
    const roleId = postRes.body.id;

    const updatedData = { name: 'Updated Fastify Guide' };
    const putRes = await request(server)
      .put(`/api/role/${roleId}`)
      .send(updatedData);

    expect(putRes.status).toBe(200);
    expect(putRes.body).toHaveProperty('id', roleId);

    const getRes = await request(server).get(`/api/role/${roleId}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body).toHaveProperty('id', roleId);
    expect(getRes.body).toHaveProperty('name', updatedData.name);
  });

  test('DELETE /role/:id should delete a role', async () => {
    const roleData = { name: 'Delete role' };

    const postRes = await request(server).post('/api/role').send(roleData);
    expect(postRes.status).toBe(201);
    const roleId = postRes.body.id;

    const deleteRes = await request(server).delete(`/api/role/${roleId}`);
    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body).toHaveProperty('id', roleId);

    const getRes = await request(server).get(`/api/role/${roleId}`);
    expect(getRes.status).toBe(404);
  });
});
