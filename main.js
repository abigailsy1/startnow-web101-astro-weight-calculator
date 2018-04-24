
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
//populate drop down box
var pick = document.getElementById('planets');

planets.forEach((planet) => {
    var option = document.createElement('option');
    option.value = planet[0];
    option.innerText = planet[0];

    pick.appendChild(option);
});

//code to return correct weight
function calculateWeight(weight, planetName) {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i][0] == planetName) {
            return parseInt(weight) * planets[i][1];
        }
    }
}

function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    var userWeight = parseInt(document.getElementById('user-weight').value);

    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
     var planetName = document.querySelectorAll('#planets option')[document.getElementById('planets').selectedIndex].textContent;

    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName);


    // 6. Write code to display the message shown in the screenshot.
    document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
}

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById('calculate-button').addEventListener('click', handleClickEvent);
          


   