var student = /** @class */ (function () {
    function student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    student.prototype.display = function () {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
        console.log("Stream : " + this.stream);
    };
    return student;
}());
var object = new student(1, "Ritesh", "CSE");
object.display();
