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


/***************************************** Function for Bank account details ****************************************/

function bankaccountdetails(accountNumber, accountHolderName, accountBalance,isSalary){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accountBalance=accountBalance;
    this.isSalary=isSalary;
    
    
/***************************************** Common withdraw Function for savings and current ****************************************/
   
this.withdraw= function(amount_to_Withdraw){
        
    if(this==savings){
           
            var remaining_Balance=this.accountBalance-amount_to_Withdraw;
            
            if(remaining_Balance<=0){
                console.log("Insufficient Balance")
            }
           
            else{
                console.log("withdrawl amount is:" +amount_to_Withdraw + " Remaining Balance:" +remaining_Balance);
                console.log("Amount withdrawn successfully");
            }
        }
       
        else if(this== current){
           
            var remaining_Balance=this.accountBalance- amount_to_Withdraw;
          
            if(remaining_Balance<=0){
               
                if(( amount_to_Withdraw) >= (this.odLimit+ this.accountBalance)){
                    console.log("Insufficient Balance !!!")
                }
               
                else{
                 console.log("Withdrawl amount is:" +amount_to_Withdraw + " Amount deducted from od is:" -+remaining_Balance)
                 console.log("Amount withdrawn successfully");
                }
            }
           
            else{
                console.log("Withdrawl amount is:" +amount_to_Withdraw + " Remaining Balance is:" +remaining_Balance)
                console.log("Amount withdrawn successfully");
            }
        }
        
    }
}


 var savings= new bankaccountdetails( 123456789,"shubham",20000,true)      // savings object created
 
 var current= Object.create(savings);       //current object created
 current.accountBalance=20000;
 current.odLimit=60000;

savings.withdraw(2000);             //calling withdraw function from savings and current objects
current.withdraw(30000);


   