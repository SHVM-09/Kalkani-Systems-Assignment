//. Write a program to print the Fibonacci series up to the number which is
//lesser than the given input.

/* 
User input: 120

Program output:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

User input: 5

Program output:

0, 1, 1, 2, 3, 5

User input: 10

Program output:
0, 1, 1, 2, 3, 5, 8
parseInt(prompt("enter no"));
*/

let inputTag = document.querySelector("#fibN");
let buttonTag = document.querySelector(".btn");
let answerTag = document.querySelector(".answer");

// let userInput = 120;
// let count = 0;

buttonTag.addEventListener("click", (e) => {
    e.preventDefault();
    let userInput = inputTag.value;
    let count = 0;
    if (userInput) {
        function fiboCount(n) {

    
            let n1 = 0;
            let n2 = 1;
            let fib = 0;

            while (fib <= n) {
                fib = n1 + n2;
                n1 = n2;
                n2 = fib;
                count += 1;
            }
            return count;
    
        }

        fiboCount(userInput);

        function fibonacciSeries(count) {
            if (count === 1) {
                return [0, 1];
            } else {
                let fibonacci = fibonacciSeries(count - 1);
                fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
                return fibonacci;
            }
    
        }

        let finalValue = fibonacciSeries(count).toString();
        answerTag.innerHTML = finalValue;
        inputTag.value = "";
        return;
    } else {
        answerTag.innerHTML="Try Again You have not entered number"
    }
}
)


let inputTag2 = document.querySelector("#dim");
let buttonTag2 = document.querySelector(".btn2");
let answerTag2 = document.querySelector(".answer2");

buttonTag2.addEventListener("click", (e) => {
    e.preventDefault();
    let n = inputTag2.value;
    let string = "";
    let alpha = 65;
    // External loop
    if (n>0) {
        for (let i = 1; i <= n; i++) {
            // printing spaces
            for (let j = 1; j <= n - i; j++) {
                string += " ";
            }
            // printing odd numbers
            for (let k = 1; k <= i; k++) {
                string += 2 * k - 1;
            }
            //printing alphabets
            for (let k = 0; k <= i - 2; k++) {
                if (i === 1) {
                    break;
                } else {
                    string += String.fromCharCode(alpha + k);
                }
            }
            string += "\n";
        }
        //reverse one
        n = n - 1;
        for (let i = 0; i < n; i++) {
            // printing spaces
            for (let j = 0; j < i + 1; j++) {
                string += " ";
            }
            // printing odd numbers
            for (let k = 1; k <= n - i; k++) {
                string += 2 * k - 1;
            }
            //printing alphabets
            for (let k = 1; k <= n - i - 1; k++) {
                string += String.fromCharCode(alpha + k - 1);
            }
            string += "\n";
        }
        answerTag2.innerHTML = `${string}`;
        inputTag2.value = "";
    }
    else {
        answerTag2.innerHTML = "No Entry Found!";
    }
})


