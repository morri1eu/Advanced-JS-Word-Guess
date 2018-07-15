var Letter = require('./letter')

function Word(word) {
    // var array =
        this.array = (word.split(""))
    //console.log(this.array)
    for (k = 0; k < this.array.length; k++) {
        this.array[k] = new Letter(this.array[k])
    }
    //this.array.push(new Letter(word.split('')))
    //console.log(this.array)
    this.string = function () {
        for (i = 0; i < this.array.length; i++) {
            if(partOfWord=== undefined){
                partOfWord= this.array[i].checkIfGuessed()+ ' '
            }
            else{
            var partOfWord = partOfWord+ this.array[i].checkIfGuessed()+ ' '}
            if (i === this.array.length - 1) {
                return partOfWord
            }
        }
    }
    this.check = function (letter) {
        for (j = 0; j < this.array.length; j++) {
            //console.log(letter)
           // console.log(this.array[j].str)
            if (this.array[j].str == letter) {
                this.array[j].otherFunction(letter)
            }
        }
    }

}
module.exports = Word