import isEven from './tasks/isEven.js';
import minimum from './tasks/minimum.js';
import fizzbuzz from './tasks/fizzbuzz.js';
import chessboard from './tasks/chessboard.js';
import squire from './tasks/squire.js';

function main(){
    console.log(isEven(4));       // true
    console.log(minimum(5, 3));   // 3
    for (let i = 1; i <= 100; i++) {
        console.log(fizzbuzz(i));
    }                // Run the fizzbuzz function
    console.log(chessboard(8, 8));                 // Run the chessboard function
    console.log(squire(5));                     // Run the squire function
}

main();