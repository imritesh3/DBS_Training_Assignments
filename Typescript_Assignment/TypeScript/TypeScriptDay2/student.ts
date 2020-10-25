class student{
    private id:number;
    private name:string;
    private stream:string;

    constructor(id:number,name:string,stream:string){
        this.id=id;
        this.name = name;
        this.stream = stream;
    }

    display():void{
        console.log("Id : " +this.id);
        console.log("Name : " +this.name);
        console.log("Stream : "+this.stream);
    }
}

var object = new student(1,"Ritesh","CSE");
object.display();