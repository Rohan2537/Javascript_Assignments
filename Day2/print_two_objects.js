/******************************************** Object of person_one *************************************************/

var person_one = {
    fname:"Rohan", lname: "Bhosale", age: 24, Skills:["C","C++","JAVA"],
    address:{
             city: "Mumbai",
             Pincode: 411068
            } ,
    dateOfBirth:new Date('1995-11-25'), 
    married: false, Profession: "analyst"
}

/******************************************** Object of person_two *************************************************/

var person_two = {
    fname:"Shubham", lname: "Bhatt", age: 24, Skills:["Python","C++","JAVA"],
    address:{
             city: "Mumbai",
             Pincode: 411069
            } ,
    dateOfBirth:new Date('1997-05-13'), 
    married: false, Profession: "analyst"
}

/******************************************** print function to print person *************************************************/

print= function(persontodisplay)
{
    console.log(persontodisplay)
}
print(person_one);     // calling print function and passing person_one into it 
print(person_two);