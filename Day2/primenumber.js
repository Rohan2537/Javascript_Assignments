primenumber=function(){
    var num =6;
    var i;
	for( i=2;i<num;i++){
	if(num % i == 0){
    console.log("Entered number is a not prime number !!!");
    process.exit(-1);
    }
    else console.log("Entered number is  a prime number !!!")
}
return 0;
}
    primenumber();
