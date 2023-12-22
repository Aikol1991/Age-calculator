//input 
const dayI = document.getElementById("day");
const monthI = document.getElementById("month");
const yearI = document.getElementById("year");

//output
const dayO = document.getElementById("dd");
const monthO = document.getElementById("mm");
const yearO = document.getElementById("yy");

//Form Function

const form = document.querySelector("form");
form.addEventListener("submit",handleSubmit);


function validate() {
    const inputs = document.querySelectorAll("input");
    let errorMsg = true;

    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required.";
            errorMsg = false;
        }else if (i === monthI && i.value > 12 || i.value <= 0) {
            monthI.style.borderColor = "red"
            monthI.parentElement.querySelector("small").innerText = "must be a value month.";
            errorMsg = false;
        } else if (i === dayI && i.value > 31 || i.value <= 0 ){
            dayI.style.borderColor = "red"
            dayI.parentElement.querySelector("small").innerText = "must be a value day.";
            errorMsg = false;
        } else {
            i.style.borderColor = "black"
            parent.querySelector("small").innerText = "";
        }
    });
    
    return errorMsg;
}

function handleSubmit(e) {
    
    e.preventDefault();

    if (validate()) { // validate function
        const day = parseInt(dayI.value);
        const month = parseInt(monthI.value);
        const year = parseInt(yearI.value);

        // Date
        const birthDate = new Date(year, month - 1, day);

        const today = new Date(); // Date

        // millisecond
        const ageInMilliseconds = today - birthDate;

        // Date millisecond (ageInMilliseconds)
        const ageDate = new Date(ageInMilliseconds); 

        // getFullYear() 1970
        const years = ageDate.getFullYear() - 1970;

        const months = ageDate.getMonth();
        const days = ageDate.getDate();

        // HTML  id  yearO, monthO, dayO
        yearO.innerText = years;
        monthO.innerText = months;
        dayO.innerText = days;
    }
}
