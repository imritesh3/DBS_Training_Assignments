import student = require("/Users/riteshyadav/Desktop/Ritesh_TypeScript/Day_2/IStudent");
class studentDet implements student.IStudent{
    private id:number;
    private name:string;
    private age:number;
    private stream:string;
    private mobile:number;

    studentData(id:number,name:string,age:number,stream:string,mobile:number){
        this.id=id;
        this.name = name;
        this.age = age;
        this.stream = stream;
        this.mobile = mobile;

    }

    displayDetails():void{
        console.log("Student Id: "+this.id);
        console.log("Student  Name: "+this.name);
        console.log("Student Age: "+this.age);
        console.log("Student Stream: "+this.stream);
        console.log("Student Phone number: "+this.mobile);
    }
}

var obj4 = new studentDet();
obj4.studentData(583,"Ritesh",22,"CSE",9030992057);
obj4.displayDetails();