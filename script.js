<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Document</title>
</head>
<body>
    <header></header>
    <div class="left">
        <h1 class="simpleA">Simple animations are 
            <span id="word"></span>
        </h1>
        <canvas id="canvas"></canvas>
    </div>
    <div class="orbitPage">
        <div class="solarContainer">
            <h1 class="orbitText">Some Animations Look Harder Than They Are</h1>
            <div class="orbitRing ringOne"></div>
            <div class="planetOne"></div>
            <div class="orbitRing ringTwo"></div>
            <div class="planetTwo"></div>
            <div class="orbitRing ringThree"></div>
            <div class="planetThree"></div>
        </div>
    </div>
    <div id="colorChangePage">
        <h2 id="colorOne">Color One</h2>
        <h2 id="colorTwo">Second Color</h2>
        <h2 id="colorThree">Colour Number 3</h2>
        <div class="triangle"></div>
        <div class="spinner"></div>
        <script>
            const backGround = document.getElementById('colorChangePage');
            const one = document.getElementById("colorOne");
            const two = document.getElementById("colorTwo");
            const three = document.getElementById("colorThree")
            one.addEventListener('mouseover', () => {
                backGround.style.backgroundColor = "purple";
            })
            one.addEventListener('mouseout', () => {
                backGround.style.backgroundColor = "rgb(66, 103, 255)";
            })
            two.addEventListener('mouseover', () => {
                backGround.style.backgroundColor = "brown";
            })
            two.addEventListener('mouseout', () => {
                backGround.style.backgroundColor = "rgb(66, 103, 255)";
            })
            three.addEventListener('mouseover', () => {
                backGround.style.backgroundColor = "rgb(228, 228, 158)";
            })
            three.addEventListener('mouseout', () => {
                backGround.style.backgroundColor = "rgb(66, 103, 255)";
            })
        </script>
    </div>
</body>
</html>
