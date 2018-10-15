var users = require("../app/server/db/testdb");

describe('testing user menthods', function () {
  it('has total users', function () {
    expect(users.getAll().length).toEqual(13);
  });
  it('has user Samuel Peterson', function () {
    expect(users.getById("Samuel Peterson").phone).toEqual('02072292481');
  });
  it('has total active user', function () {
    expect(users.getActive().length).toEqual(3);
  });
});
describe('setting active user', function () {
  beforeEach(function () {
    users.activatePhoneNumber("Paul Smith");
  });
  it('has Paul Smith as active user', function () {
    expect(users.getActive()[3].active).toBeTruthy();
  });
});
