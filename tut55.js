
// There are 3 ways to iterate array with the for loop

console.log("This is tutorial 55");
// let i = 0; 
// for(i=0; i<3;i++){
//     console.log(i);// 
// }

let friends = ["Bhavya", "Marsh", "Max", "Anmol", "Ricky"];
//for (let index = 0; index < friends.length; index++) {            // This is clasical for loop
//  console.log(" Hello " + friends[index]);                     
//  console.log(friends[index]);
// const element = friends[index];
// }


// friends.forEach(function f(element){
// console.log("Hello " + element + " to modern javascript);     // This is how modern Javascript works  with foreach
// });


// for (element of friends){
//     console.log("Hello " + element + " to modern javascript again");     //  This is third way to use for loop with for of
// }


let employee = {
  name: "Bhavya",
  Salary: "20,000",
  channel: "bk408"
}

// Use this loop to iterate over objects in javascript

for (key in employee) {
  console.log(`The ${key} of employee is ${employee[key]}`);
}


// While loop in javascript

let i = 2;
while (i < 4) {
  console.log(` ${i} is less than 4`);
  i++;
}

// do while loop in js
let k = 34;
do {
  console.log(` ${k} is less than 4 and we are inside do while loop`);
  k++;
} while (k < 4);
