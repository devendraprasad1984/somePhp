import math from 'mathjs'

export default class CalcEngine {
    constructor() {
        this.curValue = ''
        this.result = ''
        this.history = []
        this.register = []
    }

    input=(d)=>{
        if(isNaN(d)){
            throw Error('only numeric is allowed')
        }
        this.curValue+=d
    }

    inputDecimal() {
        if (this.result !== '') {
            this.result = '';
            this.curValue = '';
        }

        if (this.curValue.indexOf('.') >= 0) {
            return;
        }

        if (this.curValue === '') {
            this.curValue += '0.';
        } else {
            this.curValue += '.';
        }
    }

    clear() {
        this.curValue= '';
        this.register = [];
        this.result = '';
    }

    clearAll() {
        this.curValue= '';
        this.register = [];
        this.result = '';
        this.history = [];
    }

    clearHistory() {
        this.history = [];
    }

    delete() {
        if (this.curValue === '') {
            return;
        }

        this.curValue = this.curValue.substring(0, this.curValue.length - 1);
    }


    getValue = () => {
        return this.curValue
    }

    getHistory = () => {
        return this.history
    }
    getResult = () => {
        return this.result
    }
    getExpression = () => {
        return this.register.join(' ')
    }

    toggleSign() {
        this.curValue = (parseFloat(this.curValue) * (-1)).toString();
    }

    loadHistory(index) {
        this.curValue = this.history[index].result.toString();
    }

    add = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue)
        this.register.push('+')
        this.curValue = ''
    }
    subtract = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue)
        this.register.push('-')
        this.curValue = ''
    }
    multiply = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue)
        this.register.push('*')
        this.curValue = ''
    }
    divide = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue)
        this.register.push('/')
        this.curValue = ''
    }
    equals = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue)
        const expression = this.getExpression()
        this.result = math.eval(expression)
        this.curValue = this.result.toString()
        const result=this.curValue
        // console.log(this.history,expression,result)
        this.history.splice(0, 0, {expression, result})
        this.register = []
    }
}