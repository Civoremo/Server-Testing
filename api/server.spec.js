const request = require("supertest");
const server = require("./server.js");

// afterEach(async () => {
//     await db("users").truncate();
// });

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

    describe("GET /users endpoint", () => {
        it("should return status code 200 for get all users", async () => {
            let response = await request(server).get("/users");
            expect(response.status).toBe(200);
        });

        it("should return JSON", async () => {
            let response = await request(server).get("/users");
            expect(response.type).toMatch(/json/i);
        });
    });

    describe("Post /users endpoint", () => {
        it("should return status code 201", async () => {
            let response = await request(server).post("/users");
            expect(response.status).toBe(201);
        });

        it("should return object {id: 2, name: Trevor}", async () => {
            const expected = { id: 2, name: "Trevor" };
            let response = await request(server).post("/users");
            expect(response.body).toEqual(expected);
        });
    });
});
