import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test to 09-promesas", () => {
  test("getHeroeByIdAsync must be return a hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync must return an error if hero does not exist", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`Could not find hero ${id}`);
        done();
      });
  });
});
