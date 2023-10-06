const wand = document.getElementById('wand');
const imagesContianer = document.querySelector('.images-container');
const tiles = document.querySelectorAll('.tile');

window.onmousemove = e => {
    console.log(imagesContianer.getBoundingClientRect().x);
    let mouseX = e.clientX - imagesContianer.getBoundingClientRect().x;
    let mouseY = e.clientY - imagesContianer.getBoundingClientRect().y;
    imagesContianerWidth = imagesContianer.getBoundingClientRect().width;
    imagesContianerHeight = imagesContianer.getBoundingClientRect().height;

    mouseXPercentage = mouseX / imagesContianerWidth;

    const wandX = (imagesContianerWidth * -0.15) + mouseX * 1.3;
    const wandY = (imagesContianerHeight * 0.1) + (mouseY * 0.4);
    wand.animate({
        left: `${wandX}px`,
        top: `${wandY}px`,
        rotate: `${( mouseXPercentage * 20 )- 10}deg`
    }, {duration: 400, fill: 'forwards'});

    tiles.forEach(tile => {
        const wandDimensions = wand.getBoundingClientRect();
        const dimensions = tile.getBoundingClientRect();

        const relativeWandX = wandDimensions.x - dimensions.x,
              relativeWandXPercentage = relativeWandX / dimensions.width;

        const opacity = relativeWandXPercentage,
              blur = 1 - relativeWandXPercentage;

        tile.style.setProperty('--opacity', opacity);
        tile.style.setProperty('--blur', blur);
    });
}