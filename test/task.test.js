const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest(require('../index.js'))

describe("GET /", () => {
    it("should return a 200 response", done => {
        api
        .get("/api/task")
        .set("Accept", "application/json")
        .expect(200, done)
    })
    it("should return an array", done => {
        api
          .get("/api/task")
          .set("Accept", "application/json")
          .end((error, response) => {
            expect(response.body).to.be.an('array');
            done()
        })
    })
})

describe("GET /:id", () => {

    it("should return a specified 'id'", done => {
        api
          .get("/api/task/639004edf85501de4fd9a89f/")
          .set("Accept", "application/json")
          .end((error, response) => {
            expect(response.body).to.be.an;('array');
            done()
        })
    })
})

describe('/:id', () => {
    it ("should update 'id' of gif", done => {
        api
            .put('/api/task/639004edf85501de4fd9a89f')
            .send({name:'Do Laundry'})
            .expect(200)
            done()
    })
})

describe("POST /", () => {
    const newTask = {
      title: "Do Laundry",
      isCompleted: false
    };
    before(done => {
      api
        .post('/api/task')
        .set('Accept', 'application/json')
        .send(newTask)
        .end(done);
    });

    it('should add a task object to the task collection and return it', done => {
        api
          .get('/api/task')
          .set('Accept', 'application/json')
          .end((error, response) => {
            expect(response.body.find(task => task.title ===  newTask.title)).to.be.an(
              'object'
            );
            done();
          });
      })
  })