import { Server } from 'http';
import supertest from "supertest";

import { app } from "../../index";
import config from '../../config';

// Server
let server: Server;
let request: supertest.SuperAgentTest;

beforeAll(async () => {
  // Server
  server = app.listen();
  request = supertest.agent(server);

  return Promise.resolve();
});

afterAll(async () => {
  // Server
  server.close();

  return Promise.resolve();
});

const responseType = "application/json";

describe("auth.routes", () => {
  it("token", async () => {
    const response = await request.post(config.api_prefix + "/auth/token").send({
      password: config.admin_password
    });

    expect(response.status).toEqual(200);
    expect(response.type).toEqual(responseType);
    expect(response.body).toBeDefined();
    expect(response.body.token).toBeDefined();
  });
});
