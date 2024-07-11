// console.warn("welcome to whoba ogo foundation")

// let Gender ;
// Gender = "male";

// console.log(Gender);


// const firstname="Henry";
// // firstname = "Emmanuel"
// const lastname="james";
// const age= 30
// const isAdmin =false;
// const x = null;
// const y = undefined;
// // console.log("my name is" + firstname + lastname + "i am" + age + "years old");
// // console.log(`my name is ${firstname} ${lastname} i am ${age} years old`);
// console.log(firstname.toLowerCase());
// const title = "welcome, ICT, Laptop' Router";
// // console.log(title.toUpperCase());
// console.log(title.split(","));

// const students=["web","home","kitchen", 6,true];
// students.push("table","mouse","maize","mute");
// students[70]="gate";
// for adding value to array
// students.unshift("computer")
// students.pop()
// console.log(students);
const person = {
    firstName:"Henry",
    LastName:"Peter",
    Score:"40.5",
    Hobbies:["cooking","betnaija","dancing"],
    IsAdmin:false,
    address: {
        city:"owerri",
        Lga:"owerri-west",
        PostalCode:46013    
    }
};
const {firstName,LastName}= person;
console.log(firstName, LastName);
// console.log(person.address.city);
// console.log(person.Hobbies[1]);
// console.log(JSON.stringify(person));
