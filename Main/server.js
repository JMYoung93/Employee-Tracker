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
        'Delete A Department',
		'Delete A Role',
		'Delete An Employee',
        'Update A Role Salary',
        'Update Employee\'s Manager',
        'Update Employee\'s Salary'
      ]
  }];

switch (answer.userSelect){
    case 'View All Employees':
            viewEmployee();
            break;
    case 'Add an Employee':
            addEmployee();
            break;
    case 'Update Employee Role':
            updateRole();
            break;
    case 'View All Departments':
            viewDepartment();
            break;
    case 'Add a Department':
            addDepartment();
            break;
    case 'Add a Role':
            addRole();
            break;
    case 'Delete A Department':
            deleteDept();
            break;
    case 'Delete A Role':
            deleteRole();
            break;
    case 'Delete An Employee':
            deleteEmployee();
            break;
    case 'Update A Role Salary':
            updateSalary();
            break;
    case 'Update Employee\'s Manager':
            updateManager();
            break;
    case 'Update Employee\'s Salary':
            updatePay();
            break;
}

    