const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: process.env.PASSWORD,
      database: process.env.DB_NAME
    },
    console.log('connected to the employee_db database')
);

db.connect(function (err) {
    if (err) throw err;
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What Would you like to do?",
                choices:
                    ["View All Departments",
                        "View All Roles",
                        "View All Employees",
                        "Add a Department",
                        "Add a Role",
                        "Add an Employee",
                        "Update an Employee Role",
                    ]
            }

        ])
        .then((answers) => {
            if (answers.action == "Add an Employee") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: "first_name",
                            message: "What is the employee's first name?"
                        },
                        {
                            type: 'input',
                            name: "last_name",
                            message: "What is the employee's last name?"
                        },
                        {
                            type: 'input',
                            name: "role_name",
                            message: "What is the employee's role with the company?"
                        },
                        {
                            type: 'input',
                            name: "manager_name",
                            message: "What is the manager's first and last name?"
                        }
                    ])
                    .then((answers) => {

                        db.query("select id from role where title = ?", [answers.role_name], (error, test) => {
                            const [first_name, last_name] = answers.manager_name.split(" ");
                            db.query("select id from employee where first_name = ? and last_name = ?", [first_name, last_name], (error, test2) => {
                                const [{ id: role_id }] = test;
                                const [{ id: manager_id }] = test2;
                                db.query("insert into employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)", [answers.first_name, answers.last_name, role_id, manager_id]);
                            });
                        });

                    })
            }
            if (answers.action == "View All Departments") {
                db.query("select department_name, id from department", ((err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.table(results);
                }));
            };
            if (answers.action == "View All Roles") {
                db.query("select title from role", ((err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.table(results);
                }))

            }

            if (answers.action == "View All Employees") {
                db.query("select first_name, last_name from employee", ((err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.table(results);
                }))

            }

        });
});

console.table(
    "EMPLOYEE TRACKER"
);

function askName() {
    return ([
        {
            name: "first",
            type: "input",
            message: "Enter the first name: "
        },
        {
            name: "last",
            type: "input",
            message: "Enter the last name: "
        }
    ]);
}