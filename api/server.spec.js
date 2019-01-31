const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
    describe("GET / endpoint", () => {
        it("should respond with status code 200", async () => {
            let response = await request(server).get("/");

            // console.log(response.json);
            expect(response.status).toBe(200);
        });
    });
});
