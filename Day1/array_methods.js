var subjects = ["English", "Hindi", "Maths", "Science"];
var conversion = subjects.toString();
console.log(conversion);

var joining= subjects.join("*");
console.log(joining);

var popping= subjects.pop();
console.log(popping);

var pushing= subjects.push("Social Science");
console.log(pushing);

var shifting= subjects.shift();
console.log(shifting);

var unshifting= subjects.unshift("BIOLOGY");
console.log(unshifting);

var sorting= subjects.sort();
console.log(sorting);

var inserting= subjects[0]= "Electronics";
console.log(inserting);
console.log(subjects);

var deleting= subjects[subjects.length]= "Hindi";
console.log(deleting);
console.log(subjects);

var splicing=subjects.splice(2, 0, "Physics", "Chemistry");
console.log(splicing);
console.log(subjects);

var slicing= subjects.slice(1);
console.log(slicing);

var slicing1= subjects.slice(2,3);
console.log(slicing1);

var l1 = ["A ", "B ", "C ", "D "];
var l2 = ["E", "F", "G","H"];
var l3 = l1.concat(l2);
console.log(l3);

var capital= ["B","a","d","A","5","1"];
var op= capital.sort();
console.log(op);

var capital1= ["150","18","2000","250","5","1"];
var op1= capital1.sort(function(a,b) {return a-b});
console.log(op1);
