import { Server } from 'http';
import supertest from "supertest";
import { Mongoose } from 'mongoose';

import { app } from "../../index";
import config from '../../config';
import { databaseSetup } from '../../database';

let server: Server;
let mongoConnection: Mongoose;
let request: supertest.SuperAgentTest;

beforeAll(async () => {
  server = app.listen();
  request = supertest.agent(server);
  mongoConnection = await databaseSetup();
  return Promise.resolve();
});

afterAll(async () => {
  server.close();
  await mongoConnection.connection.close(true);
  return Promise.resolve();
});

describe("root.routes", () => {
  it("returns Hello on /", async () => {
    const response = await request.get(config.api_prefix + "/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.msg).toEqual("Hello");
  });
});
