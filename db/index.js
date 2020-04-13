const connection = require('connection');

//create a class that will relate to the db

//methods to utilize: connection(), findAllEmplo(), findAllMmana(), createEemplo(), deleteEmplo(), 
//updateEemplo(),updateMana(), findAallRoles(), createRrole(), removeRole(), findAllDdepart(),createDdepar(), removeDdepa(), findaAllEemplobyDdepart(), findallEemployBbyMan(),
class ManageStaff {

    connection(connection) {
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, AS department, role.salary') // concat 
    }
    findAllManagers(employeeId){
        return this.connection.query('SELECT id, first_name, last_name FROM employee WHERE id!=?', employeeId)
    }
    createEmployees(employee){
        return this.connection.query('INSERT INTO employee SET ?', employee);
    }
    deleteEmployees(employeeId){
        return this.connection.query('DELETE FROM employee WHERE id = ?', employeeId);
    }
    updateEmployees(employeeId, roleId){
        return this.connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
    }
    updateManagers(employeeId, managerId){
        return this.connection.query('UPDATE employee SET manager_id = ? WHERE id = ?', [managerId, employeeId]);
    }
    /* findAllRoles(){
        return this.connection.query('SELECT role_id, title,')
    } */
    createRoles(role){
        return this.connection.query('INSERT INTO role SET ?', role);
    }
    removeRoles(roleId){
        return this.connection.query('DELETE FROM role WHERE role_id = ?', roleId)
    }
/*     findAllDepts(){

    }*/
    createDepts(department){
        return this.connection.query('INSERT INTO department SET ?', department);
    }
    removeDepts(departmentId){
        return this.connection.query('DELETE FROM department WHERE id = ?', departmentId);
    }
    findAllEmployeeDepts(){

    }
    findAllEmployeesByManager(){

    }
}
//export the class 
module.exports = new ManageStaff();
//Sql syntax ====== Select Delete Update 