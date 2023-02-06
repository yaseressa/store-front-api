import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe("Testing endpoints response", () => {
  it("test INDEX / endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });
});

export default app;
