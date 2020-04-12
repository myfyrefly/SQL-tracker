///require the db folder (the entire folder)- this will give you access to the database
const db = require('./db');
//require {prompt} - requesting to utilize the specific prompt function from inquirer
const {prompt} = require('inquirer');
//require the console.table 
require('console.table');

//prompts will go in this file, utilizing a switch case
//main functionality will live here aka what the CLIENT will see
