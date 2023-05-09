"use strict";
const mainFieldId = 'container';
const positions = [];
const createCol = (isPlayable) => {
    const div = document.createElement('div');
    if (isPlayable) {
        div.classList.add('playable');
    }
    else {
        div.classList.add('irrelevant');
    }
    return div;
};
const isField = (x, y) => ((x == 6 || x == 4) && y != 5) ||
    ((y == 4 || y == 6) && x != 5) ||
    ((x == 0 || x == 10) && y == 5) ||
    ((y == 0 || y == 10) && x == 5);
const isHomeField = (x, y) => (y < 2 && x < 2) ||
    (y < 2 && x > 8) ||
    (y > 8 && x < 2) ||
    (y > 8 && x > 8);
const generateField = () => {
    const field = document.getElementById('container');
    for (var y = 0; y < 11; y++) {
        for (var x = 0; x < 11; x++) {
            const braun = isHomeField(x, y) || isField(x, y);
            const f = createCol(braun);
            field === null || field === void 0 ? void 0 : field.appendChild(f);
            // const b = createCol(isHomeField(x, y))
            // field?.appendChild(b)
        }
    }
};
generateField();







