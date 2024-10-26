/*
 * Author: Kimberly Estrada & Trevor Chee <kestrad9@ucsc.edu> <tlchee@ucsc.edu>
 * Date: 10-22-2024
 * Description: This script is an implementation of the types of transportation I use to get around campus. 
 */

console.log("js/lab.js")

myTransport = ["Ford Focus", "public bus"];

myMainRide = {
  make: "Ford",
  model: "Focus",
  color: "blue",
  year: 2016,
  age: function () {
    return 2024 - this.year;
  }
}

document.writeln("My two forms of transport: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), 
  "</pre>"
);

