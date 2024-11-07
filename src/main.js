
    var svgCircles = document.querySelectorAll('circle');
    var svgPath = document.querySelector('path');
    var container = document.querySelector('.container');

    const red = document.querySelector('#red');
    const blue = document.querySelector('#blue');
    const yellow = document.querySelector('#yellow');
    const green = document.querySelector('#green');
    const orange = document.querySelector('#orange');
    const dark_blue = document.querySelector('#dark-blue');
    const pink = document.querySelector('#pink');
    const dark_green = document.querySelector('#dark-green');
    const brown = document.querySelector('#brown');
    const white = document.querySelector('#white');

    let colorMap = {
        red: '#ff0000',
        blue: '#0000ff',
        yellow: '#ffff00',
        green: '#00ff00',
        orange: '#ffa500',
        dark_blue: '#000080',
        pink: '#ff69b4',
        dark_green: '#006400',
        brown: '#8b4513',
        white: '#ffffff'
    };

    const fillSvg = (color) => {
        svgPath.style.fill = color;
        svgCircles.forEach(circle => {
            circle.style.fill = color;
        });
    }; 

    const isTouchdevice = () => {
        try {
            document.createEvent("TouchEvent");
            devicetype = "touch";
            return true;
        } catch (e) {
            devicetype = "mouse";
            return false;
        }
    };

    isTouchdevice();

    const clickEvent = devicetype === 'touch' ? 'mousedown' : 'click';

   /* const applyColorToSVGImages = (color) => {
        const svgImages = document.querySelectorAll('.bellColor');
        svgImages.forEach(svgImage => {
            svgImage.style.fill = color;
        });
    };  */
    container.addEventListener(clickEvent, (e) => {
        const selectedColor = colorMap[e.target.id];
        if (selectedColor) {
            fillSvg(selectedColor);
           // applyColorToSVGImages(selectedColor);
        }
    });


    document.addEventListener("DOMContentLoaded", function() {
    const canvasDiv = document.getElementById("canvas");

    const svgButtons = document.querySelectorAll(".canvas-img-btn");
    svgButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const svgData = button.innerHTML;
            canvasDiv.innerHTML = svgData;

            //color
         /*   const selectedColorId = selectedColorElement.id;
            const selectedColor = colorMap[selectedColorId];
            if (selectedColor) {
    svgPath.style.fill = selectedColor;
} else {
    console.error(`Color for ID '${selectedColorId}' not found in colorMap.`);
}   */
        });
    });
});



