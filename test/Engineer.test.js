const Engineer = require("../lib/Engineer");

test("Should set Github using constructor", () => {
  const github = "PurpleStick";
  const employee = new Engineer("Mace", 2, "windu@coruscant.com", github);
  expect(employee.github).toBe(github);
});

test("getTitle() should return 'Engineer'", () => {
  const title = "Engineer";
  const employee = new Engineer("Mace", 2, "windu@coruscant.com", "PurpleStick", title);
  expect(employee.getTitle()).toBe(title);
});

test("getGithub() should return 'PurpleStick'", () => {
  const github = "PurpleStick";
  const employee = new Engineer("Mace", 2, "windu@coruscant.com", github);
  expect(employee.getGithub()).toBe(github);
});
