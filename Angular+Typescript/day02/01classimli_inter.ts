import {IEmployee} from "./01interfaceIEmployee"
export class Employee implements IEmployee
{
    empCode: number;
    empName: string;
    constructor(empcode:number, empname:string)
    { this.empCode=empcode;
        this.empName=empname;

    }
    getSalary: (number) => number=(x:number)=> x;
       // arrow function
    getManagerName(): string
    {
        return this.empName;
    }


}
