const connection = require("./connection");
const inquirer = require('inquirer');

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

// this class relates to the db

class ManageStaff {
  connection(connection) {
    this.connection = connection;
  }
  createEmployee() {
    console.log('create employee function was selected')
  }
    
  createRole(role) {
    return this.connection.query("INSERT INTO role_table SET ?", role);
  }
  createDepts(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  viewAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role_table.title, department.name, AS department, role_table.salary"
    ); // concat
  }
  viewAllRoles() {
    return this.connection.query("SELECT role_id, title,");
  }
  viewAllDepts() {
    
  }
  updateEmployee(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }
}

module.exports = new ManageStaff(connection);
