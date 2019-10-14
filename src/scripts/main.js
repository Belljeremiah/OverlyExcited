// Attempt to make a function
function addExcitement() {
    let sentence =["1", "2", "3"];
    let string ="";
    sentence.forEach(function(addExcitement){
        string += element;
    });
    console.log("This is working sort of");
}

addExcitement()


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
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)