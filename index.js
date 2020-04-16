// require the db folder (the entire folder)- this will give you access to the database
const db = require("./db");
const inquirer = require("inquirer");
// require the console.table
require("console.table");
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

const manage = require("./db/index");
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
  inquirer
  .prompt({
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
    ]
  })
  .then(function(result) {
    switch (result.actions) {
      case "add new employee":
        manage.createEmployee();
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
        manage.viewAllDepts();
        break;
      case "update employee roles":
        updateEmployess();
        break;
      default:
        connection.end();
    }
  })
  
};

initActions();

module.exports = newEmployeeQ;

