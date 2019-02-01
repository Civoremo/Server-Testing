const request = require("supertest");

const db = require("../dbConfig.js");
const userModel = require("./usersModel.js");

afterEach(async () => {
    await db("users").truncate();
});

describe("users model", () => {
    describe("post tests", () => {
        it("should insert provided user", async () => {
            const user = await userModel.insert({ name: "Ben" });

            // const users = await db("users");
            // expect(users).toHaveLength(1);
            // expect(user.name).toEqual("Ben");
        });

        // it("should return status code 201", async () => {
        //     let response = await request(userModel).get("/");

        //     expect(response.body).toBe([1]);
        // });
    });

    // describe("put tests", () => {
    //     it("should return updated user id", async () => {
    //         const user = await userModel.update(1, { name: "Benny" });
    //     });
    // });
});
