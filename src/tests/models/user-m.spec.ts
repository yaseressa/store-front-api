import { Users } from "../../models/users-model";
var idtest: number;
describe("Testing Users model", () => {
  const us = new Users();
  it(" Testing create user ", async () => {
    const fn = "Yaser",
      ln = "Issa",
      pass = "12345";
    const user = await us.create({
      firstname: fn,
      lastname: ln,
      password: pass,
    });
    idtest = <number>user.id;
    expect(user.firstname).toEqual("Yaser");
    expect(user.lastname).toEqual("Issa");
  });

  it("Testing get user by id to give me all records for that specfic user ", async () => {
    const user = await us.show(idtest);
    //@ts-ignore
    expect(user.firstname).toEqual("Yaser");
    expect(user.lastname).toEqual("Issa");
  });
});
