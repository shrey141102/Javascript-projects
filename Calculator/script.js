let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const val = e.target.value;
        if (val != 'clear' && val != 'reset' && val != '=' && val != '%') {
            input.value += val;
        } else if (val == 'clear') {
            input.value = input.value.substring(0, input.value.length - 1);
        } else if (val == 'reset') {
            input.value = '';
        } else if (val == '=') {
            input.value = eval(input.value);
        } else if (val == '%') {
            if (input.value.substring(0, 1) == '-') {
                input.value = input.value.substring(1, input.value.length);
            } else if (input.value.substring(0, 1) != '-') {
                input.value = `-${input.value}`;
            }
        }
        
    })
})