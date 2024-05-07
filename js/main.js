const getNumberFromUserInput = (position) => {
    do {
        const number = prompt(`Average value. Number #${position}:`);

        if (number === null) {
            return;
        } else if (number.length === 0 || isNaN(+number)) {
            alert(`Invalid number <${number}>. Please try again`);
        } else {
            return +number;
        }
    } while(true);
};

document.querySelector('.btn').addEventListener('click', () => {
    const numOfValues = 3;
    const values = [];

    for (let i = 1; i <= numOfValues; i++) {
        const number = getNumberFromUserInput(i);

        if (isNaN(+number)) {
            alert('Bye!');
            return;
        }

        values.push(number);
    }

    const sum = values.reduce((num1, num2) => num1 + num2, 0);
    alert(`Average of ${values.join(', ')} is ${sum / numOfValues}`);
});
