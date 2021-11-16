class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperandTextElement=''
        this.previousOperandTextElement=''
        this.operation=undefined
    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[delete-equals]')
const allClearButton = document.querySelector('[allClear-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')