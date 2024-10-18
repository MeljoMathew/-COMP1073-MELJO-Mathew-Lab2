// Declare and initialize constants for the input slider elements
const redSlider = document.getElementById('red');    // Slider for red
const greenSlider = document.getElementById('green'); // Slider for green
const blueSlider = document.getElementById('blue');   // Slider for blue

// Declare constant for the page body or html element
const pageBody = document.querySelector('html');   // The page body to change background color

// Function to update the background color based on the current values of the sliders
function updateBackgroundColor() {
    // Get the values of red, green, and blue from the sliders
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;
    
    // Create an RGB color string using the values from the sliders
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    
    // Set the background color of the page (html element) to the new RGB color
    pageBody.style.backgroundColor = rgbColor;
    
    // Log the RGB color to the console for debugging
    console.log(`RGB Color: ${rgbColor}`);
}

// Event listeners for each slider, calling the updateBackgroundColor function on input
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

/**
 * Explanation of the Code:
 * 
 * - First, we select the sliders (red, green, blue) using `document.getElementById()` and assign them to constants.
 * - We also select the `html` element to apply the background color.
 * - A function named `updateBackgroundColor` is created to update the background color of the page. This function is triggered when any of the sliders are adjusted.
 * - Inside the function, we retrieve the values of the sliders (red, green, blue), form an RGB color string, and then apply it to the `backgroundColor` property of the `html` element.
 * - We also log the RGB values to the console for debugging purposes.
 * - Event listeners are added to each slider to trigger the background color change when the user adjusts them.
 */
