import { Products, Product } from "../../models/products-model";

describe("Testing Products model", () => {
  const p = new Products();
  let id: any;
  it("index method is defined ", async () => {
    expect(p.index).toBeDefined();
  });

  it("show method is defined ", async () => {
    expect(p.show).toBeDefined();
  });

  it("create method is defined ", async () => {
    expect(p.create).toBeDefined();
  });
  it("creates a product", async () => {
    const result: Product = await p.create({
      name: "pasta",
      price: "35",
      category: "food",
    });

    id = result.id;
    expect(result).toEqual({
      id,
      name: "pasta",
      price: "35",
      category: "food",
    });
  });
  it("returns a product with the given id", async () => {
    const result: Product = await p.show(id);
    expect(result).toEqual({
      id,
      name: "pasta",
      price: "35",
      category: "food",
    });
  });
  it("returns a list products", async () => {
    const result: Product[] = await p.index();
    expect(result).toEqual([
      {
        id: 1,
        name: "p",
        price: "21",
        category: "food",
      },
      {
        id: 2,
        name: "pasta",
        price: "35",
        category: "food",
      },
    ]);
  });
});
