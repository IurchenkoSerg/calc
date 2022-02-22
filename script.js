let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// For Number Inputs
btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {

        // Inner Values for calculator

        if (resultBox.value == "0") {
            resultBox.value = "";
        }

        let value = btns[i].innerHTML;
        resultBox.value += value;
    });
});


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', () => {
    let allInputs = resultBox.value;

    resultBox.value = evaluate(allInputs);

    console.log(evaluate(allInputs));
})

// Clear all Inputs
clearBtn.addEventListener('click', () => {
    resultBox.value = "0";
})