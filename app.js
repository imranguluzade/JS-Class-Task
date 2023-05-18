class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      //amount must be a number
      this.balance += amount;
      return `Deposited ${amount} AZN into account ${this.accountNumber}. New balance: ${this.balance} AZN.`;
    }
  
    withdraw(amount) {
      //amount must be a number
      if (this.balance >= amount) {
        this.balance -= amount;
        return `Withdrawn ${amount} AZN from account ${this.accountNumber}. Current balance: ${this.balance} AZN.`;
      } else {
        return `Insufficient balance in account ${this.accountNumber}.`;
      }
    }
  
    getBalance() {
      console.log(`Account ${this.accountNumber} balance: ${this.balance} AZN.`);
      return this.balance;
    }
  }
  
  const account = new BankAccount("IG123456", "Imran Guluzada", 1000);
  console.log(account.deposit(500));
  console.log(account.withdraw(200));
  console.log(account.getBalance());