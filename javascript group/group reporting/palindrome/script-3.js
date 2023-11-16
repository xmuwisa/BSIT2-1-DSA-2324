const inp = document.getElementById('original'); //called container for displaying input
const pal = document.getElementById('checker'); //called container for displaying result

function isPalindrome(input){
    const word = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //matches any character that is not an uppercase letter (A-Z), a lowercase letter (a-z), or a digit (0-9)

    c_inp.innerHTML = c_input;
    //display in 'Cleaned:' container the cleaned input

    const input_len = c_input.length;
    //get final input's length

    const r_input = reverse_input(c_input, input_len);
    //call reverse_input function to create the reversed version of the input

    r_inp.innerHTML = r_input;
    //display in 'Reversed:' container the reversed input
}

function enter(){ //the function called when 'Check' button is clicked
    const p_input = document.getElementById('inp').value;
    //get input from input field

    document.getElementById('inp').value = '';
    //clear input field

    inp.innerHTML = p_input;
    //display in 'Input:' container the input from input field

    isPalindrome(p_input);
    //call palindrome check to check if the input is a palindrome or not
    //arguments: final input, input length
}


// function isPalindrome(value) {
//     // Pre: value is not empty
//     // Post: value is determined to be a palindrome or not

//     // Strip whitespaces and convert to uppercase
//     const word = value.trim().toUpperCase();

//     let left = 0;
//     let right = word.length - 1;

//     // Check if the characters at the corresponding positions are equal
//     while (word[left] === word[right] && left < right) {
//         left++;
//         right--;
//     }

//     // If the loop completed without breaking, it's a palindrome
//     return word[left] === word[right];
// }

// // Example usage:
// const inputString = "A man a plan a canal Panama";
// const result = isPalindrome(inputString);

// if (result) {
//     console.log(`${inputString} is a palindrome.`);
// } else {
//     console.log(`${inputString} is not a palindrome.`);
// }

// algorithm IsPalindrome(value)
// Pre: value 6= ∅ 3)
// Post: value is determined to be a palindrome or not 
// word ← value.Strip().ToUpperCase() 
// left ← 0 
// right ← word.Length −1
// while word[left] = word[right] and left < right 
// left ← left + 1 9) right ← right − 1
// end while
// return word[left] = word[right]
// end IsPalindrome 
