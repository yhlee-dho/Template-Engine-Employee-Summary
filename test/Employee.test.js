const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Employee Process", () => {

      
      it("Should create an a new employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
      });

  
      it("Should set name using constructor", () => {
        const name = "Vader";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
      });
  
      it("Should set id using constructor", () => {
        const id = "1";
        const employee = new Employee("Anakin",id);
        expect(employee.id).toBe(id);
      });

      it("Should set title using constructor", () => {
        const title = "emperor";
        const employee = new Employee("Anakin", 1, title);
        expect(employee.title).toBe(title);
      });

      it("Should set email using constructor", () => {
        const email = "skywalker@tatooine.com";
        const employee = new Employee("Anakin", 1, "emperor", email);
        expect(employee.email).toBe(email);
      });


      it("Should get name using getName()", () => {
        const name = "Vader";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
      });
  
      it("Should get id using getId()", () => {
        const id = "1";
        const employee = new Employee("Anakin",id);
        expect(employee.getId()).toBe(id);
      });

      it("Should get title using getTitle()", () => {
        const title = "emperor";
        const employee = new Employee("Anakin", 1, title);
        expect(employee.getTitle()).toBe(title);
      });

      it("Should get email using getEmail()", () => {
        const email = "skywalker@tatooine.com";
        const employee = new Employee("Anakin", 1, "emperor", email);
        expect(employee.getEmail()).toBe(email);
      });

    });
  });