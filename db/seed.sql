USE employee_tracker;

INSERT INTO department
(name)
VALUES 
('sales'),('financing'),('legal'), ('technology');

INSERT INTO role
(title, salary, department_id)
VALUES
('sales lead', 60000, 1),
('accountant', 80000, 2),
('attorney', 100000, 3),
('developer', 75000, 4);

INSERT INTO employee_tracker
(first_name, last_name, role_id, manager_id)
VALUES
('Michael', 'Scott', 1, 34),
('Kevin', 'Malone', 2, null),
('Toby', 'Flenderson', 3, null),
('Phyllis', 'Vance', 4, null);

