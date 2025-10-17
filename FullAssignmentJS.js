// JavaScript Assignment

// 1.Programming Challenge

// 1.1 Find the Missing Digit in an Arithmetic Expression

function findMissingDigit(expression) {
    for(let digit = 0; digit <= 9; digit++) {
        let testExp = expression.replace("?", digit);
        
        let [left, right] = testExp.split("=");
        if(eval(left.trim()) === Number(right.trim())) {
            console.log(`${testExp} -> Missing digit = ${digit}`);
        }
    }
    return;
}

findMissingDigit("4? + 12 = 58")

// 1.2 Print the Number Pattern (Without Loops)

function printPattern(n, i = n) {
  if (i < 1) return; 

  let row = buildRow(i, i, "down"); 
  console.log(row); 

  printPattern(n, i - 1);
}

function buildRow(i, j = i, direction = "down") {
  if (direction === "down") {
    if (j === 0) return ""; 
    if (j === 1) return "1 " + buildRow(i, 2, "up"); 
    return j + " " + buildRow(i, j - 1, "down");
  } else if (direction === "up") {
    if (j > i) return ""; 
    return j + " " + buildRow(i, j + 1, "up");
  }
}

console.log("Pattern for n = 5:");
printPattern(5);

// 1.3. Find the Nth Digit in a Number Sequence

// function findNthDigit(N) {  //N= 11
//   let sequence = "";
//   let num = 1;

//   while (sequence.length < N) {
//     sequence += num; // keep adding numbers as strings
//     num++;
//   }

//   console.log(`The ${N}th digit is: ${sequence[N - 1]}`);
// }

// or

function findNthDigit(N) {  //N= 11
  let sequence = "1234567891011";

  console.log(`The ${N}th digit is: ${sequence[N-1]}`);
}

findNthDigit(11);

// 1.4. Check If a Number is a Power of 4

function isPowerOfFour(n) {
  if (n <= 0) return false;

  let isPowerOfTwo = (n & (n - 1)) === 0;
  let divisibleBy3 = (n - 1) % 3 === 0;

  return isPowerOfTwo && divisibleBy3;
}

console.log(isPowerOfFour(64)); // true
console.log(isPowerOfFour(8));  // false

// 1.5. Find the Single Non-Repeating Number

function findSingleNumber(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num; 
  }
  console.log("Single non-repeating number:", result);
}

findSingleNumber([4, 3, 2, 4, 1, 3, 2]);

// 2. OOP-Based Interactive Programming Problems

// 2.1 Bank Application

class Account{
    #name;
    #balance;
    #transactions = [];

    constructor(name, initialAmount = 0) {
        this.#name = name;
        this.#balance = initialAmount;
        this.#transactions.push(`Account created with Rs${initialAmount}`);
    }

    deposit(amount) {
        this.#balance += amount;
        this.#transactions.push(`Deposited Rs${amount}`);
        console.log(`Rs${amount} deposited successfully.`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds");
            return;
        } 
        this.#balance -= amount;
        this.#transactions.push(`Withdrawn Rs${amount}`);
        console.log(`Rs${amount} withdrawn successfully.`);
    }

    showBalance() {
        console.log(`${this.#name}'s balance is Rs${this.#balance}`);
    }

    showTransactions() {
        console.log(`Transaction history for ${this.#name} is: `);
        for(let t of this.#transactions) {
            console.log(". " + t);
        }
    }

    getName() {
        return this.#name;
    }

    
}

let account1 = new Account("John Doe", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.showBalance();
account1.showTransactions();

// 2.2. Calculator Application

class Calculator{
    #operator;
    #firstNum;
    #secondNum;

    constructor(operator, firstNum, secondNum) {
        this.operator = operator;
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    }

    get operator() {
        return this.#operator;
    }

    get firstNum() {
        return this.#firstNum;
    }

    get secondNum() {
        return this.#secondNum;
    }

    set operator(op) {
        const validOp = ['+', '-', '*', '/'];
        if(!(validOp.includes(op))) {
            console.log("Invalid operator");
            return;
        } 
        this.#operator = op;
    }

    set firstNum(num) {
        if(typeof(num) !== 'number') {
            console.log("First Number should be numeric");
            return;
        }
        this.#firstNum = num;
    }

    set secondNum(num) {
        if(typeof(num) !== 'number') {
            console.log("Second Number should be numeric");
            return;
        }
        this.#secondNum = num;
    }

    calculate() {
        switch (this.#operator) {
            case '+': console.log(`Addition: ${this.#firstNum + this.#secondNum}`);
                        break;
            case '-': console.log(`Subtraction: ${this.#firstNum - this.#secondNum}`);
                        break;
            case '*': console.log(`Multiplication: ${this.#firstNum * this.#secondNum}`);
                        break;
            case '/': if(this.#secondNum === 0) {
                        console.log("Cannot divide by zero!");
                        } else {
                            console.log(`Division: ${this.#firstNum / this.#secondNum}`);
                        }
                        break;
            default:   console.log("Please enter a valid operator before calculation.");
        }
    }
}

const calc1 = new Calculator('*', 2, 4);
calc1.calculate();

// 2.3 Employee Payroll Management System

class Employee {
  #name;
  #baseSalary;

  constructor(name, baseSalary, tax) {
    this.#name = name;
    this.#baseSalary = baseSalary;
    this.tax = tax;
  }

  calculateNetSalary() {
    if(!(this.tax)) {
        console.log("Please enter valid tax percent in decimal!");
        return this.#baseSalary;
    }
    let taxableAmount = this.#baseSalary * this.tax; 
    let net = this.#baseSalary - taxableAmount;
    return net;
  }

  showSalarySlip() {
    console.log("------ Salary Slip ------");
    console.log("Name:", this.#name);
    console.log("Base Salary:", this.#baseSalary);
    console.log("Tax :", this.#baseSalary * this.tax);
    console.log("Net Salary:", this.calculateNetSalary());
  }

  getName() {
    return this.#name;
  }
}
let emp1 = new Employee("Alice", 5000, 0.1);
emp1.showSalarySlip();

// 2.4. Library Management System

class Book {
  #title;
  #isIssued;

  constructor(title) {
    this.#title = title;
    this.#isIssued = false;
  }

  issue() {
    if (this.#isIssued) {
      console.log(`${this.#title} is already issued.`);
      return;
    }
    this.#isIssued = true;
    console.log(`${this.#title} issued successfully.`);
  }

  returnBook() {
    if (!this.#isIssued) {
      console.log(`${this.#title} was not issued.`);
      return;
    }
    this.#isIssued = false;
    console.log(`${this.#title} returned successfully.`);
  }

  isAvailable() {
    return !this.#isIssued;
  }

  getTitle() {
    return this.#title;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title) {
    this.books.push(new Book(title));
    console.log(`Added book ${title}`);
  }

  showAvailableBooks() {
    console.log("Available Books:");
    this.books
      .filter(book => book.isAvailable())
      .forEach(book => console.log("• " + book.getTitle()));
  }

  searchBook(title) {
    let book = this.books.find(b => b.getTitle() === title);
    console.log(book ? `${title} found` : `No book named ${title}`);
  }

  issueBook(title) {
    let book = this.books.find(b => b.getTitle() === title);
    if (book) book.issue();
    else console.log(`No such book found.`);
  }

  returnBook(title) {
    let book = this.books.find(b => b.getTitle() === title);
    if (book) book.returnBook();
    else console.log(`No such book found.`);
  }
}

const library = new Library();
library.addBook("The Great Gatsby");
library.addBook("1984");
library.issueBook("The Great Gatsby");
library.returnBook("The Great Gatsby");
library.showAvailableBooks();
library.searchBook("1984");

// 2.5. ATM Simulation

class ATM {
  #pin;
  #balance;
  #transactions = [];

  constructor(pin, initialBalance = 0) {
    this.#pin = pin;
    this.#balance = initialBalance;
  }

  authenticate(enteredPin) {
    return this.#pin === enteredPin;
  }

  deposit(amount) {
    this.#balance += amount;
    this.#transactions.push({ type: "Deposit", amount, date: new Date() });
    console.log(`Deposited Rs${amount}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds!");
      return;
    }
    this.#balance -= amount;
    this.#transactions.push({ type: "Withdraw", amount, date: new Date() });
    console.log(`Withdrawn Rs${amount}`);
  }

  checkBalance() {
    console.log(`Current Balance: Rs${this.#balance}`);
  }

  printMiniStatement(startDate, endDate) {
    console.log("📜 Mini Statement:");
    this.#transactions.forEach(tx => {
      let date = tx.date.toLocaleString();
      if (
        (!startDate || tx.date >= new Date(startDate)) &&
        (!endDate || tx.date <= new Date(endDate))
      ) {
        console.log(`${date} - ${tx.type} Rs${tx.amount}`);
      }
    });
  }
}

const atm = new ATM(1234, 1000);
if (atm.authenticate(1234)) {
  atm.deposit(500);
  atm.withdraw(300);
  atm.checkBalance();
  atm.printMiniStatement(); 
} else {
  console.log("Invalid PIN!");
}


