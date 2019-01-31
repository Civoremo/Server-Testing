const request = require("supertest");

const db = require("../dbConfig.js");
const userModel = require("./usersModel.js");

afterEach(async () => {
    await db("users").truncate();
});

describe("users model", () => {
    it("should insert provided user", async () => {
        const user = await userModel.insert({ name: "Ben" });

        const users = await db("users");
        expect(users).toHaveLength(1);
        expect(user.name).toEqual("Ben");
    });
});
