const connection = require("./connection");
const newEmployeeQ = require('');

// this class relates to the db

class ManageStaff {
  connection(connection) {
    this.connection = connection;
  }
  createEmployee() {
      console.log('This feature is still in development!')
    //return this.connection.query("INSERT INTO (employee) SET (?)", employee);
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
  viewAllDepts() {}
  updateEmployee(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }
}

module.exports = new ManageStaff(connection);
