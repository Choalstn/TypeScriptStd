// private , public, readonly는 TS에만 있는 접근 제어자 (JS는 없음)
abstract class Department {
    // private id;
    // private name : string;
    protected employees : string[] = []; //private으로 하면 객체 내에서만 접근 가능 protected는 해당 클래스 뿐만 아니라 자식까지도 사용 가능 

    constructor(protected readonly id:string, public name: string) {
        // this.id = id
        // this.name = n;
    }

    // 정적 메서드 -> 인스턴스에서 접근 불가능 
    static createEmployee(name:string) {
        return {name: name};
    }

    abstract describe(this:Department):void;

    addEmployee(employee:string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)

        // 정적 메서드는 this 키워드 사용 불가능
        console.log(Department.createEmployee("max"))
    }
}

class ITDepartment extends Department {
    constructor(id:string, public admins:string[]) {
        super(id, 'IT')
    }

    describe(this:ITDepartment) {
        console.log("abstractttttttt IT Department - ID : ", this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // getter 메서드는 return 문 필수 
    get mostRecentReport() {
        if(this.lastReport) {
          return this.lastReport;  
        } else {
            throw new Error("No report found.")
        }
        
    }

    set mostRecentReport(value:string) {
        if(!value) {
            throw new Error("Please pass in a valid value!")
        }
        this.addReport(value)
    }

    private constructor(id:string, private reports:string[]) {
        super(id, "Accounting")
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance= new AccountingDepartment('d2', []);
        return this.instance
    }

    addEmployee(employee: string): void {
        if(employee !== 'Minsu') {
            this.employees.push(employee)
        }
    }

    addReport(text:string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }

    describe() {
        console.log("abstractttttttt IT Department - ID : ", this.id)
    }
}

const it = new ITDepartment('d1', ['Minsu']);

it.addEmployee('Max');
it.addEmployee("Minsu")

it.describe();
it.name = "NEW NAME"
it.printEmployeeInformation();

console.log(it)

const employee1 = Department.createEmployee("Ms")

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "Year End Report"

accounting.addReport('Something went wrong...');

console.log("mostRecentReport :", accounting.mostRecentReport);

accounting.addEmployee("Minsu");
accounting.addEmployee("TaeYoung");

accounting.printReports();
accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = {describe : accounting.describe, name : "ms"}

// accountingCopy.describe();