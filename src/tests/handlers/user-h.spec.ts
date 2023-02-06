import supertest from "supertest";
import app from "../index.spec";
import dotenv from "dotenv";
dotenv.config();
const request = supertest(app);

describe("Testing USERS endpoint", () => {
  it("create user and set token", async () => {
    const response = await request.post("/users").send({
      firstname: "Ammar",
      lastname: "Issa",
      password: "12345",
    });
    expect(response.status).toBe(201);
  });

  it("testing index route", async () => {
    const response = await request
      .get("/users")
      .set("Authorization", "Bearer " + process.env.TOKEN_TEST);

    return expect(response.status).toBe(200);
  });

  it(" testing show route STATUS 200", async () => {
    const response = await request
      .get("/users/47")
      .set("authorization", "Bearer " + process.env.TOKEN_TEST);
    expect(response.status).toBe(200);
  });
});
