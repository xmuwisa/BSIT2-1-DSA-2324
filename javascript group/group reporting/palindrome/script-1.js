const inp = document.getElementById('original'); //called container fr displaying input
const pal = document.getElementById('checker'); //called container fr displaying result

function output_result(valid){ //the function that outputs the result after checking if the input is a palindrome or not
    const pal = document.getElementById('checker');
    if (valid){
        pal.innerHTML= "TRUE"; 
    } else {
        pal.innerHTML= "FALSE"; 
    }
}

function palindrome(input, l){ //the function that checks if an input is a palindrome or not
    let valid = 0;
    //declared valid that states if an input is a palindrome or not
    //initialized valid

    let j = l-1;
    //declared j as the index for reversed input
    //initialized j to input's length minus one (allows to call last input's index)

    let i, k;
    //declared i as the index for the input
    //declared k to allow only 1 iteration per i index

    for(i = 0; i < l; i++){ //i as index that goes through input's index normally
        for(k = 0; k < 1; k++){
            console.log(input[i], input[j]); //display in console the process of comparing
            if(input[i] == input[j]){ //compares input and the reversed input
                valid = 1; //valid remains true if the condition is true
                continue; //continues the loop
            } else {
                valid = 0; //valid becomes false if the condition is false
                break; //break out of the loop
            }
        }
        j--; //j as index that goes through input's index in reverse
    }
    
    output_result(valid);
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

    const input_len = c_input.length;
    //get final input's length

    palindrome(c_input, input_len);
    //call palindrome check to check if the input is a palindrome or not
    //arguments: final input, input length
}