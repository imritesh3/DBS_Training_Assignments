"use strict";
exports.__esModule = true;
var studentDet = /** @class */ (function () {
    function studentDet() {
    }
    studentDet.prototype.studentData = function (id, name, age, stream, mobile) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.stream = stream;
        this.mobile = mobile;
    };
    studentDet.prototype.displayDetails = function () {
        console.log("Student Id: " + this.id);
        console.log("Student  Name: " + this.name);
        console.log("Student Age: " + this.age);
        console.log("Student Stream: " + this.stream);
        console.log("Student Phone number: " + this.mobile);
    };
    return studentDet;
}());
var obj4 = new studentDet();
obj4.studentData(583, "Ritesh", 22, "CSE", 9030992057);
obj4.displayDetails();
