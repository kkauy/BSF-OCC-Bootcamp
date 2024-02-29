//Encapsulation

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdrawl(amount) {
        if(this.balance >= amount){
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, your balance is : ${this.balance}`;
    }
}

const myAccount = new BankAccount("123456789", 1000);
const regelAccount = new BankAccount("912345678", 6000);

regelAccount.deposit(500);
console.log("regel account : " ,regelAccount.getAccountInfo());

myAccount.withdrawl(500);
console.log("my account : " ,myAccount.getAccountInfo());

