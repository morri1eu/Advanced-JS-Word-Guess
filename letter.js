var inquirer = require('inquirer')

function Letter(letter1) {
    this.str = letter1.toString()
    this.guessed= false
    this.checkIfGuessed = function () {
        if (this.guessed== true) {
            return this.str
        }
        else {
            return "_"
        }
    }
    this.otherFunction= function(letter2){
        if(letter2==this.str){
            this.guessed=true
        }
    }

}
module.exports= Letter