DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE deparment (
    id INT NOT NULL primary key,
    name VARCHAR(50)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);