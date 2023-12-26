

    function reverse(){
        var input,strReverse;
        input=document.getElementById("first").value;
        strReverse="";
        for ( var i = input.length -1; i >= 0; i--) {
            strReverse = strReverse + input[i];
           }
       
           document.getElementById("result").innerHTML = "Reversed String: " + strReverse;
        }

// explanation :
        
// var i = input.length - 1;: Initializes the variable i with the index of the last character in the string. For the example input "example," the length is 7, and i is initially set to 6 (index of 'e').

// i >= 0;: The loop continues as long as i is greater than or equal to 0, which means it iterates through the entire string in reverse order.

// i--: Decrements the value of i in each iteration, moving towards the beginning of the string.
// strReverse = strReverse + input[i];: In each iteration, it appends the character at the current index i of the 'input' string to the 'strReverse' string. This effectively builds the reversed string.

// Iteration 1: strReverse = "" + "e" = "e"
// Iteration 2: strReverse = "e" + "l" = "el"
// Iteration 3: strReverse = "el" + "p" = "elp"
// Iteration 4: strReverse = "elp" + "m" = "elpm"
// Iteration 5: strReverse = "elpm" + "a" = "elpma"
// Iteration 6: strReverse = "elpma" + "x" = "elpmax"
// Iteration 7: strReverse = "elpmax" + "e" = "elpmaxe"

// After the loop is completed, the variable strReverse contains the reversed version of the original string. In this example, if input is "example," the resulting strReverse is "elpmaxe".
        