// require the db folder (the entire folder)- this will give you access to the database
const db = require("./db");
const inquirer = require("inquirer");
// require the console.table
require("console.table");

const manageStaff = require("./db/index");
const connection = require("./db/connection");

// REQUIRED: below are the minimum requirements for this project, // BONUS: update employee managers, view employees by manager, delete departments, roles, and employees, view total budget of departments --- id combined salaries of all employees

const actions = [
  {
    type: "list",
    name: "actions",
    message: "What would you like to do?",
    choices: [
      "add new employee",
      "add new role",
      "add new department",
      "view all employees",
      "view all roles",
      "view all departments",
      "update employee roles",
    ],
  },
];

const newEmployeeQ = [
  {
    type: "input",
    name: "firstName",
    message: "Enter the new employee's first name:",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter the new employee's last name:",
  },
  {
    type: "choice",
    name: "role",
    message: "Select the new employee's role:",
    choices: [
      "salesperson",
      "accountant",
      "HR representative",
      "customer service representative",
      "forklift operator",
      "manager",
    ],
  },
  {
    type: "choice",
    name: "manager",
    message: "Select the corresponding manager",
    choices: ["134", "089", "046", "025"],
  },
];

// add message response "role successfully created!"
const newRoleQ = [
  {
    type: "input",
    name: "newRole",
    message: "Enter the new job role you want to create:",
  },
  {
    type: "number",
    name: "newRoleSalary",
    message: "Enter the base salary for this role:",
  },
  {
    type: "choice",
    name: "newRole",
    message: "What department will this role be assigned to?",
    choices: [
      "sales",
      "accounting",
      "human resources",
      "cusomer support",
      "warehouse",
      "management",
    ],
  },
];

// add message response "department successfully created!"
const newDeptQ = [
  {
    type: "input",
    name: "newDept",
    message: "Enter the new department you want to create:",
  },
];

// the functions below are from the index.js file in the db folder
async function initActions() {
  const result = await inquirer.prompt(actions);
  switch (result) {
    case "add new employee":
      createEmployee();
      break;
    case "add new role":
      createRoles();
      break;
    case "add new department":
      createDepts();
      break;
    case "view all employees":
      viewAllEmployees();
      break;
    case "view all roles":
      viewAllRoles();
      break;
    case "view all departments":
      viewAllDepts();
      break;
    case "update employee roles":
      updateEmployess();
      break;
    default:
      connection.end();
  }
}

initActions();


