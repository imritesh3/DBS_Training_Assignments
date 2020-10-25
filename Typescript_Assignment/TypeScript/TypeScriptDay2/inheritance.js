var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return employee;
}());
var regularEmployee = /** @class */ (function (_super) {
    __extends(regularEmployee, _super);
    function regularEmployee(id, name, dept, designation, salary) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.salary = salary;
        return _this;
    }
    regularEmployee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Salary: " + this.salary);
    };
    return regularEmployee;
}(employee));
var contractEmployee = /** @class */ (function (_super) {
    __extends(contractEmployee, _super);
    function contractEmployee(id, name, dept, designation, hourlySal) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.hourlySal = hourlySal;
        return _this;
    }
    contractEmployee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Salary: " + this.hourlySal);
    };
    return contractEmployee;
}(employee));
var obj1 = new regularEmployee(1, "Ritesh", "ITT", "Dev", 50000);
obj1.display();
var obj2 = new contractEmployee(2, "Chakri", "PS", "Developer", 20);
obj2.display();
