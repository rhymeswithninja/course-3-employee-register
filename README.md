
---

# 🏢 HR System - Employee Register

**Created by Fabricio Braga**  
**Last Updated: March 12, 2025**

---

Welcome to the **HR System - Employee Register** project! This is a **base project** where you will build an **employee registration system** for an HR application.

The goal is to **extend** this basic implementation by adding new **fields**, implementing **validations**, and improving the **user experience**.

---

## 🚀 Features in the Base Project

✅ A **basic employee registration form** with one input: `Employee Name`.  
✅ A **list section** to display registered employees.  
✅ **Basic styling** and **separate files** for HTML, CSS, and JavaScript.  
✅ **JavaScript logic** that adds employees to the list dynamically.  

---

## 🎯 Your Tasks: Improve the Project!  

Your mission is to **expand** and **enhance** the project by adding the following features:

### 1️⃣ **Add More Fields**
Extend the form to include these additional **employee fields**:
- **Last Name** (`text`) - Employee's last name.
- **Role** (`text`) - Job title (e.g., Software Engineer, Manager, HR Specialist).
- **Salary** (`number`) - Employee's salary.
- **Address** (`text`) - Employee's home address.
- **Pronoun** (`select dropdown`) - Example: He/Him, She/Her, They/Them.
- **Phone Number** (`tel`) - Contact number.

---

### 2️⃣ **Implement Validations**
Ensure that:
- The **First Name & Last Name** fields are **required**.
- The **Role** field is **required** and must be at least 2 characters.
- The **Salary** field is **required** and must be a **positive number**.
- The **Phone Number** field must follow a **valid phone format**.
- The **Pronoun selection** is **required**.
- The **form submission button must be disabled** if the form is **not valid**.

---

### 3️⃣ **Improve User Experience**
- ❌ **No more `alert()` popups!**  
  ✅ Use a **modal lightbox** to show validation errors or success messages.  
  ✅ Example libraries: [SweetAlert2](https://sweetalert2.github.io/) or [Bootstrap Modal](https://getbootstrap.com/docs/5.0/components/modal/).  

- ✅ **Improve styling** to make the page more attractive.  

---

## 🛠 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/hackthegap/course-3-employee-register.git
   cd course-3-employee-register
   

2. Open the `index.html` file in a browser.

3. Modify the **HTML**, **CSS**, and **JavaScript** files to add new features!

---

## 🌟 Bonus Challenges (Optional)
Want to go the extra mile? Try these enhancements:
- 💾 **Save the employee list to `localStorage`**, so it persists after a page reload.
- 📊 **Sort employees alphabetically by name or by salary**.
- 🎨 **Add animations and transitions** for a better UI experience.

---

## 📜 Contribution Guidelines
1. **Fork** this repository.
2. Create a **new branch** for your features:
   ```bash
   git checkout -b feature-yourname
   ```
3. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Added last name, role, and salary fields"
   ```
4. **Push to your fork** and submit a **Pull Request**.

---

## 🤝 Need Help?
If you have any questions, **open an issue** in the repository or discuss with your peers!

Happy coding! 🚀🎉
