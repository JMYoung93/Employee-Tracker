const inquirer = require('inquirer');
//require("console.table");
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'password',
      database: 'tracker_db'
    },
    console.log(`Connected to the employee tracker database.`)
  );

  db.connect(function(err){
          if(err) throw err;
          launchApp();
  })

function launchApp() {
   inquirer.prompt([{
      type: "list",
      name: "userSelect",
      message: "Welcome to your employee database! Please select an option below.",
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
        'Update Employee\'s Salary',
        'Exit'
      ]

  }]).then( (answer) =>{
          console.log(answer)
 switch (answer.userSelect) {
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
    case 'Exit':
            console.log('Goodbye!')
            db.end();
            break;
}});
function viewEmployee() {
    let query = 'SELECT * FROM employee';
    db.query(query, function(err, res) {
    if(err) throw err;
    console.log(res.length + ' employees are currently employed!');
    console.table('Here are all employees:', res);
    launchApp();
})
}

function addEmployee(){
        db.query('SELECT * FROM role', function (err, res){
                if (err) throw err;
                inquirer
            .prompt([
                {
                    name: 'first_name',
                    type: 'input', 
                    message: "What is the employee's fist name? ",
                },
                {
                    name: 'last_name',
                    type: 'input', 
                    message: "What is the employee's last name? "
                },
                {
                    name: 'manager_id',
                    type: 'input', 
                    message: "What is the employee's manager's ID? "
                },
                {
                    name: 'role', 
                    type: 'list',
                    choices: function() {
                    var roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                    },
                    message: "What is this employee's role? "
                }
                ]).then(function (answer) {
                    let role_id;
                    for (let a = 0; a < res.length; a++) {
                        if (res[a].title == answer.role) {
                            role_id = res[a].id;
                            console.log(role_id)
                        }                  
                    }  
                    connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        manager_id: answer.manager_id,
                        role_id: role_id,
                    },
                    function (err) {
                        if (err) throw err;
                        console.log('Your employee has been added!');
                        options();
                    })
                })
        })
}; 
        
};
launchApp();
 //database.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id`);