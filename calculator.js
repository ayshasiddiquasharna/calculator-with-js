// Get the result input element
const resultInput = document.getElementById('result');

// Get all the buttons and add event listeners
const buttons = document.querySelectorAll('#input-number, #action-btn, #equal-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;
        if (buttonText === '=') {
            try {
                // Evaluate the expression and set the result
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                // Handle error if evaluation fails
                resultInput.value = 'Error';
            }
        } else if (buttonText === 'AC') {
            // Clear the result input
            resultInput.value = '';
        } else {
            // Append the button's text to the result input
            resultInput.value += buttonText;
        }
    });
});

