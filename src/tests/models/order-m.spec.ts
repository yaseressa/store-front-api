import { Orders, Order } from "../../models/orders-model";

describe("Testing Orders model", () => {
  const o = new Orders();

  it("CurrentOrderByUserId defined ", async () => {
    expect(o.CurrentOrderByUserId).toBeDefined();
  });
  it("show method should return the correct order", async () => {
    const result: Order = await o.CurrentOrderByUserId(1);
    expect(result).toEqual({
      id: 1,
      user_id: 1,
      status: "active",
    });
  });
});
