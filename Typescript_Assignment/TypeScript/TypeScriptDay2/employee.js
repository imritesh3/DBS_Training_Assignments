var employeeDetails = /** @class */ (function () {
    /*  constructor()
      {
          this.id = 10;
          this.name = "Ritesh";
          this.dept = "ITT";
          this.designation = "Application Developer";
  
      } */
    function employeeDetails(id, name, dept, designation) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
    }
    employeeDetails.prototype.display = function () {
        console.log("Id of the employee: " + this.id);
        console.log("Name of the employee: " + this.name);
        console.log("Department of the employee: " + this.dept);
        console.log("Title of the employee: " + this.designation);
    };
    return employeeDetails;
}());
//var obj = new employeeDetails;
//obj.display();
var obj1 = new employeeDetails(22, "Ritesh Yadav", "Invest Tech Operations", "Senior Officer");
obj1.display();
