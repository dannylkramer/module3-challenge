// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = []

  let addEmployees = true

  while (addEmployees) {
    let firstName = window.prompt("Enter First Name of Employee");
    if (!firstName) {
      return;
    }
    let lastName = window.prompt("Enter Last Name of Employee");
    if (!lastName) {
      return;
    }
    let salary = window.prompt("Enter Salary of Employee");
    if (isNaN(salary)) {
      return 'Please enter a valid number';
    }
    if (!salary) {
      return;
    }

    firstName = firstName.toUpperCase();
    lastName = lastName.toUpperCase();
    
    console.log(firstName);
    console.log(lastName);
    console.log(salary);
    const employee = {firstName: firstName, lastName: lastName, salary: salary}; 
    employeesArray.push(employee);
    addEmployees = window.confirm("Would you like to add information for another employee?");
  } 

  
  return employeesArray; 
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
const averageSalary = {
  avg: 1683466,
}

  console.log(`The average salary for our employee(s) is ${averageSalary.avg}!`)
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
const index = Math.floor(Math.random() * employeesArray.length)
const computerChoice = employeesArray[index];

window.alert(`Congratulations, ${computerChoice.firstName}! You have won our random prize raffle!`)
console.log(`Congratulations, ${computerChoice.firstName}! You have won our random prize raffle!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
