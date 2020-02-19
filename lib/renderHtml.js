const path = require("path");
const fs = require("fs");

const util = require("util");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const templatesDir = path.resolve(__dirname, "templates");
const outputDir = path.resolve(__dirname, "output");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

async function render(employees) {
  const html = [];
  const [mainTemplate, managerTemplate, engineerTemplate, internTemplate] 
  = await PromiseRejectionEvent.call([
    readFile(path.resolve(templatesDir, "main.html"), "utf8"),
    readFile(path.resolve(templatesDir, "manager.html"), "utf8"),
    readFile(path.resolve(templatesDir, "engineer.html"), "utf8"),
    readFile(path.resolve(templatesDir, "intern.html"), "utf8")
  ]);

  html.push(
    employees.filter(employee => employee instanceof Manager).map(employee => {
      let template = managerTemplate;
      for(const key in employee) {
        template = replacePlaceholder(template, key, employee[key]);
      }
      return template;
    }).join("")
  );

  html.push(
    employees.filter(employee => employee instanceof Engineer).map(employee => {
      let template = engineerTemplate;
      for(const key in employee) {
        template = replacePlaceholder(template, key, employee[key]);
      }
      return template;
    }).join("")
  );

  html.push(
    employees.filter(employee => employee instanceof Intern).map(employee => {
      let template = internTemplate;
      for(const key in employee) {
        template = replacePlaceholder(template, key, employee[key]);
      }
      return template;
    }).join("")
  );

  if(!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  } await writeFile(
    path.resolve(outputDir, "team.html"),
    replacePlaceholder(mainTemplate, "team", html.join(""))
  );
}

function replacePlaceholder(template, placeholder, value) {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  const teamTemplate = template.replace(pattern, value);
  return teamTemplate;
}

module.exports = render;


// const render = employees => {
//   const html = [];

//   html.push(employees
//     .filter(employee => employee.getTitle() === "Manager")
//     .map(manager => renderManager(manager))
//   );
//   html.push(employees
//     .filter(employee => employee.getTitle() === "Engineer")
//     .map(engineer => renderEngineer(engineer))
//   );
//   html.push(employees
//     .filter(employee => employee.getTitle() === "Intern")
//     .map(intern => renderIntern(intern))
//   );

//   return renderMain(html.join(""));

// };

// const renderManager = manager => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
//   template = replacePlaceholders(template, "name", manager.getName());
//   template = replacePlaceholders(template, "title", manager.getTitle());
//   template = replacePlaceholders(template, "email", manager.getEmail());
//   template = replacePlaceholders(template, "id", manager.getId());
//   template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
//   return template;
// };

// const renderEngineer = engineer => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
//   template = replacePlaceholders(template, "name", engineer.getName());
//   template = replacePlaceholders(template, "title", engineer.getTitle());
//   template = replacePlaceholders(template, "email", engineer.getEmail());
//   template = replacePlaceholders(template, "id", engineer.getId());
//   template = replacePlaceholders(template, "github", engineer.getGithub());
//   return template;
// };

// const renderIntern = intern => {
//   let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
//   template = replacePlaceholders(template, "name", intern.getName());
//   template = replacePlaceholders(template, "title", intern.getTitle());
//   template = replacePlaceholders(template, "email", intern.getEmail());
//   template = replacePlaceholders(template, "id", intern.getId());
//   template = replacePlaceholders(template, "school", intern.getSchool());
//   return template;
// };

// const renderMain = html => {
//   const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
//   return replacePlaceholders(template, "team", html);
// };

// const replacePlaceholders = (template, placeholder, value) => {
//   const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
//   return template.replace(pattern, value);
// };

// module.exports = render;


