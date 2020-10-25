class employee{
    id:number;
    name:string;
    dept:string;
    designation:string;

    display(): void
    {
       console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
    } 
  
}

class regularEmployee extends employee{
    salary : number;

    constructor(id:number,name:string,dept:string,designation:string,salary:number){
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
        this.salary = salary;
    }

    display():void{
        super.display();
        console.log("Salary: "+this.salary);
    }

}


class contractEmployee extends employee{
    hourlySal : number;

    constructor(id:number,name:string,dept:string,designation:string,hourlySal:number){
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
        this.hourlySal = hourlySal;
    }

    display():void{
        super.display();
        console.log("Salary: "+this.hourlySal);
    }

}

var obj = new regularEmployee(1,"Ritesh","ITT","Dev",50000);
obj.display();
var obj2 = new contractEmployee(2,"Chakri","PS","Developer",20);
obj2.display();

