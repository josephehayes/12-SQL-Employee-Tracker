USE employee_DB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Gerald', 'Sloan', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Quin', 'Snyder', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('William', 'Hardy', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Frank', 'Layden', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'OConnor', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dennis', 'Lindsey', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Daniel', 'Ainge', 6, null);

INSERT INTO department (department_name)
VALUES ('Coaching');
INSERT INTO department (department_name)
VALUES ('Basketball Operations');
INSERT INTO department (department_name)
VALUES ('Scouting');
INSERT INTO department (department_name)
VALUES ('Human Resources');
INSERT INTO department (department_name)
VALUES ('Executive Leadership');

INSERT INTO role (title, salary, department_id)
VALUES ('GM', 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Coaching', 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('President Basketball', 110000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Assistant Coaching', 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Head Scout', 75000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('CEO', 250000, 5);