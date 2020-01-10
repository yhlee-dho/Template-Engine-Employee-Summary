const Manager = require("../lib/Manager");

test("Should set officeNumber using constructor", () => {
  const officeNumber = 420;
  const employee = new Manager("Minch", 3, "yoda@coruscant.com", officeNumber);
  expect(employee.officeNumber).toBe(officeNumber);
});

test("getTitle() should return 'Manager'", () => {
  const title = "Manager";
  const employee = new Manager("Minch", 3, "yoda@coruscant.com", 420, title);
  expect(employee.getTitle()).toBe(title);
});

test("getOfficeNumber() should return '420'", () => {
  const officeNumber = 100;
  const employee = new Manager("Minch", 3, "yoda@coruscant.com", officeNumber);
  expect(employee.getOfficeNumber()).toBe(officeNumber);
});
