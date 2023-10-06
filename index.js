const h1 = document.querySelector('h1')


h1.innerText = "Enter the Temperature"

function calculatetemperature(event){

    event.preventDefault();
    // get temperature value from form
    const temperature = event.target.Degree.value;
    const degree = "°F"
    // convert °F to °C
    const celsuis = 5/9*(temperature - 32);
    // store result as a variable
    const h2 = document.querySelector('h2')
    h2.innerText = " In " +temperature+ degree + " is "+ celsuis.toFixed(1) + "°C";
}
 // add an onsubmit event to the form

    const form = document.querySelector('form');
    form.addEventListener('submit', calculatetemperature);

    // display °F
