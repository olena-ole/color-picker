'use strict';

const scrimbaAPI = 'https://apis.scrimba.com/hexcolors';
let count = 100

function displayColors(colors) {
    const colorsHTML = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}"></div>`;
    }).join('');

    document.body.innerHTML = `
        <div class="colors">
            ${colorsHTML}
        </div>
    `;
}

async function getColors(num) {
    const response = await fetch(`${scrimbaAPI}?count=${num}`);
    const data = await response.json();
    const colors = data.colors;
    displayColors(colors);
}

getColors(count);