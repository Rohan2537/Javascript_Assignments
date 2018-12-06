/******************************************** Parent object *************************************************/

var amitabh = {
    fname:"Amitabh", lname: "Bachchan", age: 85, skills:["Acting","Singing","Poetry"],
    address:{
             city: "Mumbai",
             Pincode: 419068
            } ,
    dateOfBirth:new Date('1955-12-01'), 
    married: true, profession: "Actor"
}

/******************************************** Child object using parent object *************************************************/

var abhishek= Object.create(amitabh);
abhishek.fname="Abhishek";
abhishek.age= 48;
abhishek.dateOfBirth= new Date('1980-11-20');

console.log(amitabh);
console.log(abhishek);

/******************************************** Common properties from parent *************************************************/

console.log("Abhishek's last name:"+abhishek.lname);
console.log("Skills:"+abhishek.skills);
console.log("Address:"+abhishek.address);
console.log("Married:"+abhishek.married);
console.log("Profession:"+abhishek.profession);

/******************************************** Third object using second object *************************************************/

var aaradhya= Object.create(abhishek);
aaradhya.fname= "Aaradhya";
aaradhya.age= 08;
aaradhya.skills=["Dancing","Singing"];
aaradhya.dateOfBirth=new Date('2010-05-25');
aaradhya.married=false;
aaradhya.profession="student";

console.log(aaradhya);

/******************************************** Common properties from parent class abhishek *************************************************/

console.log("Aaradhya's last name:"+abhishek.lname);
console.log("Address:"+aaradhya.address);

