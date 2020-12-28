"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(empcode, empname) {
        this.getSalary = function (x) { return x; };
        this.empCode = empcode;
        this.empName = empname;
    }
    // arrow function
    Employee.prototype.getManagerName = function () {
        return this.empName;
    };
    return Employee;
}());
exports.Employee = Employee;
