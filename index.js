
// require the db folder (the entire folder)- this will give you access to the database
const db = require('./db');
// require {prompt} - requesting to utilize the specific prompt function from inquirer
const {prompt} = require('inquirer');
// require the console.table 
require('console.table');
// prompts will go in this file, utilizing a switch case
// main functionality will live here aka what the CLIENT will see

// REQUIRED: below are the minimum requirements for this project, // BONUS: update employee managers, view employees by manager, delete departments, roles, and employees, view total budget of departments --- id combined salaries of all employees
    
const actions = [
    {
        type: 'list',
        name: 'actions',
        message: 'What would you like to do?',
        choices: [
            'add new employee',
            'add new role',
            'add new department',
            'view all employees',
            'view all roles',
            'view all departments',
            'update employee roles'
        ]
    }
]

const newEmployeeQ = [
    {
        type: "input",
        name: "firstName",
        message: "Enter the new employee's first name:"
    } ,
    {
        type: "input",
        name: "lastName",
        message: "Enter the new employee's last name:"
    } ,
    {
        type: "choice",
        name: "role",
        message: "Select the new employee's role:",
        choices: ["salesperson", "accountant", "HR representative", "customer service representative", "forklift operator", "manager"]
    } ,
    {
        type: "choice",
        name: "manager",
        message: "Select the corresponding manager",
        choices: ["134", "089", "046", "025" ]
    } 
];

// add message response "role successfully created!"
const newRoleQ = [
    {
        type: "input",
        name: "newRole",
        message: "Enter the new job role you want to create:" 
    } ,
    {
        type: "number",
        name: "newRoleSalary",
        message: "Enter the base salary for this role:" 
    } ,
    {
        type: "choice",
        name: "newRole",
        message: "What department will this role be assigned to?",
        choices: ["sales", "accounting", "human resources", "cusomer support", "warehouse", "management"] 
    } ,
]


// add message response "department successfully created!"
const newDeptQ = [
    {
        type: "input",
        name: "newDept",
        message: "Enter the new department you want to create:" 
    } 
]
clearImmediate

async function initActions() {
    const result = await {prompt}(actions)
    console.log(result);
}

initActions();