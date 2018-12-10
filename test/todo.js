var assert = require('assert');
let server = require('../server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);


process.env.NODE_ENV = 'test';

describe('Array', function() {
  describe('#Testing', function() {
    it('Testing', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('/POST todo', () => {
  it('it should not POST a todo without body and title', (done) => {
      let todo = {
          title: "",
          body: "",
      }
    chai.request("http://localhost:5000/todo")
        .post('/add')
        .send(todo)
        .end((err, res) => {
              res.should.have.status(400);
          done();
        });
  });

});

describe('/POST todo', () => {
  it('it should POST todo if body and title is not null', (done) => {
      let todo = {
          title: "Testing",
          body: "Testing",
      }
    chai.request("http://localhost:5000/todo")
        .post('/add')
        .send(todo)
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});

describe('/GET todo', () => {
  it('it should get array', (done) => {
    chai.request("http://localhost:5000/todo")
        .get('/')
        .end((err, res) => {
          res.body.should.be.a('array');
          done();
        });
  });
});