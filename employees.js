var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "cleanh20",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Employees",
        "View All Roles",
        "Add Department",
        "Add Role",
        // "View All Employees By Department",
        // "View All Employees By Manager",
        "Add Employee",
        // "Remove Employee",
        "Update Employee Role",
        // "Update Employee Manager",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Departments":
          viewDepartments();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "Add Department":
          addDept();
          break;

        case "Add Role":
          addRole();
          break;

        //bonus
        // case "View All Employees By Department":
        //   viewEmpDept();
        //   break;

        //bonus
        // case "View All Employees By Manager":
        //   songSearch();
        //   break;

        case "Add Employee":
          addEmpl();
          break;

        //bonus
        // case "Remove Employee":
        //   songAndAlbumSearch();
        //   break;

        case "Update Employee Role":
          songAndAlbumSearch();
          break;

        //bonus
        // case "Update Employee Manager":
        //   songAndAlbumSearch();
        //   break;
      }
    });
}

function viewDepartments() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    console.table(res);
    runSearch();
  });
}

function viewEmployees() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    console.table(res);
    runSearch();
  });
}

function viewRoles() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    console.table(res);
    runSearch();
  });
}

function addEmpl() {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "What's the employee's first name? ",
    },
    {
      name: "last_name",
      type: "input",
      message: "What's the employee's last name? ",
    },
    {
      name: "role_id",
      type: "input",
      message: "What's the employee's role ID? ",
    },
    {
      name: "manager_id",
      type: "input",
      message: "What's the employee's manager ID? ",
    },
    
  ])
  .then(function(answer) {
    console.log(answer);
    var query =
    "INSERT into employee SET ?";
    connection.query(query, answer, function (err, res) {
      console.log("Successfully inserted an employee!");
      runSearch();
    });

  })

}

// function viewEmpDept() {
//   var query = "SELECT employee FROM department";
//   connection.query(query, function (err, res) {
//     console.table(res);
//     runSearch();
//   });
// }
