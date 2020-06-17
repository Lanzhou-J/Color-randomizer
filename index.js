body = document.querySelector('body')
h1 = document.querySelector('h1')
randomRgb1 = Math.floor(Math.random()*255)
randomRgb2 = Math.floor(Math.random()*255)
randomRgb3 = Math.floor(Math.random()*255)
body.style.backgroundColor = `rgb(${randomRgb1},${randomRgb2},${randomRgb3})`

h1.innerText = `rgb(${randomRgb1}, ${randomRgb2}, ${randomRgb3})`

oppoRgb1 = 255-randomRgb1;
oppoRgb2 = 255-randomRgb2;
oppoRgb3 = 255-randomRgb3;

h1.style.color = `rgb(${oppoRgb1},${oppoRgb2},${oppoRgb3})`