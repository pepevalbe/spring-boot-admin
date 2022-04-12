import '@testing-library/jest-dom';
import {server} from '../src/main/frontend/mocks/server';

beforeAll(async () => {
  server.listen()
})

afterAll(done => {
  setTimeout(() => {
    server.close();
    done();
  }, 500);
})
