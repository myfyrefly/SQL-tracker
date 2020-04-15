USE employee_tracker;

INSERT INTO department
(name)
VALUES 
('sales'),
('accounting'),
('human resources'), 
('customer support'),
('warehouse'),
('management');

INSERT INTO role_table
(title, salary, department_id)
VALUES
('salesperson', 52000, 1),
('accountant', 60000, 2),
('HR representative', 56000, 3),
('customer service rep', 40000, 4),
('forklift operator', 35000, 5),
('manager', 70000, 6);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jolene', 'Bennett', 6, 025),
('Robert', 'California', 6, 046),
('David', 'Wallace', 6, 089),
('Michael', 'Scott', 6, 134),
('Jim', 'Halpert', 1, null),
('Pam', 'Halpert', 1, null),
('Dwight', 'Schrute', 1, null),
('Andy', 'Bernard', 1, null),
('Phyllis', 'Vance', 1, null),
('Stanley', 'Hudson', 1, null),
('Angela', 'Martin', 2, null),
('Kevin', 'Malone', 2, null),
('Oscar', 'Martinez', 2, null),
('Meredith', 'Palmer', 2, null),
('Creed', 'Bratton', 4, null),
('Kelly', 'Kapoor', 4, null),
('Darryl', 'Philbin', 5, null),
('Toby', 'Flenderson', 3, null);

