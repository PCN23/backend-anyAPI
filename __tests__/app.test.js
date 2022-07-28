const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('horses routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return a list of horses', async () => {
    const res = await request(app).get('/Horses');
    const expected = horses.map((horse) => {
      return { id: horse.id, name: horse.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/horses/:id should return hoses detail', async () => {
    const res = await request(app).get('/horses/1');
    const lucky = {
      id: '1',
      name: 'Lucky',
      wins: '13',
      born: '2012',
    };
    expect(res.body).toEqual(lucky);
  });

  afterAll(() => {
    pool.end();
  });
});
