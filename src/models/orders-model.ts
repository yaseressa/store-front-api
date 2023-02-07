import Client from "../database";

export type Order = {
  id: number;
  user_id: number;
  status: string;
};
export type rOrder = {
  user_id: number;
  status: string;
};

export class Orders {
  async CurrentOrderByUserId(userId: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        "SELECT * FROM Orders WHERE user_id = ($1) ORDER BY id DESC LIMIT 1";
      const result = await conn.query(sql, [userId]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`couldn't get the current order. Error: ${err}`);
    }
  }
  async createOrder(o: rOrder): Promise<Order> {
    try {
      const sql =
        "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";
      const conn = await Client.connect();
      const result = await conn.query(sql, [o.user_id, o.status || "active"]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not add new order. Error ${err}`);
    }
  }
}
