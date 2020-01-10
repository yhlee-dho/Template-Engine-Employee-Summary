const Intern = require("../lib/Intern");

test("Should set school using constructor", () => {
  const school = "JediAcademy";
  const employee = new Intern("Ahsoka", 4, "tano@togruta.com", school);
  expect(employee.school).toBe(school);
});

test("getTitle() should return 'Intern'", () => {
  const title = "Intern";
  const employee = new Intern("Ahsoka", 4, "tano@togruta.com", "JediAcademy", title);
  expect(employee.getTitle()).toBe(title);
});

test("getSchool() should return 'JediAcademy'", () => {
  const school = "UCLA";
  const employee = new Intern("Ahsoka", 4, "tano@togruta.com", school);
  expect(employee.getSchool()).toBe(school);
});
