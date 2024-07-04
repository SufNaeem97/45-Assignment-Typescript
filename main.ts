//QUESTION 1

import inquirer from "inquirer";

// let name = "Taha";
// console.log("Hello " + name + " would you like to learn typescript? ");

//QUESTION 2

    // let name = "Taha";
    // // console.log(name1.toUpperCase());
    // // console.log(name1.toLowerCase());
    // console.log(name.charAt(0).toUpperCase + name.slice(1).toLowerCase());    //NOT WORKING//
 
// QUESTION 3
 
    // let name=" \t\n Taha \t\n";
    // console.log(name);
    // console.log(name.trim());

//Question 5

// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// Question 6

// let famousperson = 'Albert Einstien';
// let message =  (famousperson + " once said, A person who never made a mistake never tried anything new." )
// console.log(message);

// Question 7

// console.log(4+4);
// console.log(14-6);
// console.log(2*4);
// console.log(32/4);

// Question 8

// let Favourite_Number: number = 5;
// console.log(Favourite_Number + " Is my favourite number.");

// Question 9

// let ArrayString : string[] = ["Azlan" , " Sheriyar" , "Sajjad"];
// console.log(ArrayString[0]);
// console.log(ArrayString[1]);
// console.log(ArrayString[2]); 

// // Question 10 // Connected with Question 9.

// let message : string = " Would you like to learn typescript with me? ";
// console.log(ArrayString [0] +  message );
// console.log(ArrayString [1] +  message );
// console.log(ArrayString [2] +  message );

// Question 11

// let Transport : string[] = ["Honda Motorcycle." , "Tesla Car." , "Toyota Truck."];
// let message : string = " I would like to own a ";
// // console.log(message + Transport[0]);
// // console.log(message + Transport[1]);
// // console.log(message + Transport[2]);

// // Either

// Transport.forEach(Transport => {
//   console.log(message + Transport);  
// });

// // Question 12
// let Guests_List: string[] = ["Carl", "Sam", "Richard"];
// let message: string = "Would you like to join me for dinner?";
// Guests_List.forEach(guest => { 
// console.log("Hey " + guest + " " + message);
// });
// 
// 
//     
// 

// //

//  let unableToAttend= "John";
//  console.log(unableToAttend + " Can't make it to dinner.");
//  let newguests = " Carl";
//  Guests_List[Guests_List.indexOf(unableToAttend)] = newguests;

//  console.log("Great news, i've found a bigger dinner table!");
//  Guests_List.unshift(" Taha");
//  Guests_List.splice(Guests_List.length / 2, 0, " Charle's Darwin");
// Guests_List.push(" Ada Love");

// Guests_List.forEach(Guests_List=>{
//     console.log("Dear" + Guests_List + message);
// })

// console.log("Unfortunately, i can only invite two people over dinner.");
// while (Guests_List.length > 2){
//     let removed_guests = Guests_List.pop();
//     console.log('dear, ', removed_guests, " I can't invite you to dinner");

// }
// Guests_List.forEach(Guests_List => {
//     console.log("Dear,", Guests_List, " Your still invited to dinner")
// })
// Guests_List.splice(0, Guests_List.length);
// console.log(Guests_List);

// //

// let places: string[] = ["Turkey", "Canada", "America", "Japan" ];
// console.log('countries i would like to visit:', places);


// console.log(places); //Original Order

// console.log([...places].sort()); // Alphabetical Order
// console.log(places); //Original Order

// console.log([...places].sort().reverse()); //Reverse Alphabetical Order
// console.log(places); //Original Order

// // // //

// places.reverse(); //Reversed Order
// console.log(places);

// places.sort(); //Alphabetical Order
// console.log(places);

// // // //

// let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
// console.log(`I am inviting ${guests.length} people to dinner.`);

// // // //

// let book: { title: string; author: string; yearPublished: number } = {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     yearPublished: 1937
// };
// console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

// // // //

// let alien_color = "blue";
// if (alien_color == "blue"){
//     console.log("you just earned 5 points!");
// } else if (alien_color =="green"){
//     console.log("you just earned 10 points!");
// } else if (alien_color == "yellow"){
//     console.log("You just earned 20 points");
// } else if (alien_color == "red"){
//     console.log("You just earned 50 points for shooting the alien");
// } else console.log("You lost!")

// }

// // // //

// let car = "subaru";
// console.log("Is car == 'subaru'?, i predict true ");
// console.log(car == 'subaru');

// console.log("Is car == 'toyota'?, i predict false");
// console.log(car == 'toyota');

// // // //

// let age = 170
// if (age < 2){
//     console.log("This person is a baby.");
// } else if (age < 13){
//     console.log("This person is a kid.");
// } else if (age < 20){
//     console.log("This person is a teenager.");
// } else if ( age < 65){
//     console.log("This person is an adult.");
// } else {
//     console.log( "This person is an elder.");
// }

// // // //

// let favourite_fruits: string[]= [];

// if (favourite_fruits.includes('mango')){
//     console.log("Would you like to eat mango?");
// } else if (favourite_fruits.includes('banana')){
//     console.log("Would you like to eat banana?");
// } else if (favourite_fruits.includes('apple')){
//     console.log("Would you like to eat a apple?");
// } else console.log("Unavailable");

// // // //

// let userName = "saad"
// if (userName == 'Taha'){
//     console.log(`Hello ${userName}`);
// } else if (userName == 'Sufyan'){
//     console.log(`Hello ${userName}`);
// } else if (userName == 'Admin'){
//     console.log(`Welcome back ${userName}`);
// } else console.log(`Hello ${userName}, how can we help you?`);

// let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

// usernames.forEach(username => {
//     if (username === "admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// });

// // // //


// let usernames: string[] = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     console.log('Welcome back'); //Greet users
//}
// Removing all usernames ensures the message "We need to find some users!" is printed.


// // // //

// let numbers: number[] = [1,2,3,4,5,6,7,8,9];
// numbers.forEach(number=>{
//     let suffix = "th";
//     if (number === 1){
//         suffix = "st"
//     } else if (number === 2){
//         suffix = "nd"
//     } else if (number === 3){
//         suffix = "rd"
//     }
//     console.log(`${number} ${suffix}`);
// });

// // // //

// let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

// pizzas.forEach(pizza => {
//     console.log(`I like ${pizza} pizza.`);
// });
// console.log("I really love pizza!");

// // // //

// let animals: string[] =["cat", "dog", "goat"];
// animals.forEach(animal =>{
//     console.log(`this ${animal} would make a great pets`);
// })
// console.log('i really like these animals');

// // // //

// function make_shirts(size: string, message: string){
//     console.log(`making a ${size} shirt with ${message} message`);
// }

// make_shirts("large", "we love pakistan");

// // // //

// function shirt(size: string = "large", message: string = "We love typescript"){
//     console.log(`making a ${size} shirt with this message ${message} printed on it`);
// }

// shirt()
// shirt("Medium")
// shirt("Small", "Dive into coding")

// // // //

// function describe_city(city: string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }

// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Tokyo", "Japan");
 
// // // //

// function city_country(city: string, country: string): string {
//     return `${city}, is in ${country}`;
// }

// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Paris", "France"));

// // // //

// function make_album(artist: string, title: string, tracks?: number){

//     let album = {artist, title, tracks};

//     if (tracks){
//      album ['tracks']= tracks;
   
//     }
//     return album;
// }

// console.log(make_album('First Artist', '1st Album'));
// console.log(make_album('Second Artist', '2nd Album'));
// console.log(make_album('Third Artist', '3rd Album',10));

// // // //

// let magicians: string[] = ['Alice', 'Alex', 'Any'];

// function show_magicians(magicians: string[]){
//     magicians.forEach(magicians=>{
//         console.log(magicians,'magician');
//         });
// }

// // show_magicians(magicians);

// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }

// make_great(magicians); // Modifies the original array
// show_magicians(magicians);// Shows modified names
 
// //


// function make_sandwich(...items:string[]){
//     console.log(`making sandwiches with ${items.join(',')}`)
// }

// make_sandwich('cheese','beef','lettuce')
// make_sandwich('chicken','cheese','tommato')
// make_sandwich('ham','cheese','tommato')
//

// //


// function make_car(manufacturer: string, model: string, ...options:
//     [string, any][]): Object {
//         let car = {manufacturer, model};
//         options.forEach(([key , value]) => car[key] =value);
//         return car;
//     }

    // function make_car(manufacturer: string, model: string, ...options: [string, any ][]): object {
    //     let car = { manufacturer, model };
    //     options.forEach(([key, value]) => car[key] = value);
    //     return car;
    // }
    
    // console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
    // console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
