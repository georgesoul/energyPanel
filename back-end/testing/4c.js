const expect = require('chai').expect;
const request = require('supertest');
const assert = require('assert')

const app = require('../app.js');
const exp_res = require('./expected_responses/actual_vs_ahead_year.json')
const token = require('./tokens/auth_token_admin.json');

describe('4c', () => {
  // after((done) => {
  //   done()
  // })

  it('Should return status code : 200, actual_vs_ahead_permonth_obj', (done) => {
    // let data = {
    //
    // }
    request(app)
    .get('/energy/api/ActualvsForecast/Greece/PT60M/year/2018?format=json')
    //.send(data
    .set('X-OBSERVATORY-AUTH', token.token)
    .expect(200)
    .expect(res => {
          expect(res.body).to.eql(exp_res)
    })
    .end(function(err, res) {
        if (err) return done(err);
        done();
    });
  })
})
