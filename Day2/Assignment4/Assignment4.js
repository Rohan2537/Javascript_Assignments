function calculator(){
    var options = "Enter the option to perform operation:\n 1.Add\n 2.Subtract\n 3.Multiply\n 4.Divide\n 5.Exponent\n 6.Mean\n 7.Quit";
    var inp= prompt("Enter the option to perform operation:\n 1.Add\n 2.Subtract\n 3.Multiply\n 4.Divide\n 5.Exponent\n 6.Mean\n 7.Quit");
    var result= options.includes(inp); 
    if(result){
            
        if(inp==1){
            var num1= prompt("Enter first number");
            var num2= prompt("Enter Second number");
            var sum= parseInt(num1)+parseInt(num2);
            document.getElementById("_result").value= sum;
        }

    else if(inp==2){
            var num1= prompt("Enter first number");
            var num2= prompt("Enter Second number");
            var sub= parseInt(num2)-parseInt(num1);
            document.getElementById("_result").value= sub;
    } 
    else if(inp==3){
            var num1= prompt("Enter first number");
            var num2= prompt("Enter Second number");
            var mult= parseInt(num2)*parseInt(num1);
            document.getElementById("_result").value= mult;
    } 
    else if(inp==4){
            var num1= prompt("Enter first number");
            var num2= prompt("Enter Second number");
            var divide= parseInt(num1)/parseInt(num2);
            document.getElementById("_result").value = divide;  
    }
    else if(inp==5){
            var base= prompt("Enter the base value");
            var exponent= prompt("Enter the exponent value");
            var exp= Math.pow(base, exponent)
            document.getElementById("_result").value = exp;
    }
    else if(inp==6){
            entvalue="";
            count=0;
            mean=0;
            while(!entvalue.includes("***")){
                    entvalue= prompt("Enter number");

                    if(entvalue.includes("***"))
            {
                    break;
            }
            else{
                    mean=parseInt(mean)+ parseInt(entvalue);
                    count++;
            }
            }
            mean=mean/count;
            document.getElementById("_result").value= mean;
       
    }
    else if(inp==7){
            return;
    }

    }
else{
    alert(" please enter the correct option");
    calculator();
} 
}