const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest(require('../index.js'))

describe("GET /task", () => {
    it("should return a 200 response", done => {
        api
        .get("/task")
        .set("Accept", "application/json")
        .expect(200, done)
    })
})


// it("should return an array", done => {
//     api
//       .get("/task")
//       .set("Accept", "application/json")
//       .end((error, response) => {
//         expect(response.body).to.be.an('array');
//         done()
//     })
// })