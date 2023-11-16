const inp = document.getElementById('original'); //called container for displaying input
const pal = document.getElementById('checker'); //called container for displaying result

function isPalindrome(input){
    const word = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //matches any character that is not an uppercase letter (A-Z), a lowercase letter (a-z), or a digit (0-9)

    let left = 0;
    let right = word.length - 1;

    while (word[left] === word[right] && left < right) {
        left++;
        right--;
    }

    return word[left] === word[right];
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
