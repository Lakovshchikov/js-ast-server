const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const test_data = require("./data/data");

chai.use(chaiHttp);

describe('Compiler', () => {

    /*
      * Тест для /compile
      */

    describe('/compile ', () => {
        it('Верные данные для запроса /compile', (done) => {
            chai.request(server)
                .post('/compile')
                .send({src: test_data.valid_string_2})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.not.redirect;
                    done();
                });
        });
    });

    describe('/compile ', () => {
        it('Неверные данные для запроса /compile', (done) => {
            chai.request(server)
                .post('/compile')
                .send({src: test_data.invalid_string_1})
                .end((err, res) => {
                    res.should.have.status(400);
                    res.should.not.redirect;
                    done();
                });
        });
    });

});
