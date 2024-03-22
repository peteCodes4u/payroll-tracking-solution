// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function () {

  // TODO: Get user input to create and return an array of employee objects

  let employeeDataFirstName = prompt("please enter the employee's first name", "first name");
  let employeeDataLastName = prompt("please enter the employee's last name", "last name");
  let employeeDataSalary = prompt("please enter the employee's salary", "salary");

  const newRow = document.createElement("tr");
  document.getElementById("employee-table").appendChild(newRow);

  const firstNameCell = document.createElement("td");
  newRow.appendChild(firstNameCell);
  firstNameCell.textContent = employeeDataFirstName;

  const lastNameCell = document.createElement("td");
  newRow.appendChild(lastNameCell);
  lastNameCell.textContent = employeeDataLastName;

  // format salary https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
  let USD = new Intl.NumberFormat ('en-US', {style: 'currency', currency: 'USD',});

  const salaryCell = document.createElement("td");
  newRow.appendChild(salaryCell);
  salaryCell.textContent = `${USD.format(employeeDataSalary)}`;

  addAnotherEmployee();
}

//create function for add another

function addAnotherEmployee() {
const addAnother = confirm('add another?')

if (addAnother == true) {collectEmployees();}
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary




}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/



const trackEmployeeData = function () {
  const employees = collectEmployees();

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
