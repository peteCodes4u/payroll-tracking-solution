// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Dynamic array for emplyee data
let employees = [];

// Collect employee data
const collectEmployees = function () {
  
  //create and push currentEmployee objects into the array
  const currentEmployee = {
    firstName: prompt("please enter the employee's first name", "first name"),
    lastName: prompt("please enter the employee's last name", "last name"),
    salary: parseFloat (prompt("please enter the employee's salary", "salary")) 
  };
  employees.push(currentEmployee);
  addAnotherEmployee();
}
function addAnotherEmployee() {
  const addAnother = confirm('add another?')

  if (addAnother == true) { 
    collectEmployees(); 
  } else {
    displayEmployees(employees);
  }

return employees;

}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  let sum = 0;
  for(i=0; i<employeesArray.length; i++) {
    sum = sum + employeesArray[i].salary;
  }

  let salaryAvg = sum/employeesArray.length
  
  console.log("The average employee salary between our" + " " + employeesArray.length + " " + "emloyee(s) is " + salaryAvg)

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  
  let index = Math.floor(Math.random() * employees.length);
  let employeeWinner = employeesArray[index];

  console.log("Congratulations to" + " " + employeeWinner.firstName + " " + employeeWinner.lastName + " " + "our random drawing winner!");

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
