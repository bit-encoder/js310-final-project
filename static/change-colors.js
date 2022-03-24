const canvasArea = document.getElementById('large-canvas');

const buttonGreen = document.getElementById('change-to-green');
const buttonRed = document.getElementById('change-to-red');
const buttonYellow = document.getElementById('change-to-yellow');
const buttonBlue = document.getElementById('change-to-blue');

const green = [167, 232, 189]
const red = [239, 167, 167]
const yellow = [255, 217, 114]
const blue = [37, 142, 166]

function getColorValue() {
    let canvasColor = getComputedStyle(canvasArea).backgroundColor;
    let colorValues = canvasColor.split(',');
    
    // Get RGB values, returns string
    colorValues[0] = colorValues[0].replace('rgb(', '');
    colorValues[1] = colorValues[1].replace(' ', '');
    colorValues[2] = colorValues[2].replace(' ', '');
    colorValues[2] = colorValues[2].replace(')', '');
    
    // Convert string to ints
    colorValues[0] = parseInt(colorValues[0]);
    colorValues[1] = parseInt(colorValues[1]);
    colorValues[2] = parseInt(colorValues[2]);

    return colorValues;
}

function changeColor(color) {
    
    let colorValues = getColorValue();
    
    console.log(colorValues[0])

    const animate = () => {
        
        if (colorValues[0] !== color[0]) {
            if (colorValues[0] < color[0]) { colorValues[0]++ }
            else { colorValues[0]-- }
        }
        if (colorValues[1] !== color[1]) {
            if (colorValues[1] < color[1]) { colorValues[1]++ }
            else { colorValues[1]-- }
        }
        if (colorValues[2] !== color[2]) {
            if (colorValues[2] < color[2]) { colorValues[2]++ }
            else { colorValues[2]-- }
        }

        canvasArea.style.backgroundColor = `rgb(${colorValues[0]},${colorValues[1]},${colorValues[2]})`;
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

buttonGreen.addEventListener('click', () => changeColor(green));
buttonRed.addEventListener('click', () => changeColor(red));
buttonYellow.addEventListener('click', () => changeColor(yellow));
buttonBlue.addEventListener('click', () => changeColor(blue));