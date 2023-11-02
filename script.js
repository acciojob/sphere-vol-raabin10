function volume_sphere() {
    // Get the input field for the radius
    var radiusInput = document.getElementById('radius');

    // Get the input field for the volume
    var volumeInput = document.getElementById('volume');

    // Parse the radius input as a float
    var radius = parseFloat(radiusInput.value);

    // Check if the radius is a valid number
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume using the formula
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Set the calculated volume in the volume input field
        volumeInput.value = volume.toFixed(2); // Rounded to 2 decimal places
    } else {
        // If the input is not a valid number, display an error message
        volumeInput.value = "Invalid input. Please enter a valid positive number.";
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}

window.onload = function () {
    var form = document.getElementById('MyForm');
    form.onsubmit = volume_sphere;
};
