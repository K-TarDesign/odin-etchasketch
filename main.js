// VARIABLES

    // GRID - GLOBAL VARIABLES
    const gridDims = 960;   // Grid dimensions in pixels
    let boxDims;            // Size of divisions in pixels

    // GRID - DOM VARIABLES
    const grid = document.querySelector('#grid');



// FUNCTIONS

    function checkDivInput(value) {
        
        if (typeof(value) != "number" || value < 1 || value > 100) {
            let x = prompt("Please enter a value between 1 and 100", 16);
            ;
        } else {
            createDivDims(value);
        }

    }

    function createDivDims(divs) {

        
        boxDims = Math.ceil( gridDims / divs );
    }
