const should = require("chai").should()
const expect = require("chai").expect
const supertest = require("supertest")
const api = supertest(require("../index.js"))

describe("GET /task", () => {
    it("should display all the tasks and return status 200", done => {
        api
            .get("/task")
            .set("Accept", "application.json")
            .expect(200, done)
    })
})