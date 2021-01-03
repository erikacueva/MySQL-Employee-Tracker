USE employees_db;

INSERT into department (dept_name)
VALUES ("marketing"),
 ("admin"),
 ("legal"),
 ("engineering");

INSERT into role (title, salary, department_id)
VALUES ("head engineer", 100000.00, 4),
("junior engineer", 75000.00, 4),
("attorney", 100500.00, 3),
("secretary", 60500.00, 2),
("designer", 70500.00, 1);

INSERT into employee (first_name, last_name, role_id, manager_id)
VALUES 
("Bob", "Smith", 1, NULL),
("Linda", "Jones", 3, NULL),
("Joe", "Joey", 2, 1),
("Nate", "Gonzalez", 4, NULL);


