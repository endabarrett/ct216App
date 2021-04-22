const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;

describe('Testing posting comments', function () {
    this.timeout(100000);

    it('Tests if the db can save comments successfully', async () => {
        const result = await chai.request('http://localhost:5001/ct216app/us-central1').post('/postcomments')
            .set('content-type', 'application/json')
            .send({handle: 'TestEnda', comment:'Test comment from Enda'});

        expect(result.statusCode).to.equal(200);
        expect(result.text).to.equal("Saved in the database");
    });
});

describe('Tests Get Comments', function () {
    this.timeout(100000);

    it('Tests if there are comments', async () => {
        const result = await chai.request('http://localhost:5001/ct216app/us-central1').get('/getcomments');

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('Array');
        expect(result.body[0]).haveOwnProperty('comment');
    });
});


