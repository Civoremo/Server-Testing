const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
    describe("GET / endpoint", () => {
        it("should respond with status code 200", async () => {
            let response = await request(server).get("/");

            expect(response.status).toBe(200);
        });

        it("should respond with json type", async () => {
            let response = await request(server).get("/");

            expect(response.type).toMatch(/json/i);
        });

        it("should respond with json object", async () => {
            const expected = { user: "someone" };
            let response = await request(server).get("/");

            expect(response.body).toEqual(expected);
        });
    });
});
