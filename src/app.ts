// private , public, readonly는 TS에만 있는 접근 제어자 (JS는 없음)
class Department {
    // private id;
    // private name : string;
    private employees : string[] = []; //private으로 하면 객체 내에서만 접근 가능 

    constructor(private readonly id:string, private name: string) {
        // this.id = id
        // this.name = n;
    }

    describe(this:Department) {
        console.log(`De[artment (${this.id}) : ${this.name} ]`)
    }

    addEmployee(employee:string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('d1', "Accounting");

console.log(accounting)


accounting.describe();

// const accountingCopy = {describe : accounting.describe, name : "ms"}

// accountingCopy.describe();