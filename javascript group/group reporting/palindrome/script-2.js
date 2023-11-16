const inp = document.getElementById('original'); //called container for displaying input
const c_inp = document.getElementById('cleaned'); //called container for displaying reversed input
const r_inp = document.getElementById('reversed'); //called container for displaying reversed input
const pal = document.getElementById('checker'); //called container for displaying result

function output_result(valid){
    const pal = document.getElementById('checker'); //called the container that will display if input is a palindrome or not
    if (valid){ 
        pal.innerHTML= "TRUE"; //display true if a palindrome
    } else {
        pal.innerHTML= "FALSE"; //display false if not a palindrome
    }
}

function palindrome(input, r_input, l){
    let valid;

    for(let i = 0; i < l; i++){//loop that goes through the index of the input
        if (input[i] == r_input[i]){ //compares each character of original and reversed input
            valid = 1; //true
            continue;
        } else {
            valid = 0; //false
            break;
        }
    }

    output_result(valid);
}

function reverse_input(input, l){
    let new_input = ""; //declare new_input as container for the reversed input

    for(let i = l - 1; i >= 0; i--){ //loop that goes through the index of the input
        new_input += input[i]; 
        //get characters using each index starting from the last index to index 0
        //put character in descending order to the new_input variable
    }

    return new_input;
}

function enter(){ //the function called when 'Check' button is clicked
    const p_input = document.getElementById('inp').value;
    //get input from input field

    document.getElementById('inp').value = '';
    //clear input field

    inp.innerHTML = p_input;
    //display in 'Input:' container the input from input field

    const c_input = p_input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //matches atches any character that is not an uppercase letter (A-Z), a lowercase letter (a-z), or a digit (0-9)

    c_inp.innerHTML = c_input;
    //display in 'Cleaned:' container the cleaned input

    const input_len = c_input.length;
    //get final input's length

    const r_input = reverse_input(c_input, input_len);
    //call reverse_input function to create the reversed version of the input

    r_inp.innerHTML = r_input;
    //display in 'Reversed:' container the reversed input

    palindrome(c_input, r_input, input_len);
    //call palindrome check to check if the input is a palindrome or not
    //arguments: final input, input length
}