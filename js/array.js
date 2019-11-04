let hobbies = ["running", "hopping", "crawling", "eating"]

hobbies.forEach(find); /*sets the forEach loop for 'each'*/

function find(item, index) {
    console.log(item, index);
}

console.log(hobbies[0]);
console.log(hobbies.length);
console.log(hobbies.length-1);
console.log("index 1: " + hobbies[1])
