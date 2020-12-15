let circle11 = document.getElementById('circle1.1')
let circle12 = document.getElementById('circle1.2')
let circle13 = document.getElementById('circle1.3')
let circle14 = document.getElementById('circle1.4')
let circle15 = document.getElementById('circle1.5')

let circle21 = document.getElementById('circle2.1')
let circle22 = document.getElementById('circle2.2')
let circle23 = document.getElementById('circle2.3')
let circle24 = document.getElementById('circle2.4')
let circle25 = document.getElementById('circle2.5')

let circle31 = document.getElementById('circle3.1')
let circle32 = document.getElementById('circle3.2')
let circle33 = document.getElementById('circle3.3')
let circle34 = document.getElementById('circle3.4')
let circle35 = document.getElementById('circle3.5')

let circle41 = document.getElementById('circle4.1')
let circle42 = document.getElementById('circle4.2')
let circle43 = document.getElementById('circle4.3')
let circle44 = document.getElementById('circle4.4')
let circle45 = document.getElementById('circle4.5')

let circle51 = document.getElementById('circle5.1')
let circle52 = document.getElementById('circle5.2')
let circle53 = document.getElementById('circle5.3')
let circle54 = document.getElementById('circle5.4')
let circle55 = document.getElementById('circle5.5')

let minusButton1El = document.getElementById('minusButton1')
let minusButton2El = document.getElementById('minusButton2')
let minusButton3El = document.getElementById('minusButton3')
let minusButton4El = document.getElementById('minusButton4')
let minusButton5El = document.getElementById('minusButton5')

let plusButton1El = document.getElementById('plusButton1')
let plusButton2El = document.getElementById('plusButton2')
let plusButton3El = document.getElementById('plusButton3')
let plusButton4El = document.getElementById('plusButton4')
let plusButton5El = document.getElementById('plusButton5')

let dotAnswerButton = document.getElementById('dotAnswerButton')
let continueButton = document.getElementById('continueButton')
//set these up /see if theres a better/more compact way of doing this




let showLinesButtonEl = document.getElementById('showLinesButton')


let dots = [
{x:100, y:100},
{x:100, y:200},
{x:100, y:300},

{x:300, y:300},
{x:400, y:300},
{x:400, y:200},
{x:300, y:200},
{x:300, y:100},
{x:400, y:100},
       
{x:500, y:100},
{x:600, y:100},
{x:600, y:200},
{x:500, y:200},
{x:500, y:300},
{x:600, y:300}
]

let shownDot = [{}]
let showingLines = false
z = 0

let first = 0
let second = 0
let third = 0
let fourth =0
let fifth =0




function setup() { 
    console.log ('setup')
    createCanvas(800,400)

    // createCanvas (350, 250)


    setInterval (()=> {
        if (z === 14) {
            z=0
        } else {
            z++
        }

    }, 1000)
}

function draw() {
     background(5)

    if (showingLines  === true) {
        showLines()
    }
   
    movingDot()
}

function movingDot() {
    // console.log (` dots = ${dots[z].x}`)
    // console.log (`z= ${z}`)
    noStroke()
    fill ('red')
    
    circle (dots[z].x, dots[z].y, 20)
}

function showLines() {

    strokeWeight(5)
    stroke (75)
                                //leftmost
    line (105, 100, 195, 100)
    line (105, 200, 195, 200)
    line (105, 300, 195, 300)
    line (100, 105, 100, 195)
    line (100, 205, 100, 295)
    line (200, 105, 200, 195)
    line (200, 205, 200, 295)
                                //middle
    line (305, 100, 395, 100)
    line (305, 200, 395, 200)
    line (305, 300, 395, 300)
    line (300, 105, 300, 195)
    line (300, 205, 300, 295)
    line (400, 105, 400, 195)
    line (400, 205, 400, 295)
                                //rightmost
    line (505, 100, 595, 100)
    line (505, 200, 595, 200)
    line (505, 300, 595, 300)
    line (500, 105, 500, 195)
    line (500, 205, 500, 295)
    line (600, 105, 600, 195)
    line (600, 205, 600, 295)
}

function showLinesButtonClicked () {
    console.log ('showlines button clicked')
    showingLines = true
}

function showCircles () {

    if (first === 0) {
        circle11.classList.add('hide')
        circle12.classList.add('hide')
        circle13.classList.add('hide')
        circle14.classList.add('hide')
        circle15.classList.add('hide')
    } else if (first === 1) {
        circle11.classList.remove('hide')
        circle12.classList.add('hide')
        circle13.classList.add('hide')
        circle14.classList.add('hide')
        circle15.classList.add('hide')
    } else  if (first === 2) {
        circle11.classList.remove('hide')
        circle12.classList.remove('hide')
        circle13.classList.add('hide')
        circle14.classList.add('hide')
        circle15.classList.add('hide')
    } else  if (first === 3) {
        circle11.classList.remove('hide')
        circle12.classList.remove('hide')
        circle13.classList.remove('hide')
        circle14.classList.add('hide')
        circle15.classList.add('hide')
    } else  if (first === 4) {
        circle11.classList.remove('hide')
        circle12.classList.remove('hide')
        circle13.classList.remove('hide')
        circle14.classList.remove('hide')
        circle15.classList.add('hide')
    } else if (first === 5) {
        circle11.classList.remove('hide')
        circle12.classList.remove('hide')
        circle13.classList.remove('hide')
        circle14.classList.remove('hide')
        circle15.classList.remove('hide')
    }

    if (second === 0) {
        circle21.classList.add('hide')
        circle22.classList.add('hide')
        circle23.classList.add('hide')
        circle24.classList.add('hide')
        circle25.classList.add('hide')
    } else if (second === 1) {
        circle21.classList.remove('hide')
        circle22.classList.add('hide')
        circle23.classList.add('hide')
        circle24.classList.add('hide')
        circle25.classList.add('hide')
    } else  if (second === 2) {
        circle21.classList.remove('hide')
        circle22.classList.remove('hide')
        circle23.classList.add('hide')
        circle24.classList.add('hide')
        circle25.classList.add('hide')
    } else  if (second === 3) {
        circle21.classList.remove('hide')
        circle22.classList.remove('hide')
        circle23.classList.remove('hide')
        circle24.classList.add('hide')
        circle25.classList.add('hide')
    } else  if (second === 4) {
        circle21.classList.remove('hide')
        circle22.classList.remove('hide')
        circle23.classList.remove('hide')
        circle24.classList.remove('hide')
        circle25.classList.add('hide')
    } else if (second === 5) {
        circle21.classList.remove('hide')
        circle22.classList.remove('hide')
        circle23.classList.remove('hide')
        circle24.classList.remove('hide')
        circle25.classList.remove('hide')
    }

    if (third === 0) {
        circle31.classList.add('hide')
        circle32.classList.add('hide')
        circle33.classList.add('hide')
        circle34.classList.add('hide')
        circle35.classList.add('hide')
    } else if (third === 1) {
        circle31.classList.remove('hide')
        circle32.classList.add('hide')
        circle33.classList.add('hide')
        circle34.classList.add('hide')
        circle35.classList.add('hide')
    } else  if (third === 2) {
        circle31.classList.remove('hide')
        circle32.classList.remove('hide')
        circle33.classList.add('hide')
        circle34.classList.add('hide')
        circle35.classList.add('hide')
    } else  if (third === 3) {
        circle31.classList.remove('hide')
        circle32.classList.remove('hide')
        circle33.classList.remove('hide')
        circle34.classList.add('hide')
        circle35.classList.add('hide')
    } else  if (third === 4) {
        circle31.classList.remove('hide')
        circle32.classList.remove('hide')
        circle33.classList.remove('hide')
        circle34.classList.remove('hide')
        circle35.classList.add('hide')
    } else if (third === 5) {
        circle31.classList.remove('hide')
        circle32.classList.remove('hide')
        circle33.classList.remove('hide')
        circle34.classList.remove('hide')
        circle35.classList.remove('hide')
    }

    if (fourth === 0) {
        circle41.classList.add('hide')
        circle42.classList.add('hide')
        circle43.classList.add('hide')
        circle44.classList.add('hide')
        circle45.classList.add('hide')
    } else if (fourth === 1) {
        circle41.classList.remove('hide')
        circle42.classList.add('hide')
        circle43.classList.add('hide')
        circle44.classList.add('hide')
        circle45.classList.add('hide')
    } else  if (fourth === 2) {
        circle41.classList.remove('hide')
        circle42.classList.remove('hide')
        circle43.classList.add('hide')
        circle44.classList.add('hide')
        circle45.classList.add('hide')
    } else  if (fourth === 3) {
        circle41.classList.remove('hide')
        circle42.classList.remove('hide')
        circle43.classList.remove('hide')
        circle44.classList.add('hide')
        circle45.classList.add('hide')
    } else  if (fourth === 4) {
        circle41.classList.remove('hide')
        circle42.classList.remove('hide')
        circle43.classList.remove('hide')
        circle44.classList.remove('hide')
        circle45.classList.add('hide')
    } else if (fourth === 5) {
        circle41.classList.remove('hide')
        circle42.classList.remove('hide')
        circle43.classList.remove('hide')
        circle44.classList.remove('hide')
        circle45.classList.remove('hide')
    }

    if (fifth === 0) {
        circle51.classList.add('hide')
        circle52.classList.add('hide')
        circle53.classList.add('hide')
        circle54.classList.add('hide')
        circle55.classList.add('hide')
    } else if (fifth === 1) {
        circle51.classList.remove('hide')
        circle52.classList.add('hide')
        circle53.classList.add('hide')
        circle54.classList.add('hide')
        circle55.classList.add('hide')
    } else  if (fifth === 2) {
        circle51.classList.remove('hide')
        circle52.classList.remove('hide')
        circle53.classList.add('hide')
        circle54.classList.add('hide')
        circle55.classList.add('hide')
    } else  if (fifth === 3) {
        circle51.classList.remove('hide')
        circle52.classList.remove('hide')
        circle53.classList.remove('hide')
        circle54.classList.add('hide')
        circle55.classList.add('hide')
    } else  if (fifth === 4) {
        circle51.classList.remove('hide')
        circle52.classList.remove('hide')
        circle53.classList.remove('hide')
        circle54.classList.remove('hide')
        circle55.classList.add('hide')
    } else if (fifth === 5) {
        circle51.classList.remove('hide')
        circle52.classList.remove('hide')
        circle53.classList.remove('hide')
        circle54.classList.remove('hide')
        circle55.classList.remove('hide')
    }

    
}

function checkAnswer() {
    showCircles()
    if (first === 1 && second === 3 && third === 2 && fourth === 2 && fifth === 5) {        //fix? this
    showLinesButtonEl.classList.remove('remove')
    setTimeout (()=> {
        alert ('That is the correct distribution of apples')
        alert ('Now, allow what has been hidden to be revealed')

    }, 500)
   }
}

function add1 () {
    if (first < 5) {
        first++
    }
//    console.log (`first = ${first}`)
   checkAnswer()
   
}

function add2 () {
    if (second < 5) {
        second++
    }

   checkAnswer()
}

function add3 () {
    if (third < 5) {
        third++
    }
    
   checkAnswer()
}

function add4 () {
    if (fourth < 5) {
        fourth++
    }
    
   checkAnswer()
}

function add5 () {
    if (fifth < 5) {
        fifth++
    }
    
   checkAnswer()
}

function subtract1 () {
    if (first > 0) {
        first--
    }
    console.log (`first = ${first}`)
   checkAnswer()
}

function subtract2 () {
    if (second > 0) {
        second--
    }

   checkAnswer()
}

function subtract3 () {
    if (third > 0) {
        third--
    }

   checkAnswer()
}

function subtract4 () {
    if (fourth > 0) {
        fourth--
    }

   checkAnswer()
}

function subtract5 () {
    if (fifth > 0) {
        fifth--
    }

   checkAnswer()
}

function dotAnswer () {
 let answer = prompt ('number?')
 console.log (`answer = ${answer}`)

    if (answer == 152) {                           ///finish this
        alert ('Indeed, that is what it is')
        alert('Continue, and learn more about this story')
        continueButton.classList.remove('remove')
    } else {
        alert ('Incorrect')
    }
}



showLinesButtonEl.addEventListener('click', showLinesButtonClicked)

//see if theres a better/more compact way of doing this
minusButton1El.addEventListener('click', subtract1)
minusButton2El.addEventListener('click', subtract2)
minusButton3El.addEventListener('click', subtract3)
minusButton4El.addEventListener('click', subtract4)
minusButton5El.addEventListener('click', subtract5)

plusButton1El.addEventListener('click', add1)
plusButton2El.addEventListener('click', add2)
plusButton3El.addEventListener('click', add3)
plusButton4El.addEventListener('click', add4)
plusButton5El.addEventListener('click', add5)

dotAnswerButton.addEventListener('click', dotAnswer)





// */Saved points for dots
//    circle (100, 100, 20)
//    circle (100, 200, 20)
//    circle (100, 300, 20)
   
//    circle (300, 100, 20)
//    circle (400, 100, 20)
//    circle (400, 200, 20)
//    circle (300, 200, 20)
//    circle (300, 300, 20)
//    circle (400, 300, 20)
   

//    circle (500, 300, 20)
//    circle (600, 300, 20)
//    circle (600, 200, 20)
//    circle (500, 200, 20)
//    circle (500, 100, 20)
//    circle (600, 100, 20)