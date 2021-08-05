const request = require('supertest');
const app = require('../app');
const faker = require('faker');

afterAll(() => { });

describe('Auth/SignUp', function () {
    it('Deve ser capaz de criar um novo usuário', async () => {

        const user = {
            name: faker.random.words(3),
            login: faker.random.alpha(8),
            password: 'password'
        };

        const response = await request(app).post('/auth/signup').send(user);

        expect(user).toEqual(user);
        expect(response.status).toBe(201);
    });
    it('Deve ser capaz de retornar dos dados usuário sem password', async function () {
        const user = {
            name: faker.random.words(3),
            login: faker.random.alpha(8),
            password: 'password'
        };

        const response = await request(app).post('/auth/signup').send(user);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.not.objectContaining({ password: 'password' }));
    });
});