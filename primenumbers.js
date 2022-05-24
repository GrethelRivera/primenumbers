//display all the prime numbers between 1-100

//sets counter
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false; // if false the current counter number is prime(notprime = false=prime)
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {  // reminder of "0" and does not equal counter= the number is notprime
            notPrime = true;
        }
    }
    if (notPrime === false) {     
                console.log(counter);
    }
}