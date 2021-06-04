import { Server } from 'http';
import supertest from "supertest";
import mongoose, { Mongoose } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { app } from "../../index";
import emotionService from './emotion.service';
import { databaseSetup } from '../../database';

// Server
let server: Server;
let request: supertest.SuperAgentTest;

// Database
let mongoMemoryServer: MongoMemoryServer;
let mongoConnection: Mongoose;

beforeAll(async () => {
  // Server
  server = app.listen();
  request = supertest.agent(server);

  // Database
  mongoMemoryServer = new MongoMemoryServer();
  mongoConnection = await databaseSetup(await mongoMemoryServer.getUri());

  return Promise.resolve();
});

afterAll(async () => {
  // Server
  server.close();

  // Database
  await mongoConnection.disconnect();
  await mongoMemoryServer.stop();

  return Promise.resolve();
});

let itemId: mongoose.Types.ObjectId | undefined;
const itemName = "Inspired";
const itemNameUpdated = "Tenacious";

describe("emotion.service", () => {
  it("create", async () => {
    const response = await emotionService.create({
      name: itemName
    });

    expect(response).toBeDefined();
    expect(response._id).toBeDefined();
    expect(response.name).toEqual(itemName);

    itemId = response._id;
  });

  it("findAll", async () => {
    const response = await emotionService.findAll();

    expect(response).toBeDefined();
    expect(response[0].name).toEqual(itemName);
  });

  it("find", async () => {
    const response = await emotionService.find(itemId!);

    expect(response).toBeDefined();
    expect(response._id).toEqual(itemId);
  });

  it("update", async () => {
    const response = await emotionService.update(itemId!, {
      name: itemNameUpdated
    });

    expect(response).toBeDefined();
    expect(response._id).toEqual(itemId);
    expect(response.name).toEqual(itemNameUpdated);
  });

  it("delete", async () => {
    const response = await emotionService.delete(itemId!);

    expect(response).toBeDefined();
    expect(response._id).toEqual(itemId);
    expect(response.name).toEqual(itemNameUpdated);
  });
});
