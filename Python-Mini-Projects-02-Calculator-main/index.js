let screen_body = document.getElementById('screen_body');
buttons = document.querySelectorAll('button');
let value = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            value += buttonText
            screen_body.value = value; // += is imp so that every time we press X, it will show *//
        } else if (buttonText == 'C') {
            value = "";
            screen_body.value = value;

        } else if (buttonText == '=') {
            screen_body.value = eval(value)

        } else if (buttonText == '←') {
            screen_body.value = screen_body.value.slice(0, -1)

        } else {
            value += buttonText;
            screen_body.value = value;
        }
    });
};