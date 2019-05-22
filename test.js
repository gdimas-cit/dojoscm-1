const supertest = require('supertest');
const app = require('./app.js');

describe('GET /', () => {
  // Test 1 - HTTP status
  it('Expect HTTP status 200', (done) => {
    supertest(app)
      .get('/')
      .expect('Content-type', /text/)
      .expect(200, done());
  });

  // Test 2 - Control Test
  it('Mocha Control Test', (done) => {
    (1).should.be.exactly(1).and.be.a.Number();
    done();
  });
});
