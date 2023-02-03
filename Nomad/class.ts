// 추상 클래스 : 다른 클래스가 상속받을 수 있는 클래스, 직접 새로운 인스턴스를 만들지는 못함
abstract class User {
    constructor(
        protected firstName : string,
        protected lastName : string,
        protected nickname : string
    ) {}
    // 추상 메서드 : 구현 코드가 없는 클래스로,  추상 클래스를 상속받는 모든 것들이 구현해야 하는 메서드
    abstract getNickName():void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
class PlayerofClass extends User{
    getNickName(): void {
        this.nickname 
    }
}

const minsu = new PlayerofClass("minsu", "cho", 'GomJam')
console.log(minsu.getFullName)