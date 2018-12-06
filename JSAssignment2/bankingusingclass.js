/*4. Create a JS program to implement below:-

	   BankAccount
		|(accountNumber)
		|(accountHolderName)
		|(accountBalance)
	-------------------------
	|			|
	Savings			Current
	    (isSalary)		     (odLimit)


Now, 
create 1 object of savings with accountNumber, accountHolderName, accountBalance and isSalary.
create 1 object of currrent with accountNumber, accountHolderName, accountBalance and odLimit.

use savings account object to call a function withdraw(amount), that will subtract the amount from the accountBalance, Note that accountBalance should not go below 0.

use current account object to calla function withdraw(amount), that will subtract the amount from the accountBalance, Note that accountBalance should not go below negative of odLimit.

Now, call getCurrentBalance() from both the object, that will return the accountBalance of the object used to call this method.
*/

/***************************************** Banking using Class ****************************************/


class BankAcountDetails{
    constructor(accountNumber,accountHolderName,accountBalance){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
        deposit(amount_to_Deposit)
        {
            this.accountBalance = this.accountBalance + amount_to_Deposit;
            console.log(" New Account Balance is: " + this.accountBalance)
        }
     

    }
/***************************************** Class savings extending parent class BankAccountDetails ****************************************/
     
class Savings extends BankAcountDetails{
    constructor(accountNumber,accountHolderName,accountBalance,isSalary)
    {
        super(accountNumber, accountHolderName, accountBalance); 
        this.isSalary=isSalary;
    }
        withdraw(amount_to_Withdraw)
        {
            this.amount_to_Withdraw = this.accountBalance - amount_to_Withdraw;
            
            if(this.amount_to_Withdraw<=0)
            {
                console.log("Insufficient Balance !!!")
            }
            
            else
            {
                console.log("Withdrawl amount is:" +amount_to_Withdraw + " Remaining Balance:" +this.amount_to_Withdraw);
                console.log("Amount withdrawn successfully");
            }
            
        }
}

/***************************************** Class Current extending parent class BankAccountDetails ****************************************/

class Current extends BankAcountDetails{
    constructor(accountNumber,accountHolderName,accountBalance,odLimit)
    {
        super(accountNumber, accountHolderName, accountBalance); 
        this.odLimit=odLimit;
    }
        withdraw(amount_to_Withdraw)
        {
            this.amount_to_Withdraw = this.accountBalance - amount_to_Withdraw;
           
            if(this.amount_to_Withdraw<0){
               
                if(( amount_to_Withdraw) >= (this.odLimit + this.accountBalance)){
                    console.log("Insufficient Balance !!!")
                }
               
                else{
                 console.log("Withdrawl amount is:" +amount_to_Withdraw + " Amount deducted from od is:" +this.amount_to_Withdraw)
                 console.log("Amount withdrawn successfully");
                }
            }
           
            else{
                console.log("Withdrawl amount is:" +amount_to_Withdraw + " Remaining Balance is:" +this.amount_to_Withdraw)
                console.log("Amount withdrawn successfully");
            }
            
        }
}

/***************************************** Object for savings and current created ****************************************/

var savings = new Savings(10000542698, "Shubham", 10000, true);
var current = new Current(10000542698, "Shubham", 10000, 20000);



savings.deposit(3000);      //calling deposit for saving object
savings.withdraw(1000);       //calling withdraw for saving object
current.deposit(3000)             //calling deposit for current object
current.withdraw(25000);          //calling withdraw for saving object


