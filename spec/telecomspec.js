var users = require("../app/server/db/testdb");

describe('testing user menthods', function () {
  it('has total users', function () {
    expect(users.getAll().length).toEqual(13);
  });
});
