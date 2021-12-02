const inquirer = require('inquirer');

const mysql = require('mysql2')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'tracker_db'
    },
    console.log(`Connected to the employee tracker database.`)
  );

  const questionList = [{
      type: "list",
      name: "userSelect",
      message: "Please select an option below.",
      choices: [
        "View All Employees",
        "Add an Employee",
        "Update Employee Role",
        "View All Departments",
        "View All Roles",
        "Add a Department",
        "Add a Role",
      ]
  }];

  
    