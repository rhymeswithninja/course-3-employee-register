document.addEventListener("DOMContentLoaded", function () {
    const employeeForm = document.getElementById("employee-form");          
    const employeeFirstName = document.getElementById("employee-first-name");  
    const employeeLastName = document.getElementById("employee-last-name");    
    const employeeRole = document.getElementById("employee-role");             
    const employeeSalary = document.getElementById("employee-salary");         
    const employeeAddress = document.getElementById("employee-address");
    const employeePronouns = document.getElementById("employee-pronouns");
    const employeePhoneNumber = document.getElementById("employee-phone-number");
    const employeeList = document.getElementById("employee-list");
    
    employeeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from reloading the page

        const employeeFirstName = employeeFirstNameInput.value.trim();
        const employeeLastName = employeeLastNameInput.value.trim();
        const role = employeeRoleInput.value.trim();
        const salary = employeeSalaryInput.value.trim();
        const address = employeeAddressInput.value.trim();
        const pronouns = employeePronounsInput.value.trim();
        const phone = employeePhoneNumberInput.value.trim();
     
        if (employeeFirstName === "") {
            alert("Please enter an employee name.");
            return;
        }

        // List of items with full employee information
        const listItem = document.createElement("li");
        listItem.textContent = `${firstName} ${lastName} | ${role} | $${salary} | ${address} | ${pronouns} | ${phone}`;;
        employeeList.appendChild(listItem);
        // listItem.textContent = employeeLastName;
        // employeeList.appendChild(listItem);
        // listItem.textContent = employeeRole;
        // employeeList.appendChild(listItem);
        // listItem.textContent = employeeSalary;
        // employeeList.appendChild(listItem);
        // listItem.textContent = employeeLastNameInput;
        // employeeList.appendChild(listItem);

        employeeFirstNameInput.value = ""; // Clear input field
    });
});
