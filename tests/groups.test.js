const {Group} = require("../src/models");

beforeAll(() => {
  });
  
afterAll(() => {
});

test('should create "Group"', async () => {
  const group = await Group.create({name: 'group-name', permissions: 'apply'});

  expect(group.name).toBe('group-name');
  expect(group.permissions).toBe('apply');
});
