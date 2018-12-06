highestnumber=function(){
	var num1=5;
	var num2=10;
	var num3=15;
	if (num1 > num2)
    {
        if (num1 > num3)
        {
            console.log("Highest number is: "+num1);
        }
        else
        {
            console.log("Highest number is: "+num2);
        }
    }
    else if (num2 > num3)
        console.log("Highest number is: "+num2);
    else
        console.log("Highest number is: "+num3);
        return 0;
    }
   highestnumber();