const inp = document.getElementById('original'); //called container fr displaying input
const r_inp = document.getElementById('reversed'); //called container fr displaying reversed input
const pal = document.getElementById('checker'); //called container fr displaying result

function output_result(valid){
    const pal = document.getElementById('checker');
    if (valid){
        pal.innerHTML= "TRUE"; 
    } else {
        pal.innerHTML= "FALSE"; 
    }
}

function palindrome(input, r_input, l){
    let valid;

    for(let i = 0; i < l; i++){
        if (input[i] == r_input[i]){
            valid = 1;
            continue;
        } else {
            valid = 0;
            break;
        }
    }

    output_result(valid);
}

function reverse_input(input, l){
    let new_input = "";

    for(let i = l - 1; i >= 0; i--){
        new_input += input[i];
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

    const f_input = p_input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //matches atches any character that is not an uppercase letter (A-Z), a lowercase letter (a-z), or a digit (0-9)

    const input_len = f_input.length;
    //get final input's length

    const r_input = reverse_input(f_input, input_len);
    //call reverse_input function to create the reversed version of the input

    r_inp.innerHTML = r_input;
    //display in 'Reversed:' container the reversed input

    palindrome(f_input, r_input, input_len);
    //call palindrome check to check if the input is a palindrome or not
    //arguments: final input, input length
}