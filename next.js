let yellowStarEl = document.getElementById('yellowStar')
let greenStarEl = document.getElementById('greenStar')
let magentaStarEl = document.getElementById('magentaStar')

let yellow = 0
let green = 0
let magenta = 0

let randomXyellow = 0
let randomYyellow = 0
let randomXgreen = 0
let randomYgreen = 0
let randomXmagenta = 0
let randomYmagenta = 0

let resetButtonEl = document.getElementById('reset')
let tellTheStory = document.getElementById('tellTheStory')

let moveTime = 0

let scoresGotten = false


function setup() {
    createCanvas (600, 600)
    
    setTimeout (()=> {
       alert ('Outside the window three starts twinkle and play tag across the sky') 
        alert ('Catch the magenta star once and the others thrice as many times to receive a reward')
    }, 500)

    setInterval (()=> {
        randomXyellow = Math.floor(Math.random () * 560)
        randomYyellow = Math.floor(Math.random () * 560)

        randomXgreen = Math.floor(Math.random () * 560)
        randomYgreen = Math.floor(Math.random () * 560)

        randomXmagenta = Math.floor(Math.random () * 560)
        randomYmagenta = Math.floor(Math.random () * 560)

        moveTime = Math.floor(Math.random () * 10)
    }, 1000)
}

function mouseClicked () {
 
    starClickedScores()
    checkScores()
    console.log ('clicked mouse')
}

function draw () {
    background (0, 0, 75)
    // console.log (`randomX = ${randomX}`)
    // console.log (`randomY = ${randomY}`)
    // console.log (`movetime = ${moveTime}`)
    catchMe()
    drawWindow()
}

function drawWindow() {
    strokeWeight(20)
    stroke('brown')
    line (0,0, 0, 600)
    line (600, 0, 600, 600)
    line (0, 0 , 600 , 0)
    line (0, 600, 600, 600)
    line (0,300, 600, 300)
    line (300, 0 ,300, 600)
}

function catchMe() {
    noStroke()

    fill ('yellow')
    quad (20+randomXyellow,0+randomYyellow,10+randomXyellow,20+randomYyellow,20+randomXyellow,40+randomYyellow,30+randomXyellow,20+randomYyellow)
    quad (20+randomXyellow,10+randomYyellow,40+randomXyellow,20+randomYyellow,20+randomXyellow,30+randomYyellow,0+randomXyellow,20+randomYyellow)

    fill('green')
    quad (20+randomXgreen,0+randomYgreen,10+randomXgreen,20+randomYgreen,20+randomXgreen,40+randomYgreen,30+randomXgreen,20+randomYgreen)
    quad (20+randomXgreen,10+randomYgreen,40+randomXgreen,20+randomYgreen,20+randomXgreen,30+randomYgreen,0+randomXgreen,20+randomYgreen)

    fill('magenta')
    quad (20+randomXmagenta,0+randomYmagenta,10+randomXmagenta,20+randomYmagenta,20+randomXmagenta,40+randomYmagenta,30+randomXmagenta,20+randomYmagenta)
    quad (20+randomXmagenta,10+randomYmagenta,40+randomXmagenta,20+randomYmagenta,20+randomXmagenta,30+randomYmagenta,0+randomXmagenta,20+randomYmagenta)
}

function checkScores() {
    if (magenta === 1 && yellow === 3 && green === 3 && scoresGotten === false) {
        alert('The little game of the stars has been completed!')
        alert('For playing with the stars, they decide to tell you a tale...')
        scoresGotten = true
        tellTheStory.classList.remove('remove')
    }
    
}

function starClickedScores () {
    if (randomXyellow + 40 > mouseX && mouseX > randomXyellow && randomYyellow + 40 > mouseY && mouseY > randomYyellow) {
            yellow++
            yellowStarEl.innerHTML = (`Yellow: ${yellow}`)
        }

        if (randomXgreen + 40 > mouseX && mouseX > randomXgreen && randomYgreen + 40 > mouseY && mouseY > randomYgreen) {
            green++
            greenStarEl.innerHTML = (`Green: ${green}`)
        }

        if (randomXmagenta + 40 > mouseX && mouseX > randomXmagenta && randomYmagenta + 40 > mouseY && mouseY > randomYmagenta) {
            magenta++
            magentaStarEl.innerHTML = (`Magenta: ${magenta}`)
        }
}

function resetStarScores () {
    yellow = 0
    yellowStarEl.innerHTML = (`Yellow: ${yellow}`)
    green = 0
    greenStarEl.innerHTML = (`Green: ${green}`)
    magenta = 0
    magentaStarEl.innerHTML = (`Magenta: ${magenta}`)
    alert ('Catch the magenta star once and the others thrice as many times to achieve the full story')
}


resetButtonEl.addEventListener('click', resetStarScores)


// //saved coordinates for quads
// quad (  20,0, 10,20, 20,40, 30,20)
// //top, right, bottom, left
// quad (  20,10, 40,20, 20,30,  0,20 )

//(coordinate1,coordinate2,coordinate3, coordinate4) = shape of quadrilateral(s)
//use Math.random to get random coordinates for x and y
//add the randomly generated x to the coordinates' x's and the randomly generated y to the coordinates' y's