const inp = document.getElementById('original'); //called container for displaying input
const res = document.getElementById('checker'); //called container for displaying result

function isPalindrome(value){
    const word = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    //remove any character that is not an uppercase letter (A-Z), a lowercase letter (a-z), or a digit (0-9)
    //text transform to uppercase

    let left = 0;
    //access start index, starts from the beginning of the string
    let right = word.length - 1;
    //access last index, starts the the end of the string

    while (word[left] === word[right] && left < right) {
        left++;
        right--;
    }
    //the loop breaks in a specific index of left and right if it returns false
    //eg. race (breaks with left's value remaining 0 and right's value remaining at 3 because r and e are not equal)
        //it shows from the start that race is not a palindrome because it returned a false (or 2 pair characters are not the same)
    //eg. noon (a palindrome which returns true so it continues until the end of the loop
        //it breaks until left's value is 1 and right's value is 2)
        //it shows that until the end, it is a palindrome because it continued to return a true (or 2 pair characters remained the same)

    return word[left] === word[right];
    //returns true or false
    //eg. race returns false because from the loop, it stopped at left's value remaining 0 and right's value remaining at 3
        // index 0 and 3 of "race" is not equal so it returns false
    //eg. noon returns true because from the loop, it stopped at left's value is 1 and right's value is 2
        // index 1 and 2 of "noon" is equal so it returns true
}

function enter(){ //the function called when 'Check' button is clicked
    const p_input = document.getElementById('inp').value;
    //get input from input field

    document.getElementById('inp').value = '';
    //clear input field

    inp.innerHTML = p_input;
    //display in 'Input:' container the input from input field

    const result = isPalindrome(p_input);
    //call palindrome check to check if the input is a palindrome or not
    //returns result

    res.innerHTML = result;
    //display in 'Palindrome:' container the result
}