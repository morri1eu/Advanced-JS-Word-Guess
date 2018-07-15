var Word = require('./words')
var Letter = require('./letter')
var inquirer = require('inquirer')
var count = 0

var arrayOfWords = ['batman', 'superman', 'bruce wayne', 'flash', 'cyborg', 'wonder woman', 'alfred', 'deathstroke','oracle','batgirl','robin']
var numberRandom = Math.floor(Math.random() * (arrayOfWords.length))
//console.log(numberRandom+ " "+ arrayOfWords[numberRandom])
var wordToGuess = new Word(arrayOfWords[numberRandom])
// console.log(wordToGuess.string())
// wordToGuess.check('b')
// wordToGuess.check('a')
// wordToGuess.check('t')
// wordToGuess.check('m')
// wordToGuess.check('n')
// console.log(wordToGuess.string())
//console.log(wordToGuess.string())
function playGame() {
    if (count < 5) {
        //console.log(wordToGuess.array)
        console.log(wordToGuess.string())
        inquirer.prompt([{
            type: 'input',
            name: 'letterGuessed',
            message: 'Guess a Letter',
            validate: function (input) {
                if (input.length != 1) {
                    return false
                }
                else {
                    return true
                }
            }
        }]).then(function (answers) {
            var query = answers.letterGuessed
            wordToGuess.check(query)
            var arrayOfTruth= []
            function name(){
            for(l=0 ; l<wordToGuess.array.length; l++){
                var checking = wordToGuess.array[l].guessed
                var letterToCheck= wordToGuess.array[l].str
                if (checking== true && letterToCheck==query){
                    console.log('here')
                    console.log('You have '+ (5-count)+ ' '+'guesses left')
                    
                    return true
                }
            }
            
        }
        //name()
            if(name()== undefined){
                count++
                console.log('You have '+ (5-count)+ ' '+'guesses left')
            }


            for(m=0 ; m<wordToGuess.array.length; m++){
            arrayOfTruth.push(wordToGuess.array[m].guessed)
            }
            function truish(value){
                return value ==true
            }
            if (arrayOfTruth.every(truish)){
                console.log('Good Game! You Win!')
                console.log(wordToGuess.string())
                return
            }
            
            if(count==5){
                console.log('You Lose!')
            }

            playGame()
            // if (wordToGuess.array[query].guessed){
            // console.log(wordToGuess.string())
            // playGame()
            // }
            // else{
            //     console.log(wordToGuess.string()+ ' b')
            //     count++
            //     playGame()
            // }

        })
    }
}
playGame()