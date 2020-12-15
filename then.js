
let correct1 = document.getElementById('correct1')
let correct2 = document.getElementById('correct2')
let correct3 = document.getElementById('correct3')
let correct4 = document.getElementById('correct4')
let wrong1 = document.getElementById('wrong1')
let wrong2 = document.getElementById('wrong2')
let wrong3 = document.getElementById('wrong3')
let wrong4 = document.getElementById('wrong4')
let wrong5 = document.getElementById('wrong5')
let wrong6 = document.getElementById('wrong6')
let wrong7 = document.getElementById('wrong7')
let wrong8 = document.getElementById('wrong8')
let wrong9 = document.getElementById('wrong9')
let wrong10 = document.getElementById('wrong10')
let wrong11 = document.getElementById('wrong11')
let wrong12 = document.getElementById('wrong12')
let wrong13 = document.getElementById('wrong13')

let toTheStory = document.getElementById('toTheStory')

let correct1Found = false
let correct2Found = false
let correct3Found = false
let correct4Found = false



function setup() {
    setTimeout (()=> {
        alert ("... But, the stars enjoyed games. So much so, that they want to play one last game")
        alert ("They give four groups of words and say to pick the correct word from each group")
        alert("if you pick wrong, you have to start over, and they will give only one clue...")
        alert('"1, 0, 3, 8"')
        alert('The stars repeated, "1, 0, 3, 8" over and over again. Faster and faster until the numbers did not sound like numbers anymore')

    }
, 500)
    
}

function correct1Clicked() {
    correct1Found = true
    correct1.classList.add('numberWord')
    checkHowManyCorrect()
}

function correct2Clicked() {
    correct2Found = true
    correct2.classList.add('numberWord')
    checkHowManyCorrect()
}

function correct3Clicked() {
    correct3Found = true
    correct3.classList.add('numberWord')
    checkHowManyCorrect()
}

function correct4Clicked() {
    correct4Found = true
    correct4.classList.add('numberWord')
    checkHowManyCorrect()
}

function wrongClicked() {
    correct1.classList.remove('numberWord')
    correct2.classList.remove('numberWord')
    correct3.classList.remove('numberWord')
    correct4.classList.remove('numberWord')
    correct1Found = false
    correct2Found = false
    correct3Found = false
    correct4Found = false
}

function checkHowManyCorrect() {
    if (correct1Found == true && correct2Found == true && correct3Found == true && correct4Found == true) {
        // console.log('found all four correct answers')
    setTimeout(() => {
        alert('The stars are delighted. You found the correct words and played thier games')
        alert('Now, they will give you a story')
        toTheStory.classList.remove('remove')
    }, 500);
        
   
        
    }
    
}

correct1.addEventListener('click', correct1Clicked)
correct2.addEventListener('click', correct2Clicked)
correct3.addEventListener('click', correct3Clicked)
correct4.addEventListener('click', correct4Clicked)
wrong1.addEventListener('click', wrongClicked)
wrong2.addEventListener('click', wrongClicked)
wrong3.addEventListener('click', wrongClicked)
wrong4.addEventListener('click', wrongClicked)
wrong5.addEventListener('click', wrongClicked)
wrong6.addEventListener('click', wrongClicked)
wrong7.addEventListener('click', wrongClicked)
wrong8.addEventListener('click', wrongClicked)
wrong9.addEventListener('click', wrongClicked)
wrong10.addEventListener('click', wrongClicked)
wrong11.addEventListener('click', wrongClicked)
wrong12.addEventListener('click', wrongClicked)
wrong13.addEventListener('click', wrongClicked)