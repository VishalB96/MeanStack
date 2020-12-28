import {IEmployee} from "./01interfaceIEmployee";
import {Employee } from "./01classimli_inter";

const obj:IEmployee=new Employee(101,"raj");
console.log(obj.getSalary(50000));
console.log(obj. getManagerName());
