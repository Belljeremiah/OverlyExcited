// Attempt to make a function



// This is example code to help with syntax for creating loops
// var array = ["1", "2", "3"];
// var string = "";
// array.forEach(function(element){
//     string += element;
// });
// console.log(string); 

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (sentence) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < sentence.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += sentence[i] + " "
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)