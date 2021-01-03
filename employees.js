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
          updateEmpRole();
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


function addRole() {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is the new row title? ",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary for this role? ",
    },
    {
      name: "department_id",
      type: "input",
      message: "What is the department ID? ",
    },  
  ])
  .then(function(answer) {
    console.log(answer);
    var query =
    "INSERT into role SET ?";
    connection.query(query, answer, function (err, res) {
      console.log("Successfully added a new role!");
      runSearch();
    });

  })

}

function addDept() {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is the new department name? ",
    },
  ])
  .then(function(answer) {
    console.log(answer);
    var query =
    "INSERT into department SET ?";
    connection.query(query, answer, function (err, res) {
      console.log("Successfully added a new department!");
      runSearch();
    });

  })

}

// function updateEmpRole() {
//   inquirer.prompt([
//     {
//       name: "updatedEmplRole",
//       type: "list",
//       message: "Select the employee you would like to update.",
//       choices: "SELECT * FROM employee",
//     },
//   ])
//   .then(function(answer) {
//     console.log(answer);
//     var query =
//     "UPDATE employee SET first_name = ? , last_name =? , role_id =?, manager_id = ? WHERE id = ?";
//     connection.query(query, answer, function (err, res) {
//       console.log("Successfully updated the employee role!");
//       runSearch();
//     });

//   })

// }

 






// function viewEmpDept() {
//   var query = "SELECT employee FROM department";
//   connection.query(query, function (err, res) {
//     console.table(res);
//     runSearch();
//   });