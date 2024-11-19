isMorning = false;

if (isMorning){
    greet = function(name) {
        console.log(`Good Morning, ${name}`)
    }
}
else {
    greet = function(name) {
        console.log(`Good Evening, ${name}`)
    }
}

console.log(greet("manik"));