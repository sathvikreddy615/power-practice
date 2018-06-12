/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

// First Btn

const flightFunction = idVal => {
    document.getElementById(idVal).classList.toggle("disabled");
    document.getElementById(idVal).classList.toggle("enabled");
}

document.querySelector("#activate-flight").addEventListener("click", () => {
    flightFunction("flight");
});

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

// Second Btn

const mindReadFunction = idVal => {
    document.getElementById(idVal).classList.toggle("disabled");
    document.getElementById(idVal).classList.toggle("enabled");
}

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    mindReadFunction("mindreading");
})

// Third Btn 

const xrayFunction = idVal => {
    document.getElementById(idVal).classList.toggle("disabled");
    document.getElementById(idVal).classList.toggle("enabled");
}

document.querySelector("#activate-xray").addEventListener("click", () => {
    xrayFunction("xray");
})

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

// Deactivate All Btn

const deactivateAllFunction = () => {
    document.querySelectorAll(".power").forEach(element => {
        element.classList.add("disabled");
        element.classList.remove("enabled");
    });
}

document.querySelector("#deactivate-all").addEventListener("click", () => {
    deactivateAllFunction();
})

// Activate All Btn

const activateAllFunction = () => {
    document.querySelectorAll(".power").forEach(activate => {
        activate.classList.add("enabled");
        activate.classList.remove("disabled");
    });
}

document.querySelector("#activate-all").addEventListener("click", () => {
    activateAllFunction();
})