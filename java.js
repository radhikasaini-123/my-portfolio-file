let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let expression = "";  // renamed from "string" to "expression" for clarity

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let result = eval(expression);
                input.value = result;
                expression = result.toString();  // Update the expression with the result
            } catch (error) {
                // Handle the error (e.g., show an error message)
                console.error("Invalid expression");
                input.value = "Error";
                expression = "";  // Reset the expression
            }
        } else if (e.target.innerHTML == 'AC') {
            expression = "";
            input.value = expression;
        } else if (e.target.innerHTML == 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
        } else {
            expression += e.target.innerHTML;
            input.value = expression;
        }
    });
});